import dbConnect from "@/lib/dbConnect"
import FeatureJob from "@/models/admin-model/Careers/FeatureJob";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
    try {
        await dbConnect();
        const featureJobData = await FeatureJob.find().sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: featureJobData }, { status: 200 });
    } catch (error) {
        const err = error as Error;
        console.error("Error fetching feature job data :", error);
        return NextResponse.json(
            { success: false, error: err.message },
            { status: 500 }
        );
    }
}

export const POST = async (req: NextRequest) => {
    try {
        await dbConnect();
        const { title, description } = await req.json();

        if (!title || !description) {
            return NextResponse.json({ error: `All fields are required!` }, { status: 400 });
        }
        const newLocation = await FeatureJob.create({ title, description });
        return NextResponse.json({ message: "Feature job added successfully.", success: true, data: newLocation })
    } catch (error) {
        const err = error as Error;
        console.error("Error adding feature job :", err);
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });
    }

}