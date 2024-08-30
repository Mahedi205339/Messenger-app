'use client'
import React, { useState } from 'react';

interface FriendRequestProps {

}

const FriendRequests = () => {

    const [FriendRequests , setFriendRequests ] = useState<IncomingFriendRequest[]>(
        incomingFriendRequests
    )

    return (
        <div>
            
        </div>
);
};

export default FriendRequests;