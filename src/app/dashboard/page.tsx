import Button from '@/components/ui/Button';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import React, { FC } from 'react';

interface pageProps { }

const page = async ({ }) => {

    const session = await getServerSession(authOptions)

    return <Button />
}

export default page;