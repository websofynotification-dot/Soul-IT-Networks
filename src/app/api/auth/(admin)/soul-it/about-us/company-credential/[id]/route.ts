import { NextRequest, NextResponse } from "next/server";
import { RouteContext } from "@/types/RouteContext";
import dbConnect from "@/lib/dbConnect";
import CompanyCredential from "@/models/admin-model/AboutUs/CompanyCredential";

export const GET = async (req: NextRequest, context: RouteContext) => {
    try {
        await dbConnect();
        const { id } = await context.params;
        const companyCredential = await CompanyCredential.findById(id);

        if (!companyCredential) {
            return NextResponse.json(
                { success: false, message: "Company credential not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, data: companyCredential });
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

        const updated = await CompanyCredential.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        })

        if (!updated) {
            return NextResponse.json(
                { success: false, message: "Company credential not found." },
                { status: 404 }
            );
        }

        return NextResponse.json({
            message: "Company credential updated successfully.",
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
        const deleted = await CompanyCredential.findByIdAndDelete(id);

        if (!deleted) {
            return NextResponse.json(
                { success: false, message: "Company credential not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, message: "Company credential deleted successfully." });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}

