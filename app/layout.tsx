import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-serif",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Recipel - Culinary Excellence",
    description: "Discover and create amazing recipes with our curated collection",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
            <body className="font-sans antialiased bg-cream text-charcoal">
                {children}
            </body>
        </html>
    );
}
