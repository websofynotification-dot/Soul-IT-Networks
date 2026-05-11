import { NextRequest, NextResponse } from "next/server";
import { RouteContext } from "@/types/RouteContext";
import dbConnect from "@/lib/dbConnect";
import WhyChooseSoulIt from "@/models/admin-model/Services/WhyChooseSoulIt";

export const GET = async (req: NextRequest, context: RouteContext) => {
    try {
        await dbConnect();
        const { id } = await context.params;
        const whyChooseSoulIt = await WhyChooseSoulIt.findById(id);

        if (!whyChooseSoulIt) {
            return NextResponse.json({ success: false, message: "Why choose soul it data not found." }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: whyChooseSoulIt }, { status: 200 });

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

        const updated = await WhyChooseSoulIt.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true
        })

        if (!updated) {
            return NextResponse.json(
                { success: false, message: "Why choose soul it data not found." }, { status: 404 }
            );
        }
        return NextResponse.json({ message: "Why choose soul it data updated successfully.", success: true, data: updated });

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
        const deleted = await WhyChooseSoulIt.findByIdAndDelete(id);

        if (!deleted) {
            return NextResponse.json(
                { success: false, message: "Why choose soul it data not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, message: "Why choose soul it data deleted successfully." });

    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}