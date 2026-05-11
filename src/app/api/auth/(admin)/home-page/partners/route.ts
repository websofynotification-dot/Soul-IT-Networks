import dbConnect from "@/lib/dbConnect"
import Partner from "@/models/admin-model/HomePage/Partner";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    try {
        await dbConnect();
        const partnerData = await Partner.find().sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: partnerData }, { status: 200 });
    } catch (error) {
        const err = error as Error;
        console.error("Error partner data : ", error);
        return NextResponse.json(
            { success: false, error: err.message },
            { status: 500 }
        )
    }
}

export const POST = async (req: NextRequest) => {
    try {
        await dbConnect();
        const { title, description, partner_type, image, image_publicId } = await req.json();
        
        if (!title || !description || !partner_type || !image || !image_publicId) {
            return NextResponse.json({ error: `All fields are required!` }, { status: 400 });
        }
        const newPartner = await Partner.create({ title, partner_type, description, image, image_publicId });
        return NextResponse.json({ message: "Partner added successfully.", success: true, data: newPartner })
    } catch (error) {
        const err = error as Error;
        console.error("Error adding partner :", err);
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });
    }
}