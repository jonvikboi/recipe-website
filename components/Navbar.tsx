"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChefHat } from "lucide-react";
import GlassSurface from "./GlassSurface";

export default function Navbar() {
    const { scrollY } = useScroll();

    // Show navbar when scrolling past the hero section (approx 500px)
    const navbarOpacity = useTransform(scrollY, [500, 600], [0, 1]);
    const navbarY = useTransform(scrollY, [500, 600], [-100, 0]);

    // Title scale that shrinks slightly as you scroll
    const titleScale = useTransform(scrollY, [0, 150], [1, 0.9]);

    return (
        <motion.nav
            style={{
                opacity: navbarOpacity,
                y: navbarY,
            }}
            className="fixed top-8 left-1/2 z-50 pointer-events-none"
        >
            <div className="-translate-x-1/2 flex justify-center">
                {/* Liquid Glass pill container - Restored style */}
                <GlassSurface
                    width="auto"
                    height="auto"
                    borderRadius={50}
                    brightness={98}
                    opacity={0.95}
                    backgroundOpacity={0.83}
                    saturation={1.3}
                    blur={25}
                    className="px-6 md:px-10 py-3 md:py-4 pointer-events-auto shadow-lg backdrop-blur-xl border border-charcoal/10"
                >
                    <div className="flex items-center gap-6 md:gap-8">
                        <div className="flex items-center gap-3">
                            {/* Minimalist Logo Mark */}
                            <motion.div
                                style={{ scale: titleScale }}
                                className="w-2 h-2 sm:w-3 sm:h-3 bg-orange mt-1 hidden sm:block"
                            />

                            {/* Brand name */}
                            <motion.h2
                                style={{ scale: titleScale }}
                                className="text-xl sm:text-2xl font-serif text-charcoal tracking-tight"
                            >
                                RECIPEL
                            </motion.h2>
                        </div>

                        {/* Navigation links - hidden on mobile */}
                        <div className="hidden md:flex items-center gap-6 pl-4 md:pl-6 border-l border-charcoal/10">
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
            className="text-xs uppercase tracking-[0.2em] text-charcoal/60 hover:text-orange transition-colors duration-300 relative group"
        >
            {children}
            <span className="absolute -bottom-1 left-0 w-full h-px bg-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </a>
    );
}
