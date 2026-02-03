"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { springConfig } from "@/lib/animation-config";
import CurvedLoop from "@/components/CurvedLoop";

export default function Hero() {
    const { scrollY } = useScroll();

    // Transform values for title shrink and movement
    const titleScale = useTransform(scrollY, [0, 300], [1, 0.3]);
    const titleY = useTransform(scrollY, [0, 300], [0, -250]);
    const titleOpacity = useTransform(scrollY, [250, 300], [1, 0]);
    const taglineOpacity = useTransform(scrollY, [0, 150], [1, 0]);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-cream via-orange/10 to-cream" />

            <div className="relative z-10 text-center px-4 w-full">
                {/* Massive RECIPEL title */}
                <motion.h1
                    style={{
                        scale: titleScale,
                        y: titleY,
                        opacity: titleOpacity,
                    }}
                    className="text-[12rem] md:text-[18rem] lg:text-[24rem] font-black text-charcoal tracking-tighter leading-none select-none mb-8"
                >
                    RECIPEL
                </motion.h1>

                {/* Curved Loop Animation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ opacity: taglineOpacity }}
                    className="space-y-6"
                >
                    <div className="h-40 w-full">
                        <CurvedLoop
                            marqueeText="Curated Excellence · Global Flavors · Timeless Techniques"
                            speed={1.5}
                            curveAmount={200}
                            interactive={false}
                            className="fill-charcoal"
                        />
                    </div>

                    {/* Elegant stats row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex items-center justify-center gap-8 mt-8"
                    >
                        <StatItem number="6" label="Premium Recipes" delay={0.6} />
                        <div className="w-px h-12 bg-charcoal/20" />
                        <StatItem number="5" label="Cuisines" delay={0.7} />
                        <div className="w-px h-12 bg-charcoal/20" />
                        <StatItem number="100%" label="Chef Curated" delay={0.8} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

// Stat item component with staggered fade
function StatItem({ number, label, delay }: { number: string; label: string; delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            className="text-center"
        >
            <div className="text-3xl md:text-4xl font-black text-orange">{number}</div>
            <div className="text-xs md:text-sm text-charcoal/50 font-medium tracking-wider uppercase mt-1">
                {label}
            </div>
        </motion.div>
    );
}
