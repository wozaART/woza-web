import { NavbarLinks } from "./NavbarLinks";
import { NavbarButtons } from "./NavbarButtons";
import { NavbarLogo } from "./NavbarLogo";

export async function Navbar() {
    return (
        <nav className="relative max-w-7xl w-full flex md:grid md:grid-cols-12 items-center px-4 md:px-8 py-7">
            <NavbarLogo />
            <NavbarLinks />
            <NavbarButtons />
        </nav >
    );
}
