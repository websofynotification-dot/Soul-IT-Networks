import { NextRequest, NextResponse } from "next/server";
import { RouteContext } from "@/types/RouteContext";
import dbConnect from "@/lib/dbConnect";
import Journey from "@/models/admin-model/AboutUs/Journey";

export const GET = async (req: NextRequest, context: RouteContext) => {
    try {
        await dbConnect();
        const { id } = await context.params;
        const journey = await Journey.findById(id);
        if (!journey) {
            return NextResponse.json(
                { success: false, message: "Journey not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, data: journey });
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

        const updated = await Journey.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true
        })
        if (!updated) {
            return NextResponse.json(
                { success: false, message: "Journey not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ message: "Journey updated successfully.", success: true, data: updated });

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
        const deleted = await Journey.findByIdAndDelete(id);

        if (!deleted) {
            return NextResponse.json(
                { success: false, message: "Journey not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, message: "Journey deleted successfully." });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}