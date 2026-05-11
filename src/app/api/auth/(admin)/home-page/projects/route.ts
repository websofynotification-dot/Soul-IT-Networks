import dbConnect from "@/lib/dbConnect"
import Projects from "@/models/admin-model/HomePage/Projects";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    try {
        await dbConnect();
        const projectsData = await Projects.find().sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: projectsData }, { status: 200 });
    } catch (error) {
        const err = error as Error;
        console.error("Error fetching projects data : ", error);
        return NextResponse.json(
            { success: false, error: err.message },
            { status: 500 }
        )
    }
}

export const POST = async (req: NextRequest) => {
    try {
        await dbConnect();
        const { title, description } = await req.json();

        if (!title || !description) {
            return NextResponse.json({ error: `All fields are required!` }, { status: 400 });
        }
        const newProject = await Projects.create({ title, description });
        return NextResponse.json({ message: "Projects added successfully.", success: true, data: newProject })
    } catch (error) {
        const err = error as Error;
        console.error("Error adding projects :", err);
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });
    }
}