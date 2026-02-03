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
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateXValue = ((y - centerY) / centerY) * -20;
        const rotateYValue = ((x - centerX) / centerX) * 20;

        setRotateX(rotateXValue);
        setRotateY(rotateYValue);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            ref={cardRef}
            layoutId={`recipe-card-${recipe.id}`}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{
                rotateX,
                rotateY,
            }}
            transition={springConfig}
            whileHover={{ scale: 1.05 }}
            className="relative cursor-pointer group perspective-1000"
            style={{ transformStyle: "preserve-3d" }}
        >
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                {/* Image with text overlay */}
                <div className="relative h-80 w-full overflow-hidden">
                    <Image
                        src={recipe.image}
                        alt={recipe.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Seamless gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    {/* Difficulty badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-charcoal">
                        {recipe.difficulty}
                    </div>

                    {/* Title and description overlaid on image */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-orange transition-colors">
                            {recipe.title}
                        </h3>
                        <p className="text-white/90 text-sm line-clamp-2">
                            {recipe.description}
                        </p>
                    </div>
                </div>

                {/* Meta information */}
                <div className="p-4 flex items-center justify-center gap-6 text-sm text-charcoal/70 bg-cream/30">
                    <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        <span>{recipe.cookTime}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Users className="w-4 h-4" />
                        <span>{recipe.servings}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <ChefHat className="w-4 h-4" />
                        <span>{recipe.ingredients.length}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
