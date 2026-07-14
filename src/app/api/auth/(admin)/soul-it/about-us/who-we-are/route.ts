import dbConnect from "@/lib/dbConnect"
import WhoWeAre from "@/models/admin-model/AboutUs/WhoWeAre";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    try {
        await dbConnect();
        const whoWeAreData = await WhoWeAre.find().sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: whoWeAreData }, { status: 200 });
    } catch (error) {
        const err = error as Error;
        console.error("Error who we are data : ", error);
        return NextResponse.json(
            { success: false, error: err.message },
            { status: 500 }
        )
    }
}

export const POST = async (req: NextRequest) => {
    try {
        await dbConnect();
        const { title, description, image, image_publicId } = await req.json();

        if (!title || !description || !image || !image_publicId) {
            return NextResponse.json({ error: `All fields are required!` }, { status: 400 });
        }
        const newWhoWeAre = await WhoWeAre.create({ title, description, image, image_publicId });
        return NextResponse.json({ message: "Who We Are added successfully.", success: true, data: newWhoWeAre })
    } catch (error) {
        const err = error as Error;
        console.error("Error adding certificates :", err);
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });
    }
}