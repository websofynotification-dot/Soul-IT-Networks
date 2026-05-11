import { NextRequest, NextResponse } from "next/server";
import { RouteContext } from "@/types/RouteContext";
import dbConnect from "@/lib/dbConnect";
import Sector from "@/models/admin-model/Customer/Sector";

export const GET = async (req: NextRequest, context: RouteContext) => {
    try {
        await dbConnect();
        const { id } = await context.params;
        const sector = await Sector.findById(id);
        if (!sector) {
            return NextResponse.json(
                { success: false, message: "Sector not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, data: sector });

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

        const updated = await Sector.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true
        })

        if (!updated) {
            return NextResponse.json(
                { success: false, message: "Sector not found." },
                { status: 404 }
            );
        }

        return NextResponse.json({ message: "Sector updated successfully.", success: true, data: updated });
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

        const deleted = await Sector.findByIdAndDelete(id);

        if (!deleted) {
            return NextResponse.json(
                { success: false, message: "Sector not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, message: "Sector deleted successfully" });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}