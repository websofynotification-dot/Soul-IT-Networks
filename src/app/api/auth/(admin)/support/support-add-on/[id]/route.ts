import { NextRequest, NextResponse } from "next/server";
import { RouteContext } from "@/types/RouteContext";
import dbConnect from "@/lib/dbConnect";
import Image from "@/models/admin-model/Image";
import SupportAddOn from "@/models/admin-model/support/SupportAddOn";

export const GET = async (req: NextRequest, context: RouteContext) => {
    try {
        await dbConnect();
        const { id } = await context.params;
        const supportAddOn = await SupportAddOn.findById(id);

        if (!supportAddOn) {
            return NextResponse.json({ success: false, message: "Department not found." }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: supportAddOn }, { status: 200 });

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

        const updated = await SupportAddOn.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true
        })

        if (!updated) {
            return NextResponse.json(
                { success: false, message: "Support add on not found." }, { status: 404 }
            );
        }
        return NextResponse.json({ message: "Support add on updated successfully.", success: true, data: updated });

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
        const deleted = await SupportAddOn.findByIdAndDelete(id);

        if (!deleted) {
            return NextResponse.json(
                { success: false, message: "Support add on not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, message: "Support add on deleted successfully." });

    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}