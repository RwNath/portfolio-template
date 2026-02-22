import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import QueryClientProvider from "@/components/providers/QueryClientProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Portfolio",
    description: `Hi ! I'm ${DATA.name}, welcome to my portfolio where I share my projects.`, // Feel free to edit this
};

export const viewport: Viewport = { themeColor: "#008020" };

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn(inter.className, "dark")}>
                <QueryClientProvider>
                    <TooltipProvider>
                        {children}
                        <Navbar />
                    </TooltipProvider>
                </QueryClientProvider>
            </body>
        </html>
    );
}
