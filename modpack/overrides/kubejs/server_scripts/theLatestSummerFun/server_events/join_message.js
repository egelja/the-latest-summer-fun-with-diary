// priority: 0
/*
 * Fires when a player logs onto a server.
 *
 ** See
 ** https://github.com/KubeJS-Mods/KubeJS/blob/main/common/src/main/java/dev/latvian/kubejs/player/PlayerEventJS.java
 ** for possible methods.
 */
onEvent("player.logged_in", (event) => {
  let player = event.getPlayer();

  // Join message
  player.tell(
    Text.join(Text.of(" "), [
      Text.of("Welcome to the server!"),
      Text.of("This server has QuickHomes/Spawns/TPA and some Vanilla Tweaks datapacks!"),
    ])
  );
  player.tell(
    Text.join(Text.of(" "), [
      Text.of("Type in"),
      Text.green("/home"),
      Text.of("or"),
      Text.green("/spawn"),
      Text.of("to go to spawn/home, and"),
      Text.green("/sethome"),
      Text.of("to set your home."),
    ])
  );
  player.tell(
    Text.join(Text.of(" "), [
      Text.of("Use"),
      Text.green("/trigger"),
      Text.of("and then tab to see the datapack commands. For example, type in"),
      Text.green("/trigger ch_toggle"),
      Text.of("to turn on a coordinate HUD."),
    ])
  );
});
