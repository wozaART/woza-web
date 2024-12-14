"use client";

import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";
import React, { ReactNode } from "react";

interface Props {
    children?: ReactNode
}

export const AuthProvider = ({ children }: Props) => {
    return <KindeProvider>{children}</KindeProvider>;
};
