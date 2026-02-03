export interface Ingredient {
    id: string;
    name: string;
    amount: string;
}

export interface Step {
    id: string;
    number: number;
    instruction: string;
}

export interface Recipe {
    id: string;
    title: string;
    description: string;
    image: string;
    cookTime: string;
    servings: number;
    difficulty: "Easy" | "Medium" | "Hard";
    ingredients: Ingredient[];
    steps: Step[];
}

export const recipes: Recipe[] = [
    {
        id: "1",
        title: "Mediterranean Grilled Salmon",
        description: "Fresh salmon with herbs, lemon, and olive oil",
        image: "/images/salmon.jpg",
        cookTime: "25 min",
        servings: 4,
        difficulty: "Medium",
        ingredients: [
            { id: "1-1", name: "Salmon fillets", amount: "4 pieces (6 oz each)" },
            { id: "1-2", name: "Olive oil", amount: "3 tbsp" },
            { id: "1-3", name: "Fresh lemon", amount: "2 lemons" },
            { id: "1-4", name: "Fresh dill", amount: "2 tbsp chopped" },
            { id: "1-5", name: "Garlic cloves", amount: "3 minced" },
            { id: "1-6", name: "Sea salt", amount: "to taste" },
            { id: "1-7", name: "Black pepper", amount: "to taste" },
        ],
        steps: [
            { id: "1-s1", number: 1, instruction: "Preheat grill to medium-high heat (375-400°F)" },
            { id: "1-s2", number: 2, instruction: "Mix olive oil, lemon juice, dill, and garlic in a bowl" },
            { id: "1-s3", number: 3, instruction: "Season salmon fillets with salt and pepper" },
            { id: "1-s4", number: 4, instruction: "Brush salmon with herb mixture on both sides" },
            { id: "1-s5", number: 5, instruction: "Grill salmon skin-side down for 5-6 minutes" },
            { id: "1-s6", number: 6, instruction: "Flip and cook for another 4-5 minutes until flaky" },
            { id: "1-s7", number: 7, instruction: "Serve immediately with lemon wedges" },
        ],
    },
    {
        id: "2",
        title: "Truffle Mushroom Risotto",
        description: "Creamy Italian risotto with wild mushrooms and truffle oil",
        image: "/images/risotto.jpg",
        cookTime: "40 min",
        servings: 6,
        difficulty: "Medium",
        ingredients: [
            { id: "2-1", name: "Arborio rice", amount: "2 cups" },
            { id: "2-2", name: "Mixed mushrooms", amount: "1 lb, sliced" },
            { id: "2-3", name: "Vegetable broth", amount: "6 cups, warmed" },
            { id: "2-4", name: "White wine", amount: "1 cup" },
            { id: "2-5", name: "Parmesan cheese", amount: "1 cup grated" },
            { id: "2-6", name: "Truffle oil", amount: "2 tbsp" },
            { id: "2-7", name: "Butter", amount: "4 tbsp" },
            { id: "2-8", name: "Shallots", amount: "2 minced" },
        ],
        steps: [
            { id: "2-s1", number: 1, instruction: "Sauté mushrooms in 2 tbsp butter until golden, set aside" },
            { id: "2-s2", number: 2, instruction: "In same pan, cook shallots in remaining butter until soft" },
            { id: "2-s3", number: 3, instruction: "Add rice, stir for 2 minutes until lightly toasted" },
            { id: "2-s4", number: 4, instruction: "Pour in wine, stir until absorbed" },
            { id: "2-s5", number: 5, instruction: "Add broth one ladle at a time, stirring constantly" },
            { id: "2-s6", number: 6, instruction: "Continue for 20-25 minutes until rice is creamy" },
            { id: "2-s7", number: 7, instruction: "Stir in mushrooms, parmesan, and truffle oil" },
            { id: "2-s8", number: 8, instruction: "Serve immediately with extra parmesan" },
        ],
    },
    {
        id: "3",
        title: "Thai Basil Chicken",
        description: "Spicy stir-fried chicken with holy basil and chilies",
        image: "/images/thai-chicken.jpg",
        cookTime: "20 min",
        servings: 4,
        difficulty: "Easy",
        ingredients: [
            { id: "3-1", name: "Chicken breast", amount: "1.5 lbs, sliced" },
            { id: "3-2", name: "Holy basil leaves", amount: "2 cups packed" },
            { id: "3-3", name: "Thai chilies", amount: "4-6 whole" },
            { id: "3-4", name: "Garlic cloves", amount: "6 minced" },
            { id: "3-5", name: "Fish sauce", amount: "2 tbsp" },
            { id: "3-6", name: "Soy sauce", amount: "1 tbsp" },
            { id: "3-7", name: "Oyster sauce", amount: "1 tbsp" },
            { id: "3-8", name: "Sugar", amount: "1 tsp" },
        ],
        steps: [
            { id: "3-s1", number: 1, instruction: "Heat wok over high heat until smoking" },
            { id: "3-s2", number: 2, instruction: "Add oil and swirl to coat" },
            { id: "3-s3", number: 3, instruction: "Stir-fry garlic and chilies for 30 seconds" },
            { id: "3-s4", number: 4, instruction: "Add chicken, stir-fry until cooked through" },
            { id: "3-s5", number: 5, instruction: "Mix in fish sauce, soy sauce, oyster sauce, and sugar" },
            { id: "3-s6", number: 6, instruction: "Toss in basil leaves, stir until wilted" },
            { id: "3-s7", number: 7, instruction: "Serve over jasmine rice" },
        ],
    },
    {
        id: "4",
        title: "Chocolate Lava Cake",
        description: "Decadent molten chocolate cake with liquid center",
        image: "/images/lava-cake.jpg",
        cookTime: "15 min",
        servings: 4,
        difficulty: "Medium",
        ingredients: [
            { id: "4-1", name: "Dark chocolate", amount: "6 oz, chopped" },
            { id: "4-2", name: "Butter", amount: "6 tbsp" },
            { id: "4-3", name: "Eggs", amount: "2 large" },
            { id: "4-4", name: "Egg yolks", amount: "2 large" },
            { id: "4-5", name: "Sugar", amount: "1/4 cup" },
            { id: "4-6", name: "All-purpose flour", amount: "2 tbsp" },
            { id: "4-7", name: "Vanilla extract", amount: "1 tsp" },
        ],
        steps: [
            { id: "4-s1", number: 1, instruction: "Preheat oven to 425°F, butter 4 ramekins" },
            { id: "4-s2", number: 2, instruction: "Melt chocolate and butter together, let cool slightly" },
            { id: "4-s3", number: 3, instruction: "Whisk eggs, yolks, and sugar until thick" },
            { id: "4-s4", number: 4, instruction: "Fold chocolate mixture into eggs" },
            { id: "4-s5", number: 5, instruction: "Gently fold in flour and vanilla" },
            { id: "4-s6", number: 6, instruction: "Divide batter among ramekins" },
            { id: "4-s7", number: 7, instruction: "Bake for 12-14 minutes until edges are set" },
            { id: "4-s8", number: 8, instruction: "Let cool 1 minute, invert onto plates, serve immediately" },
        ],
    },
    {
        id: "5",
        title: "Moroccan Lamb Tagine",
        description: "Slow-cooked lamb with apricots, almonds, and aromatic spices",
        image: "/images/tagine.jpg",
        cookTime: "2 hours",
        servings: 6,
        difficulty: "Hard",
        ingredients: [
            { id: "5-1", name: "Lamb shoulder", amount: "2 lbs, cubed" },
            { id: "5-2", name: "Dried apricots", amount: "1 cup" },
            { id: "5-3", name: "Almonds", amount: "1/2 cup toasted" },
            { id: "5-4", name: "Onions", amount: "2 large, sliced" },
            { id: "5-5", name: "Chickpeas", amount: "1 can, drained" },
            { id: "5-6", name: "Ras el hanout", amount: "2 tbsp" },
            { id: "5-7", name: "Cinnamon stick", amount: "1" },
            { id: "5-8", name: "Lamb stock", amount: "3 cups" },
            { id: "5-9", name: "Honey", amount: "2 tbsp" },
        ],
        steps: [
            { id: "5-s1", number: 1, instruction: "Season lamb with ras el hanout, salt, and pepper" },
            { id: "5-s2", number: 2, instruction: "Brown lamb in batches in tagine or Dutch oven" },
            { id: "5-s3", number: 3, instruction: "Remove lamb, sauté onions until soft" },
            { id: "5-s4", number: 4, instruction: "Return lamb, add stock, cinnamon, bring to simmer" },
            { id: "5-s5", number: 5, instruction: "Cover, cook on low for 90 minutes" },
            { id: "5-s6", number: 6, instruction: "Add apricots, chickpeas, and honey" },
            { id: "5-s7", number: 7, instruction: "Cook uncovered for 30 more minutes" },
            { id: "5-s8", number: 8, instruction: "Garnish with toasted almonds and serve with couscous" },
        ],
    },
    {
        id: "6",
        title: "Caprese Burrata Salad",
        description: "Fresh tomatoes, creamy burrata, and basil with balsamic glaze",
        image: "/images/caprese.jpg",
        cookTime: "10 min",
        servings: 4,
        difficulty: "Easy",
        ingredients: [
            { id: "6-1", name: "Burrata cheese", amount: "2 balls (8 oz each)" },
            { id: "6-2", name: "Heirloom tomatoes", amount: "4 large, sliced" },
            { id: "6-3", name: "Fresh basil", amount: "1 bunch" },
            { id: "6-4", name: "Extra virgin olive oil", amount: "1/4 cup" },
            { id: "6-5", name: "Balsamic glaze", amount: "3 tbsp" },
            { id: "6-6", name: "Flaky sea salt", amount: "to taste" },
            { id: "6-7", name: "Cracked black pepper", amount: "to taste" },
        ],
        steps: [
            { id: "6-s1", number: 1, instruction: "Arrange tomato slices on a large platter" },
            { id: "6-s2", number: 2, instruction: "Tear burrata into pieces and distribute over tomatoes" },
            { id: "6-s3", number: 3, instruction: "Scatter fresh basil leaves over the salad" },
            { id: "6-s4", number: 4, instruction: "Drizzle generously with olive oil" },
            { id: "6-s5", number: 5, instruction: "Add balsamic glaze in a artistic pattern" },
            { id: "6-s6", number: 6, instruction: "Season with flaky salt and cracked pepper" },
            { id: "6-s7", number: 7, instruction: "Serve immediately at room temperature" },
        ],
    },
];
