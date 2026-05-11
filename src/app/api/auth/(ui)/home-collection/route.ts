import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import HomeCollection from "@/models/ui-model/HomeCollection";

export const GET = async () => {
    try {
        await dbConnect();
        const homeCollections = await HomeCollection.find().sort({ createdAt: -1 });
        return NextResponse.json(
            { success: true, data: homeCollections },
            { status: 200 }
        );
    } catch (error: any) {
        console.error("Error fetching the home collection data:", error);
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}


export const POST = async (req: Request) => {
    try {
        await dbConnect();
        const { name, phone, email, date, city, locality, address, captcha } = await req.json();

        const captchaVerify = await fetch(
            `${process.env.RECAPTCHA_BASE_URL! + process.env.RECAPTCHA_SECRET_KEY!}&response=${captcha}`,
            { method: "POST" }
        );
        const captchaData = await captchaVerify.json();
        if (!captchaData.success) {
            return NextResponse.json({ message: "Captcha verification failed" }, { status: 400 });
        }

        if (!name || !phone || !email || !date || !locality || !address) {
            return NextResponse.json(
                { error: `All fields are required ` },
                { status: 400 }
            );
        }
        const contactUs = await HomeCollection.create({ name, phone, email, date, city, locality, address })

        const res = NextResponse.json({ message: "Thank you for choosing RML Pathology. Your home collection request has been received, and our team will get in touch with you soon.", success: true, contact: contactUs }
        );
        return res;
    } catch (err) {
        const error = err as Error;
        console.error("Home Collection data error :", error);
        return NextResponse.json({ message: "Something went wrong while processing your request.", error: error.message || "Unknown error", }, { status: 500 });
    }
}

