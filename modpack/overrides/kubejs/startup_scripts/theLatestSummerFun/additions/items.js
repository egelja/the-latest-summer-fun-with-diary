// priority: 100
/*
 * Texture for item `test` has to be placed in `kubejs/assets/kubejs/textures/item/test.png`
 * Custom models from Blockbench are placed in `kubejs/assets/kubejs/models/item/test.json`
 *
 * Template: `event.create("test").displayName("Test Item");`
 *
 ** More details at https://mods.latvian.dev/books/kubejs/page/custom-items.
 */
onEvent("item.registry", (event) => {
  /*
   ! Regular items
   *
   ? Hey, can I add bottles and bowls?
   ? Yes but you eat them https://github.com/KubeJS-Mods/KubeJS/issues/98.
   ? YAY! EXTRA FIBER AND SHARPER TEETH.
   */
  // Bottled Syrup - glass_bottle
  event
    .create("syrup_bottle")
    .displayName("Bottled Syrup")
    .containerItem("minecraft:glass_bottle")
    .group("food")
    .food((foodBuilder) => {
      foodBuilder
        .hunger(1)
        .saturation(0.0)
        .eaten((event) => {
          if (!event.getPlayer().isCreativeMode()) {
            event.getServer().scheduleInTicks(1, event.getPlayer(), (callback) => {
              callback.data.giveInHand(Item.of("minecraft:glass_bottle"));
            });
          }
        });
    });
  // Peanut Butter
  event
    .create("peanut_butter")
    .displayName("Peanut Butter")
    .group("food")
    .food((foodBuilder) => {
      foodBuilder.hunger(1).saturation(0.0);
    });
  // Jelly
  event
    .create("jelly")
    .displayName("Jelly")
    .containerItem("minecraft:glass_bottle")
    .group("food")
    .food((foodBuilder) => {
      foodBuilder
        .hunger(1)
        .saturation(0.0)
        .eaten((event) => {
          if (!event.getPlayer().isCreativeMode()) {
            event.getServer().scheduleInTicks(1, event.getPlayer(), (callback) => {
              callback.data.giveInHand(Item.of("minecraft:glass_bottle"));
            });
          }
        });
    });
  // Cheese
  event
    .create("cheese")
    .displayName("Cheese")
    .group("food")
    .food((foodBuilder) => {
      foodBuilder.hunger(1).saturation(0.0);
    });
  // Waffle
  event
    .create("waffle")
    .displayName("Waffle")
    .group("food")
    .food((foodBuilder) => {
      foodBuilder.hunger(6).saturation(0.5);
    });
  // Popcorn
  event
    .create("popcorn")
    .displayName("Popcorn")
    .group("food")
    .food((foodBuilder) => {
      foodBuilder.hunger(4).saturation(0.5);
    });
  // Sushi
  event
    .create("sushi")
    .displayName("Sushi")
    .group("food")
    .food((foodBuilder) => {
      foodBuilder.hunger(4).saturation(0.5);
    });
  // Onion Rings
  event
    .create("onion_rings")
    .displayName("Onion Rings")
    .group("food")
    .food((foodBuilder) => {
      foodBuilder.hunger(2).saturation(0.3);
    });
  // Coffee
  event
    .create("coffee")
    .displayName("Coffee")
    .containerItem("minecraft:glass_bottle")
    .group("food")
    .food((foodBuilder) => {
      foodBuilder
        .hunger(0)
        .saturation(0.0)
        .alwaysEdible()
        .effect("minecraft:speed", 600, 0, 1.0)
        .eaten((event) => {
          if (!event.getPlayer().isCreativeMode()) {
            event.getServer().scheduleInTicks(1, event.getPlayer(), (callback) => {
              callback.data.giveInHand(Item.of("minecraft:glass_bottle"));
            });
          }
        });
    });
  // Tea
  event
    .create("tea")
    .displayName("Tea")
    .containerItem("minecraft:glass_bottle")
    .group("food")
    .food((foodBuilder) => {
      foodBuilder
        .hunger(0)
        .saturation(0.0)
        .alwaysEdible()
        .effect("minecraft:regeneration", 300, 0, 1.0)
        .eaten((event) => {
          if (!event.getPlayer().isCreativeMode()) {
            event.getServer().scheduleInTicks(1, event.getPlayer(), (callback) => {
              callback.data.giveInHand(Item.of("minecraft:glass_bottle"));
            });
          }
        });
    });
  // Beer
  event
    .create("beer")
    .displayName("Beer")
    .containerItem("minecraft:glass_bottle")
    .group("food")
    .food((foodBuilder) => {
      foodBuilder
        .hunger(0)
        .saturation(0.0)
        .alwaysEdible()
        .effect("minecraft:nausea", 100, 0, 1.0)
        .eaten((event) => {
          if (!event.getPlayer().isCreativeMode()) {
            event.getServer().scheduleInTicks(1, event.getPlayer(), (callback) => {
              callback.data.giveInHand(Item.of("minecraft:glass_bottle"));
            });
          }
        });
    });
  // Hoppy Beer
  event
    .create("hoppy_beer")
    .displayName("Hoppy Beer")
    .containerItem("minecraft:glass_bottle")
    .group("food")
    .food((foodBuilder) => {
      foodBuilder
        .hunger(0)
        .saturation(0.0)
        .alwaysEdible()
        .effect("minecraft:nausea", 100, 0, 1.0)
        .effect("minecraft:resistance", 300, 1, 1.0)
        .eaten((event) => {
          if (!event.getPlayer().isCreativeMode()) {
            event.getServer().scheduleInTicks(1, event.getPlayer(), (callback) => {
              callback.data.giveInHand(Item.of("minecraft:glass_bottle"));
            });
          }
        });
    });
  // Burger
  event
    .create("burger")
    .displayName("Burger")
    .group("food")
    .food((foodBuilder) => {
      foodBuilder.hunger(12).saturation(0.5);
    });
  // Pizza
  event
    .create("pizza")
    .displayName("Pizza")
    .group("food")
    .food((foodBuilder) => {
      foodBuilder.hunger(6).saturation(0.5);
    });
  // Calzone
  event
    .create("calzone")
    .displayName("Calzone")
    .group("food")
    .food((foodBuilder) => {
      foodBuilder.hunger(6).saturation(0.5);
    });
  // PB&J Sandwich
  event
    .create("sandwich_pbj")
    .displayName("PB&J Sandwich")
    .group("food")
    .food((foodBuilder) => {
      foodBuilder.hunger(6).saturation(0.4);
    });
  // BLT Sandwich
  event
    .create("sandwich_blt")
    .displayName("BLT Sandwich")
    .group("food")
    .tooltip("What do you mean it isn't 'bacon leaves tomato'?")
    .food((foodBuilder) => {
      foodBuilder.hunger(10).saturation(0.4);
    });
  // Stir Fry
  event
    .create("stir_fry")
    .displayName("Stir Fry")
    .containerItem("minecraft:bowl")
    .group("food")
    .food((foodBuilder) => {
      foodBuilder
        .hunger(10)
        .saturation(0.6)
        .eaten((event) => {
          if (!event.getPlayer().isCreativeMode()) {
            event.getServer().scheduleInTicks(1, event.getPlayer(), (callback) => {
              callback.data.giveInHand(Item.of("minecraft:bowl"));
            });
          }
        });
    });
  // Marshmallow
  event
    .create("marshmallow")
    .displayName("Marshmallow")
    .group("food")
    .food((foodBuilder) => {
      foodBuilder.hunger(1).saturation(0.0);
    });
  // S'more
  event
    .create("s_more")
    .displayName("S'more")
    .group("food")
    .food((foodBuilder) => {
      foodBuilder.hunger(5).saturation(0.6);
    });

  /*
   !  E P I C  items
   */
  // Redstone Espresso
  event
    .create("redstone_espresso")
    .displayName("Redstone Espresso")
    .containerItem("minecraft:glass_bottle")
    .group("food")
    .rarity(RARITY_EPIC)
    .food((foodBuilder) => {
      foodBuilder
        .hunger(0)
        .saturation(0.0)
        .alwaysEdible()
        .effect("minecraft:speed", 1200, 1, 1.0)
        .effect("minecraft:haste", 1200, 0, 1.0)
        .eaten((event) => {
          if (!event.getPlayer().isCreativeMode()) {
            event.getServer().scheduleInTicks(1, event.getPlayer(), (callback) => {
              callback.data.giveInHand(Item.of("minecraft:glass_bottle"));
            });
          }
        });
    });
  // Luminescent Tea
  event
    .create("glowstone_tea")
    .displayName("Luminescent Tea")
    .containerItem("minecraft:glass_bottle")
    .group("food")
    .rarity(RARITY_EPIC)
    .food((foodBuilder) => {
      foodBuilder
        .hunger(0)
        .saturation(0.0)
        .alwaysEdible()
        .effect("minecraft:regeneration", 600, 1, 1.0)
        .effect("cofh_core:panacea", 600, 0, 1.0)
        .eaten((event) => {
          if (!event.getPlayer().isCreativeMode()) {
            event.getServer().scheduleInTicks(1, event.getPlayer(), (callback) => {
              callback.data.giveInHand(Item.of("minecraft:glass_bottle"));
            });
          }
        });
    });
  // Onion Singularity Sandwich
  event
    .create("onion_sandwich")
    .displayName("Onion Singularity Sandwich")
    .group("food")
    .tooltip("Near-infinite density between two slices of what used to be bread.")
    .rarity(RARITY_EPIC)
    .food((foodBuilder) => {
      foodBuilder
        .hunger(20)
        .saturation(0.5)
        .alwaysEdible()
        .effect("minecraft:nausea", 1200, 0, 1.0)
        .effect("minecraft:slowness", 600, 5, 1.0);
    });
  // Rad-ish
  event
    .create("rad_ish")
    .displayName("Rad-ish")
    .group("food")
    .tooltip(
      "Scientific studies correlating consumption to radiation poisoning have been inconclusive."
    )
    .rarity(RARITY_EPIC)
    .food((foodBuilder) => {
      foodBuilder.hunger(6).saturation(0.3).effect("minecraft:glowing", 600, 0, 0.5);
    });
  // Capricorn
  event
    .create("capricorn")
    .displayName("Capricorn")
    .group("food")
    .rarity(RARITY_EPIC)
    .food((foodBuilder) => {
      foodBuilder.hunger(6).saturation(0.3).effect("minecraft:night_vision", 600, 0, 0.5);
    });
  // Bully Peanut
  event
    .create("bully_peanut")
    .displayName("Bully Peanut")
    .group("food")
    .rarity(RARITY_EPIC)
    .food((foodBuilder) => {
      foodBuilder.hunger(8).saturation(0.2);
    });
  // Sad Pistachio
  event
    .create("sad_pistachio")
    .displayName("Sad Pistachio")
    .group("food")
    .rarity(RARITY_EPIC)
    .food((foodBuilder) => {
      foodBuilder.hunger(8).saturation(0.2);
    });
  // Bread
  event
    .create("bread")
    .displayName("Bread")
    .group("food")
    .tooltip("Doesn't seem quite right.")
    .rarity(RARITY_EPIC)
    .food((foodBuilder) => {
      foodBuilder.hunger(5).saturation(0.5);
    });
  // Gamer Neapolitan
  event
    .create("gamer_neapolitan")
    .displayName("Gamer Neapolitan")
    .containerItem("minecraft:bowl")
    .group("food")
    .rarity(RARITY_EPIC)
    .food((foodBuilder) => {
      foodBuilder
        .hunger(10)
        .saturation(0.25)
        .eaten((event) => {
          if (!event.getPlayer().isCreativeMode()) {
            event.getServer().scheduleInTicks(1, event.getPlayer(), (callback) => {
              callback.data.giveInHand(Item.of("minecraft:bowl"));
            });
          }
        });
    });
  // Pb&J Sandwich
  event
    .create("sandwich_lead_jelly")
    .displayName("Pb&J Sandwich")
    .group("food")
    .tooltip("A new twist on an old classic!")
    .rarity(RARITY_EPIC)
    .food((foodBuilder) => {
      foodBuilder
        .hunger(20)
        .saturation(0.5)
        .effect("minecraft:poison", 600, 1, 1.0)
        .effect("minecraft:resistance", 600, 1, 1.0)
        .effect("minecraft:nausea", 1200, 0, 0.5);
    });
});
