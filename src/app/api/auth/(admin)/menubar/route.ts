import dbConnect from "@/lib/dbConnect"
import Menubar from "@/models/admin-model/Menubar";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
    try {
        await dbConnect();
        const meneuData = await Menubar.find().sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: meneuData }, { status: 200 });
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
        const { primaryMenu, href, subMenu, secondaryMenu } = await req.json();
        if (!primaryMenu) {
            return NextResponse.json({ error: `Primary menu or primary menu url is required!` }, { status: 400 });
        }
        
        const cleanedSecondaryMenu = (secondaryMenu || []).filter(
            (item: { label: string, href: string }) => item.label.trim() !== "" && item.href.trim() !== ""
        );


        const newMenu = await Menubar.create({ primaryMenu, href, subMenu, secondaryMenu: cleanedSecondaryMenu });
        return NextResponse.json({ message: "Menu added successfully.", success: true, data: newMenu });
    } catch (error) {
        const err = error as Error;
        console.error("Error adding menu :", err);
        return NextResponse.json({ success: false, message: err.message }, { status: 500 });
    }
}