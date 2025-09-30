'use client';

import {useEffect, useState} from 'react';
import {Typography} from '@/components/ui/typography';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import Link from 'next/link';
import posthog from 'posthog-js';
import {X} from 'lucide-react';

const COOKIE_CONSENT_KEY = 'cookie-consent';

export function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Vérifier si l'utilisateur a déjà fait un choix
        const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
        if (!consent) {
            setShowBanner(true);
        } else {
            // Appliquer le consentement sauvegardé
            if (consent === 'accepted') {
                posthog.opt_in_capturing();
            } else {
                posthog.opt_out_capturing();
            }
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
        posthog.opt_in_capturing();
        setShowBanner(false);
    };

    const handleDecline = () => {
        localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
        posthog.opt_out_capturing();
        setShowBanner(false);
    };

    if (!showBanner) {
        return null;
    }

    return (
        <div className="fixed bottom-4 left-3 right-3 z-50 w-auto sm:left-auto sm:right-4 sm:max-w-md animate-in slide-in-from-bottom-5">
            <Card className="border-2 shadow-lg">
                <CardHeader className="relative pb-3">
                    <button
                        onClick={handleDecline}
                        className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        aria-label="Fermer"
                    >
                        <X className="h-4 w-4" />
                    </button>
                    <CardTitle className="text-lg">🍪 Cookies</CardTitle>
                    <CardDescription className="text-sm">
                        Nous utilisons des cookies pour améliorer votre expérience
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Typography variant="p" className="text-sm text-muted-foreground">
                        Les cookies d&apos;authentification sont nécessaires au fonctionnement du site. Les cookies analytiques (PostHog) nous permettent de comprendre comment vous utilisez le site.
                    </Typography>
                    <Link
                        href="/legal/mentions"
                        className="text-sm text-primary underline hover:no-underline inline-block"
                    >
                        En savoir plus sur notre politique de cookies
                    </Link>
                    <div className="flex flex-col gap-2 sm:flex-row">
                        <button
                            onClick={handleDecline}
                            className="flex-1 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                            Refuser
                        </button>
                        <button
                            onClick={handleAccept}
                            className="flex-1 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                        >
                            Accepter tout
                        </button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}