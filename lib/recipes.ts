export interface Recipe {
    id: string;
    title: string;
    description: string;
    image: string;
    price: number;
    category: "Mains" | "Sides" | "Desserts";
    deliveryTime: string;
}

export const recipes: Recipe[] = [
    {
        id: "1",
        title: "Sacred Herb Grilled Salmon",
        description: "Fresh line-caught salmon fillet infused with hand-gathered garden herbs, organic lemon, and first-press cold olive oil. Prepared at the Hearth.",
        image: "/images/salmon.jpg",
        price: 28.00,
        category: "Mains",
        deliveryTime: "Delivered Warm"
    },
    {
        id: "2",
        title: "Wild Forest Truffle Risotto",
        description: "Creamy, stone-ground Arborio rice simmered slow in organic vegetable broth, enriched with wild forest mushrooms and premium black truffle oil.",
        image: "/images/risotto.jpg",
        price: 22.00,
        category: "Mains",
        deliveryTime: "Delivered Warm"
    },
    {
        id: "3",
        title: "Holy Basil Stir-Fried Chicken",
        description: "Spicy stir-fried pasture-raised chicken cooked over open flame, loaded with sacred holy basil leaves, fresh chilies, and aromatic garlic.",
        image: "/images/thai-chicken.jpg",
        price: 19.50,
        category: "Mains",
        deliveryTime: "Delivered Warm"
    },
    {
        id: "4",
        title: "Decadent Molten Cocoa Cake",
        description: "A warm, decadent cake crafted with single-origin fair trade dark chocolate, featuring a rich, molten liquid cocoa center that flows like liquid gold.",
        image: "/images/lava-cake.jpg",
        price: 14.00,
        category: "Desserts",
        deliveryTime: "Delivered Fresh"
    },
    {
        id: "5",
        title: "Sun-Dried Apricot Lamb Tagine",
        description: "Grass-fed lamb shoulder slow-braised for two hours with sweet sun-dried apricots, chickpeas, toasted almonds, and our proprietary house Ras el Hanout spice blend.",
        image: "/images/tagine.jpg",
        price: 32.00,
        category: "Mains",
        deliveryTime: "Delivered Warm"
    },
    {
        id: "6",
        title: "Sacred Earth Caprese Burrata",
        description: "Creamy, hand-stretched burrata cheese paired with fresh heirloom tomatoes, tender organic basil leaves, flaky sea salt, and a drizzle of rich balsamic glaze.",
        image: "/images/caprese.jpg",
        price: 16.50,
        category: "Sides",
        deliveryTime: "Delivered Chilled"
    }
];
