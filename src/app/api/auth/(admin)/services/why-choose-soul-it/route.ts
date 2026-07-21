import dbConnect from "@/lib/dbConnect"
import WhyChooseSoulIt from "@/models/admin-model/Services/WhyChooseSoulIt";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
    try {
        await dbConnect();
        const whyChooseSoulItData = await WhyChooseSoulIt.find().sort({ createdAt: -1 }).lean();
        return NextResponse.json({ success: true, data: whyChooseSoulItData }, { status: 200 });
    } catch (error) {
        const err = error as Error;
        console.error("Error fetching why choose soul it data :", error);
        return NextResponse.json(
            { success: false, error: err.message },
            { status: 500 }
        );
    }
};

export const POST = async (req: NextRequest) => {
    try {
        await dbConnect();
        const {pageName, keySteps} = await req.json();

        if (!keySteps || !pageName) {
            return NextResponse.json({ success: false, message: "Page name and key steps fields are required!" }, { status: 400 });
        }

        const newWhyChooseSoulIt = await WhyChooseSoulIt.create({pageName, keySteps });
        return NextResponse.json({message: "Why choose soul it data added successfully.", success: true, data: newWhyChooseSoulIt }, { status: 200 });
    } catch (error) {
        const err = error as Error;
        console.error("Error fetching why choose soul it data :", error);
        return NextResponse.json(
            { success: false, error: err.message },
            { status: 500 }
        );
    }
}