import dbConnect from "@/lib/dbConnect"
import Service from "@/models/admin-model/HomePage/Service";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
    try {
        await dbConnect();
        const serviceData = await Service.find().sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: serviceData }, { status: 200 });
    } catch (error) {
        const err = error as Error;
        console.error("Error service data : ", error);
        return NextResponse.json(
            { success: false, error: err.message },
            { status: 500 }
        )
    }
}

export const POST = async (req: NextRequest) => {
    try {
        await dbConnect();
        const { title, description, buttonName, buttonUrl } = await req.json();

        if (!title || !description || !buttonName || !buttonUrl) {
            return NextResponse.json({ error: `All fields are required!` }, { status: 400 });
        }
        const newService = await Service.create({ title, description, buttonName, buttonUrl });
        return NextResponse.json({ message: "Service added successfully.", success: true, data: newService })
    } catch (error) {
        const err = error as Error;
        console.error("Error adding service data :", err);
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });
    }
}