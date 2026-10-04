export type DietTag = "veg" | "non-veg" | "vegan" | "jain";

export interface MenuItem {
  name: string;
  description: string;
  price: number;
  diet: DietTag;
  spicy?: 1 | 2 | 3;
  badge?: "Bestseller" | "Chef's Special" | "New";
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
}

// Prices in USD — this menu is for the marketing/demo site.
export const menu: MenuCategory[] = [
  {
    id: "starters",
    title: "Starters & Shareable Plates",
    items: [
      {
        name: "Crispy Chilli Garlic Mushroom",
        description: "Button mushrooms, tossed wok-hot in a sticky chilli-garlic glaze",
        price: 11,
        diet: "veg",
        spicy: 2,
        badge: "Bestseller",
      },
      {
        name: "Dragon Chicken",
        description: "Batter-fried chicken, dry-tossed with cashew, capsicum and red chillies",
        price: 14,
        diet: "non-veg",
        spicy: 3,
        badge: "Chef's Special",
      },
      {
        name: "Golden Fried Prawns",
        description: "Butterflied prawns in a light rice-flour crust, served with plum dip",
        price: 16,
        diet: "non-veg",
      },
      {
        name: "Jain Spring Rolls",
        description: "Cabbage and carrot rolls, no onion or garlic, sweet chilli dip",
        price: 10,
        diet: "jain",
      },
      {
        name: "Vegetable Dim Sum Basket",
        description: "Steamed dumplings filled with cabbage, carrot and spring onion",
        price: 12,
        diet: "veg",
      },
      {
        name: "Chicken Lollipop",
        description: "Frenched chicken wings, double-fried, tossed in spicy schezwan sauce",
        price: 13,
        diet: "non-veg",
        spicy: 3,
        badge: "Bestseller",
      },
    ],
  },
  {
    id: "soups",
    title: "Soups",
    items: [
      {
        name: "Hot & Sour Vegetable Soup",
        description: "Classic hot & sour broth, tofu, mixed vegetables, white pepper",
        price: 6,
        diet: "veg",
        spicy: 1,
      },
      {
        name: "Sweet Corn Chicken Soup",
        description: "Shredded chicken, sweet corn, silky egg-drop finish",
        price: 7,
        diet: "non-veg",
      },
      {
        name: "Lemon Coriander Soup",
        description: "Light and citrusy, fresh coriander, cracked pepper",
        price: 6,
        diet: "vegan",
      },
      {
        name: "Manchow Soup",
        description: "Thick, spiced vegetable broth topped with crispy fried noodles",
        price: 7,
        diet: "veg",
        spicy: 2,
      },
    ],
  },
  {
    id: "noodles",
    title: "Noodles",
    items: [
      {
        name: "Canton Kitchen Signature Noodles",
        description: "Hakka noodles, seasonal vegetables, house black bean sauce",
        price: 13,
        diet: "veg",
        badge: "Chef's Special",
      },
      {
        name: "Chicken Hakka Noodles",
        description: "Wok-tossed with shredded chicken, cabbage, spring onion",
        price: 14,
        diet: "non-veg",
      },
      {
        name: "Singapore Rice Noodles",
        description: "Thin rice noodles, curry spice, bell peppers, bean sprouts",
        price: 13,
        diet: "vegan",
        spicy: 2,
      },
      {
        name: "Jain Hakka Noodles",
        description: "No onion, no garlic, cabbage, carrot, capsicum, light soy",
        price: 12,
        diet: "jain",
      },
      {
        name: "Schezwan Prawn Noodles",
        description: "King prawns, spicy schezwan sauce, scallions",
        price: 16,
        diet: "non-veg",
        spicy: 3,
      },
    ],
  },
  {
    id: "fried-rice",
    title: "Fried Rice",
    items: [
      {
        name: "Vegetable Fried Rice",
        description: "Wok-charred jasmine rice, garden vegetables, soy",
        price: 11,
        diet: "veg",
      },
      {
        name: "Chicken Fried Rice",
        description: "Diced chicken, egg, spring onion, classic seasoning",
        price: 13,
        diet: "non-veg",
        badge: "Bestseller",
      },
      {
        name: "Jain Fried Rice",
        description: "No onion, no garlic, cabbage, carrot, beans, light soy",
        price: 10,
        diet: "jain",
      },
      {
        name: "Burnt Garlic Fried Rice",
        description: "Deeply caramelised garlic, spring onion, cracked pepper",
        price: 11,
        diet: "veg",
      },
      {
        name: "Triple Schezwan Rice",
        description: "Vegetables, egg and chicken in spicy schezwan sauce",
        price: 14,
        diet: "non-veg",
        spicy: 3,
      },
    ],
  },
  {
    id: "stir-fry-meat",
    title: "Stir-Fry Specialties — Chicken, Lamb & Seafood",
    subtitle: "Tossed hot, served sizzling",
    items: [
      {
        name: "Kung Pao Chicken",
        description: "Diced chicken, roasted peanuts, dried chilli, black vinegar glaze",
        price: 16,
        diet: "non-veg",
        spicy: 2,
        badge: "Bestseller",
      },
      {
        name: "Black Pepper Lamb",
        description: "Tender lamb strips, cracked black pepper, onion, capsicum",
        price: 20,
        diet: "non-veg",
      },
      {
        name: "Honey Chilli Fish",
        description: "Crisp-fried fish fillets, sweet-spicy honey chilli glaze",
        price: 18,
        diet: "non-veg",
        spicy: 2,
      },
      {
        name: "Canton Kitchen Signature Prawns",
        description: "Jumbo prawns, dried red chilli, garlic, spring onion, wok-tossed",
        price: 22,
        diet: "non-veg",
        badge: "Chef's Special",
        spicy: 2,
      },
      {
        name: "Sesame Chicken",
        description: "Crispy chicken, toasted sesame, sweet soy glaze",
        price: 15,
        diet: "non-veg",
      },
    ],
  },
  {
    id: "stir-fry-veg",
    title: "Stir-Fry Specialties — Vegetarian & Jain",
    subtitle: "Every dish available Jain, no onion no garlic, on request",
    items: [
      {
        name: "Chilli Paneer",
        description: "Cottage cheese, capsicum, onion, dark soy-chilli glaze",
        price: 13,
        diet: "veg",
        spicy: 2,
        badge: "Bestseller",
      },
      {
        name: "Burnt Garlic Tofu",
        description: "Wok-charred tofu, garlic, scallion, black pepper",
        price: 12,
        diet: "vegan",
      },
      {
        name: "Manchurian Vegetable Balls",
        description: "Crisp vegetable dumplings in a tangy Manchurian gravy",
        price: 11,
        diet: "veg",
      },
      {
        name: "Jain Paneer Stir Toss",
        description: "Cottage cheese, cabbage, carrot, capsicum, no onion no garlic",
        price: 13,
        diet: "jain",
      },
      {
        name: "Sichuan Baby Corn",
        description: "Crisp baby corn, Sichuan chilli oil, sesame",
        price: 11,
        diet: "vegan",
        spicy: 3,
      },
    ],
  },
  {
    id: "indo-chinese",
    title: "Indo-Chinese Classics",
    items: [
      {
        name: "Gobi Manchurian (Dry)",
        description: "Crisp cauliflower florets, tangy Manchurian tossing sauce",
        price: 10,
        diet: "veg",
        badge: "Bestseller",
      },
      {
        name: "Chicken Manchurian (Gravy)",
        description: "Fried chicken chunks simmered in a classic Manchurian sauce",
        price: 14,
        diet: "non-veg",
      },
      {
        name: "Veg Chow Mein",
        description: "Street-style pan-fried noodles, mixed vegetables",
        price: 10,
        diet: "veg",
      },
      {
        name: "American Chopsuey",
        description: "Crispy noodles under a sweet-tangy vegetable and egg gravy",
        price: 12,
        diet: "veg",
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      {
        name: "Date Pancake with Vanilla Ice Cream",
        description: "Caramelised dates in a crisp pancake shell",
        price: 8,
        diet: "veg",
        badge: "Bestseller",
      },
      {
        name: "Honey Noodles",
        description: "Crisp fried noodle nests drizzled with honey and sesame",
        price: 7,
        diet: "veg",
      },
      {
        name: "Chocolate Fudge Brownie",
        description: "Warm brownie, hot chocolate sauce, vanilla ice cream",
        price: 8,
        diet: "veg",
      },
    ],
  },
  {
    id: "beverages",
    title: "Beverages & Mocktails",
    items: [
      {
        name: "Lychee Lemonade",
        description: "Fresh lychee, lime, soda, mint",
        price: 5,
        diet: "vegan",
      },
      {
        name: "Dragon Fruit Cooler",
        description: "Dragon fruit puree, lime, sparkling water",
        price: 6,
        diet: "vegan",
      },
      {
        name: "Thai Iced Tea",
        description: "Spiced black tea, condensed milk, served over ice",
        price: 5,
        diet: "veg",
      },
      {
        name: "Fresh Lime Soda",
        description: "Sweet, salted, or mixed — your call",
        price: 4,
        diet: "vegan",
      },
    ],
  },
];

export const dietLabel: Record<DietTag, string> = {
  veg: "Veg",
  "non-veg": "Non-Veg",
  vegan: "Vegan",
  jain: "Jain",
};

export const dietColor: Record<DietTag, string> = {
  veg: "#3a9d43",
  "non-veg": "#c0392b",
  vegan: "#2f8f6f",
  jain: "#8a5a2b",
};
