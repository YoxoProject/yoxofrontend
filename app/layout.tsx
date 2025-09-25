import type {Metadata} from "next";
import "./globals.css";
import {openGraphMetadata, SiteConfig} from "@/lib/site-config";
import {cn} from "@/lib/utils";
import {TailwindIndicator} from "@/components/utils/TailwindIndicator";
import {Providers} from "./Providers";
import {PropsWithChildren} from "react";
import {Header} from "@/components/layout/Header";
import {Footer} from "@/components/layout/Footer";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.yoxo.software"),
    title: {
        template: 'Yoxo - %s',
        default: SiteConfig.title,
    },
    description: SiteConfig.description,
    keywords: ['Yoxo', 'Yoxo software', 'gameplay', 'NationsGlory', 'earthng', 'minecraft', 'terre', 'mods', 'java', 'software', 'serveur', 'server'],
    creator: 'Romaindu35',
    openGraph: {
        ...openGraphMetadata,
        title: SiteConfig.title,
        description: SiteConfig.description,
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({children}: PropsWithChildren) {
    return (
        <>
            <html lang="fr" className="h-full" suppressHydrationWarning>
            <head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#ffc40d"/>
                <meta name="theme-color" content="#ffffff"/>
            </head>
            <body
                className={cn(
                    `h-full bg-background font-sans antialiased`,
                )}
            >
            <Providers>
                <div className="relative flex size-full min-h-screen flex-col">
                    <Header/>
                    <div className="flex-1 max-w-3xl flex-wrap w-full flex gap-4 m-auto px-4 mt-4">{children}</div>
                    <Footer/>
                </div>
                <TailwindIndicator/>
            </Providers>
            </body>
            </html>
        </>
    );
}