import type {Metadata} from 'next';
import {Typography} from '@/components/ui/typography';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Conditions Générales d\'Utilisation',
    description: 'Conditions générales d\'utilisation du site Yoxo',
};

export default function CGUPage() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-5xl">
            <div className="space-y-8">
                {/* En-tête */}
                <div className="space-y-4">
                    <Typography variant="h1" className="text-4xl font-bold">
                        Conditions Générales d&apos;Utilisation
                    </Typography>
                    <Typography variant="muted">
                        Dernière mise à jour : {new Date("2025/09/29").toLocaleDateString('fr-FR')}
                    </Typography>
                    <Typography variant="p">
                        Les présentes Conditions Générales d&apos;Utilisation (ci-après « CGU ») régissent l&apos;utilisation du
                        site Yoxo accessible à l&apos;adresse <strong>yoxo.software</strong>.
                    </Typography>
                </div>

                {/* Section 1 - Objet */}
                <section className="space-y-4">
                    <Typography variant="h2" className="text-2xl font-semibold border-b pb-2">
                        1. Objet du service
                    </Typography>
                    <Card>
                        <CardHeader>
                            <CardTitle>Yoxo - Outils pour NationsGlory</CardTitle>
                            <CardDescription>Service gratuit d&apos;amélioration du gameplay</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <Typography variant="p">
                                Yoxo est une <strong>collection de services gratuits</strong> permettant d&apos;améliorer son
                                expérience de jeu sur <strong>NationsGlory</strong>.
                            </Typography>
                            <Typography variant="p">
                                Le service propose divers outils, calculateurs, statistiques et fonctionnalités destinés
                                aux joueurs de NationsGlory.
                            </Typography>
                            <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                                <Typography variant="p" className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                                    ℹ️ Service 100% gratuit - Aucune fonctionnalité payante
                                </Typography>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Section 2 - Acceptation des CGU */}
                <section className="space-y-4">
                    <Typography variant="h2" className="text-2xl font-semibold border-b pb-2">
                        2. Acceptation des CGU
                    </Typography>
                    <Card>
                        <CardHeader>
                            <CardTitle>Consentement requis</CardTitle>
                            <CardDescription>Acceptation à chaque connexion</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <Typography variant="p">
                                L&apos;utilisation du site Yoxo implique <strong>l&apos;acceptation pleine et entière</strong> des
                                présentes CGU.
                            </Typography>
                            <Typography variant="p">
                                Un engagement d&apos;acceptation est demandé <strong>à chaque connexion</strong> sur le site.
                            </Typography>
                            <Typography variant="p">
                                Si vous n&apos;acceptez pas ces conditions, vous ne devez pas utiliser ce service.
                            </Typography>
                        </CardContent>
                    </Card>
                </section>

                {/* Section 3 - Conditions d'accès */}
                <section className="space-y-4">
                    <Typography variant="h2" className="text-2xl font-semibold border-b pb-2">
                        3. Conditions d&apos;accès au service
                    </Typography>
                    <Card>
                        <CardHeader>
                            <CardTitle>Authentification NationsGlory</CardTitle>
                            <CardDescription>Conditions identiques au jeu NationsGlory</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <Typography variant="p">
                                Pour utiliser Yoxo, vous devez vous connecter avec votre{' '}
                                <strong>compte NationsGlory</strong>.
                            </Typography>
                            <Typography variant="p">
                                Les <strong>conditions d&apos;utilisation de NationsGlory</strong> s&apos;appliquent également à
                                l&apos;utilisation de Yoxo. Vous devez respecter les règles et restrictions imposées par
                                NationsGlory.
                            </Typography>
                            <div className="p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                                <Typography variant="p" className="text-sm font-semibold text-yellow-900 dark:text-yellow-100">
                                    ⚠️ En cas de bannissement ou suspension de votre compte NationsGlory, l&apos;accès à Yoxo
                                    sera également restreint.
                                </Typography>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Section 4 - Utilisation du service */}
                <section className="space-y-4">
                    <Typography variant="h2" className="text-2xl font-semibold border-b pb-2">
                        4. Utilisation du service et responsabilité
                    </Typography>
                    <div className="grid gap-4 md:grid-cols-2">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Compte personnel et privé</CardTitle>
                                <CardDescription>Responsabilité individuelle</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <Typography variant="p" className="text-sm">
                                    Chaque compte Yoxo est <strong>strictement personnel et privé</strong>.
                                </Typography>
                                <Typography variant="p" className="text-sm">
                                    Le <strong>partage de compte est strictement interdit</strong>.
                                </Typography>
                                <div className="p-2 bg-red-50 dark:bg-red-950/20 rounded text-xs border border-red-200 dark:border-red-800">
                                    <strong>⚠️ Responsabilité :</strong> En cas de problème, la personne propriétaire du
                                    compte sera tenue pour responsable de toutes les actions effectuées avec ce compte.
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Suspension de compte</CardTitle>
                                <CardDescription>Mesures en cas d&apos;abus</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <Typography variant="p" className="text-sm">
                                    Nous nous réservons le droit de <strong>bloquer ou suspendre tout compte</strong> en
                                    cas d&apos;abus, de violation des présentes CGU, ou d&apos;utilisation frauduleuse du service.
                                </Typography>
                                <Typography variant="p" className="text-sm">
                                    Cette décision peut être prise sans préavis ni justification détaillée.
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Section 5 - Usages interdits */}
                <section className="space-y-4">
                    <Typography variant="h2" className="text-2xl font-semibold border-b pb-2">
                        5. Usages interdits
                    </Typography>
                    <Card className="border-red-500/50">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <span className="flex h-2 w-2 rounded-full bg-red-500" />
                                Interdictions strictes
                            </CardTitle>
                            <CardDescription>Comportements prohibés</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <Typography variant="p" className="font-semibold">
                                Il est strictement interdit de :
                            </Typography>
                            <ul className="list-disc list-inside space-y-2 pl-4">
                                <li>
                                    <strong>Scraper le site web</strong> - Des APIs publiques sont prévues à cet effet
                                </li>
                                <li>
                                    <strong>Partager ou céder son compte</strong> à un tiers
                                </li>
                                <li>
                                    <strong>Tenter de contourner les mesures de sécurité</strong> du site
                                </li>
                                <li>
                                    <strong>Utiliser le service à des fins malveillantes</strong> (spam, phishing, etc.)
                                </li>
                                <li>
                                    <strong>Surcharger intentionnellement</strong> l&apos;infrastructure (attaques DDoS, requêtes
                                    massives abusives)
                                </li>
                                <li>
                                    <strong>Porter atteinte à l&apos;image</strong> de Yoxo ou NationsGlory
                                </li>
                            </ul>
                            <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 mt-4">
                                <Typography variant="p" className="text-sm font-semibold text-green-900 dark:text-green-100">
                                    ✅ Utilisation recommandée : Utilisez les APIs publiques mises à disposition pour toute
                                    intégration ou récupération de données.
                                </Typography>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Section 6 - Propriété intellectuelle */}
                <section className="space-y-4">
                    <Typography variant="h2" className="text-2xl font-semibold border-b pb-2">
                        6. Propriété intellectuelle
                    </Typography>
                    <div className="grid gap-4 md:grid-cols-3">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Code source</CardTitle>
                                <CardDescription>Open Source</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <Typography variant="p" className="text-sm">
                                    Le code source de Yoxo est <strong>public et open source</strong>.
                                </Typography>
                                <Typography variant="p" className="text-sm">
                                    Il est disponible sur GitHub :{' '}
                                    <Link
                                        href="https://github.com/YoxoProject/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary underline hover:no-underline"
                                    >
                                        github.com/YoxoProject/
                                    </Link>
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Images NationsGlory</CardTitle>
                                <CardDescription>Liens externes</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <Typography variant="p" className="text-sm">
                                    Les images provenant de <strong>NationsGlory</strong> sont directement pointées vers
                                    leurs serveurs (liens externes).
                                </Typography>
                                <Typography variant="p" className="text-sm">
                                    Yoxo ne revendique aucun droit sur ces images et reconnaît que leur propriété
                                    intellectuelle appartient à NationsGlory.
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">APIs et données</CardTitle>
                                <CardDescription>Utilisation publique</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <Typography variant="p" className="text-sm">
                                    Les données fournies par Yoxo sont <strong>utilisables par n&apos;importe qui</strong> via
                                    les APIs publiques prévues à cet effet.
                                </Typography>
                                <Typography variant="p" className="text-sm">
                                    Aucune restriction d&apos;utilisation n&apos;est imposée sur les données exposées par les APIs.
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Section 7 - Disponibilité et garanties */}
                <section className="space-y-4">
                    <Typography variant="h2" className="text-2xl font-semibold border-b pb-2">
                        7. Disponibilité du service et garanties
                    </Typography>
                    <div className="grid gap-4 md:grid-cols-2">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Disponibilité</CardTitle>
                                <CardDescription>Meilleur effort sans garantie</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <Typography variant="p" className="text-sm">
                                    Nous nous efforçons de fournir une <strong>disponibilité la plus grande possible</strong> du
                                    service.
                                </Typography>
                                <Typography variant="p" className="text-sm">
                                    L&apos;infrastructure basée sur une <strong>architecture microservices</strong> et
                                    l&apos;hébergement du frontend sur <strong>Vercel (serverless)</strong> permettent
                                    d&apos;optimiser la fiabilité.
                                </Typography>
                                <div className="p-2 bg-yellow-50 dark:bg-yellow-950/20 rounded text-xs border border-yellow-200 dark:border-yellow-800">
                                    <strong>⚠️ Aucune garantie 24/7 :</strong> Des interruptions de service peuvent survenir
                                    pour maintenance, pannes techniques ou problèmes indépendants de notre volonté.
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Exactitude des données</CardTitle>
                                <CardDescription>Données scrappées sans garantie absolue</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <Typography variant="p" className="text-sm">
                                    Yoxo utilise beaucoup de <strong>données scrappées</strong> depuis des sources externes
                                    (notamment NationsGlory).
                                </Typography>
                                <Typography variant="p" className="text-sm">
                                    Nous <strong>ne sommes pas en mesure de certifier à 100% la véracité</strong> de ces
                                    données, celles-ci étant récupérées depuis des routes pas forcément à jour.
                                </Typography>
                                <div className="p-2 bg-orange-50 dark:bg-orange-950/20 rounded text-xs border border-orange-200 dark:border-orange-800">
                                    <strong>📊 Données fournies &quot;en l&apos;état&quot; :</strong> Aucune garantie d&apos;exactitude ou de
                                    complétude n&apos;est fournie.
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Section 8 - Données et backups */}
                <section className="space-y-4">
                    <Typography variant="h2" className="text-2xl font-semibold border-b pb-2">
                        8. Conservation des données et backups
                    </Typography>
                    <Card>
                        <CardHeader>
                            <CardTitle>Archivage et sauvegardes</CardTitle>
                            <CardDescription>Effort de conservation sans garantie</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <Typography variant="p">
                                Nous essayons de faire le <strong>maximum de backups</strong> afin de conserver des
                                archives dans le temps.
                            </Typography>
                            <Typography variant="p">
                                Les archives sont stockées sur <strong>AWS (région eu-west-3)</strong> et les données
                                actives sur <strong>OVH Gravelines</strong>.
                            </Typography>
                            <div className="p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                                <Typography variant="p" className="text-sm font-semibold text-red-900 dark:text-red-100">
                                    ⚠️ Aucune garantie contre les pertes de données : Malgré nos efforts, nous ne pouvons
                                    garantir l&apos;absence de perte de données (pannes matérielles, incidents, corruptions, etc.).
                                </Typography>
                            </div>
                            <Typography variant="muted" className="text-sm">
                                En utilisant Yoxo, vous acceptez ce risque et reconnaissez que nous ne pourrons être tenus
                                responsables en cas de perte de données.
                            </Typography>
                        </CardContent>
                    </Card>
                </section>

                {/* Section 9 - Liens externes */}
                <section className="space-y-4">
                    <Typography variant="h2" className="text-2xl font-semibold border-b pb-2">
                        9. Liens externes
                    </Typography>
                    <Card>
                        <CardHeader>
                            <CardTitle>Sources de données tierces</CardTitle>
                            <CardDescription>Liens vers des sites externes</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <Typography variant="p">
                                Yoxo contient de <strong>nombreux liens vers des sites externes</strong>, notamment pour
                                citer les sources des données non récupérées directement par Yoxo.
                            </Typography>
                            <Typography variant="p">
                                Ces liens sont fournis à titre informatif. Nous ne pouvons être tenus responsables du
                                contenu, des pratiques de confidentialité ou de la disponibilité de ces sites tiers.
                            </Typography>
                            <Typography variant="muted" className="text-sm">
                                L&apos;utilisateur accède à ces sites externes sous sa propre responsabilité.
                            </Typography>
                        </CardContent>
                    </Card>
                </section>

                {/* Section 10 - Contenu utilisateur */}
                <section className="space-y-4">
                    <Typography variant="h2" className="text-2xl font-semibold border-b pb-2">
                        10. Contenu utilisateur
                    </Typography>
                    <Card>
                        <CardHeader>
                            <CardTitle>Aucune publication utilisateur</CardTitle>
                            <CardDescription>Service de consultation uniquement</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <Typography variant="p">
                                Les utilisateurs <strong>ne peuvent pas publier de contenu</strong> sur Yoxo (commentaires,
                                uploads, publications, etc.).
                            </Typography>
                            <Typography variant="p">
                                Le service est uniquement destiné à la consultation d&apos;informations et l&apos;utilisation d&apos;outils.
                            </Typography>
                        </CardContent>
                    </Card>
                </section>

                {/* Section 11 - Compte utilisateur */}
                <section className="space-y-4">
                    <Typography variant="h2" className="text-2xl font-semibold border-b pb-2">
                        11. Gestion du compte utilisateur
                    </Typography>
                    <Card>
                        <CardHeader>
                            <CardTitle>Suppression de compte</CardTitle>
                            <CardDescription>Procédure de suppression</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <Typography variant="p">
                                Les utilisateurs <strong>ne peuvent pas supprimer leur compte eux-mêmes</strong> via
                                l&apos;interface du site.
                            </Typography>
                            <Typography variant="p">
                                Pour demander la suppression de votre compte, vous devez{' '}
                                <strong>envoyer une demande explicite par email</strong> à :{' '}
                                <Link href="mailto:contact@romaindu35.fr" className="text-primary underline hover:no-underline">
                                    contact@romaindu35.fr
                                </Link>
                            </Typography>
                            <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                                <Typography variant="p" className="text-sm font-semibold">
                                    🗑️ Suppression immédiate : Une fois votre compte supprimé, toutes vos données
                                    personnelles sont effacées immédiatement et définitivement.
                                </Typography>
                            </div>
                            <Typography variant="muted" className="text-sm">
                                Conformément au RGPD, vous disposez d&apos;un droit à l&apos;effacement de vos données. Voir nos{' '}
                                <Link href="/legal/mentions" className="text-primary underline hover:no-underline">
                                    Mentions légales
                                </Link>{' '}
                                pour plus d&apos;informations sur vos droits.
                            </Typography>
                        </CardContent>
                    </Card>
                </section>

                {/* Section 12 - Modifications des CGU */}
                <section className="space-y-4">
                    <Typography variant="h2" className="text-2xl font-semibold border-b pb-2">
                        12. Modifications des CGU
                    </Typography>
                    <Card>
                        <CardHeader>
                            <CardTitle>Évolution des conditions</CardTitle>
                            <CardDescription>Acceptation à chaque connexion</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <Typography variant="p">
                                Nous nous réservons le droit de <strong>modifier les présentes CGU à tout moment</strong>.
                            </Typography>
                            <Typography variant="p">
                                Bien que nous n&apos;ayons pas de moyen automatique de prévenir les utilisateurs, un{' '}
                                <strong>engagement d&apos;acceptation est demandé à chaque connexion</strong> sur le site.
                            </Typography>
                            <Typography variant="p">
                                Il vous appartient de consulter régulièrement cette page pour prendre connaissance des
                                éventuelles modifications.
                            </Typography>
                            <div className="p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                                <Typography variant="p" className="text-sm font-semibold text-yellow-900 dark:text-yellow-100">
                                    📅 Date de dernière mise à jour affichée en haut de cette page
                                </Typography>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Section 13 - Droit applicable */}
                <section className="space-y-4">
                    <Typography variant="h2" className="text-2xl font-semibold border-b pb-2">
                        13. Droit applicable et résolution des litiges
                    </Typography>
                    <Card>
                        <CardHeader>
                            <CardTitle>Juridiction</CardTitle>
                            <CardDescription>Loi française applicable</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <Typography variant="p">
                                Les présentes CGU sont régies par le <strong>droit français</strong>.
                            </Typography>
                            <Typography variant="p">
                                En cas de litige relatif à l&apos;interprétation ou l&apos;exécution des présentes, les parties
                                s&apos;efforceront de trouver une <strong>solution amiable</strong>.
                            </Typography>
                            <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                                <Typography variant="p" className="text-sm font-semibold">
                                    ℹ️ Aucun recours juridique prévu : Yoxo est un service gratuit fourni &quot;tel quel&quot;. Nous ne
                                    prévoyons pas de recours juridique en cas de différend.
                                </Typography>
                            </div>
                            <Typography variant="muted" className="text-sm">
                                Pour toute question ou réclamation, contactez-nous à :{' '}
                                <Link href="mailto:contact@romaindu35.fr" className="text-primary underline hover:no-underline">
                                    contact@romaindu35.fr
                                </Link>
                            </Typography>
                        </CardContent>
                    </Card>
                </section>

                {/* Section 14 - Contact */}
                <section className="space-y-4">
                    <Typography variant="h2" className="text-2xl font-semibold border-b pb-2">
                        14. Contact
                    </Typography>
                    <Card>
                        <CardHeader>
                            <CardTitle>Nous contacter</CardTitle>
                            <CardDescription>Pour toute question relative aux CGU</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <Typography variant="p">
                                Pour toute question, demande ou réclamation concernant ces Conditions Générales d&apos;Utilisation,
                                vous pouvez nous contacter :
                            </Typography>
                            <div className="space-y-2">
                                <div className="flex items-start gap-2">
                                    <strong className="min-w-[100px]">Éditeur :</strong>
                                    <span>Romaindu35</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <strong className="min-w-[100px]">Email :</strong>
                                    <Link
                                        href="mailto:contact@romaindu35.fr"
                                        className="text-primary underline hover:no-underline"
                                    >
                                        contact@romaindu35.fr
                                    </Link>
                                </div>
                                <div className="flex items-start gap-2">
                                    <strong className="min-w-[100px]">Site web :</strong>
                                    <Link href="/" className="text-primary underline hover:no-underline">
                                        yoxo.software
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </div>
    );
}