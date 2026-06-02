import dbConnect from "@/lib/dbConnect"
import Footer from "@/models/admin-model/Footer";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
    try {
        await dbConnect();
        const footerData = await Footer.find().sort({ createdAt: -1 });

        return NextResponse.json({ success: true, data: footerData }, { status: 200 });
    } catch (error) {
        const err = error as Error;
        console.error("Error fetching footer data :", error);
        return NextResponse.json(
            { success: false, error: err.message },
            { status: 500 }
        );
    }
}

export const POST = async (req: NextRequest) => {
    try {
        await dbConnect();
        const { companyInfo, tag, quickLinks, services, otherLinks, copyrightText, designedBy } = await req.json();

        if (!companyInfo || !tag || !quickLinks || !services || !otherLinks || !copyrightText || !designedBy) {
            return NextResponse.json({ error: `All fields are required!` }, { status: 400 });
        }

        const newFooter = await Footer.create({ companyInfo, tag, quickLinks, services, otherLinks, copyrightText, designedBy });
        return NextResponse.json({ message: "Footer added successfully.", success: true, data: newFooter })
    } catch (error) {
        const err = error as Error;
        console.error("Error adding footer data :", err);
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });
    }
}