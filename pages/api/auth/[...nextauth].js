import NextAuth from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { ObjectId } from "mongodb";
import clientPromise from "../../../lib/mongodb";

// providers
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
  ],
  theme: {
    colorScheme: "light",
  },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    },
  },
  events: {
    async signIn(message) {
      if (message.isNewUser) {
        const client = await clientPromise;
        const usersCollection = client.db().collection("users");

        await usersCollection.updateOne(
          { _id: ObjectId(token.sub) },
          {
            $set: { isVerified: "not-verified" },
          }
        );
      }
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
});
