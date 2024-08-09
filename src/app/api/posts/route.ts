import { NextResponse } from "next/server";
import connect from "@/app/utils/db";
import Post from "@/models/Post";

export const GET = async (request: Request) => {
  const url = new URL(request.url);
  const username = url.searchParams.get("username");

  try {
    await connect();
    const query = username ? { username } : {};
    const posts = await Post.find(query);

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const newPost = new Post(body);
    await connect();
    await newPost.save();
    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    console.error("Database Error:", err);
    return new NextResponse("Database Error", { status: 500 });
  }
};
