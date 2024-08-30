'use client'
import { UserPlus } from 'lucide-react';
import React, { FC, useState } from 'react';

interface FriendRequestProps {
    incomingFriendRequests: IncomingFriendRequest[]
    sessionId: string
}

const FriendRequests: FC<FriendRequestProps> = ({ incomingFriendRequests, sessionId }) => {

    const [FriendRequests, setFriendRequests] = useState<IncomingFriendRequest[]>(
        incomingFriendRequests
    )

    return (
        <>
            {FriendRequests.length === 0 ? (
                <p className='text-sm text-zinc-500'>Nothing to show here!</p>
            ) : (
                FriendRequests.map((request) => (
                    <div className='' key={request.senderId}>
                        <UserPlus className='text-black' />
                        <p>{request.senderEmail} </p>
                    </div>
                ))
            )}
        </>
    );
};

export default FriendRequests;