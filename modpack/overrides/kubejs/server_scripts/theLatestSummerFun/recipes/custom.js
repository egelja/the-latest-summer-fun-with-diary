// priority: 0
/*
 * Custom crafting recipes.
 * These are pretty much JSONs written using JS.
 *
 * Template:
 * event.custom({
 *   type: "MOD:TYPE",
 *   ingredients: [
 *     Ingredient.of(...).toJson()
 *   ],
 *   results: [
 *     Item.of(...).toResultJson().withChance(1.0)
 *   ],
 *   // Any other fields available, such as `processingTime`
 * })
 *
 ** See L73 of https://mods.latvian.dev/books/kubejs/page/recipeeventjs for more details.
 */
onEvent("recipes", (event) => {
  // Botania
  event.recipes.botania.elven_trade(["#forge:gems/sapphire"], "botania:life_essence");
  event.recipes.botania.elven_trade(["#forge:storage_blocks/sapphire"], "botania:gaia_ingot");
  /*
   ? Hello, brewing?
   ? Brewing machine BROKEN https://github.com/KubeJS-Mods/KubeJS/issues/68
   ? Understandable have an AMAZING DAY.
   */
});
