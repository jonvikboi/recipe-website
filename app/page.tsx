"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import RecipeGrid from "@/components/RecipeGrid";
import RecipeDetail from "@/components/RecipeDetail";
import { recipes, Recipe } from "@/lib/recipes";

export default function Home() {
    const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <RecipeGrid recipes={recipes} onRecipeClick={setSelectedRecipe} />
            <RecipeDetail recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
        </main>
    );
}
