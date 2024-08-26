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
    if(!session) notFound()

    return (
        <div className='w-full flex h-screen'>
            <div className='flex h-full w-full max-w-xs flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white p-6'></div>
            <Link href='/dashboard'></Link>
            {children}
        </div>
    );
};

export default layout;