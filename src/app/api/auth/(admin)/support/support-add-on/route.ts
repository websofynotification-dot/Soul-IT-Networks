import dbConnect from "@/lib/dbConnect"
import SupportAddOn from "@/models/admin-model/support/SupportAddOn";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
    try {
        await dbConnect();
        const supportAddOnData = await SupportAddOn.find().sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: supportAddOnData }, { status: 200 });
    } catch (error) {
        const err = error as Error;
        console.error("Error fetching support add on data :", error);
        return NextResponse.json(
            { success: false, error: err.message },
            { status: 500 }
        );
    }
};

export const POST = async (req: NextRequest) => {
    try {
        await dbConnect();
        const { title, description } = await req.json();

        if (!title) {
            return NextResponse.json({ success: false, message: "All fields are required!" }, { status: 400 });
        }

        const newSupportAddOn = await SupportAddOn.create({ title, description });

        return NextResponse.json({message: "Support add on added successfully.", success: true, data: newSupportAddOn }, { status: 200 });
    } catch (error) {
        const err = error as Error;
        console.error("Error fetching support add on data :", error);
        return NextResponse.json(
            { success: false, error: err.message },
            { status: 500 }
        );
    }
}