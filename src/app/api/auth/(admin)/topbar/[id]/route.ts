import { NextRequest, NextResponse } from "next/server"
import { RouteContext } from "@/types/RouteContext";
import dbConnect from "@/lib/dbConnect";
import Topbar from "@/models/admin-model/Topbar";

export const GET = async (req: NextRequest, context: RouteContext) => {
    try {
        await dbConnect();
        const { id } = await context.params;
        const topbar = await Topbar.findById(id);

        if (!topbar) {
            return NextResponse.json(
                { success: false, message: "Topbar not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, data: topbar });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}

export const PUT = async (req: NextRequest, context: RouteContext) => {
    try {
        await dbConnect();
        const { id } = await context.params;
        const body = await req.json();

        const updated = await Topbar.findByIdAndUpdate(id, body, { new: true, runValidators: true });
        if (!updated) {
            return NextResponse.json(
                { success: false, message: "Topbar not found" },
                { status: 404 }
            );
        }
        return NextResponse.json({ message: "Topbar updated successfully.", success: true, data: updated });
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
        await dbConnect();
        const { id } = await context.params;
        const deleted = await Topbar.findByIdAndDelete(id);
        if (!deleted) {
            return NextResponse.json(
                { success: false, message: "Topbar not found" },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, message: "Topbar deleted successfully" });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}