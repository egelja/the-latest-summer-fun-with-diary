/*
 * KubeJS and JEI integration.
 *
 * See https://mods.latvian.dev/books/kubejs/page/jei-integration for more info.
 */
onEvent("jei.hide.items", (event) => {
  event.hide("immersiveengineering:slag");
  event.hide("emendatusenigmatica:certus_quartz_gem");
});
