import { Button } from "@/components/ui/button";
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function NavbarButtons() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    return (
        <div className="flex items-center gap-x-2 ms-auto md:col-span-3">
            {user ? (
                <Button asChild>
                    <LogoutLink>Logout</LogoutLink>
                </Button>
            ) : (
                <div className="flex items-center gap-x-2">
                    <Button asChild>
                        <LoginLink>Login</LoginLink>
                    </Button>
                    <Button variant="outline" asChild>
                        <RegisterLink>Register</RegisterLink>
                    </Button>
                </div >
            )}
        </div >
    );
}
