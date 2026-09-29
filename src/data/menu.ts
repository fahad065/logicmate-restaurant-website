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

// Prices in AED — India locations show the equivalent in INR at checkout,
// this menu is for the marketing/demo site.
export const menu: MenuCategory[] = [
  {
    id: "starters",
    title: "Starters & Wok-Fired Appetizers",
    items: [
      {
        name: "Crispy Chilli Garlic Mushroom",
        description: "Button mushrooms, tossed wok-hot in a sticky chilli-garlic glaze",
        price: 32,
        diet: "veg",
        spicy: 2,
        badge: "Bestseller",
      },
      {
        name: "Dragon Chicken",
        description: "Batter-fried chicken, dry-tossed with cashew, capsicum and red chillies",
        price: 42,
        diet: "non-veg",
        spicy: 3,
        badge: "Chef's Special",
      },
      {
        name: "Golden Fried Prawns",
        description: "Butterflied prawns in a light rice-flour crust, served with plum dip",
        price: 48,
        diet: "non-veg",
      },
      {
        name: "Jain Spring Rolls",
        description: "Cabbage and carrot rolls, no onion or garlic, sweet chilli dip",
        price: 30,
        diet: "jain",
      },
      {
        name: "Vegetable Dim Sum Basket",
        description: "Steamed dumplings filled with cabbage, carrot and spring onion",
        price: 34,
        diet: "veg",
      },
      {
        name: "Chicken Lollipop",
        description: "Frenched chicken wings, double-fried, tossed in fiery schezwan sauce",
        price: 40,
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
        description: "Classic wok-fired broth, tofu, mixed vegetables, white pepper",
        price: 20,
        diet: "veg",
        spicy: 1,
      },
      {
        name: "Sweet Corn Chicken Soup",
        description: "Shredded chicken, sweet corn, silky egg-drop finish",
        price: 24,
        diet: "non-veg",
      },
      {
        name: "Lemon Coriander Soup",
        description: "Light and citrusy, fresh coriander, cracked pepper",
        price: 18,
        diet: "vegan",
      },
      {
        name: "Manchow Soup",
        description: "Thick, spiced vegetable broth topped with crispy fried noodles",
        price: 22,
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
        name: "Wok On Fire Signature Noodles",
        description: "Hakka noodles, seasonal vegetables, house black bean sauce",
        price: 34,
        diet: "veg",
        badge: "Chef's Special",
      },
      {
        name: "Chicken Hakka Noodles",
        description: "Wok-tossed with shredded chicken, cabbage, spring onion",
        price: 38,
        diet: "non-veg",
      },
      {
        name: "Singapore Rice Noodles",
        description: "Thin rice noodles, curry spice, bell peppers, bean sprouts",
        price: 36,
        diet: "vegan",
        spicy: 2,
      },
      {
        name: "Jain Hakka Noodles",
        description: "No onion, no garlic, cabbage, carrot, capsicum, light soy",
        price: 32,
        diet: "jain",
      },
      {
        name: "Schezwan Prawn Noodles",
        description: "King prawns, fiery schezwan sauce, scallions",
        price: 46,
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
        price: 30,
        diet: "veg",
      },
      {
        name: "Chicken Fried Rice",
        description: "Diced chicken, egg, spring onion, classic seasoning",
        price: 36,
        diet: "non-veg",
        badge: "Bestseller",
      },
      {
        name: "Jain Fried Rice",
        description: "No onion, no garlic, cabbage, carrot, beans, light soy",
        price: 28,
        diet: "jain",
      },
      {
        name: "Burnt Garlic Fried Rice",
        description: "Deeply caramelised garlic, spring onion, cracked pepper",
        price: 32,
        diet: "veg",
      },
      {
        name: "Triple Schezwan Rice",
        description: "Vegetables, egg and chicken in fiery schezwan sauce",
        price: 40,
        diet: "non-veg",
        spicy: 3,
      },
    ],
  },
  {
    id: "wok-meat",
    title: "Wok Specialties — Chicken, Lamb & Seafood",
    subtitle: "Fired hot, served sizzling",
    items: [
      {
        name: "Kung Pao Chicken",
        description: "Diced chicken, roasted peanuts, dried chilli, black vinegar glaze",
        price: 44,
        diet: "non-veg",
        spicy: 2,
        badge: "Bestseller",
      },
      {
        name: "Black Pepper Lamb",
        description: "Tender lamb strips, cracked black pepper, onion, capsicum",
        price: 56,
        diet: "non-veg",
      },
      {
        name: "Honey Chilli Fish",
        description: "Crisp-fried fish fillets, sweet-spicy honey chilli glaze",
        price: 50,
        diet: "non-veg",
        spicy: 2,
      },
      {
        name: "Wok On Fire Signature Wok Prawns",
        description: "Jumbo prawns, dried red chilli, garlic, spring onion, flambéed",
        price: 62,
        diet: "non-veg",
        badge: "Chef's Special",
        spicy: 2,
      },
      {
        name: "Sesame Chicken",
        description: "Crispy chicken, toasted sesame, sweet soy glaze",
        price: 42,
        diet: "non-veg",
      },
    ],
  },
  {
    id: "wok-veg",
    title: "Wok Specialties — Vegetarian & Jain",
    subtitle: "Every dish available Jain, no onion no garlic, on request",
    items: [
      {
        name: "Chilli Paneer",
        description: "Cottage cheese, capsicum, onion, dark soy-chilli glaze",
        price: 36,
        diet: "veg",
        spicy: 2,
        badge: "Bestseller",
      },
      {
        name: "Burnt Garlic Tofu",
        description: "Wok-charred tofu, garlic, scallion, black pepper",
        price: 34,
        diet: "vegan",
      },
      {
        name: "Manchurian Vegetable Balls",
        description: "Crisp vegetable dumplings in a tangy Manchurian gravy",
        price: 32,
        diet: "veg",
      },
      {
        name: "Jain Paneer Wok Toss",
        description: "Cottage cheese, cabbage, carrot, capsicum, no onion no garlic",
        price: 36,
        diet: "jain",
      },
      {
        name: "Sichuan Baby Corn",
        description: "Crisp baby corn, Sichuan chilli oil, sesame",
        price: 30,
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
        price: 30,
        diet: "veg",
        badge: "Bestseller",
      },
      {
        name: "Chicken Manchurian (Gravy)",
        description: "Fried chicken chunks simmered in a classic Manchurian sauce",
        price: 40,
        diet: "non-veg",
      },
      {
        name: "Veg Chow Mein",
        description: "Street-style pan-fried noodles, mixed vegetables",
        price: 28,
        diet: "veg",
      },
      {
        name: "American Chopsuey",
        description: "Crispy noodles under a sweet-tangy vegetable and egg gravy",
        price: 34,
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
        description: "Wok-caramelised dates in a crisp pancake shell",
        price: 26,
        diet: "veg",
        badge: "Bestseller",
      },
      {
        name: "Honey Noodles",
        description: "Crisp fried noodle nests drizzled with honey and sesame",
        price: 24,
        diet: "veg",
      },
      {
        name: "Chocolate Fudge Brownie",
        description: "Warm brownie, hot chocolate sauce, vanilla ice cream",
        price: 28,
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
        price: 18,
        diet: "vegan",
      },
      {
        name: "Dragon Fruit Cooler",
        description: "Dragon fruit puree, lime, sparkling water",
        price: 20,
        diet: "vegan",
      },
      {
        name: "Thai Iced Tea",
        description: "Spiced black tea, condensed milk, served over ice",
        price: 16,
        diet: "veg",
      },
      {
        name: "Fresh Lime Soda",
        description: "Sweet, salted, or mixed — your call",
        price: 12,
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
