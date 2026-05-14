import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import { RouteContext } from "@/types/RouteContext";
import Overview from "@/models/admin-model/Services/Overview";
import Image from "@/models/admin-model/Image";

export const GET = async (req: NextRequest, context: RouteContext) => {
    try {

        await dbConnect();
        const { id } = await context.params;
        const overview = await Overview.findById(id);

        if (!overview) {
            return NextResponse.json(
                { success: false, message: "Overview data  not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, data: overview });
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

        const existingOverview = await Overview.findById(id);

        if (!existingOverview) {
            return NextResponse.json(
                { success: false, message: "Overview data not found." },
                { status: 404 }
            );
        }

        if (body.image && body.image !== existingOverview.image) {
            if (existingOverview.image_public_Id) {
                await Image.findByIdAndDelete(existingOverview.image_public_Id);
            }
        }

        const updated = await Overview.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });

        return NextResponse.json({
            message: "Overview data updated successfully.",
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

export  const DELETE = async (req: Request, context: RouteContext) => {
    try {
        await dbConnect();
        const { id } = await context.params;

        const existingOverview = await Overview.findById(id);

        if (!existingOverview) {
            return NextResponse.json(
                { success: false, message: "Overview data not found." },
                { status: 404 }
            );
        }

        if (existingOverview.image_public_Id) {
            await Image.findByIdAndDelete(existingOverview.image_public_Id);
        }

        await Overview.findByIdAndDelete(id);

        return NextResponse.json({ success: true, message: "Overview data deleted successfully." });
    } catch (error: any) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}


