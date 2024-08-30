'use client'
import { Check, UserPlus } from 'lucide-react';
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
                        <p className='font-medium text-lg'>{request.senderEmail} </p>
                        <button 
                        aria-label='accept friend' className='w-8 bg-indigo-600 hover:bg-indigo-700 grid place-items-center rounded-full transition hover:shadow-md'
                        ><Check className='font-semibold text-white w-3/4 h-3/4' /></button>
                        <button></button>
                    </div>
                ))
            )}
        </>
    );
};

export default FriendRequests;