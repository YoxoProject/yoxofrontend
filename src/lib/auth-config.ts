import { TAuthConfig } from "react-oauth2-code-pkce";
import { env } from "./env";

// Configuration OAuth2 pour le serveur d'authentification Yoxo
export const authConfig: TAuthConfig = {
  clientId: env.NEXT_PUBLIC_OAUTH_CLIENT_ID,
  authorizationEndpoint: env.NEXT_PUBLIC_OAUTH_AUTHORIZATION_ENDPOINT,
  tokenEndpoint: env.NEXT_PUBLIC_OAUTH_TOKEN_ENDPOINT,
  redirectUri: typeof window !== "undefined" ? `${window.location.origin}/auth/callback` : "http://localhost:3000/auth/callback",
  scope: env.NEXT_PUBLIC_OAUTH_SCOPE,

  // Désactive la redirection automatique - l'utilisateur doit cliquer sur "Se connecter"
  autoLogin: false,

  // Configuration PKCE
  extraAuthParameters: {},

  // Options additionnelles
  clearURL: true, // Nettoie l'URL après l'authentification

  // Headers pour les requêtes token
  extraTokenParameters: {},
};