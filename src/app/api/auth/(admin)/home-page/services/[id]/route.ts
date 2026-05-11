import { NextRequest, NextResponse } from "next/server";
import { RouteContext } from "@/types/RouteContext";
import dbConnect from "@/lib/dbConnect";
import Service from "@/models/admin-model/HomePage/Service";

export const GET = async (req: NextRequest, context: RouteContext) => {
    try {
        await dbConnect();
        const { id } = await context.params;
        const service = await Service.findById(id);
        if (!service) {
            return NextResponse.json(
                { success: false, message: "service not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, data: service });
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

        const updated = await Service.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true
        })
        if (!updated) {
            return NextResponse.json(
                { success: false, message: "Service not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ message: "Service updated successfully.", success: true, data: updated });
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
        const deleted = await Service.findByIdAndDelete(id);

        if (!deleted) {
            return NextResponse.json(
                { success: false, message: "Service not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, message: "Service deleted successfully." });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}