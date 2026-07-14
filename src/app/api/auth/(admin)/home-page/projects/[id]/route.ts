import { NextRequest, NextResponse } from "next/server";
import { RouteContext } from "@/types/RouteContext";
import dbConnect from "@/lib/dbConnect";
import Projects from "@/models/admin-model/HomePage/Projects";

export const GET = async (req: NextRequest, context: RouteContext) => {
    try {
        await dbConnect();
        const { id } = await context.params;
        const projects = await Projects.findById(id);

        if (!projects) {
            return NextResponse.json(
                { success: false, message: "Projects not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, data: projects });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}

export const PUT = async (req: NextRequest, contex: RouteContext) => {
    try {
        await dbConnect();
        const { id } = await contex.params;
        const body = await req.json();
        const updated = await Projects.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true
        })

        if (!updated) {
            return NextResponse.json(
                { success: false, message: "Projects not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ message: "Projects updated successfully.", success: true, data: updated });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}

export const DELETE = async (req: NextRequest, context: RouteContext) => {
    try {
        const { id } = await context.params;

          const deleted = await Projects.findByIdAndDelete(id);

        if (!deleted) {
            return NextResponse.json(
                { success: false, message: "Projects not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, message: "Projects deleted successfully." })
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}