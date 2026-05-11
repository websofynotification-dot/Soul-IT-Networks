import dbConnect from "@/lib/dbConnect"
import AppointmentRequest from "@/models/ui-model/AppointmentRequest";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
    try {
        await dbConnect();
        const appointmentRequestData = await AppointmentRequest.find().sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: appointmentRequestData },
            { status: 200 })
    } catch (error) {
        const err = error as Error;
        console.error("Error fetching the appointment request data:", err);
        return NextResponse.json(
            { success: false, error: err.message },
            { status: 500 }
        );
    }
};

export const POST = async (req: NextRequest) => {
    try {
        await dbConnect();
        const { name, phone, email, date, message, captcha } = await req.json();

        const captchaVerify = await fetch(
            `${process.env.RECAPTCHA_BASE_URL! + process.env.RECAPTCHA_SECRET_KEY!}&response=${captcha}`,
            { method: "POST" }
        );
        const captchaData = await captchaVerify.json();
        if (!captchaData.success) {
            return NextResponse.json({ message: "Captcha verification failed" }, { status: 400 });
        }

        if (!name || !phone || !email || !date || !message) {
            return NextResponse.json(
                { error: `All fields are required ` },
                { status: 400 }
            );
        }
        const contactUs = await AppointmentRequest.create({ name, phone, email, date, message })

        const res = NextResponse.json({ message: "Thank you for choosing RML Pathology. Your appointment request has been received, and our team will get in touch with you soon.", success: true, contact: contactUs }
        );
        return res;
    } catch (err) {
        const error = err as Error;
        console.error("Appoint request data error :", error);
        return NextResponse.json({ message: "Something went wrong while processing your request.", error: error.message || "Unknown error", }, { status: 500 });
    }
}