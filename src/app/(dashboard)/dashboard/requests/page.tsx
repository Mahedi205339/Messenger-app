import FriendRequests from '@/components/FriendRequests';
import { fetchRedis } from '@/helpers/redis';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';
import React from 'react';

const page = async () => {
    const session = await getServerSession(authOptions)
    if (!session) notFound()

    const incomingSenderIds = (
        await fetchRedis(
            'smembers',
            `user:${session.user.id}:incoming_friend_request`
        ) as string[]
    )

    const incomingFriendRequest = await Promise.all(
        incomingSenderIds.map(async (senderId) => {
            const sender = await fetchRedis('get', `user:${senderId}`) as User
            return {
                senderId,
                senderEmail: sender.email
            }
        })
    )

    return (
        <main className='pt-8'>
            <h1 className='font-bold text-5xl mb-8'>
                Add a Friend
            </h1>
            <div className='flex flex-col gap-4'>
                <FriendRequests sessionId={session.user.id} incomingFriendRequests={incomingFriendRequest} />
            </div>
        </main>
    );
};

export default page;