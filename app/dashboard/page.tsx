'use client';

import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";

export default function Dashboard() {
    const {
        user,
        permissions,
        organization,
        userOrganizations,
        accessToken,
        isAuthenticated,
        error
    } = useKindeAuth();

    return (
        <div className="pt-20">
            <div className="mb-8">
                <h4 className="text-2xl font-bold dark:text-white mb-2">User</h4>
                <pre className="p-4 rounded bg-slate-950 text-green-300">
                    {JSON.stringify(user, null, 2)}
                </pre>
            </div>
            <div className="mb-8">
                <h4 className="text-2xl font-bold dark:text-white mb-2">Permissions</h4>
                <pre className="p-4 rounded bg-slate-950 text-green-300">
                    {JSON.stringify(permissions, null, 2)}
                </pre>
            </div>
            <div className="mb-8">
                <h4 className="text-2xl font-bold dark:text-white mb-2">Organisation</h4>
                <pre className="p-4 rounded bg-slate-950 text-green-300">
                    {JSON.stringify(organization, null, 2)}
                </pre>
            </div>
            <div className="mb-8">
                <h4 className="text-2xl font-bold dark:text-white mb-2">User Organisations</h4>
                <pre className="p-4 rounded bg-slate-950 text-green-300">
                    {JSON.stringify(userOrganizations, null, 2)}
                </pre>
            </div>
            <div className="mb-8">
                <h4 className="text-2xl font-bold dark:text-white mb-2">Access Token</h4>
                <pre className="p-4 rounded bg-slate-950 text-green-300">
                    {JSON.stringify(accessToken, null, 2)}
                </pre>
            </div>
            <div className="mb-8">
                <h4 className="text-2xl font-bold dark:text-white mb-2">Authenticated</h4>
                <pre className="p-4 rounded bg-slate-950 text-green-300">
                    {JSON.stringify(isAuthenticated, null, 2)}
                </pre>
            </div>
            <div className="mb-8">
                <h4 className="text-2xl font-bold dark:text-white mb-2">Error</h4>
                <pre className="p-4 rounded bg-slate-950 text-green-300">
                    {JSON.stringify(error, null, 2)}
                </pre>
            </div>
        </div>
    );
}
