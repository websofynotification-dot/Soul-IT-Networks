import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Delivery from "@/models/admin-model/Services/Delivery";

export const GET = async () => {
    try {
        await dbConnect();
        const deliveryData = await Delivery.find().sort({ createdAt: -1 }).lean();
        return NextResponse.json({ success: true, data: deliveryData }, { status: 200 });
    } catch (error) {
        const err = error as Error;
        console.error("Error fetching delivery data :", error);
        return NextResponse.json(
            { success: false, error: err.message },
            { status: 500 }
        );
    }
}

export const POST = async (req: NextRequest) => {
    try {
        await dbConnect();
        const { pageName, keySteps } = await req.json();

        if (!keySteps || !pageName) {
            return NextResponse.json({ success: false, message: "Page name and key stepsfields are required!" }, { status: 400 });
        }

        const newDelivery = await Delivery.create({ pageName, keySteps });
        return NextResponse.json({ message: "Delivery added successfully.", success: true, data: newDelivery });
    } catch (error) {
        const err = error as Error;
        console.error("Error adding delivery. : ", err);
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });
    }
}
