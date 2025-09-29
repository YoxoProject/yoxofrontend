'use client';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ThemeProvider} from 'next-themes';
import {PropsWithChildren} from 'react';
import {AuthProvider} from '@/components/auth/AuthProvider';
import {PostHogProvider} from '@/components/cookies/PostHogProvider';
import {CookieBanner} from '@/components/cookies/CookieBanner';

const queryClient = new QueryClient();

export const Providers = ({children}: PropsWithChildren) => {
    return (
        <>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                <QueryClientProvider client={queryClient}>
                    <PostHogProvider>
                        <AuthProvider>
                            {children}
                            <CookieBanner />
                        </AuthProvider>
                    </PostHogProvider>
                </QueryClientProvider>
            </ThemeProvider>
        </>
    );
};