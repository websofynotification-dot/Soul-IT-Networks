import dbConnect from "@/lib/dbConnect"
import Team from "@/models/admin-model/SoulIt/Team";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    try {
        await dbConnect();
        const teamsData = await Team.find().sort({ createdAt: -1 }).lean();
        return NextResponse.json({ success: true, data: teamsData }, { status: 200 });
    } catch (error) {
        const err = error as Error;
        console.error("Error fetching team member data : ", error);
        return NextResponse.json(
            { success: false, error: err.message },
            { status: 500 }
        )
    }
}

export const POST = async (req: NextRequest) => {
    try {
        await dbConnect();
        const {name, designation, description, image, image_public_Id, socialMedia } = await req.json();

        if (!name || !description || !designation || !image || !image_public_Id || !socialMedia) {
            return NextResponse.json({ error: `All fields are required!` }, { status: 400 });
        }
        const newTeamMember = await Team.create({name, designation, description, image, image_public_Id, socialMedia });
        return NextResponse.json({ message: "Team meamber added successfully.", success: true, data: newTeamMember })
    } catch (error) {
        const err = error as Error;
        console.error("Error adding projects :", err);
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });
    }
}