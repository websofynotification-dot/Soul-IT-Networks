import { NextRequest, NextResponse } from "next/server";
import { RouteContext } from "@/types/RouteContext";
import FeatureJob from "@/models/admin-model/Careers/FeatureJob";
import dbConnect from "@/lib/dbConnect";

export const GET = async (req: NextRequest, context: RouteContext) => {
    try {
        await dbConnect();
        const { id } = await context.params;
        const featureJob = await FeatureJob.findById(id);

        if (!featureJob) {
            return NextResponse.json({ success: false, message: "Feature job not found." }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: location });
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

        const updated = await FeatureJob.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true
        })

        if (!updated) {
            return NextResponse.json({ success: false, message: "Location not found." }, { status: 404 });
        }

        return NextResponse.json({ message: "Feature job updated successfully.", success: true, data: updated })
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

        const deleted = await FeatureJob.findByIdAndDelete(id);

        if (!deleted) {
            return NextResponse.json({ success: false, message: "Feature job not found." }, { status: 404 });
        }
        return NextResponse.json({ message: "Feature job deleted successfully.", success: true });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}