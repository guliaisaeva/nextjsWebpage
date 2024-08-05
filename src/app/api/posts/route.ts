import { NextResponse } from "next/server";
import connect from "@/app/utils/db";
import Post from "@/models/Post";

export const GET = async () => {
  try {
    await connect();
    const posts = await Post.find().lean();
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error("Database query error:", error);
    return NextResponse.json({ error: "Database Error!" }, { status: 500 });
  }
};
