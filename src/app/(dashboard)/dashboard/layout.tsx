import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode
}

//layout

const layout = async ({ children }: LayoutProps) => {

    const session = await getServerSession(authOptions)

    return (
        <div>
            {children}
        </div>
    );
};

export default layout;