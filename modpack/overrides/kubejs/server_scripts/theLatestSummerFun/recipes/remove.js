// priority: 10
/*
 * Recipe removal
 *
 * Template: `event.remove({FILTER});`
 * Example: `event.remove({output: '#minecraft:wool'})` - remove all wool recipes
 *
 ** See L11 of https://mods.latvian.dev/books/kubejs/page/recipeeventjs for more details.
 */
onEvent("recipes", (event) => {
  //! AE2 Fixes
  // Create fluix mixing
  event.remove({ id: "create:compat/ae2/mixing/fluix_crystal" });
  // Dust
  event.remove({ id: "create:compat/ae2/milling/fluix_crystal" });
  event.remove({ id: "create:compat/ae2/milling/certus_quartz" });
  event.remove({ id: "create:compat/ae2/milling/nether_quartz" });
  event.remove({ id: "create:compat/ae2/milling/ender_pearl" });
  event.remove({ id: "create:compat/ae2/milling/iron" });
  event.remove({ id: "create:compat/ae2/milling/gold" });

  //! Remove tech ore processing recipes
  const removeTechOre = [
    "byg:pervaded_netherrack",
    "byg:lignite_ore",
    "byg:anthracite_ore",
    "druidcraft:amber",
    "druidcraft:moonstone",
    "druidcraft:fiery_glass",
    "druidcraft:rockroot",
    "quark:biotite",
    "#forge:gems/certus_quartz",
    "#forge:dimensional_ores",
  ];

  for (let entry of removeTechOre) {
    event.remove({ result: entry, type: "immersiveengineering:crusher" });
    event.remove({ results: entry, type: "create:crushing" });
    event.remove({ result: entry, type: "thermal:pulverizer" });
    event.remove({ result: entry, type: "thermal:smelter" });
  }

  //! Remove dynamo fuels
  const removeDynamo = [
    // New ruby fuel
    {
      item: "thermal:ruby",
      dynamos: ["lapidary"],
    },
  ];
  for (let entry of removeDynamo) {
    for (let dynamo of entry.dynamos) {
      event.remove({ ingredient: entry.item, type: `thermal:${dynamo}_fuel` });
    }
  }

  //! Remove for new recipe - removes ALL crafting recipes
  const removeForRecipe = [
    // Sands
    "byg:pink_sand",
    "byg:purple_sand",
    "byg:blue_sand",

    // Chunk Loaders
    // "chickenchunks:spot_loader",
    // "chickenchunks:chunk_loader",

    // Click machine
    "clickmachine:auto_clicker",

    // Moonstone
    "druidcraft:moonstone_helmet",
    "druidcraft:moonstone_chestplate",
    "druidcraft:moonstone_leggings",
    "druidcraft:moonstone_boots",
    "druidcraft:moonstone_sword",
    "druidcraft:moonstone_shovel",
    "druidcraft:moonstone_pickaxe",
    "druidcraft:moonstone_axe",
    "druidcraft:moonstone_hoe",
    "druidcraft:moonstone_sickle",

    // Vanilla Jetpacks
    // /simplyjetpacks:(thruster|jetpack)_vanilla[1-4]{1}/,

    // Blueberries
    "byg:blueberry_pie",
    "druidcraft:blueberry_muffin",

    // Chisels and bits stuff
    "chiselsandbits:bitsaw_netherite",
    "chiselsandbits:chisel_netherite",
  ];
  for (let item of removeForRecipe) {
    event.remove({ output: item });
  }

  //! Remove by ID
  // New concrete
  event.remove({ id: "immersiveengineering:crafting/concrete2" });
  // Beyond earth steel
  event.remove({ id: "beyond_earth:steel_ingot_blasting" });

  //! Completely remove items
  const completelyRemove = [
    // Iron Jetpacks
    // "ironjetpacks:strap",
    // "ironjetpacks:basic_coil",
    // "ironjetpacks:advanced_coil",
    // "ironjetpacks:elite_coil",
    // "ironjetpacks:ultimate_coil",
  ];
  for (let item of completelyRemove) {
    event.remove({ output: item });
    event.remove({ input: item });
  }
});
