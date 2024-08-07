import { NextResponse } from "next/server";
import connect from "@/app/utils/db";
import Post from "@/models/Post";

export const GET = async () => {
  try {
    await connect();
    const posts = await Post.find();
    return new NextResponse(JSON.stringify(posts), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Database query error:", error);
    return new NextResponse("Database Error!", { status: 500 });
  }
};
