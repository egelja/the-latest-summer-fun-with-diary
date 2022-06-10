// priority: 0
/*
 * Block crafting recipes (other than crafting table)
 * Most of these come from integration mods.
 *
 * Template: `event.recipes.MOD.TYPE()`
 * Example: `event.recipes.minecraft.smelting()`
 * Shortcuts available for minecraft recipes.
 *
 ** See L36 of  https://mods.latvian.dev/books/kubejs/page/recipeeventjs for more details.
 */
onEvent("recipes", (event) => {
  //! Pulverizing and milling for all dusts
  for (let tag of global["unifytags"]) {
    if (!tag.match(/(gems|ingots)/)) {
      continue;
    }

    let tagItem = global["tagitems"][tag];
    let dustItem = global["tagitems"][tag.replace(/gems|ingots/, "dusts")];

    if (tagItem && dustItem) {
      event.recipes.thermal.pulverizer(dustItem, tagItem).energy(2000);
      event.recipes.immersiveengineering.crusher(dustItem, tagItem).energy(3000);
      event.recipes.create.milling(dustItem, tagItem);
    }
  }
  // Sky stone dust
  event.recipes.thermal
    .pulverizer("appliedenergistics2:sky_dust", "appliedenergistics2:sky_stone_block")
    .energy(2000);
  event.recipes.immersiveengineering
    .crusher("appliedenergistics2:sky_dust", "appliedenergistics2:sky_stone_block")
    .energy(3000);
  // Ender dust
  event.recipes.thermal
    .pulverizer("emendatusenigmatica:ender_dust", "#forge:ender_pearls")
    .energy(2000);
  event.recipes.immersiveengineering
    .crusher("emendatusenigmatica:ender_dust", "#forge:ender_pearls")
    .energy(3000);
  event.recipes.create.milling("emendatusenigmatica:ender_dust", "#forge:ender_pearls");

  //! AE2 fixes
  // Fluix mixing
  event.recipes.create.mixing("2x #forge:gems/fluix", [
    "#forge:dusts/redstone",
    Fluid.of("minecraft:water", 250),
    "#forge:gems/charged_certus_quartz",
    "#forge:gems/quartz",
  ]);
  // Certus to nether quartz
  event
    .smelting(global["tagitems"]["forge:dusts/quartz"], "#forge:dusts/certus_quartz")
    .xp(1)
    .cookingTime(300);

  //! Ore processing
  //$ Default processed ores: doubling + rich slag + gravel + cobblestone
  const defaultOreProcessing = [
    //** Druidcraft
    {
      input: "druidcraft:rockroot_ore",
      grinding: {
        primaryOutput: "druidcraft:rockroot",
        secondaryOutput: null,
        multipliers: {
          amount: 2,
          mainChance: 1,
        },
      },
      smelting: {
        output: "druidcraft:rockroot",
        count: 2,
      },
    },
    {
      input: "druidcraft:amber_ore",
      grinding: {
        primaryOutput: "druidcraft:amber",
        secondaryOutput: null,
        multipliers: {
          amount: 1,
          mainChance: 1,
        },
      },
      smelting: {
        output: "druidcraft:amber",
        count: 1,
      },
    },
    {
      input: "druidcraft:moonstone_ore",
      grinding: {
        primaryOutput: "druidcraft:moonstone",
        secondaryOutput: null,
        multipliers: {
          amount: 1,
          mainChance: 1,
        },
      },
      smelting: {
        output: "druidcraft:moonstone",
        count: 1,
      },
    },
    {
      input: "druidcraft:fiery_glass_ore",
      grinding: {
        primaryOutput: "druidcraft:fiery_glass",
        secondaryOutput: "#forge:gems/cinnabar",
        multipliers: {
          amount: 3,
          mainChance: 1,
        },
      },
      smelting: {
        output: "druidcraft:fiery_glass",
        count: 3,
      },
    },
    //** Quark
    {
      input: "quark:biotite_ore",
      grinding: {
        primaryOutput: "quark:biotite",
        secondaryOutput: "#forge:end_stones",
        multipliers: {
          amount: 3,
          mainChance: 1,
        },
      },
      smelting: {
        output: "quark:biotite",
        count: 2,
      },
    },
    //** BYG Ores
    {
      input: "byg:pervaded_netherrack",
      grinding: {
        primaryOutput: "#forge:dusts/glowstone",
        secondaryOutput: "#forge:gems/sulfur",
        multipliers: {
          amount: 3,
          mainChance: 3,
        },
      },
      smelting: {
        output: "#forge:dusts/glowstone",
        count: 3,
      },
    },
    {
      input: "byg:lignite_ore",
      grinding: {
        primaryOutput: "byg:lignite",
        secondaryOutput: "#forge:gems/sulfur",
        multipliers: {
          amount: 3,
          mainChance: 3,
        },
      },
      smelting: {
        output: "byg:lignite",
        count: 4,
      },
    },
    {
      input: "byg:anthracite_ore",
      grinding: {
        primaryOutput: "byg:anthracite",
        secondaryOutput: "#forge:gems/sulfur",
        multipliers: {
          amount: 1,
          mainChance: 3,
        },
      },
      smelting: {
        output: "byg:anthracite",
        count: 2,
      },
    },
    //** AE2 Ores
    {
      input: "#forge:ores/certus_quartz",
      grinding: {
        primaryOutput: "#forge:gems/certus_quartz",
        secondaryOutput: "#forge:dusts/certus_quartz",
        multipliers: {
          amount: 1,
          mainChance: 1,
        },
      },
      smelting: {
        output: "#forge:gems/certus_quartz",
        count: 1,
      },
    },
    {
      input: "#forge:ores/charged_certus_quartz",
      grinding: {
        primaryOutput: "#forge:gems/charged_certus_quartz",
        secondaryOutput: "#forge:dusts/certus_quartz",
        multipliers: {
          amount: 1,
          mainChance: 1,
        },
      },
      smelting: {
        output: "#forge:gems/charged_certus_quartz",
        count: 1,
      },
    },
    //** RFTools DimOres
    {
      input: "#forge:dimensional_ores",
      grinding: {
        primaryOutput: "rftoolsbase:dimensionalshard",
        secondaryOutput: "rftoolsbase:dimensionalshard",
        multipliers: {
          amount: 1,
          mainChance: 1,
        },
      },
      smelting: {
        output: "rftoolsbase:dimensionalshard",
        count: 1,
      },
    },
    //** Powah!
    {
      input: "powah:uraninite_ore_poor",
      grinding: {
        primaryOutput: "powah:uraninite_raw_poor",
        secondaryOutput: null,
        multipliers: {
          amount: 1,
          mainChance: 1,
        },
      },
      smelting: {
        output: "powah:uraninite",
        count: 1,
      },
    },
    {
      input: "powah:uraninite_ore",
      grinding: {
        primaryOutput: "powah:uraninite_raw",
        secondaryOutput: "powah:uraninite_raw_poor",
        multipliers: {
          amount: 1,
          mainChance: 1,
        },
      },
      smelting: {
        output: "powah:uraninite",
        count: 2,
      },
    },
    {
      input: "powah:uraninite_ore_dense",
      grinding: {
        primaryOutput: "powah:uraninite_raw_dense",
        secondaryOutput: "powah:uraninite_raw",
        multipliers: {
          amount: 1,
          mainChance: 1,
        },
      },
      smelting: {
        output: "powah:uraninite",
        count: 4,
      },
    },
  ];
  for (let entry of defaultOreProcessing) {
    //$ Grinding recipes
    //** Setup
    let outputAmount = 2 * entry.grinding.multipliers.amount;
    let mainOutputChance = 0.5 * entry.grinding.multipliers.mainChance;

    // 2 of primary at 50% chance, gravel with 20% chance
    let pulverizerOutputs = [
      Item.of(entry.grinding.primaryOutput, outputAmount).withChance(mainOutputChance),
      Item.of("#forge:gravel").withChance(0.2),
    ];
    // 25% chance of secondary cobblestone output
    let ieCrusherSecondaries = [Item.of("#forge:cobblestone").withChance(0.25)];
    // 2 of primary, one more at 25% chance, and cobblestone at 12% chance
    let createCrusherOutputs = [
      Item.of(entry.grinding.primaryOutput, outputAmount),
      Item.of(entry.grinding.primaryOutput, entry.grinding.multipliers.amount).withChance(0.25),
      Item.of("#forge:cobblestone").withChance(0.12),
    ];
    if (entry.grinding.secondaryOutput) {
      // Add secondary output if available
      pulverizerOutputs.push(Item.of(entry.grinding.secondaryOutput).withChance(0.15));
      ieCrusherSecondaries.push(Item.of(entry.grinding.secondaryOutput).withChance(0.5));
    }
    //** Register recipes
    event.recipes.thermal.pulverizer(pulverizerOutputs, entry.input).energy(4000);
    event.recipes.immersiveengineering
      .crusher(
        Item.of(entry.grinding.primaryOutput, outputAmount),
        entry.input,
        ieCrusherSecondaries
      )
      .energy(6000);
    event.recipes.create.crushing(createCrusherOutputs, entry.input);

    //$ Smelting recipes
    //** Setup
    // Primary output at 150% chance, rich slag at 15% chance
    let smelterOutputs = [
      Item.of(entry.smelting.output, entry.smelting.count).withChance(1.5),
      Item.of("thermal:rich_slag").withChance(0.15),
    ];
    //** Register recipes
    event.recipes.thermal.smelter(smelterOutputs, entry.input).energy(3200);
  }
  //$ Other recipes
  //** Vanilla Smelting
  // DimShards
  event
    .smelting("rftoolsbase:dimensionalshard", "#forge:dimensional_ores")
    .xp(0.5)
    .cookingTime(200);
  // Pendorite
  event.smelting("byg:pendorite_scraps", "byg:pendorite_ore").xp(0.5).cookingTime(200);
  // Amertrine
  event.smelting("byg:ametrine_gems", "byg:ametrine_ore").xp(0.5).cookingTime(200);
  // Anthracite
  event.smelting("byg:anthracite", "byg:anthracite_ore").xp(0.5).cookingTime(200);
  // Lignite
  event.smelting("byg:lignite", "byg:lignite_ore").xp(0.5).cookingTime(200);
  //** Create Crushing
  event.recipes.create.crushing(
    [
      Item.of("#forge:dusts/redstone", 8),
      Item.of("#forge:dusts/redstone", 4).withChance(0.25),
      Item.of("byg:cryptic_stone").withChance(0.12),
    ],
    "byg:cryptic_redstone_ore"
  );

  //! Melting Recipes
  event.recipes.thermal.crucible(Fluid.of("thermal:resin", 250), "druidcraft:amber").energy(2000);

  //! Dynamo fuels
  //$ Lapidary
  event.recipes.thermal.lapidary_fuel("druidcraft:amber").energy(20000);
  event.recipes.thermal.lapidary_fuel("druidcraft:moonstone").energy(500000);
  event.recipes.thermal.lapidary_fuel("botania:mana_diamond").energy(650000);
  event.recipes.thermal.lapidary_fuel("botania:dragonstone").energy(750000);
  event.recipes.thermal.lapidary_fuel("psi:psigem").energy(600000);
  event.recipes.thermal.lapidary_fuel("eidolon:shadow_gem").energy(650000);
  event.recipes.thermal.lapidary_fuel("astralsorcery:aquamarine").energy(40000);
  event.recipes.thermal.lapidary_fuel("astralsorcery:resonating_gem").energy(50000);
  event.recipes.thermal.lapidary_fuel("astralsorcery:rock_crystal").energy(125000);
  event.recipes.thermal.lapidary_fuel("astralsorcery:celestial_crystal").energy(250000);
  event.recipes.thermal.lapidary_fuel("#forge:gems/certus_quartz").energy(40000);
  event.recipes.thermal.lapidary_fuel("#forge:gems/fluix").energy(100000);
  event.recipes.thermal.lapidary_fuel("byg:ametrine_gems").energy(500000);
  event.recipes.thermal.lapidary_fuel("#forge:gems/ruby").energy(1000000);
  //$ Magmatic
  event.recipes.thermal.magmatic_fuel(Fluid.of("tconstruct:blazing_blood", 1000)).energy(100000);

  //! Vanilla jetpack recipes
  // Netherite Thruster
  event.smithing(
    "simplyjetpacks:thruster_vanilla4",
    "simplyjetpacks:thruster_vanilla3",
    "minecraft:netherite_ingot"
  );

  //! Coral growing
  const corals = Ingredient.of(/^(byg|upgrade_aquatic):(?!dead).+_coral(|_fan|_shower)$/)
    .getStacks()
    .toArray();
  for (let coral of corals) {
    event.recipes.thermal.insolator(`2x ${coral.getId()}`, coral.getId()).water(750).energy(36000);
  }

  //! C&B Smithing
  // Bitsaw
  event.smithing(
    "chiselsandbits:bitsaw_netherite",
    "chiselsandbits:bitsaw_diamond",
    "minecraft:netherite_ingot"
  );
  event.smithing(
    "chiselsandbits:chisel_netherite",
    "chiselsandbits:chisel_diamond",
    "minecraft:netherite_ingot"
  );

  //! Moonstone
  const moonstoneItems = [
    // Armor
    "helmet",
    "chestplate",
    "leggings",
    "boots",
    // Tools
    "sword",
    "shovel",
    "pickaxe",
    "axe",
    "hoe",
  ];
  for (let item of moonstoneItems) {
    event.smithing(
      `druidcraft:moonstone_${item}`,
      `minecraft:netherite_${item}`,
      "druidcraft:moonstone"
    );
  }
  event.smithing(
    "druidcraft:moonstone_sickle",
    "druidcraft:diamond_sickle",
    "druidcraft:moonstone"
  );

  //! Coral Pulverizing
  // Blue corals
  const blueCorals = [
    "minecraft:tube_coral",
    "minecraft:tube_coral_fan",
    "upgrade_aquatic:acan_coral",
    "upgrade_aquatic:acan_coral_fan",
    "upgrade_aquatic:petal_coral",
    "upgrade_aquatic:petal_coral_fan",
    "upgrade_aquatic:prismarine_coral",
    "upgrade_aquatic:prismarine_coral_fan",
    "upgrade_aquatic:prismarine_coral_shower",
    "byg:warped_coral",
    "byg:warped_coral_fan",
  ];
  for (let coral of blueCorals) {
    event.recipes.thermal.pulverizer("#forge:sand/blue", coral);
    event.recipes.immersiveengineering.crusher("#forge:sand/blue", coral);
    event.recipes.create.crushing("#forge:sand/blue", coral);
  }

  // Pink corals
  const pinkCorals = [
    "minecraft:bubble_coral",
    "minecraft:brain_coral",
    "minecraft:bubble_coral_fan",
    "minecraft:brain_coral_fan",
    "minecraft:fire_coral",
    "minecraft:fire_coral_fan",
  ];
  for (let coral of pinkCorals) {
    event.recipes.thermal.pulverizer("#forge:sand/pink", coral);
    event.recipes.immersiveengineering.crusher("#forge:sand/pink", coral);
    event.recipes.create.crushing("#forge:sand/pink", coral);
  }

  // Purple corals
  const purpleCorals = ["upgrade_aquatic:silk_coral", "upgrade_aquatic:silk_coral_fan"];
  for (let coral of purpleCorals) {
    event.recipes.thermal.pulverizer("#forge:sand/purple", coral);
    event.recipes.immersiveengineering.crusher("#forge:sand/purple", coral);
    event.recipes.create.crushing("#forge:sand/purple", coral);
  }

  //! Gem -> gear compressing
  const gems = ["diamond", "emerald", "lapis", "quartz"];

  for (let gem of gems) {
    event.recipes.thermal.press(global["tagitems"][`forge:gears/${gem}`], [
      `4x #forge:gems/${gem}`,
      "thermal:press_gear_die",
    ]);
    event.recipes.immersiveengineering.metal_press(
      global["tagitems"][`forge:gears/${gem}`],
      `4x #forge:gems/${gem}`,
      "immersiveengineering:mold_gear"
    );
  }

  //! F O O D
  // Syrup
  event.recipes.thermal
    .bottler("kubejs:syrup_bottle", ["minecraft:glass_bottle", Fluid.of("thermal:syrup", 250)])
    .energy(2000);
  // Peanut butter
  event.recipes.thermal
    .pulverizer("2x kubejs:peanut_butter", "#forge:crops/peanut")
    .experience(0)
    .energy(2000);
  // Popcorn
  event.smelting("kubejs:popcorn", "#forge:crops/corn").xp(0.5).cookingTime(200);
  // Onion Rings
  event.smelting("kubejs:onion_rings", "#forge:crops/onion").xp(0.5).cookingTime(200);
  // Marshmallow
  event.smelting("kubejs:marshmallow", "minecraft:sugar").xp(0.5).cookingTime(200);
});
