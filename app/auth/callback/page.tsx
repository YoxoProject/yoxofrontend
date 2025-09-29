'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Page de callback OAuth2
 * Affiche uniquement un indicateur de chargement pendant le traitement de l'authentification
 */
export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    // Le provider OAuth2 gère automatiquement le callback
    // Redirection vers la page d'accueil après traitement
    const timer = setTimeout(() => {
      router.push('/');
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">Authentification en cours...</h1>
          <p className="text-muted-foreground">Veuillez patienter pendant que nous vous connectons.</p>
        </div>
      </div>
    </div>
  );
}