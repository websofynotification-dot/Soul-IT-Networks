import { NextRequest, NextResponse } from "next/server";
import { RouteContext } from "@/types/RouteContext";
import dbConnect from "@/lib/dbConnect";
import Foundation from "@/models/admin-model/AboutUs/Foundation";

export const GET = async (req: NextRequest, context: RouteContext) => {
    try {
        await dbConnect();
        const { id } = await context.params;
        const foundation = await Foundation.findById(id);
        if (!foundation) {
            return NextResponse.json(
                { success: false, message: "Foundation not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, data: foundation });
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

        const updated = await Foundation.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true
        });
        if (!updated) {
            return NextResponse.json(
                { success: false, message: "Foundation not found." },
                { status: 404 }
            );
        }

        return NextResponse.json({ message: "Foundation updated successfully.", success: true, data: updated });
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
        const delated = await Foundation.findByIdAndDelete(id);

        if (!delated) {
            return NextResponse.json(
                { success: false, message: "Foundation not found." },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, message: "Foundation deleted successfully." });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}