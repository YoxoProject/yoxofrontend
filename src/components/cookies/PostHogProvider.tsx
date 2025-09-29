
'use client';

import {useEffect} from 'react';
import {usePathname, useSearchParams} from 'next/navigation';
import posthog from '@/lib/posthog';

export function PostHogProvider({children}: {children: React.ReactNode}) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        // Capturer les pageviews uniquement si l'utilisateur a consenti
        if (typeof window !== 'undefined' && posthog && !posthog.has_opted_out_capturing()) {
            const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
            posthog.capture('$pageview', {
                $current_url: url,
            });
        }
    }, [pathname, searchParams]);

    return <>{children}</>;
}