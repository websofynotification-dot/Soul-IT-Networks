import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import { RouteContext } from "@/types/RouteContext";
import Image from "@/models/admin-model/Image";
import WhoWeAre from "@/models/admin-model/AboutUs/WhoWeAre";

export const GET = async (req: NextRequest, context: RouteContext) => {
    try {
        await dbConnect();
        const { id } = await context.params;
        const whoWeAre = await WhoWeAre.findById(id);

        if (!whoWeAre) {
            return NextResponse.json(
                { success: false, message: "Who we are data is not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, data: whoWeAre });
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
        const existingWhoWeAre = await WhoWeAre.findById(id);

        if (!existingWhoWeAre) {
            return NextResponse.json(
                { success: false, message: "Who we are data is not found." },
                { status: 404 }
            );
        }

        if (body.image && body.image !== existingWhoWeAre.image) {
            if (existingWhoWeAre.image_publicId) {
                await Image.findByIdAndDelete(existingWhoWeAre.image_publicId);
            }
        }

        const updated = await WhoWeAre.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });

        return NextResponse.json({
            message: "Who we are data updated successfully.",
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

        const existingWhoWeAre= await WhoWeAre.findById(id);

        if (!existingWhoWeAre) {
            return NextResponse.json(
                { success: false, message: "Certificate is not found." },
                { status: 404 }
            );
        }

        if (existingWhoWeAre.image_publicId) {
            await Image.findByIdAndDelete(existingWhoWeAre.publicId);
        }

        await WhoWeAre.findByIdAndDelete(id);
        
        return NextResponse.json({ success: true, message: "Who we are data deleted successfully." });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}


