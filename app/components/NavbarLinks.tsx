"use client";

import { cn } from "@/lib/utils";
import Link from "next/link"
import { usePathname } from "next/navigation"

export const navbarLinks = [
    {
        id: 0,
        name: "Home",
        href: "/",
    },
    {
        id: 1,
        name: "About",
        href: "#",
    },
    {
        id: 2,
        name: "Contact",
        href: "#",
    },
];

export function NavbarLinks() {
    const location = usePathname();
    return (
        <div className="hidden md:flex justify-center items-center col-span-6 gap-x-2">
            {navbarLinks.map((link) => (
                <Link key={link.id} href={link.href} className={cn(
                    location === link.href ? "bg-muted text-red-500" : "hover:bg-muted hover:bg-opacity-75 text-gray-500", "group flex items-center px-2 py-2 font-medium rounded-md"
                )}>
                    {link.name}
                </Link>
            ))}
        </div>
    );
}