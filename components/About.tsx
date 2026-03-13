"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";
import { ChefHat, Award, Star, Users } from "lucide-react";
import { springConfig } from "@/lib/animation-config";

export default function About() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

    // Subtle magnetic effect for image
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const imageRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!imageRef.current) return;
        const rect = imageRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        // Subtle magnetic pull
        const xValue = ((mouseX - centerX) / centerX) * 25;
        const yValue = ((mouseY - centerY) / centerY) * 25;
        setX(xValue);
        setY(yValue);
    };

    const handleMouseLeave = () => {
        setX(0);
        setY(0);
    };

    const stats = [
        { icon: ChefHat, value: "15+", label: "Years Experience" },
        { icon: Award, value: "12", label: "Awards Won" },
        { icon: Star, value: "500+", label: "Recipes Created" },
        { icon: Users, value: "10K+", label: "Students Taught" }
    ];

    return (
        <section
            ref={sectionRef}
            id="about"
            className="py-16 sm:py-20 md:py-32 px-4 bg-gradient-to-b from-cream via-orange/5 to-cream overflow-hidden"
        >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={springConfig}
                    className="mb-16 md:mb-24 text-left border-b border-charcoal/10 pb-8 relative"
                >
                    <div className="absolute right-0 top-0 w-8 h-8 flex-col justify-between hidden md:flex">
                        <div className="w-full h-px bg-orange" />
                        <div className="w-full h-px border-t border-dashed border-orange" />
                    </div>

                    <h2 className="text-5xl sm:text-6xl md:text-8xl font-serif font-medium text-charcoal mb-6 tracking-tight">
                        The Artisan
                    </h2>
                    
                    <div className="flex items-center gap-6">
                        <div className="w-12 h-px bg-orange" />
                        <p className="text-xs tracking-[0.2em] text-charcoal/40 uppercase font-sans">
                            Geena Binu Jose
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
                    {/* Chef Image with Magnetic Effect */}
                    <motion.div style={{ y: imageY }} className="relative z-10 w-full h-full">
                        <motion.div
                            ref={imageRef}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            animate={{ x, y }}
                            transition={springConfig}
                            className="relative group w-full h-full"
                        >
                        <div className="relative h-[500px] sm:h-[600px] md:h-[700px] rounded-none overflow-hidden border border-charcoal/10 group-hover:border-charcoal/30 transition-colors duration-500">
                            <Image
                                src="/images/chef-geena.jpg"
                                alt="Chef Geena Binu Jose"
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-transform duration-700"
                            />
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-80" />

                            {/* Sharp floating name badge */}
                            <motion.div
                                initial={{ opacity: 0, scaleY: 0 }}
                                whileInView={{ opacity: 1, scaleY: 1 }}
                                viewport={{ once: true }}
                                transition={{ ...springConfig, delay: 0.3 }}
                                className="absolute bottom-6 left-6 right-6 bg-cream border border-charcoal/10 p-6 md:p-8 transform origin-bottom"
                            >
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange" />
                                <h3 className="text-2xl sm:text-3xl font-serif font-medium text-charcoal mb-2">Geena Binu Jose</h3>
                                <p className="text-xs tracking-widest text-charcoal/50 uppercase font-sans">Executive Chef & Culinary Artist</p>
                            </motion.div>
                        </div>
                        </motion.div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        style={{ opacity: contentOpacity }}
                        className="space-y-6 md:space-y-8"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ ...springConfig, delay: 0.2 }}
                        >
                            <p className="text-base sm:text-lg text-charcoal/80 leading-relaxed mb-4">
                                With over 15 years of culinary expertise, Chef Geena Binu Jose has mastered the art of
                                blending traditional techniques with modern innovation. Her journey began in the kitchens
                                of Kerala, where she learned the importance of authentic flavors and fresh ingredients.
                            </p>
                            <p className="text-base sm:text-lg text-charcoal/80 leading-relaxed mb-4">
                                Today, she specializes in Mediterranean and Asian fusion cuisine, bringing together the
                                best of global flavors with a signature touch that has earned her recognition across
                                culinary circles worldwide.
                            </p>
                            <blockquote className="border-l-4 border-orange pl-4 sm:pl-6 py-2 italic text-lg sm:text-xl text-charcoal/70">
                                &ldquo;Cooking is not just about feeding the body, it&rsquo;s about nourishing the soul with every bite.&rdquo;
                            </blockquote>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-px bg-charcoal/10 mt-12 border border-charcoal/10">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                                    whileHover={{ backgroundColor: "rgba(253, 252, 240, 1)" }}
                                    className="bg-cream p-6 sm:p-8 flex flex-col justify-center transition-colors relative group"
                                >
                                    <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-orange/0 group-hover:border-orange/100 transition-colors m-2" />
                                    <stat.icon className="w-5 h-5 text-orange mb-4 opacity-50 stroke-1" />
                                    <div className="text-3xl sm:text-4xl font-serif font-medium text-charcoal mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-[10px] sm:text-xs text-charcoal/50 tracking-widest uppercase font-sans">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
