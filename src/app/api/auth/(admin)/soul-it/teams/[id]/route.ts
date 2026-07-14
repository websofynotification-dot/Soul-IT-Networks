import { NextRequest, NextResponse } from "next/server";
import { RouteContext } from "@/types/RouteContext";
import dbConnect from "@/lib/dbConnect";
import Team from "@/models/admin-model/SoulIt/Team";
import Image from "@/models/admin-model/Image";

export const GET = async (req: NextRequest, context: RouteContext) => {
  try {
    await dbConnect();
    const { id } = await context.params;
    const teamsMember = await Team.findById(id);

    if (!teamsMember) {
      return NextResponse.json(
        { success: false, message: "Teams member not found." },
        { status: 404 },
      );
    }
    return NextResponse.json({ success: true, data: teamsMember });
  } catch (error) {
    const err = error as Error;
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 },
    );
  }
};

export const PUT = async (req: NextRequest, contex: RouteContext) => {
  try {
    await dbConnect();
    const { id } = await contex.params;
    const body = await req.json();

    const existingTeamMember = await Team.findById(id);

    if (!existingTeamMember) {
      return NextResponse.json(
        { success: false, message: "Team member not found." },
        { status: 404 },
      );
    }

    if (body.image && body.image !== existingTeamMember.image) {
      if (existingTeamMember.image_public_Id) {
        await Image.findByIdAndDelete(existingTeamMember.image_public_Id);
      }
    }

    const updated = await Team.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    return NextResponse.json({
      message: "Teams member updated successfully.",
      success: true,
      data: updated,
    });
  } catch (error) {
    const err = error as Error;
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 },
    );
  }
};

export const DELETE = async (req: NextRequest, context: RouteContext) => {
  try {
    const { id } = await context.params;

    const deleted = await Team.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json(
        { success: false, message: "Teams member not found." },
        { status: 404 },
      );
    }
    return NextResponse.json({
      success: true,
      message: "Teams member deleted successfully.",
    });
  } catch (error) {
    const err = error as Error;
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 },
    );
  }
};
