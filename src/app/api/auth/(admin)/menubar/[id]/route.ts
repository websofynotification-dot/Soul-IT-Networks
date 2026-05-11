import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import { RouteContext } from "@/types/RouteContext";
import Image from "@/models/admin-model/Image";
import Menubar from "@/models/admin-model/Menubar";

export const GET = async (req: NextRequest, context: RouteContext) => {
    try {
        await dbConnect();
        const { id } = await context.params;
        const menu = await Menubar.findById(id);

        if (!menu) {
            return NextResponse.json(
                { success: false, message: "Menu not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, data: menu });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}

export const PUT = async (req: Request, context: RouteContext) => {
    try {
        await dbConnect();
        const { id } = await context.params;
        const body = await req.json();
        const existingDoctor = await Menubar.findById(id);

        const updated = await Menubar.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });

        if (!updated) {
            return NextResponse.json(
                { success: false, message: "Menu not found." },
                { status: 404 }
            );
        }

        return NextResponse.json({
            message: "Menu updated successfully.",
            success: true,
            data: updated,
        });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}

export async function DELETE(req: Request, context: RouteContext) {
    try {
        await dbConnect();
        const { id } = await context.params;
        const deleted = await Menubar.findByIdAndDelete(id);

        if (!deleted) {
            return NextResponse.json(
                { success: false, message: "Menu not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, message: "Menu deleted successfully." });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}


