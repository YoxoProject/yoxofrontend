'use client';

import { useContext, useState } from "react";
import { AuthContext, IAuthContext } from "react-oauth2-code-pkce";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, User, Loader2 } from "lucide-react";

export function UserButton() {
  const { token, logIn, logOut } = useContext<IAuthContext>(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  // Gérer le clic sur le bouton de connexion avec état de loading
  const handleLogin = async () => {
    setIsLoading(true);
    try {
      logIn();
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Extraire le nom d'utilisateur du token JWT
  const getUsernameFromToken = () => {
    if (!token) return null;

    try {
      // Décoder le payload du JWT (partie entre les deux points)
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.preferred_username || payload.sub || payload.name;
    } catch (error) {
      console.error('Erreur lors du décodage du token:', error);
      return null;
    }
  };

  const username = getUsernameFromToken();

  // Si l'utilisateur n'est pas connecté, afficher le bouton de connexion
  if (!token) {
    return (
      <Button
        onClick={handleLogin}
        variant="outline"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Connexion...
          </>
        ) : (
          "Se connecter"
        )}
      </Button>
    );
  }

  // Si l'utilisateur est connecté, afficher l'avatar avec popover
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="flex items-center space-x-2 h-10 px-3">
          <Avatar className="h-6 w-6">
            {username ? (
              <>
                <AvatarImage
                  src={`https://skins.nationsglory.fr/face/${username}/15`}
                  alt={`Avatar de ${username}`}
                />
                <AvatarFallback>
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </>
            ) : (
              <AvatarFallback>
                <User className="h-4 w-4" />
              </AvatarFallback>
            )}
          </Avatar>
          {username && (
            <span className="text-sm font-medium">{username}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56" align="end">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3 p-2">
            {username ? (
              <>
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={`https://skins.nationsglory.fr/face/${username}/15`}
                    alt={`Avatar de ${username}`}
                  />
                  <AvatarFallback>
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{username}</p>
                  <p className="text-xs text-muted-foreground">Connecté</p>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <p className="text-sm font-medium">Utilisateur</p>
              </div>
            )}
          </div>
          <hr className="my-1" />
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={() => logOut()}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Se déconnecter
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}