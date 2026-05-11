import { NextRequest, NextResponse } from "next/server";
import { RouteContext } from "@/types/RouteContext";
import dbConnect from "@/lib/dbConnect";
import WhyChooseUs from "@/models/admin-model/HomePage/WhyChooseUs";

export const GET = async (req: NextRequest, context: RouteContext) => {
    try {
        await dbConnect();
        const { id } = await context.params;
        const whyChooseUs = await WhyChooseUs.findById(id);
        if (!whyChooseUs) {
            return NextResponse.json(
                { success: false, message: "Why choose us not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, data: whyChooseUs });
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

        const updated = await WhyChooseUs.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true
        })

        if (!updated) {
            return NextResponse.json(
                { success: false, message: "Why choose us not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ message: "Why choose us updated successfully.", success: true, data: updated });
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
        const deleted = await WhyChooseUs.findByIdAndDelete(id);

        if (!deleted) {
            return NextResponse.json(
                { success: false, message: "Why choose us not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, message: "Why choose us deleted successfully." })
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}