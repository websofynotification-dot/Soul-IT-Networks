import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import { RouteContext } from "@/types/RouteContext";
import Delivery from "@/models/admin-model/Services/Delivery";

export const GET = async (req: NextRequest, context: RouteContext) => {
    try {
        await dbConnect();
        const { id } = await context.params;

        const delivery = await Delivery.findById(id);

        if (!delivery) {
            return NextResponse.json(
                { success: false, message: "Delivery data not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, data: delivery });
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

        const updated = await Delivery.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });

        if (!updated) {
            return NextResponse.json(
                { success: false, message: "Delivery data not found" },
                { status: 404 }
            );
        }
        return NextResponse.json({
            message: "Delivery updated successfully.",
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

        const deleted = await Delivery.findByIdAndDelete(id);
        if (!deleted) {
            return NextResponse.json(
                { success: false, message: "Delivery data not found" },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, message: "Delivery deleted successfully" });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}