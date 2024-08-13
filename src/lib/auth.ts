import { UpstashRedisAdapter } from "@next-auth/upstash-redis-adapter";
import { NextAuthOptions } from "next-auth";
import { db } from "./db";
import GoogleProvider from "next-auth/providers/google";

function getGoogleCredentials() {
    const clientId = process.env.GOOGlE_CLIENT_ID
    const clientSecret = process.env.GOOGlE_CLIENT_SECRET

    if (!clientId || clientId.length === 0) {
        throw new Error('Missing Google client Id')
    }
    if (!clientSecret || clientSecret.length === 0) {
        throw new Error('Missing Google client secret')
    }

    return { clientId, clientSecret }

}

export const authOptions: NextAuthOptions = {
    //f in every time login user adapter has a action to store user data in this case ;
    adapter: UpstashRedisAdapter(db),
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: '/login'
    },
    providers: [
        GoogleProvider({
            clientId: getGoogleCredentials().clientId,
            clientSecret: getGoogleCredentials().clientSecret
        })
    ]
}