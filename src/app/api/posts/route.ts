import { NextResponse } from "next/server";
import connect from "@/app/utils/db";
import Post from "@/models/Post";

export const GET = async (request: Request) => {
  const url = new URL(request.url);
  const userName = url.searchParams.get("username");
  try {
    await connect();
    const posts = await Post.find(userName ? { userName } : {});
    return new NextResponse(JSON.stringify(posts), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Database query error:", error);
    return new NextResponse("Database Error!", { status: 500 });
  }
};

export const POST = async (request: { json: () => any }) => {
  const body = await request.json();

  const newPost = new Post(body);

  try {
    await connect();

    await newPost.save();

    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
