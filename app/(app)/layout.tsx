import {PropsWithChildren} from "react";
import {Header} from "@/components/layout/Header";
import {Footer} from "@/components/layout/Footer";

/**
 * Layout pour les pages de l'application principale
 * Inclut le Header et le Footer
 */
export default function AppLayout({children}: PropsWithChildren) {
    return (
        <div className="relative flex size-full min-h-screen flex-col">
            <Header/>
            <div className="flex-1 max-w-3xl flex-wrap w-full flex gap-4 m-auto px-4 mt-4">{children}</div>
            <Footer/>
        </div>
    );
}