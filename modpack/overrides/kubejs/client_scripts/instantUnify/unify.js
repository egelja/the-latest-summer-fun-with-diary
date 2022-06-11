function tryTag(tag) {
  try {
    return Ingredient.of("#" + tag);
  } catch (err) {
    return null;
  }
}

onEvent("jei.hide.items", (event) => {
  if (global["HIDE_UNIFIED_ITEMS"]) {
    try {
      outer: for (let tag of global["unifytags"]) {
        let ingr = tryTag(tag);
        if (ingr) {
          let stacks = ingr.getStacks().toArray();
          let tItem = global["tagitems"][tag];
          for (let s of stacks) {
            // Check if item should be unified
            for (let e of global["UNIFY_SKIP"]) {
              // Check if item's mod is one that shouldn't be unified
              if (e.mods === "*" || e.mods.indexOf(s.getMod()) == -1) {
                // Check if current tag is one that shouldn't be unified
                if (tag.match(e.filter)) {
                  continue outer;
                }
              }
            }
            // Unify item
            if (s.getId() != tItem) {
              event.hide(s.getId());
              console.log(`Hid item ${s.getId()} from JEI.`);
            }
          }
        }
      }
    } catch (err) {
      console.error("Failure to hide unified items in JEI. Press F3+T to reload client and retry");
    }
  }
});
