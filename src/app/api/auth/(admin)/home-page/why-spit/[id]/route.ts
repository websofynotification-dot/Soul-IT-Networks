import { NextRequest, NextResponse } from "next/server";
import { RouteContext } from "@/types/RouteContext";
import dbConnect from "@/lib/dbConnect";
import WhySpit from "@/models/admin-model/HomePage/WhySpit";

export const GET = async (req: NextRequest, context: RouteContext) => {
    try {
        await dbConnect();
        const { id } = await context.params;
        const whySpit = await WhySpit.findById(id);

        if (!whySpit) {
            return NextResponse.json(
                { success: false, message: "Why SPIT step  not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, data: whySpit });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}

export const PUT = async (req: NextRequest, contex: RouteContext) => {
    try {
        await dbConnect();
        const { id } = await contex.params;
        const body = await req.json();
        const updated = await WhySpit.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true
        })

        if (!updated) {
            return NextResponse.json(
                { success: false, message: "Why SPIT step not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ message: "Why SPIT step updated successfully.", success: true, data: updated });
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

          const deleted = await WhySpit.findByIdAndDelete(id);

        if (!deleted) {
            return NextResponse.json(
                { success: false, message: "Why SPIT step not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, message: "Why SPIT deleted successfully." })
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}