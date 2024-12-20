import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppSidebar } from "./components/AppSidebar";
import { Navbar } from "./components/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AuthProvider } from "./auth/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <SidebarProvider defaultOpen={false}>
            <AppSidebar />
            <main className="w-full overflow-x-auto">
              <div>
                <Navbar />
              </div>
              {children}
            </main>
          </SidebarProvider>
        </body>
      </html>
    </AuthProvider>
  );
}
