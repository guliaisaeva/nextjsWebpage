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
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connect from "@/app/utils/db";
import User, { IUser } from "@/models/User";
import bcrypt from "bcryptjs";
type AuthUser = {
  id: string;
  name: string;
  email: string;
};

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connect();
        try {
          // Fetch the user and assert it as `IUser`
          const user = (await User.findOne({
            email: credentials?.email,
          })) as IUser | null;

          if (user && credentials?.password) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPasswordCorrect) {
              // Return user object with type assertion
              // Convert to a compatible user type
              return {
                id: user._id.toString(),
                name: user.name,
                email: user.email,
              } as AuthUser;
            } else {
              throw new Error("Wrong Credentials!");
            }
          } else {
            throw new Error("User not found!");
          }
        } catch (err) {
          throw new Error(
            err instanceof Error ? err.message : "An error occurred"
          );
        }
      },
    }),
  ],
  pages: {
    error: "/dashboard/login",
  },
});

export { handler as GET, handler as POST };
