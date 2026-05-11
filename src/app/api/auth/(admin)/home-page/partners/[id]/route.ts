import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import { RouteContext } from "@/types/RouteContext";
import Image from "@/models/admin-model/Image";
import Partner from "@/models/admin-model/HomePage/Partner";

export const GET = async (req: NextRequest, context: RouteContext) => {
    try {
        await dbConnect();
        const { id } = await context.params;
        const partner = await Partner.findById(id);

        if (!partner) {
            return NextResponse.json(
                { success: false, message: "Partner is not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, data: partner });
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
        const existingPartner = await Partner.findById(id);

        if (!existingPartner) {
            return NextResponse.json(
                { success: false, message: "Partner is not found." },
                { status: 404 }
            );
        }

        if (body.image && body.image !== existingPartner.image) {
            if (existingPartner.image_publicId) {
                await Image.findByIdAndDelete(existingPartner.image_publicId);
            }
        }

        const updated = await Partner.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });

        return NextResponse.json({
            message: "Partner updated successfully.",
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

        const existingPartner= await Partner.findById(id);

        if (!existingPartner) {
            return NextResponse.json(
                { success: false, message: "Partner is not found." },
                { status: 404 }
            );
        }

        if (existingPartner.image_publicId) {
            await Image.findByIdAndDelete(existingPartner.publicId);
        }
        await Partner.findByIdAndDelete(id);
        
        return NextResponse.json({ success: true, message: "Partner deleted successfully." });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}


