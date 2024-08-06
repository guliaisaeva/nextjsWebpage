import { NextResponse } from "next/server";
import connect from "@/app/utils/db";
import Post from "@/models/Post";

export const GET = async (request: { url: string | URL }) => {
  const url = new URL(request.url);

  const username = url.searchParams.get("username");

  try {
    await connect();

    const posts = await Post.find();

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
