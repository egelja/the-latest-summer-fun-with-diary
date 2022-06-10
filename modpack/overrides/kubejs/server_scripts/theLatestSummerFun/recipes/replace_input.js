// priority: 0
/*
 * Replace recipe inputs
 *
 * Template: `event.replaceInput({FILTER}, "MOD:OLD_ITEM", "MOD:NEW_ITEM", boolean exact);`
 *
 ** See L100 of https://mods.latvian.dev/books/kubejs/page/recipeeventjs for more details.
 */
onEvent("recipes", (event) => {
  // Replace Raritanium with good-old copper
  event.replaceInput({}, "calemiutils:raritanium", "#forge:ingots/copper");

  // Thermal
  event.replaceInput({}, "thermal:cinnabar", "#forge:gems/cinnabar");
  event.replaceInput({}, "thermal:sulfur", "#forge:gems/sulfur");
  event.replaceInput({}, "thermal:apatite", "#forge:gems/apatite");
  event.replaceInput({}, "thermal:niter", "#forge:gems/niter");
  event.replaceInput({}, "thermal:bitumen", "#forge:gems/bitumen", true);
  event.replaceInput({}, "thermal:coal_coke", "#forge:gems/coal_coke");

  // Waystones
  event.replaceInput({}, "waystones:warp_stone", "minecraft:lodestone");
});
