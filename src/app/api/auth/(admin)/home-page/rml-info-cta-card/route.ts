import dbConnect from "@/lib/dbConnect"
import RmlInfoCtaCard from "@/models/admin-model/HomePage/RmlInfoCtaCard";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
    try {
        await dbConnect();
        const rmlInfoCtaCardData = await RmlInfoCtaCard.find().sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: rmlInfoCtaCardData }, { status: 200 });
    } catch (error) {
        const err = error as Error;
        console.error("Error fetching rml info cta card section data : ", error);
        return NextResponse.json(
            { success: false, error: err.message },
            { status: 500 }
        )
    }
}

export const POST = async (req: NextRequest) => {
    try {
        await dbConnect();
        const { title, description, redirectUrl } = await req.json();

        if (!title || !description || !redirectUrl) {
            return NextResponse.json({ error: `All fields are required!` }, { status: 400 });
        }
        const newRmlInfoCtaCard = await RmlInfoCtaCard.create({ title, description, redirectUrl });
        return NextResponse.json({ message: "Rml info cta card added successfully.", success: true, data: newRmlInfoCtaCard });
    } catch (error) {
        const err = error as Error;
        console.error("Error adding rml info cta card :", err);
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });
    }
}