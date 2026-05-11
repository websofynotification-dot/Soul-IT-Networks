import dbConnect from "@/lib/dbConnect"
import Sector from "@/models/admin-model/Customer/Sector";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
    try {
        await dbConnect();
        const sectorData = await Sector.find().sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: sectorData }, { status: 200 });
    } catch (error) {
        const err = error as Error;
        console.error("Error fetching policy data :", error);
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
        const newSectorData = await Sector.create({ title, description });
        return NextResponse.json({ message: "Sector added successfully.", success: true, data: newSectorData })
    } catch (error) {
        const err = error as Error;
        console.error("Error adding sector :", err);
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });
    }
}