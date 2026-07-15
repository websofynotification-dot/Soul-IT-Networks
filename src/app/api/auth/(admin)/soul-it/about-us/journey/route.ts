import dbConnect from "@/lib/dbConnect"
import Journey from "@/models/admin-model/SoulIt/AboutUs/Journey";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
    try {
        await dbConnect();
        const journeyData = await Journey.find().sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: journeyData }, { status: 200 });
    } catch (error) {
        const err = error as Error;
        console.error("Error journey data : ", error);
        return NextResponse.json(
            { success: false, error: err.message },
            { status: 500 }
        )
    }
}

export const POST = async (req: NextRequest) => {
    try {
        await dbConnect();
        const {title, description, journey_year} = await req.json();

        if (!title || !description || !journey_year) {
            return NextResponse.json({ error: `All fields are required!` }, { status: 400 });
        }
        const newJourney = await Journey.create({title, description, journey_year});
        return NextResponse.json({ message: "Journey added successfully.", success: true, data: newJourney })
    } catch (error) {
        const err = error as Error;
        console.error("Error adding journey data :", err);
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });
    }
}