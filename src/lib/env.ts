import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

/**
 * Validation et typage des variables d'environnement avec Zod
 * Les variables préfixées par NEXT_PUBLIC_ sont accessibles côté client
 */
export const env = createEnv({
  /**
   * Variables d'environnement côté serveur
   * Ne seront jamais exposées au client
   */
  server: {},

  /**
   * Variables d'environnement côté client
   * Doivent être préfixées par NEXT_PUBLIC_
   */
  client: {
    NEXT_PUBLIC_OAUTH_CLIENT_ID: z.string().uuid(),
    NEXT_PUBLIC_OAUTH_AUTHORIZATION_ENDPOINT: z.string().url(),
    NEXT_PUBLIC_OAUTH_TOKEN_ENDPOINT: z.string().url(),
    NEXT_PUBLIC_OAUTH_SCOPE: z.string().default("api_access profile"),
  },

  /**
   * Variables d'environnement partagées (disponibles côté client et serveur)
   */
  shared: {},

  /**
   * Configuration pour le runtime Next.js
   * Permet d'accéder aux variables process.env
   */
  runtimeEnv: {
    NEXT_PUBLIC_OAUTH_CLIENT_ID: process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID,
    NEXT_PUBLIC_OAUTH_AUTHORIZATION_ENDPOINT: process.env.NEXT_PUBLIC_OAUTH_AUTHORIZATION_ENDPOINT,
    NEXT_PUBLIC_OAUTH_TOKEN_ENDPOINT: process.env.NEXT_PUBLIC_OAUTH_TOKEN_ENDPOINT,
    NEXT_PUBLIC_OAUTH_SCOPE: process.env.NEXT_PUBLIC_OAUTH_SCOPE,
  },

  /**
   * Ignore la validation lors du build pour éviter les erreurs
   * si les variables d'environnement ne sont pas définies
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,

  /**
   * Active les logs de débogage pour le développement
   */
  emptyStringAsUndefined: true,
});