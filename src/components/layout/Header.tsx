import Link from "next/link";
import Image from "next/image";
import {SiteConfig} from "@/lib/site-config";
import {Typography} from "@/components/ui/typography";
import {ThemeToggle} from "@/components/theme/ThemeToggle";
import {UserButton} from "@/components/auth/UserButton";

export function Header() {
    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background">
            <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                <div className="flex items-center gap-2">
                    <Image src="/images/yoxo_logo.png" width={50} height={35} alt="app logo" className={"rounded"}/>
                    <Typography variant="h3" as={Link} href="/">
                        {SiteConfig.title}
                    </Typography>
                </div>
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <UserButton />
                    <ThemeToggle />
                </div>
            </div>
        </header>
    )
}