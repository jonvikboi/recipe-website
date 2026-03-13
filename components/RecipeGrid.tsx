"use client";

import { motion } from "framer-motion";
import { Recipe } from "@/lib/recipes";
import RecipeCard from "./RecipeCard";
import { staggerContainerVariants, fadeInVariants } from "@/lib/animation-config";

interface RecipeGridProps {
    recipes: Recipe[];
    onRecipeClick: (recipe: Recipe) => void;
}

export default function RecipeGrid({ recipes, onRecipeClick }: RecipeGridProps) {
    return (
        <section id="recipes" className="py-12 sm:py-16 md:py-24 px-4 max-w-7xl mx-auto">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainerVariants}
                className="mb-16 md:mb-24 text-left border-b border-charcoal/10 pb-8 relative"
            >
                <div className="absolute right-0 top-0 w-8 h-8 flex flex-col justify-between hidden md:flex">
                    <div className="w-full h-px bg-orange" />
                    <div className="w-full h-px border-t border-dashed border-orange" />
                </div>
                
                <motion.h2
                    variants={fadeInVariants}
                    className="text-5xl sm:text-6xl md:text-8xl font-serif font-medium text-charcoal mb-6 tracking-tight"
                >
                    Curations
                </motion.h2>
                <motion.div
                    variants={fadeInVariants}
                    className="flex items-center gap-6"
                >
                    <div className="w-12 h-px bg-orange" />
                    <p className="text-xs tracking-[0.2em] text-charcoal/40 uppercase font-sans">
                        Mastery in Every Dish
                    </p>
                </motion.div>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainerVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-16 lg:gap-y-32"
                style={{ gridAutoFlow: 'dense' }}
            >
                {recipes.map((recipe) => (
                    <motion.div key={recipe.id} variants={fadeInVariants}>
                        <RecipeCard recipe={recipe} onClick={() => onRecipeClick(recipe)} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
