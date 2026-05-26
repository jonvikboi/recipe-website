"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import CurvedLoop from "@/components/CurvedLoop";
import Image from "next/image";

export default function Hero() {
    const { scrollY } = useScroll();

    // Subtle parallax for the main content
    const y1 = useTransform(scrollY, [0, 500], [0, -100]);
    const y2 = useTransform(scrollY, [0, 500], [0, -50]);
    const opacity = useTransform(scrollY, [300, 500], [1, 0]);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-cream flex items-center">
            {/* Background Texture / Negative Space */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(194, 164, 120, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(91, 105, 85, 0.12) 0%, transparent 50%)' }} />

            {/* Decorative Spinning Plate */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.45, rotate: 360 }}
                transition={{ 
                    opacity: { duration: 1.5, ease: "easeOut" },
                    rotate: { duration: 100, repeat: Infinity, ease: "linear" } 
                }}
                className="absolute -top-[5%] -right-[5%] w-[35vh] h-[35vh] sm:w-[45vh] sm:h-[45vh] lg:w-[550px] lg:h-[550px] pointer-events-none z-0 mix-blend-multiply grayscale sepia hue-rotate-15 contrast-[1.1]"
                style={{ y: y2 }}
            >
                <Image 
                    src="/images/plate.png" 
                    alt="Decorative plate" 
                    fill 
                    className="object-contain" 
                    priority
                />
            </motion.div>

            <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 relative z-10 grid grid-cols-12 gap-6 h-full items-center -mt-16 sm:-mt-24 md:-mt-32">
                
                {/* Left Column - Massive Serif Typography */}
                <motion.div 
                    style={{ y: y1, opacity }}
                    className="col-span-12 md:col-span-8 flex flex-col justify-center h-full relative"
                >
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {/* Sacred Nest / Sun Motif */}
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-8 h-8 rounded-full border border-gold/60 flex items-center justify-center relative">
                                <div className="w-4 h-4 rounded-full bg-gold/25 animate-pulse absolute" />
                                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                            </div>
                            <span className="text-gold text-xs uppercase tracking-[0.3em] font-serif">
                                Sanctuary of Nourishment
                            </span>
                        </div>
                        
                        <h1 className="text-[5rem] sm:text-[8rem] md:text-[10rem] lg:text-[14rem] font-serif text-charcoal leading-[0.85] tracking-tighter ml-[-0.5rem]">
                            MANNA NEST
                        </h1>
                        <p className="mt-8 text-lg sm:text-xl md:text-2xl font-light text-charcoal/60 tracking-wider max-w-xl">
                            Heavenly sustenance, gathered and shared. Discover a sanctuary of recipes designed to nourish both body and spirit.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Right Column - Asymmetric Vertical Tension */}
                <motion.div 
                    style={{ y: y2, opacity }}
                    className="hidden md:flex col-span-4 h-full flex-col justify-end pb-32 items-end"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="text-right"
                    >
                        <ul className="space-y-4 font-serif text-charcoal/40 text-sm tracking-[0.3em] uppercase">
                            <li>01 \ Gather</li>
                            <li>02 \ Nourish</li>
                            <li>03 \ Restore</li>
                        </ul>
                    </motion.div>
                </motion.div>

                {/* Bottom Ticker - Very Subtle */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="absolute bottom-10 left-0 w-full opacity-35 mix-blend-multiply"
                >
                    <div 
                        className="h-24 w-full flex items-center overflow-hidden pointer-events-none"
                        style={{ maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)" }}
                    >
                        <CurvedLoop
                            marqueeText="Sanctuary for the Soul · Sacred Earth Harvest · Gathering Around the Hearth · Heavenly Sustenance · "
                            speed={1}
                            curveAmount={0}
                            interactive={false}
                            className="fill-charcoal"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
