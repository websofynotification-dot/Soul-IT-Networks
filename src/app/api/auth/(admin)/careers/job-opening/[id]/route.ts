import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import JobOpening from "@/models/admin-model/Careers/JobOpening";
import { RouteContext } from "@/types/RouteContext";
import { JobOpenings } from "@/app/(ui)/components/Careers/JobOpenings";

export const GET = async (req: NextRequest, context: RouteContext) => {
    try {
        await dbConnect();
        const { id } = await context.params;
        const job = await JobOpening.findById(id);
        if (!JobOpenings) {
            return NextResponse.json(
                { success: false, message: "Job opening not found" },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, data: job });
    } catch (error: any) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}

export async function PUT(req: NextRequest, context: RouteContext) {
    try {
        await dbConnect();
        const { id } = await context.params;
        const body = await req.json();

        const updated = await JobOpening.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });

        if (!updated) {
            return NextResponse.json({ success: false, message: "Job not found" }, { status: 404 }
            );
        }
        return NextResponse.json({ message: "Blog updated successfully.", success: true, data: updated });
    } catch (error: any) {
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

        const deleted = await JobOpening.findByIdAndDelete(id);
        if (!deleted) {
            return NextResponse.json(
                { success: false, message: "Job not found" },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, message: "Job deleted successfully" });
    } catch (error: any) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}
