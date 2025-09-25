export const SiteConfig = {
    title: 'Yoxo',
    description: 'Yoxo est une collection de système ayant pour but d\'améliorer son gameplay sur le serveur Minecraft NationsGlory',
} as const;

export const openGraphMetadata = {
    url: 'https://www.yoxo.software/',
    siteName: SiteConfig.title,
    images: [
        {
            url: 'images/yoxo_logo_128x128.png',
            width: 128,
            height: 128,
            alt: "Yoxo logo",
        }
    ],
    locale: 'fr_FR',
    type: 'website',
}