import dbConnect from "@/lib/dbConnect"
import Overview from "@/models/admin-model/Services/Overview";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
    try {
        await dbConnect();
        const overviewData = await Overview.find().sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: overviewData }, { status: 200 });
    } catch (error) {
        const err = error as Error;
        console.error("Error fetching overview data : ", error);
        return NextResponse.json(
            { success: false, error: err.message },
            { status: 500 }
        )
    }
}

export const POST = async (req: NextRequest) => {
    try {
        await dbConnect();
        const { title, pageName, description, keySteps, image, image_public_Id } = await req.json();

        if (!title || !pageName || !description || !keySteps || !image || !image_public_Id) {
            return NextResponse.json({ error: `All fields are required!` }, { status: 400 });
        }
        const newOverview = await Overview.create({ title, pageName, description, keySteps, image, image_public_Id });

        return NextResponse.json({ message: "Overview data added successfully.", success: true, data: newOverview });
    } catch (error) {
        const err = error as Error;
        console.error("Error adding overview data  :", err);
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });
    }
}       