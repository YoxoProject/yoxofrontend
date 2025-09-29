import posthog from 'posthog-js';

// Initialiser PostHog uniquement côté client
if (typeof window !== 'undefined') {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || '', {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.posthog.com',
        // Ne pas capturer automatiquement les pageviews
        capture_pageview: false,
        // Ne pas capturer avant le consentement
        persistence: 'memory', // Utiliser la mémoire par défaut jusqu'au consentement
        // Mode sans cookie par défaut (activé via opt_in_capturing)
        opt_out_capturing_by_default: true,
        // Hébergement EU pour conformité RGPD
        ui_host: 'https://eu.posthog.com',
    });
}

export default posthog;