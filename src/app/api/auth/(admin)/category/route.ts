import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Category from "@/models/admin-model/Category";

export const GET = async () => {
  try {
    await dbConnect();
    const categories = await Category.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: categories }, { status: 200 });
  } catch (error) {
    const err = error as Error;
    console.error("Error fetching category data :", error);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}

export const POST = async (req: NextRequest) => {
  try {
    await dbConnect();
    const { category, categoryType } = await req.json();

    if (!category || !categoryType) {
      return NextResponse.json({ success: false, message: "All fields are required!" }, { status: 400 });
    }
    const newCategory = await Category.create({ category, categoryType });
    return NextResponse.json({ message: "Category added successfylly.", success: true, data: newCategory });
  } catch (error) {
    const err = error as Error;
    console.error("Error adding category :", err);
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}
