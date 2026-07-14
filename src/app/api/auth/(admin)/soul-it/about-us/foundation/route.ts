import dbConnect from "@/lib/dbConnect"
import Foundation from "@/models/admin-model/AboutUs/Foundation";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
    try {
        await dbConnect();
        const foundationData = await Foundation.find().sort({ createdAt: -1 });
        return NextResponse.json({ successs: true, data: foundationData }, { status: 200 });
    } catch (error) {
        const err = error as Error;
        console.error("Error fetching foundation data : ", error);
        return NextResponse.json(
            { success: false, error: err.message },
            { status: 500 }
        )
    }
}

export const POST = async (req: NextRequest) => {
    try {
        const { title, description, foundationStep } = await req.json();
        if (!title) {
            return NextResponse.json({ error: `Title is required!` }, { status: 400 })
        }

        const newFoundation = await Foundation.create({ title, description, foundationStep });
        return NextResponse.json({ message: "Foundation added successfully.", success: true, data: newFoundation });
    } catch (error) {
        const err = error as Error;
        console.error("Error adding foundation section :", err);
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });
    }
}