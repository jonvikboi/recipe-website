"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";
import { Clock, Users, ChefHat } from "lucide-react";
import { Recipe } from "@/lib/recipes";
import { springConfig } from "@/lib/animation-config";

interface RecipeCardProps {
    recipe: Recipe;
    onClick: () => void;
}

export default function RecipeCard({ recipe, onClick }: RecipeCardProps) {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Subtle magnetic pull towards the cursor
        const xValue = ((mouseX - centerX) / centerX) * 12;
        const yValue = ((mouseY - centerY) / centerY) * 12;

        setX(xValue);
        setY(yValue);
    };

    const handleMouseLeave = () => {
        setX(0);
        setY(0);
    };

    return (
        <motion.div
            ref={cardRef}
            layoutId={`recipe-card-${recipe.id}`}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x, y }}
            transition={springConfig}
            whileHover={{ scale: 1.02 }}
            className="relative cursor-pointer group"
        >
            <div className="relative bg-cream/50 overflow-hidden border border-charcoal/10 group-hover:border-charcoal/30 transition-colors duration-500">
                {/* Image Section */}
                <div className="relative h-[400px] w-full overflow-hidden">
                    <Image
                        src={recipe.image}
                        alt={recipe.title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />

                    {/* Difficulty badge - Sharp, structural */}
                    <div className="absolute top-0 right-0 px-4 py-2 bg-charcoal text-xs font-medium tracking-widest text-cream uppercase">
                        {recipe.difficulty}
                    </div>
                </div>

                {/* Minimalist Info Section */}
                <div className="p-6 md:p-8 bg-cream border-t border-charcoal/10 relative">
                    {/* Vertical decorative accent */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />
                    
                    <h3 className="text-2xl sm:text-3xl font-serif font-medium mb-3 text-charcoal group-hover:text-orange transition-colors duration-500">
                        {recipe.title}
                    </h3>
                    <p className="text-charcoal/60 text-sm md:text-base font-light mb-6 line-clamp-2 leading-relaxed">
                        {recipe.description}
                    </p>

                    {/* Meta information */}
                    <div className="flex items-center gap-6 text-xs tracking-widest uppercase text-charcoal/40 font-medium">
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{recipe.cookTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            <span>{recipe.servings}</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
