// HACK: Force server reload so item tags are loaded
// Integrated server
onEvent("player.logged_in", (event) => {
  let server = event.getServer();

  // Fix error on first world join in singleplayer
  if (!server.isDedicated() && !event.hasGameStage("new_world_reload")) {
    server.runCommand("/reload");
    event.addGameStage("new_world_reload");
  }
});

// Dedicated server
onEvent("server.load", (event) => {
  let server = event.getServer();

  if (server.isDedicated()) {
    server.schedule(30 * SECOND, server, (callback) => {
      callback.data.runCommand("/reload");
    });
  }
});
