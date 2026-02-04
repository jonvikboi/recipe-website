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

    // 3D tilt effect for image
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const imageRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!imageRef.current) return;
        const rect = imageRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateXValue = ((y - centerY) / centerY) * -10;
        const rotateYValue = ((x - centerX) / centerX) * 10;
        setRotateX(rotateXValue);
        setRotateY(rotateYValue);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
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
                    className="text-center mb-12 md:mb-20"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-charcoal mb-4">
                        Meet the Chef
                    </h2>
                    <p className="text-lg sm:text-xl text-charcoal/60 max-w-2xl mx-auto">
                        Passion, precision, and a lifetime dedicated to culinary excellence
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
                    {/* Chef Image with 3D Effect */}
                    <motion.div
                        ref={imageRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        animate={{ rotateX, rotateY }}
                        transition={springConfig}
                        style={{
                            transformStyle: "preserve-3d",
                            y: imageY
                        }}
                        className="relative group perspective-1000"
                    >
                        <div className="relative h-[400px] sm:h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/chef-geena.jpg"
                                alt="Chef Geena Binu Jose"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />

                            {/* Floating name badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ ...springConfig, delay: 0.3 }}
                                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl"
                            >
                                <h3 className="text-2xl sm:text-3xl font-bold text-charcoal">Geena Binu Jose</h3>
                                <p className="text-orange font-semibold">Executive Chef & Culinary Artist</p>
                            </motion.div>
                        </div>
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
                                "Cooking is not just about feeding the body, it's about nourishing the soul with every bite."
                            </blockquote>
                        </motion.div>

                        {/* Animated Stats Grid */}
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ ...springConfig, delay: 0.3 + index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                                >
                                    <stat.icon className="w-8 h-8 text-orange mb-2" />
                                    <div className="text-3xl sm:text-4xl font-black text-charcoal mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs sm:text-sm text-charcoal/60 font-medium">
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
