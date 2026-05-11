import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import JobOpening from "@/models/admin-model/Careers/JobOpening";

type Props = { params: Promise<{ slug: string }>}

export const GET = async (req: NextRequest, context: Props) => {
  try {
    await dbConnect();
    const { slug } = await context.params;
    const job = await JobOpening.findOne({ slug });

    if (!job) {
      return NextResponse.json(
        { success: false, message: "Job opening not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: job });
  } catch (error) {
    const err = error as Error;
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}
