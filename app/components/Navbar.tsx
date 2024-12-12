"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';
import { NavbarLinks } from "./NavbarLinks";
import { useSidebar } from "@/components/ui/sidebar"

export function Navbar() {
    const { toggleSidebar } = useSidebar();

    return (
        <nav className="relative max-w-7xl w-full flex md:grid md:grid-cols-12 items-center px-4 md:px-8 py-7">
            <div className="flex items-center gap-x-2 ms-auto md:col-span-3">
                <div className="md:hidden">
                    <Button className="text-primary" variant="outline" size="icon" onClick={toggleSidebar}><Menu /></Button>
                </div>
                <Link href="/">
                    <h1 className="text-2xl font-semibold">Woza <span className="text-primary">ART</span></h1>
                </Link>
            </div>
            <NavbarLinks />
            <div className="flex items-center gap-x-2 ms-auto md:col-span-3">
                <Button>Login</Button>
                <Button variant="outline">Register</Button>
            </div>
        </nav>
    );
}