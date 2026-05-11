import dbConnect from "@/lib/dbConnect"
import Certificate from "@/models/admin-model/HomePage/Certificate";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    try {
        await dbConnect();
        const certificatesData = await Certificate.find().sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: certificatesData }, { status: 200 });
    } catch (error) {
        const err = error as Error;
        console.error("Error certificates data : ", error);
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
        const newCertificates = await Certificate.create({ title, description, image, image_publicId });
        return NextResponse.json({ message: "Certificates added successfully.", success: true, data: newCertificates })
    } catch (error) {
        const err = error as Error;
        console.error("Error adding certificates :", err);
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });
    }
}