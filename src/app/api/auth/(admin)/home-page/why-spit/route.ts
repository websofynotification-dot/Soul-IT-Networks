import dbConnect from "@/lib/dbConnect"
import WhySpit from "@/models/admin-model/HomePage/WhySpit";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
    try {
        await dbConnect();
        const whySpitData = await WhySpit.find().sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: whySpitData }, { status: 200 });
    } catch (error) {
        const err = error as Error;
        console.error("Error why SPIT data : ", error);
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

        if (!description) {
            return NextResponse.json({ error: `Description is required!` }, { status: 400 });
        }
        const newSpitStep = await WhySpit.create({ title, description});
        return NextResponse.json({ message: "Why SPIT step added successfully.", success: true, data: newSpitStep })
    } catch (error) {
        const err = error as Error;
        console.error("Error adding why SPIT step data :", err);
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });
    }
}