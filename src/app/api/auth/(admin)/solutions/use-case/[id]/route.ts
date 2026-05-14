import { NextRequest, NextResponse } from "next/server";
import { RouteContext } from "@/types/RouteContext";
import dbConnect from "@/lib/dbConnect";
import UseCase from "@/models/admin-model/Solutions/UseCase";

export const GET = async (req: NextRequest, context: RouteContext) => {
    try {
        await dbConnect();
        const { id } = await context.params;

        const useCase = await UseCase.findById(id);

        if (!useCase) {
            return NextResponse.json({ success: false, message: "Use case data not found." },
                { status: 404 });
        }

        return NextResponse.json({ success: true, data: useCase })
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

        const updated = await UseCase.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });

        return NextResponse.json({
            message: "Use case data updated successfully.",
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

export const DELETE = async (req: NextRequest, context: RouteContext) => {
    try {
        await dbConnect();

        const { id } = await context.params;

        const deleted = await UseCase.findByIdAndDelete(id);

        return NextResponse.json({ success: true, message: "Use case data deleted successfully." })

    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}