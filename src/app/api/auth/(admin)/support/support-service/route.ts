import dbConnect from "@/lib/dbConnect"
import SupportService from "@/models/admin-model/support/SupportService";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
    try {
        await dbConnect();
        const supportServiceData = await SupportService.find().sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: supportServiceData }, { status: 200 });
    } catch (error) {
        const err = error as Error;
        console.error("Error fetching support service :", error);
        return NextResponse.json(
            { success: false, error: err.message },
            { status: 500 }
        );
    }
}

export const POST = async (req: NextRequest) => {
    try {
        await dbConnect();
        const { title, description, supportStep } = await req.json();

        if (!title || !description || !supportStep) {
            return NextResponse.json({ error: `All fields are required!` }, { status: 400 });
        }
        const newSupportService = await SupportService.create({title, description, supportStep});
        return NextResponse.json({ message: "Support service added successfully.", success: true, data: newSupportService })
    } catch (error) {
        const err = error as Error;
        console.error("Error adding support service :", err);
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });
    }

}