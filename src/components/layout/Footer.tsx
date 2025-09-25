import Image from "next/image";
import {Typography} from "../ui/typography";
import Link from "next/link";
import {SiteConfig} from "@/lib/site-config";

export function Footer() {
    return (
        <footer className="w-full border-t border-border">
            <div className="m-auto w-full max-w-3xl px-2 py-4">
                <div className="flex flex-row items-start justify-between">
                    <div className="flex flex-row items-center gap-2">
                        <Image
                            className={"rounded"}
                            src="/images/yoxo_logo.png"
                            width={40}
                            height={30}
                            alt="app logo"
                        />
                        <Typography variant="base" as={Link} href="/">
                            {SiteConfig.title}
                        </Typography>
                    </div>
                    <div className="flex flex-col items-end gap-2 text-sm text-muted-foreground">
                        <Link className="hover:underline" href="/legacy/legal-notice">
                            Mentions légale
                        </Link>
                        <Link className="hover:underline" href="/legacy/cgu">
                            CGU
                        </Link>
                    </div>
                </div>
                <div className="flex w-full items-center justify-center">
                    <Typography variant="base" className="text-xs text-muted-foreground">
                        &copy; {new Date().getFullYear()} Yoxo
                    </Typography>
                </div>
            </div>
        </footer>
    )
}