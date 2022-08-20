/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  {
    id: "P1",
    title: "Health Potion",
    description: "Restores 20 health",
    price: 2587,
    discontinued: false,
    categories: ["c1", "c6"],
    imageUrl: "https://shatak.github.io/Files/potions1.jpg"
  },
  {
    id: "P2",
    title: "Super Potion",
    description: "Restores 50 health",
    price: 7534,
    discontinued: false,
    categories: ["c1", "c6"],
    imageUrl: "https://shatak.github.io/Files/potions2.jpg"
  },
  {
    id: "P3",
    title: "Mega Potion",
    description: "Restores Stamina and gain 20% Damage reduction",
    price: 12045,
    discontinued: false,
    categories: ["c1", "c6"],
    imageUrl: "https://shatak.github.io/Files/potions3.jpg"
  },
  {
    id: "P4",
    title: "Stealth Potion",
    description: "Increases stealth by 50",
    price: 7598,
    discontinued: false,
    categories: ["c1", "c6"],
    imageUrl: "https://shatak.github.io/Files/potions2.jpg"
  },
  {
    id: "P5",
    title: "Revive Potion",
    description: "Revives a downed ally",
    price: 15087,
    discontinued: false,
    categories: ["c1", "c6"],
    imageUrl: "https://shatak.github.io/Files/potions3.jpg"
  },
  {
    id: "P6",
    title: "Great Sword",
    description: "Increases attack by 20",
    price: 15065,
    discontinued: false,
    categories: ["c2", "c6"],
    imageUrl: "https://shatak.github.io/Files/potions1.jpg"
  },
  {
    id: "P7",
    title: "Gold Shield",
    description: "Increases Defense by 50",
    price: 15065,
    discontinued: false,
    categories: ["c2", "c6"],
    imageUrl: "https://shatak.github.io/Files/potions2.jpg"
  },
  {
    id: "P8",
    title: "Dwarven Boots",
    description: "Increases movement speed by 10",
    price: 15089,
    discontinued: false,
    categories: ["c2", "c6"],
    imageUrl: "https://shatak.github.io/Files/potions3.jpg"
  },
  {
    id: "P9",
    title: "Elven Bow",
    description: "Increases attack range by 20",
    price: 17576,
    discontinued: false,
    categories: ["c2", "c6"],
    imageUrl: "https://shatak.github.io/Files/potions1.jpg"
  },
  {
    id: "P10",
    title: "Crossbow",
    description: "Increases attack by 10 and movement speed by 5",
    price: 17535,
    discontinued: true,
    categories: ["c2", "c6"],
    imageUrl: "https://shatak.github.io/Files/potions2.jpg"
  },
  {
    id: "P11",
    title: "Chronos",
    description: "Reduce ability cooldowns by 15%",
    price: 18001,
    discontinued: false,
    categories: ["c3", "c6"],
    imageUrl: "https://shatak.github.io/Files/potions3.jpg"
  },
  {
    id: "P12",
    title: "Artemis's Blessing",
    description: "Increses damage done with a bow by 15%",
    price: 22098,
    discontinued: false,
    categories: ["c3", "c6"],
    imageUrl: "https://shatak.github.io/Files/potions1.jpg"
  },
  {
    id: "P13",
    title: "Paladin",
    description: "Increase threat to aggro enemies.",
    price: 22044,
    discontinued: false,
    categories: ["c3", "c6"],
    imageUrl: "https://shatak.github.io/Files/potions2.jpg"
  },
  {
    id: "P14",
    title: "Heimdal",
    description: "Hidden enemies and items are visible at a greater distance.",
    price: 22085,
    discontinued: false,
    categories: ["c3", "c6"],
    imageUrl: "https://shatak.github.io/Files/potions3.jpg"
  },
  {
    id: "P15",
    title: "Assassin",
    description: "Sneak up on enemies without alerting them.",
    price: 22069,
    discontinued: false,
    categories: ["c3", "c6"],
    imageUrl: "https://shatak.github.io/Files/potions1.jpg"
  },
  {
    id: "P16",
    title: "Flak Vest",
    description: "Gain 10% burn resistance",
    price: 20056,
    discontinued: true,
    categories: ["c4", "c6"],
    imageUrl: "https://shatak.github.io/Files/potions2.jpg"
  },
  {
    id: "P17",
    title: "Hidden Flap",
    description: "Increases inventory size by 10",
    price: 20099,
    discontinued: false,
    categories: ["c4", "c6"],
    imageUrl: "https://shatak.github.io/Files/potions3.jpg"
  },
  {
    id: "P18",
    title: "Corrosive Amulet",
    description: "Damaging enemies applies rot status effect on them",
    price: 20000,
    discontinued: false,
    categories: ["c4", "c6"],
    imageUrl: "https://shatak.github.io/Files/potions1.jpg"
  },
  {
    id: "P19",
    title: "Predator's Ring",
    description: "Reveals hidden enemies nearby",
    price: 20000,
    discontinued: false,
    categories: ["c4", "c6"],
    imageUrl: "https://shatak.github.io/Files/potions2.jpg"
  },
  {
    id: "P20",
    title: "Wisdom Scroll",
    description: "Increase XP Gain by 15%",
    price: 25000,
    discontinued: false,
    categories: ["c4", "c6"],
    imageUrl: "https://shatak.github.io/Files/potions3.jpg"
  },
  {
    id: "P21",
    title: "Second Chance",
    description: "Revives all downed allies and restores everyone to full health",
    price: 400000,
    discontinued: false,
    categories: ["c5", "c6"],
    imageUrl: "https://shatak.github.io/Files/potions1.jpg"
  },
  {
    id: "P22",
    title: "Guardian",
    description: "All allies near you gain a 500 health shield and gain 50% damage reduction",
    price: 400000,
    discontinued: false,
    categories: ["c5", "c6"],
    imageUrl: "https://shatak.github.io/Files/potions2.jpg"
  },
  {
    id: "P23",
    title: "Final Strike",
    description: "All enemies are revealed to your team and your team gains 50% attack bonus",
    price: 400000,
    discontinued: false,
    categories: ["c5", "c6"],
    imageUrl: "https://shatak.github.io/Files/potions3.jpg"
  }
];
