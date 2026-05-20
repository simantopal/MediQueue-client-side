'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';

const ProfilePage = () => {
    const router = useRouter();
    const { data: session, isLoading } = authClient.useSession();

    useEffect(() => {
        if (!isLoading && !session?.user) {
            router.replace("/login");
        }
    }, [session, isLoading, router]);

    if (isLoading) {
        return (
            <div className="text-center mt-10">
                Loading...
            </div>
        );
    }

    if (!session?.user) {
        return null;
    }

    return (
        <div>
            Profile Page Content
        </div>
    );
};

export default ProfilePage;