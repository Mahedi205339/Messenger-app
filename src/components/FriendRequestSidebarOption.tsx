import { User } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const FriendRequestSidebarOption = () => {
    return (
        <Link href='/dashboard/request' className='text-gray-700 hover:text-indigo-600 hover:bg-gray-50 flex items-center gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'>
            <div className='text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white'>
                <User className='h-4 w-4'/>

            </div>
        </Link>
    );
};

export default FriendRequestSidebarOption;