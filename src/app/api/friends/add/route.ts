"use server"

import { fetchRedis } from "@/helpers/redis";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { addFriendValidator } from "@/lib/validations/add-friend";
import { getServerSession } from "next-auth";

export async function POST(req: Request) {
    try {

        const body = await req.json();

        const { email: emailToAdd } = addFriendValidator.parse(body.email)
        const
            RESTResponse = await fetch(`${process.env.UPSTASH_REDIS_REST_URL}/get/user:email${emailToAdd}`, {
                headers: {
                    Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}`
                },
                cache: 'no-store',
            })
        const data = await RESTResponse.json() as { result: string }
        // console.log(data)

        const idToAdd = data.result;

        const session = await getServerSession(authOptions)

        if (!idToAdd) {
            return new Response('This person does not exits!', { status: 400 })
        }

        if (!session) {
            return new Response('Unauthorized ', { status: 401 })
        }

        if (idToAdd === session.user.id) {
            return new Response('You cannot add yourself as a friend!', { status: 400 })
        }

        //check if user is already Added ;
        const isAlreadyAdded = (await fetchRedis(
            'sismember',
            `user:${idToAdd}:incoming_friend_requests`,
            session.user.id
        )) as 0 | 1

        if (isAlreadyAdded) {
            return new Response('Already Added this user', { status: 400 })
        }

        //check if user is already friend

        const isAlreadyFriend = (await fetchRedis(
            'sismember',
            `user:${session.user.id}:friends`,
            idToAdd
        )) as 0 | 1

        db.sadd(`user:${idToAdd}:incoming_friend_requests`,session.user.id)

        if (isAlreadyFriend) {
            return new Response('Already Added this user', { status: 400 })
        }

    }
    catch (error) {

    }
}