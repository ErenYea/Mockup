import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
    secret: process.env.AUTH_SECRET,

    providers: [
        GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        }),
    ],
    pages: {
        signIn: "/login",
    },
}

export default NextAuth(authOptions)