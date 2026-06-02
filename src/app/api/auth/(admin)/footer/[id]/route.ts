import { NextRequest, NextResponse } from "next/server";
import { RouteContext } from "@/types/RouteContext";
import dbConnect from "@/lib/dbConnect";
import Footer from "@/models/admin-model/Footer";
import Image from "@/models/admin-model/Image";

export const GET = async (req: NextRequest, context: RouteContext) => {
    try {
        await dbConnect();

        const { id } = await context.params;
        const footer = await Footer.findById(id);

        if (!footer) {
            return NextResponse.json(
                { success: false, message: "Footer is not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, data: footer });

    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        )
    }
}

export const PUT = async (req: NextRequest, context: RouteContext) => {
    try {
        await dbConnect();
        const { id } = await context.params;
        const body = await req.json();

        const existingFooter = await Footer.findById(id);

        if (!existingFooter) {
            return NextResponse.json(
                { success: false, message: "Footer is not found." },
                { status: 404 }
            );
        }
        if (body.companyInfo.logo && body.companyInfo.logo !== existingFooter.companyInfo.logo) {
            if (existingFooter.companyInfo.logo_publicId) {
                await Image.findByIdAndDelete(existingFooter.companyInfo.logo_publicId);
            }
        }

        const updated = await Footer.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });

        return NextResponse.json({
            message: "Footer updated successfully.",
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

        const existingFooter = await Footer.findById(id);

        if (!existingFooter) {
            return NextResponse.json(
                { success: false, message: "Footer is not found." },
                { status: 404 }
            );
        }

        if (existingFooter.companyInfo.logo_publicId) {
            await Image.findByIdAndDelete(existingFooter.companyInfo.logo_publicId);
        }

        await Footer.findByIdAndDelete(id);

        return NextResponse.json({ success: true, message: "Footer deleted successfully." });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}