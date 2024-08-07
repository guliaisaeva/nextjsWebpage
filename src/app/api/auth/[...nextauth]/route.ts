// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from "next-auth/providers/credentials";
// import connect from "@/app/utils/db";
// import User, { IUser } from "@/models/User";
// import bcrypt from "bcryptjs";

// const handler = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId:
//         "617474428895-54d7mav40pgoneggtbl9t201sdf2kb9o.apps.googleusercontent.com",
//       clientSecret: "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",
//     }),

//     CredentialsProvider({
//       id: "credentials",
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         await connect();
//         try {
//           const user = (await User.findOne({ email: credentials?.email })) as IUser | null;
//           if (user && credentials?.password) {
//             const isPasswordCorrect = await bcrypt.compare(
//               credentials.password,
//               user?.password
//             );
//             if (isPasswordCorrect) {
//               return user;
//             } else {
//               throw new Error("Wrong Credentials!");
//             }
//           } else {
//             throw new Error("User not found!");
//           }
//         } catch (err: any) {
//           throw new Error(err);
//         }
//       },
//     }),
//   ],
// });

// export { handler as GET, handler as POST };

import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import connect from "@/app/utils/db";
import bcrypt from "bcryptjs";

interface User {
  id: string;
  email: string;
  name?: string;
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connect();

        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing credentials");
        }
        try {
          const user = await User.findOne({
            email: credentials.email,
          });

          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error("Wrong Credentials!");
            }
          } else {
            throw new Error("User not found!");
          }
        } catch (err: any) {
          throw new Error(err);
        }
      },
    }),
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  pages: {
    error: "/dashboard/login",
  },
});

export { handler as GET, handler as POST };
