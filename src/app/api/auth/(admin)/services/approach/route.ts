import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Approach from "@/models/admin-model/Services/Approach";

export const GET = async () => {
    try {
        await dbConnect();
        const approacheData = await Approach.find().sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: approacheData }, { status: 200 });
    } catch (error) {
        const err = error as Error;
        console.error("Error fetching approach data :", error);
        return NextResponse.json(
            { success: false, error: err.message },
            { status: 500 }
        );
    }
}

export const POST = async (req: NextRequest) => {
    try {
        await dbConnect();
        const { title, pageName, description } = await req.json();

        if (!title || !pageName) {
            return NextResponse.json({ success: false, message: "Title and page name fields are required!" }, { status: 400 });
        }

        const newApproach = await Approach.create({ title, pageName, description });
        return NextResponse.json({ message: "Approach added successfully.", success: true, data: newApproach });
    } catch (error) {
        const err = error as Error;
        console.error("Error adding approach. : ", err);
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });
    }
}
