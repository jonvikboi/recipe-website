"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import Image from "next/image";
import { Recipe } from "@/lib/recipes";
import { springConfig } from "@/lib/animation-config";
import { useState } from "react";

interface RecipeDetailProps {
    recipe: Recipe | null;
    onClose: () => void;
}

export default function RecipeDetail({ recipe, onClose }: RecipeDetailProps) {
    const [checkedIngredients, setCheckedIngredients] = useState<Set<string>>(new Set());

    if (!recipe) return null;

    const toggleIngredient = (id: string) => {
        setCheckedIngredients(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    return (
        <AnimatePresence>
            {recipe && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        layoutId={`recipe-card-${recipe.id}`}
                        className="fixed inset-0 sm:inset-4 md:inset-8 lg:inset-16 bg-cream rounded-none sm:rounded-3xl overflow-hidden shadow-2xl z-50"
                    >
                        <div className="h-full overflow-y-auto">
                            {/* Close button */}
                            <motion.button
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ ...springConfig, delay: 0.2 }}
                                onClick={onClose}
                                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-orange hover:text-white transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </motion.button>

                            {/* Hero image */}
                            <div className="relative h-48 sm:h-64 md:h-72 lg:h-96 w-full">
                                <Image
                                    src={recipe.image}
                                    alt={recipe.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-cream/80 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="px-4 sm:px-6 md:px-12 pb-8 md:pb-12 -mt-12 sm:mt-16 md:-mt-20 relative z-10">
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ ...springConfig, delay: 0.1 }}
                                    className="text-3xl sm:text-4xl md:text-5xl font-black text-charcoal mb-3 md:mb-4"
                                >
                                    {recipe.title}
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ ...springConfig, delay: 0.15 }}
                                    className="text-base sm:text-lg md:text-xl text-charcoal/70 mb-6 md:mb-8"
                                >
                                    {recipe.description}
                                </motion.p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                    {/* Ingredients */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ ...springConfig, delay: 0.2 }}
                                    >
                                        <h2 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">Ingredients</h2>
                                        <ul className="space-y-3">
                                            {recipe.ingredients.map((ingredient, index) => (
                                                <motion.li
                                                    key={ingredient.id}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ ...springConfig, delay: 0.3 + index * 0.05 }}
                                                    onClick={() => toggleIngredient(ingredient.id)}
                                                    className="flex items-start gap-3 cursor-pointer group"
                                                >
                                                    <div className="relative mt-1">
                                                        <div className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-all ${checkedIngredients.has(ingredient.id)
                                                            ? 'bg-orange border-orange'
                                                            : 'border-charcoal/30 group-hover:border-orange'
                                                            }`}>
                                                            <AnimatePresence>
                                                                {checkedIngredients.has(ingredient.id) && (
                                                                    <motion.div
                                                                        initial={{ scale: 0 }}
                                                                        animate={{ scale: 1 }}
                                                                        exit={{ scale: 0 }}
                                                                        transition={springConfig}
                                                                    >
                                                                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                                                                    </motion.div>
                                                                )}
                                                            </AnimatePresence>
                                                        </div>
                                                    </div>
                                                    <span className={`text-charcoal/80 ${checkedIngredients.has(ingredient.id) ? 'line-through opacity-50' : ''}`}>
                                                        <strong>{ingredient.name}</strong> - {ingredient.amount}
                                                    </span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </motion.div>

                                    {/* Steps */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ ...springConfig, delay: 0.25 }}
                                    >
                                        <h2 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">Instructions</h2>
                                        <ol className="space-y-4">
                                            {recipe.steps.map((step, index) => (
                                                <motion.li
                                                    key={step.id}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ ...springConfig, delay: 0.35 + index * 0.08 }}
                                                    className="flex gap-4"
                                                >
                                                    <div className="flex-shrink-0 w-8 h-8 bg-orange text-white rounded-full flex items-center justify-center font-bold text-sm">
                                                        {step.number}
                                                    </div>
                                                    <p className="text-charcoal/80 pt-1">{step.instruction}</p>
                                                </motion.li>
                                            ))}
                                        </ol>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
