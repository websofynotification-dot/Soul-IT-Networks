import dbConnect from "@/lib/dbConnect"
import Topbar from "@/models/admin-model/Topbar";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
    try {
        await dbConnect();
        const topbarData = await Topbar.find().sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: topbarData }, { status: 200 })
    } catch (error) {
        const err = error as Error;
        console.error("Error fetching topbar data :", error);
        return NextResponse.json(
            { success: false, error: err.message },
            { status: 500 }
        );
    }
}

export const POST = async (req: NextRequest) => {
    try {
        await dbConnect();
        const { contactDetails, socialMedia } = await req.json();

        if (!contactDetails || !socialMedia) {
            return NextResponse.json({ error: `All fields are required!` }, { status: 400 });
        }

        const newTopbar = await Topbar.create({ contactDetails, socialMedia })
        return NextResponse.json({ message: "Topbar added successfully.", success: true, data: newTopbar })

    } catch (error) {
        const err = error as Error;
        console.error("Error adding tobar :", err);
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });
    }
}