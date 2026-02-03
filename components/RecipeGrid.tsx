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
                className="mb-8 sm:mb-12 md:mb-16 text-center"
            >
                <motion.h2
                    variants={fadeInVariants}
                    className="text-4xl sm:text-5xl md:text-6xl font-black text-charcoal mb-4"
                >
                    Featured Recipes
                </motion.h2>
                <motion.p
                    variants={fadeInVariants}
                    className="text-lg sm:text-xl text-charcoal/70 max-w-2xl mx-auto"
                >
                    Discover our curated collection of exquisite dishes from around the world
                </motion.p>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainerVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
