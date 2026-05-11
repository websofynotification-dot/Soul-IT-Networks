import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Image from "@/models/admin-model/Image";
import HeroImage from "@/models/admin-model/HomePage/HeroImage";
import { RouteContext } from "@/types/RouteContext";

export const GET = async (req: NextRequest, context: RouteContext) => {
    try {
        await dbConnect();
        const { id } = await context.params;
        const heroImage = await HeroImage.findById(id);

        if (!heroImage) {
            return NextResponse.json(
                { success: false, message: "Hero image not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, data: heroImage });
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

        const existingHeroImage = await HeroImage.findById(id);

        if (!existingHeroImage) {
            return NextResponse.json(
                { success: false, message: "Hero image not found" },
                { status: 404 }
            );
        }

        if (body.image && body.image !== existingHeroImage.image) {
            if (existingHeroImage.publicId) {
                await Image.findByIdAndDelete(existingHeroImage.publicId);
            }
        }

        const updated = await HeroImage.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });

        return NextResponse.json({
            message: "Hero image updated successfully.",
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
        const existingHeroImage = await HeroImage.findById(id);

        if (!existingHeroImage) {
            return NextResponse.json(
                { success: false, message: "Hero image not found." },
                { status: 404 }
            );
        }
        if (existingHeroImage.image_publicId) {
            await Image.findByIdAndDelete(existingHeroImage.publicId);
        }

        await HeroImage.findByIdAndDelete(id);
        return NextResponse.json({ success: true, message: "Hero image deleted successfully." });
    } catch (error: any) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}


