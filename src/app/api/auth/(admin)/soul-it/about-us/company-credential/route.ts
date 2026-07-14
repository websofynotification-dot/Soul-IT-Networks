import dbConnect from "@/lib/dbConnect"
import CompanyCredential from "@/models/admin-model/AboutUs/CompanyCredential";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
    try {
        await dbConnect();
        const companyCredentialData = await CompanyCredential.find().sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: companyCredentialData }, { status: 200 });
    } catch (error) {
        const err = error as Error;
        console.error("Error fetching company credential data : ", error);
        return NextResponse.json(
            { success: false, error: err.message },
            { status: 500 }
        )
    }
}


export const POST = async (req: NextRequest) => {
    try {
        await dbConnect();
        const { title, description } = await req.json();

        if (!title || !description) {
            return NextResponse.json({ error: `All fields are required!` }, { status: 400 });
        }
        const newCompanyCredentialData = await CompanyCredential.create({ title, description });
        return NextResponse.json({ message: "Journey added successfully.", success: true, data: newCompanyCredentialData })
    } catch (error) {
        const err = error as Error;
        console.error("Error journey  :", err);
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });
    }
}