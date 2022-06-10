// Crafting!

import crafttweaker.api.item.IItemStack;


// Clicking Machine Recipe Change
// ---------------------------------------------------------------------------------------------------------------------------------------------
craftingTable.removeByName("clickmachine:auto_clicker");
// ---------------------------------------------------------------------------------------------------------------------------------------------


// FOOD!!!!!!!!!!!!!!! - This is really just brewing
// ---------------------------------------------------------------------------------------------------------------------------------------------
brewing.addRecipe(<item:kubejs:coffee>, <tag:items:forge:crops/coffee>, <item:minecraft:potion>.withTag({Potion: "minecraft:water" as string}));
brewing.addRecipe(<item:kubejs:tea>, <tag:items:forge:crops/tea>, <item:minecraft:potion>.withTag({Potion: "minecraft:water" as string}));
brewing.addRecipe(<item:kubejs:beer>, <tag:items:forge:crops/barley>, <item:minecraft:potion>.withTag({Potion: "minecraft:water" as string}));
// ---------------------------------------------------------------------------------------------------------------------------------------------

