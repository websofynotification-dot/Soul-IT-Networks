import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import sanitizeHtml from "sanitize-html";
import JobOpening from "@/models/admin-model/Careers/JobOpening";

export const GET = async () => {
  try {
    await dbConnect();
    const jobs = await JobOpening.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: jobs }, { status: 200 })
  } catch (error) {
    const err = error as Error;
    console.error("Error fetching job data :", error);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}

export const POST = async (req: Request) => {
  try {
    await dbConnect();
    const { title, subTitle, category, type, experience, location, content, slug, schemaMarkup, metaTitle, metaDescription, metaKeywords } = await req.json();

    if (!title || !subTitle || !content || !category || !type || !experience || !location || !metaTitle || !metaDescription || !slug || !metaKeywords || !schemaMarkup) {
      return NextResponse.json({ success: false, message: "All fields are required!" }, { status: 400 });
    }
    const cleanContent = sanitizeHtml(content);

    const newJob = await JobOpening.create({ title, subTitle, category, type, experience, location, content: cleanContent, slug, schemaMarkup, metaTitle, metaDescription, metaKeywords });
    return NextResponse.json({ message: "JOb added successfully.", success: true, data: newJob });
  } catch (error) {
    const err = error as Error;
    console.error("Error adding job:", err);
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}
