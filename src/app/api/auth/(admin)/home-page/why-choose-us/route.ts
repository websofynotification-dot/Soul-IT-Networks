import dbConnect from "@/lib/dbConnect"
import WhyChooseUs from "@/models/admin-model/HomePage/WhyChooseUs";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    try {
        await dbConnect();
        const whyChooseUsData = await WhyChooseUs.find().sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: whyChooseUsData }, { status: 200 });
    } catch (error) {
        const err = error as Error;
        console.error("Error fetching why choose us data : ", error);
        return NextResponse.json(
            { success: false, error: err.message },
            { status: 500 }
        )
    }
}

export const POST = async (req: NextRequest) => {
    try {
        await dbConnect();
        const { title, description } = await req.json();

        if (!title || !description) {
            return NextResponse.json({ error: `All fields are required!` }, { status: 400 });
        }

        const newAward = await WhyChooseUs.create({ title, description });
        return NextResponse.json({ message: "Why choose us added successfully.", success: true, data: newAward })
    } catch (error) {
        const err = error as Error;
        console.error("Error adding why choose us :", err);
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });
    }
}