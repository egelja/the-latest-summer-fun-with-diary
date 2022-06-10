// priority: 0
/*
 * Replace recipe outputs
 *
 * Template: `event.replaceOutput({FILTER}, "MOD:OLD_ITEM", "MOD:NEW_ITEM", boolean exact);`
 *
 ** See L103 of https://mods.latvian.dev/books/kubejs/page/recipeeventjs for more details.
 */
onEvent("recipes", (event) => {
  // Thermal outputs
  event.replaceOutput({}, "thermal:cinnabar", "#forge:gems/cinnabar");
  event.replaceOutput({}, "thermal:sulfur", "#forge:gems/sulfur");
  event.replaceOutput({}, "thermal:apatite", "#forge:gems/apatite");
  event.replaceOutput({}, "thermal:niter", "#forge:gems/niter");
  event.replaceOutput({}, "thermal:bitumen", "#forge:gems/bitumen");
  event.replaceOutput({}, "thermal:coal_coke", "#forge:gems/coal_coke");
  event.replaceOutput({}, "thermal:sawdust", "emendatusenigmatica:wood_dust");
});
