import { NextRequest, NextResponse } from "next/server";
import { RouteContext } from "@/types/RouteContext";
import dbConnect from "@/lib/dbConnect";
import SupportService from "@/models/admin-model/support/SupportService";

export const GET = async (req: NextRequest, context: RouteContext) => {
    try {
        await dbConnect();
        const { id } = await context.params;
        const supportService = await SupportService.findById(id);

        if (!supportService) {
            return NextResponse.json({ success: false, message: "Support service not found." }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: supportService });
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

        const updated = await SupportService.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true
        })

        if (!updated) {
            return NextResponse.json({ success: false, message: "Support service not found." }, { status: 404 });
        }

        return NextResponse.json({ message: "Support service updated successfully.", success: true, data: updated })
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

        const deleted = await SupportService.findByIdAndDelete(id);

        if (!deleted) {
            return NextResponse.json({ success: false, message: "Support service not found." }, { status: 404 });
        }

        return NextResponse.json({ message: "Support service deleted successfully.", success: true })

    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}