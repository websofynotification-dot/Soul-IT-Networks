import { NextRequest, NextResponse } from "next/server";

import mongoose from "mongoose";
import dbConnect from "@/lib/dbConnect";
import Brochure from "@/models/admin-model/Services/Delivery";

export async function GET(req: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  await dbConnect();

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid file ID" }, { status: 400 });
  }

  const file = await Brochure.findById(id);
  if (!file) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }

  return new NextResponse(file.data, {
    headers: {
      "Content-Type": file.contentType,
      "Content-Disposition": `inline; filename=${file.filename}`,
    },
  });
}






