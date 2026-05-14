import dbConnect from "@/lib/dbConnect"
import UseCase from "@/models/admin-model/Solutions/UseCase";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
    try {
        await dbConnect();
        const useCaseData = await UseCase.find().sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: useCaseData }, { status: 200 });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json(
            { success: false, error: err.message },
            { status: 500 }
        )
    }
}

export const POST = async (req: NextRequest) => {
    try {
        await dbConnect();
        const { pageName, useCaseStep } = await req.json();

        if (!pageName || !useCaseStep) {
            return NextResponse.json({ error: "All fields are requires!" }, { status: 400 });
        }

        const newUseCase = await UseCase.create({ pageName, useCaseStep });

        return NextResponse.json({message:"Use case added successfully.", sucess:true, data:newUseCase})

    } catch (error) {
        const err = error as Error;
        console.error("Error adding menu :", err);
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });
    }
}