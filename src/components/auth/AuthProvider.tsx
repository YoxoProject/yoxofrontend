'use client';

import dynamic from 'next/dynamic';
import { PropsWithChildren } from 'react';

// Import dynamique du provider OAuth2 pour éviter les erreurs SSR
const OAuth2Provider = dynamic(
  () => import("react-oauth2-code-pkce").then((mod) => mod.AuthProvider),
  {
    ssr: false,
    // Pas de loading global - on gère le loading dans le composant UserButton
  }
);

import { authConfig } from '@/lib/auth-config';

export function AuthProvider({ children }: PropsWithChildren) {
  return (
    <OAuth2Provider authConfig={authConfig}>
      {children}
    </OAuth2Provider>
  );
}