import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import HeroImage from "@/models/admin-model/HomePage/HeroImage";
;

export const GET = async () => {
    try {
        await dbConnect();
        const heroImageData = await HeroImage.find().sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: heroImageData }, { status: 200 });
    } catch (error) {
        const err = error as Error;
        console.error("Error fetching hero image data :", error);
        return NextResponse.json(
            { success: false, error: err.message },
            { status: 500 }
        );
    }
}

export const POST = async (req: NextRequest) => {
    try {
        await dbConnect();
        const { title, subtitle, image, public_Id } = await req.json();

        if (!title || !subtitle || !image || !public_Id) {
            return NextResponse.json({ success: false, message: "All fields are required!" }, { status: 400 });
        }
        await dbConnect();
        const newImage = await HeroImage.create({ title, subtitle, image, public_Id });
        return NextResponse.json({ message: "Hero image added successfully.", success: true, data: newImage });
    } catch (error) {
        const err = error as Error;
        console.error("Error adding hero image :", err);
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });
    }
}
