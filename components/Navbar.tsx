"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChefHat } from "lucide-react";
import GlassSurface from "./GlassSurface";

export default function Navbar() {
    const { scrollY } = useScroll();

    // Show navbar when scrolled past 250px
    const navbarOpacity = useTransform(scrollY, [250, 350], [0, 1]);
    const navbarY = useTransform(scrollY, [250, 350], [-100, 0]);

    // Title scale that grows from hero
    const titleScale = useTransform(scrollY, [250, 350], [0.5, 1]);

    return (
        <motion.nav
            style={{
                opacity: navbarOpacity,
                y: navbarY,
            }}
            className="fixed top-8 left-1/2 z-50 pointer-events-none"
        >
            <div className="-translate-x-1/2 flex justify-center">
                {/* Liquid Glass pill container - iOS 26 style */}
                <GlassSurface
                    width="auto"
                    height="auto"
                    borderRadius={50}
                    brightness={98}
                    opacity={0.95}
                    backgroundOpacity={0.83}
                    saturation={1.3}
                    blur={25}
                    className="px-8 py-4 pointer-events-auto shadow-lg backdrop-blur-xl"
                >
                    <div className="flex items-center gap-6">
                        {/* Logo icon */}
                        <motion.div
                            style={{ scale: titleScale }}
                            className="flex items-center justify-center"
                        >
                            <ChefHat className="w-6 h-6 text-orange" strokeWidth={2.5} />
                        </motion.div>

                        {/* Brand name */}
                        <motion.h2
                            style={{ scale: titleScale }}
                            className="text-2xl font-black text-charcoal tracking-tight"
                        >
                            RECIPEL
                        </motion.h2>

                        {/* Navigation links */}
                        <div className="flex items-center gap-6 ml-4">
                            <NavLink href="#recipes">Recipes</NavLink>
                            <NavLink href="#about">About</NavLink>
                            <NavLink href="#contact">Contact</NavLink>
                        </div>
                    </div>
                </GlassSurface>
            </div>
        </motion.nav>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <a
            href={href}
            className="text-charcoal/70 hover:text-orange font-medium transition-colors duration-200 text-sm"
        >
            {children}
        </a>
    );
}
