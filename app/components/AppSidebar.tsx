"use client";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Menu items.
export const menuItems = [
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

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const location = usePathname();

    return (
        <Sidebar variant="floating" {...props}>
            <SidebarContent>
                <div className="mt-5 flex px-2 space-y-1 flex-col">
                    <SidebarGroup>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {menuItems.map((item) => (
                                    <SidebarMenuItem key={item.name}>
                                        <SidebarMenuButton asChild>
                                            <Link key={item.id} href={item.href} className={cn(
                                                location === item.href ? "bg-muted text-red-500" : "hover:bg-muted hover:bg-opacity-75 text-gray-500", "group flex items-center px-2 py-2 font-medium rounded-md"
                                            )}>
                                                {item.name}
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </div>
            </SidebarContent>
        </Sidebar>
    )
}
