"use client";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { Menu } from "lucide-react";
import Link from "next/link";

export function NavbarLogo() {
    const { toggleSidebar } = useSidebar();

    return (
        <div className="flex items-center gap-x-2 ms-auto md:col-span-3">
            <div className="md:hidden">
                <Button className="text-primary" variant="outline" size="icon" onClick={toggleSidebar}><Menu /></Button>
            </div>
            <Link href="/">
                <h1 className="text-2xl font-semibold">Woza <span className="text-primary">ART</span></h1>
            </Link>
        </div>
    );
}
