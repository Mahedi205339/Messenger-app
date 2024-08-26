/* eslint-disable react/jsx-no-comment-textnodes */
import { Icons } from '@/components/icons';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode
}

//not main layout

const layout = async ({ children }: LayoutProps) => {

    const session = await getServerSession(authOptions)
    if (!session) notFound()

    return (
        <div className='w-full flex h-screen'>
            <div className='flex h-full w-full max-w-xs flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white p-6'>
                <Link href='/dashboard' className='flex h-16 shrink-0 items-centers'>
                    <Icons.Logo className='h-8 w-auto text-indigo-600' />
                </Link>
                <div className='text-xs font-semibold leading-6 text-gray-400'>
                    Your chats
                </div>

        <nav className='flex flex-1 flex-col'>
        <ul role='list' className='flex flex-1 flex-col gap-y-7'>
            <li>
                // chats that this user has
            </li>
            <li>
                <div className='text-xs font-semibold leading-6 text-gray-400'>Overview</div>
            </li>
        </ul>
        </nav>

            </div>
            {children}
        </div>
    );
};

export default layout;