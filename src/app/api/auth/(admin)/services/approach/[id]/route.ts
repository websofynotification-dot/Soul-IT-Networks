import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import { RouteContext } from "@/types/RouteContext";
import Approach from "@/models/admin-model/Services/Approach";

export const GET = async (req: NextRequest, context: RouteContext) => {
    try {
        await dbConnect();
        const { id } = await context.params;

        const approach = await Approach.findById(id);

        if (!approach) {
            return NextResponse.json(
                { success: false, message: "Approach not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, data: approach });
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

        const updated = await Approach.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });

        if (!updated) {
            return NextResponse.json(
                { success: false, message: "Approach not found" },
                { status: 404 }
            );
        }
        return NextResponse.json({
            message: "Approach updated successfully.",
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

export async function DELETE(req: NextRequest, context: RouteContext) {
    try {
        await dbConnect();
        const { id } = await context.params;

        const deleted = await Approach.findByIdAndDelete(id);
        if (!deleted) {
            return NextResponse.json(
                { success: false, message: "Approach not found" },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, message: "Approach deleted successfully" });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}