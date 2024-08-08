// import { NextResponse } from "next/server";
// import connect from "@/app/utils/db";
// import Post from "@/models/Post";

// export const GET = async ({ params }: { params: { id: string } }) => {
//   const { id } = params;

//   try {
//     await connect();

//     const post = await Post.findById(id);
//     console.log("Gulia", post);

//     if (!post) {
//       console.error(`No post found with ID: ${id}`);
//       return new NextResponse("Post not found", { status: 404 });
//     }
//     return new NextResponse(JSON.stringify(post), { status: 200 });
//   } catch (err) {
//     console.error(`Database Error: ${err}`);
//     return new NextResponse("Database Error", { status: 500 });
//   }
// };

// // export const DELETE = async ({ params }: any) => {
// //   const { id } = params;

// //   try {
// //     await connect();

// //     await Post.findByIdAndDelete(id);

// //     return new NextResponse("Post has been deleted", { status: 200 });
// //   } catch (err) {
// //     return new NextResponse("Database Error", { status: 500 });
// //   }
// // };

import { NextResponse } from "next/server";
import connect from "@/app/utils/db";
import Post from "@/models/Post";

export const GET = async (request: Request) => {
  const url = new URL(request.url);
  const id = url.pathname.split("/").pop(); 

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
