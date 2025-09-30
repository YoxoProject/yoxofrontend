import posthog from "posthog-js";
import {env} from "@/lib/env";

// Initialisation de PostHog avant l'hydratation React pour des performances optimales
if (typeof window !== 'undefined' && env.NEXT_PUBLIC_POSTHOG_KEY) {
    posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: env.NEXT_PUBLIC_POSTHOG_HOST,
        // Ne pas capturer automatiquement les pageviews (géré manuellement après consentement)
        capture_pageview: false,
        // Ne pas capturer avant le consentement
        persistence: 'memory', // Utiliser la mémoire par défaut jusqu'au consentement
        // Mode sans cookie par défaut (activé via opt_in_capturing après consentement)
        opt_out_capturing_by_default: true,
        // Hébergement EU pour conformité RGPD
        ui_host: 'https://eu.posthog.com',
        // Activer le mode debug en développement
        debug: process.env.NODE_ENV === 'development',
    });
}

// Exporter une fonction pour tracker les transitions de route (Next.js 15.3+)
export function onRouterTransitionStart() {
    // Capturer les pageviews uniquement si l'utilisateur a consenti
    if (typeof window !== 'undefined' && posthog && !posthog.has_opted_out_capturing()) {
        posthog.capture('$pageview');
    }
}