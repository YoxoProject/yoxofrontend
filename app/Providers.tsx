'use client';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ThemeProvider} from 'next-themes';
import {PropsWithChildren} from 'react';
import {AuthProvider} from '@/components/auth/AuthProvider';

const queryClient = new QueryClient();

export const Providers = ({children}: PropsWithChildren) => {
    return (
        <>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                <QueryClientProvider client={queryClient}>
                    <AuthProvider>
                        {children}
                    </AuthProvider>
                </QueryClientProvider>
            </ThemeProvider>
        </>
    );
};