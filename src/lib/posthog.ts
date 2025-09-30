import posthog from 'posthog-js';
import {env} from './env';

// Initialiser PostHog uniquement côté client
if (typeof window !== 'undefined') {
    posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY || '', {
        api_host: env.NEXT_PUBLIC_POSTHOG_HOST,
        // Ne pas capturer automatiquement les pageviews
        capture_pageview: false,
        // Ne pas capturer avant le consentement
        persistence: 'memory', // Utiliser la mémoire par défaut jusqu'au consentement
        // Mode sans cookie par défaut (activé via opt_in_capturing)
        opt_out_capturing_by_default: true,
        // Activer le mode debug en développement
        debug: process.env.NODE_ENV === 'development',
    });
}

export default posthog;