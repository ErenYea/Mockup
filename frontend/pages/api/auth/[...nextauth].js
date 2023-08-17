import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
    secret: process.env.AUTH_SECRET,
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        }),
        // ...add more providers here
    ],
    pages: {
        signIn: "/login",
    },
}

export default NextAuth(authOptions)