import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import { RouteContext } from "@/types/RouteContext";
import Image from "@/models/admin-model/Image";
import Certificate from "@/models/admin-model/HomePage/Certificate";

export const GET = async (req: NextRequest, context: RouteContext) => {
    try {
        await dbConnect();
        const { id } = await context.params;
        const certificate = await Certificate.findById(id);

        if (!certificate) {
            return NextResponse.json(
                { success: false, message: "Certificate is not found." },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, data: certificate });
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
        const existingCertificate = await Certificate.findById(id);

        if (!existingCertificate) {
            return NextResponse.json(
                { success: false, message: "Certificate is not found." },
                { status: 404 }
            );
        }

        if (body.image && body.image !== existingCertificate.image) {
            if (existingCertificate.image_publicId) {
                await Image.findByIdAndDelete(existingCertificate.image_publicId);
            }
        }

        const updated = await Certificate.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });

        return NextResponse.json({
            message: "Certificate updated successfully.",
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

        const existingCertificate= await Certificate.findById(id);

        if (!existingCertificate) {
            return NextResponse.json(
                { success: false, message: "Certificate is not found." },
                { status: 404 }
            );
        }

        if (existingCertificate.image_publicId) {
            await Image.findByIdAndDelete(existingCertificate.publicId);
        }

        await Certificate.findByIdAndDelete(id);
        
        return NextResponse.json({ success: true, message: "Certificate deleted successfully." });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}


