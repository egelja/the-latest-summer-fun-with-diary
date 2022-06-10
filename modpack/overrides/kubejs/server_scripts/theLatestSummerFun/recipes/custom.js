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
  event.custom({
    type: "botania:elven_trade",
    ingredients: [Ingredient.of("#forge:gems/sapphire").toJson()],
    output: [Item.of("botania:life_essence").toResultJson()],
  });
  event.custom({
    type: "botania:elven_trade",
    ingredients: [Ingredient.of("#forge:storage_blocks/sapphire").toJson()],
    output: [Item.of("botania:gaia_ingot").toResultJson()],
  });
  /*
   ? Hello, brewing?
   ? Brewing machine BROKEN https://github.com/KubeJS-Mods/KubeJS/issues/68
   ? Understandable have an AMAZING DAY.
   */
});
