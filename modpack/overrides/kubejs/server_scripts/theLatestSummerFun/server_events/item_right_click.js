// priority: 0
/*
 * Fires when a right clicks with an item.
 *
 ** See
 ** https://github.com/KubeJS-Mods/KubeJS/blob/1.18/main/common/src/main/java/dev/latvian/mods/kubejs/item/ItemRightClickEventJS.java
 ** and https://canary.discord.com/channels/303440391124942858/965536689172910090/965541276164456489
 ** for possible methods and examples.
 */
onEvent("item.right_click", (event) => {
  if (event.item.id == "kubejs:smeltery_kit") {
    event.player.give("tconstruct:smeltery_controller");
    event.player.give("64x tconstruct:seared_bricks");
    event.player.give("2x tconstruct:seared_fuel_tank");
    event.player.give("4x tconstruct:seared_drain");
    event.player.give("4x tconstruct:seared_faucet");
    event.player.give("2x tconstruct:seared_table");
    event.player.give("2x tconstruct:seared_basin");
    event.player.give("6x tconstruct:seared_ladder");
    event.player.give("tconstruct:materials_and_you");

    // TODO check if works
    event.server.runCommand(
      `execute at ${event.player} run playsound minecraft:entity.firework.blast player ${event.player}`
    );

    event.player.tell(Text.of("Read the book if you need help!"));

    event.item.count = 0;
    event.item.count--;
  }
});
