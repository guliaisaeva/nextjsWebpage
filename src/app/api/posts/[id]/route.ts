import connect from "@/app/utils/db";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const url = new URL(request.url);
  const id = url.pathname.split('/').pop(); 

  try {
    await connect();

    if (!id) {
      return new NextResponse("ID is required", { status: 400 });
    }

    const post = await Post.findById(id);

    if (!post) {
      return new NextResponse("Post not found", { status: 404 });
    }

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    console.error("Database Error:", err);
    return new NextResponse("Database Error", { status: 500 });
  }
};