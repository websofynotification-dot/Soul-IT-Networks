import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import { RouteContext } from "@/types/RouteContext";
import RmlInfoCtaCard from "@/models/admin-model/HomePage/RmlInfoCtaCard";

export const GET = async (req: NextRequest, context: RouteContext) => {
    try {
        await dbConnect();
        const { id } = await context.params;
        const rmlInfoCtaCard = await RmlInfoCtaCard.findById(id);

        if (!rmlInfoCtaCard) {
            return NextResponse.json(
                { success: false, message: "Rml info cta card not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, data: rmlInfoCtaCard });
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

        const updated = await RmlInfoCtaCard.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });

        if (!updated) {
            return NextResponse.json(
                { success: false, message: "Rml info cta card not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            message: "Rml info cta card updated successfully.",
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

        const deleted = await RmlInfoCtaCard.findByIdAndDelete(id);

         if (!deleted) {
            return NextResponse.json(
                { success: false, message: "Rml info cta card not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, message: "Rml info cta card deleted successfully." });
    } catch (error: any) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}


