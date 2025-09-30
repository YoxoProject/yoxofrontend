
'use client';

/**
 * PostHogProvider - Composant wrapper pour PostHog
 *
 * Note : L'initialisation de PostHog est maintenant gérée dans instrumentation-client.ts
 * pour des performances optimales (s'exécute avant l'hydratation React).
 *
 * Le tracking des pageviews est géré automatiquement par onRouterTransitionStart
 * dans instrumentation-client.ts.
 *
 * Ce composant est conservé pour d'éventuels besoins futurs liés à PostHog
 * (ex: gestion du consentement, features flags, etc.)
 */
export function PostHogProvider({children}: {children: React.ReactNode}) {
    // PostHog est initialisé dans instrumentation-client.ts
    // Le tracking est automatique via onRouterTransitionStart
    return <>{children}</>;
}