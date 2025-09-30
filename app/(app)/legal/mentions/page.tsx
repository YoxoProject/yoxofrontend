import {Typography} from "@/components/ui/typography";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Mentions légales",
    description: "Mentions légales et politique de confidentialité du site Yoxo",
};

export default function MentionsLegalesPage() {
    return (
        <div className="container mx-auto max-w-5xl px-4 py-8">
            <Typography variant="h1" className="mb-8">
                Mentions légales
            </Typography>

            {/* Éditeur du site */}
            <section className="mb-8">
                <Typography variant="h2" className="mb-4">
                    1. Éditeur du site
                </Typography>
                <Typography variant="p" className="mb-2">
                    Le site Yoxo est édité par :
                </Typography>
                <ul className="ml-6 list-disc space-y-1">
                    <li>
                        <Typography variant="p">
                            <strong>Nom :</strong> Romaindu35
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="p">
                            <strong>Email :</strong>{" "}
                            <Link
                                href="mailto:contact@romaindu35.fr"
                                className="text-primary hover:underline"
                            >
                                contact@romaindu35.fr
                            </Link>
                        </Typography>
                    </li>
                </ul>
                <Typography variant="p" className="mt-4">
                    <strong>Directeur de publication :</strong> Romaindu35
                </Typography>
            </section>

            {/* Hébergement */}
            <section className="mb-8">
                <Typography variant="h2" className="mb-4">
                    2. Hébergement
                </Typography>
                <Typography variant="p" className="mb-4">
                    Le site Yoxo utilise plusieurs services d&apos;hébergement :
                </Typography>

                <div className="grid gap-4 md:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">Site web</CardTitle>
                            <CardDescription>Vercel Inc.</CardDescription>
                        </CardHeader>
                        <CardContent className="text-sm space-y-1">
                            <p>340 S Lemon Ave #4133</p>
                            <p>Walnut, CA 91789, États-Unis</p>
                            <Link
                                href="https://vercel.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline inline-block mt-2"
                            >
                                vercel.com
                            </Link>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">Données (API)</CardTitle>
                            <CardDescription>OVH SAS</CardDescription>
                        </CardHeader>
                        <CardContent className="text-sm space-y-1">
                            <p>2 rue Kellermann</p>
                            <p>59100 Roubaix, France</p>
                            <p>Tél: 09 55 00 66 33</p>
                            <p className="text-muted-foreground">Datacenter: Gravelines</p>
                            <Link
                                href="https://www.ovhcloud.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline inline-block mt-2"
                            >
                                ovhcloud.com
                            </Link>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">Archives</CardTitle>
                            <CardDescription>AWS EMEA SARL</CardDescription>
                        </CardHeader>
                        <CardContent className="text-sm space-y-1">
                            <p>38 Avenue John F. Kennedy</p>
                            <p>L-1855 Luxembourg</p>
                            <p className="text-muted-foreground">Région: eu-west-3 (Paris)</p>
                            <Link
                                href="https://aws.amazon.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline inline-block mt-2"
                            >
                                aws.amazon.com
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Protection des données personnelles */}
            <section className="mb-8">
                <Typography variant="h2" className="mb-4">
                    3. Protection des données personnelles (RGPD)
                </Typography>

                <Card className="mb-4">
                    <CardHeader>
                        <CardTitle className="text-lg">Responsable du traitement</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Typography variant="p">
                            Romaindu35 -{" "}
                            <Link
                                href="mailto:contact@romaindu35.fr"
                                className="text-primary hover:underline"
                            >
                                contact@romaindu35.fr
                            </Link>
                        </Typography>
                    </CardContent>
                </Card>

                <div className="grid gap-4 md:grid-cols-2 mb-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Données collectées</CardTitle>
                            <CardDescription>Informations traitées par le site</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div>
                                <Typography variant="p" className="font-semibold">
                                    Nom d&apos;utilisateur
                                </Typography>
                                <Typography variant="muted" className="text-sm">
                                    Collecté lors de l&apos;authentification OAuth2
                                </Typography>
                            </div>
                            <div>
                                <Typography variant="p" className="font-semibold">
                                    Adresse IP
                                </Typography>
                                <Typography variant="muted" className="text-sm">
                                    Collectée automatiquement lors de la connexion
                                </Typography>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Finalités & Durée</CardTitle>
                            <CardDescription>Utilisation et conservation</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div>
                                <Typography variant="p" className="font-semibold text-sm">
                                    Finalités :
                                </Typography>
                                <ul className="ml-4 mt-1 list-disc text-sm space-y-1">
                                    <li>Gestion des sessions d&apos;authentification</li>
                                    <li>Sécurisation de l&apos;accès au site</li>
                                </ul>
                            </div>
                            <div>
                                <Typography variant="p" className="font-semibold text-sm">
                                    Durée de conservation :
                                </Typography>
                                <ul className="ml-4 mt-1 list-disc text-sm space-y-1">
                                    <li><strong>IP :</strong> Durée de la session uniquement</li>
                                    <li><strong>Username :</strong> Indéfiniment (sauf demande de suppression)</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Card className="mb-4">
                    <CardHeader>
                        <CardTitle className="text-lg">Destinataires des données</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Typography variant="p">
                            Les données collectées sont destinées exclusivement à Romaindu35, éditeur du site. Elles ne
                            sont ni vendues, ni partagées avec des tiers, à l&apos;exception des hébergeurs techniques
                            (Vercel, OVH, AWS) dans le cadre de leur mission d&apos;hébergement.
                        </Typography>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Vos droits RGPD</CardTitle>
                        <CardDescription>Conformément au RGPD et à la loi Informatique et Libertés</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-3 md:grid-cols-2">
                            <div className="space-y-2">
                                <div>
                                    <Typography variant="p" className="font-semibold text-sm">
                                        Droit d&apos;accès
                                    </Typography>
                                    <Typography variant="muted" className="text-xs">
                                        Obtenir une copie de vos données
                                    </Typography>
                                </div>
                                <div>
                                    <Typography variant="p" className="font-semibold text-sm">
                                        Droit de rectification
                                    </Typography>
                                    <Typography variant="muted" className="text-xs">
                                        Corriger des données inexactes
                                    </Typography>
                                </div>
                                <div>
                                    <Typography variant="p" className="font-semibold text-sm">
                                        Droit à l&apos;effacement
                                    </Typography>
                                    <Typography variant="muted" className="text-xs">
                                        Demander la suppression de vos données
                                    </Typography>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div>
                                    <Typography variant="p" className="font-semibold text-sm">
                                        Droit d&apos;opposition
                                    </Typography>
                                    <Typography variant="muted" className="text-xs">
                                        Vous opposer au traitement de vos données
                                    </Typography>
                                </div>
                                <div>
                                    <Typography variant="p" className="font-semibold text-sm">
                                        Droit à la portabilité
                                    </Typography>
                                    <Typography variant="muted" className="text-xs">
                                        Récupérer vos données dans un format structuré
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 p-3 bg-muted rounded-md">
                            <Typography variant="p" className="text-sm">
                                Pour exercer ces droits :{" "}
                                <Link
                                    href="mailto:contact@romaindu35.fr"
                                    className="text-primary hover:underline font-semibold"
                                >
                                    contact@romaindu35.fr
                                </Link>
                            </Typography>
                            <Typography variant="muted" className="text-xs mt-1">
                                Vous pouvez également introduire une réclamation auprès de la{" "}
                                <Link
                                    href="https://www.cnil.fr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline"
                                >
                                    CNIL
                                </Link>
                            </Typography>
                        </div>
                    </CardContent>
                </Card>
            </section>

            {/* Cookies et traceurs */}
            <section className="mb-8">
                <Typography variant="h2" className="mb-4">
                    4. Cookies et traceurs
                </Typography>
                <Typography variant="p" className="mb-4">
                    Le site Yoxo utilise des cookies et autres traceurs pour son fonctionnement et l&apos;analyse de son
                    audience.
                </Typography>

                <div className="grid gap-4 md:grid-cols-2 mb-4">
                    <Card className="border-green-500/50">
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                                <span className="flex h-2 w-2 rounded-full bg-green-500"/>
                                Cookies strictement nécessaires
                            </CardTitle>
                            <CardDescription>Authentification (OAuth2 + JWT)</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2 flex flex-col justify-between h-full">
                            <Typography variant="p" className="text-sm">
                                Ces cookies sont <strong>indispensables</strong> au fonctionnement du site. Ils
                                permettent la gestion de votre session d&apos;authentification.
                            </Typography>
                            <div className="p-2 bg-green-50 dark:bg-green-950/20 rounded text-xs">
                                <strong>⚠️ Pas de consentement requis</strong> : strictement nécessaires au service
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-blue-500/50">
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                                <span className="flex h-2 w-2 rounded-full bg-blue-500"/>
                                Cookies analytiques
                            </CardTitle>
                            <CardDescription>PostHog Cloud EU (Francfort, Allemagne)</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <Typography variant="p" className="text-sm mb-2">
                                Analyse statistique de l&apos;audience pour :
                            </Typography>
                            <ul className="ml-4 list-disc text-sm space-y-1">
                                <li>Comprendre l&apos;utilisation du site</li>
                                <li>Améliorer l&apos;expérience utilisateur</li>
                                <li>Mesurer la performance</li>
                            </ul>
                            <div className="p-2 bg-blue-50 dark:bg-blue-950/20 rounded text-xs">
                                <strong>✓ Consentement requis</strong> : vous pouvez accepter ou refuser via le bandeau
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Gestion de vos préférences</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Typography variant="p" className="text-sm">
                            Vous pouvez à tout moment modifier vos préférences en matière de cookies ou retirer votre
                            consentement. Vous pouvez également configurer votre navigateur pour refuser les cookies.
                        </Typography>
                        <Typography variant="muted" className="text-xs mt-2">
                            Note : Le refus des cookies d&apos;authentification empêchera l&apos;utilisation des
                            fonctionnalités nécessitant une connexion.
                        </Typography>
                    </CardContent>
                </Card>
            </section>

            {/* Propriété intellectuelle */}
            <section className="mb-8">
                <Typography variant="h2" className="mb-4">
                    5. Propriété intellectuelle
                </Typography>
                <Typography variant="p" className="mb-4">
                    Le site Yoxo et l&apos;ensemble de son contenu (textes, images, logos, icônes, vidéos, etc.) sont la
                    propriété exclusive de leurs auteurs respectifs et sont protégés par les lois relatives à la
                    propriété intellectuelle.
                </Typography>
                <Typography variant="p" className="mb-4">
                    <strong>Illustrations NationsGlory :</strong> Une partie des illustrations présentes sur ce site
                    proviennent du serveur Minecraft NationsGlory (
                    <Link
                        href="https://nationsglory.fr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                    >
                        nationsglory.fr
                    </Link>
                    ). Ces illustrations restent la propriété de leurs auteurs respectifs.
                </Typography>
                <Typography variant="p">
                    Toute reproduction, distribution, modification ou utilisation des contenus du site, sans
                    autorisation préalable et écrite, est strictement interdite et peut donner lieu à des poursuites
                    judiciaires.
                </Typography>
            </section>

            {/* Limitation de responsabilité */}
            <section className="mb-8">
                <Typography variant="h2" className="mb-4">
                    6. Limitation de responsabilité
                </Typography>
                <Typography variant="p" className="mb-4">
                    L&apos;éditeur s&apos;efforce d&apos;assurer au mieux l&apos;exactitude et la mise à jour des
                    informations diffusées sur ce site. Toutefois, il ne peut garantir l&apos;exactitude, la précision
                    ou l&apos;exhaustivité des informations mises à disposition sur le site.
                </Typography>
                <Typography variant="p" className="mb-4">
                    L&apos;éditeur ne pourra être tenu responsable des dommages directs ou indirects résultant de
                    l&apos;utilisation du site ou de l&apos;impossibilité d&apos;y accéder, notamment en cas
                    d&apos;interruption, de dysfonctionnement, de retard ou de blocage.
                </Typography>
                <Typography variant="p">
                    Le site peut contenir des liens hypertextes vers d&apos;autres sites. L&apos;éditeur n&apos;exerce
                    aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
                </Typography>
            </section>

            {/* Loi applicable */}
            <section className="mb-8">
                <Typography variant="h2" className="mb-4">
                    7. Loi applicable
                </Typography>
                <Typography variant="p">
                    Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut
                    d&apos;accord amiable, le litige sera porté devant les tribunaux français conformément aux règles de
                    compétence en vigueur.
                </Typography>
            </section>

            {/* Date de mise à jour */}
            <section className="mb-8">
                <Typography variant="muted" className="text-sm">
                    Dernière mise à jour : {new Date("2025/09/29").toLocaleDateString("fr-FR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                })}
                </Typography>
            </section>
        </div>
    );
}