// priority: 200
/*
 * This is for creating crafting recipes between items of a tag.
 * i.e. Storage blocks
 *
 * Template:
 *   event.remove({input: "MOD:storage_block"})
 *   event.shapeless("MOD:storage_block", ["MOD:ingot"])
 *
 ** See L34 of https://mods.latvian.dev/books/kubejs/page/recipeeventjs for more details.
 */
const interchangeRecipeTags = [/storage_blocks/];

onEvent("recipes", (event) => {
  outer: for (let tag of global["unifytags"]) {
    for (let e of tags) {
      if (!tag.match(e)) {
        continue outer;
      }
    }

    let ingr = tryTag(tag);
    if (ingr) {
      let stacks = ingr.getStacks().toArray();
      let tagItem = global["tagitems"][tag];

      for (let s of stacks) {
        if (s.getId() != tagItem) {
          let blockID = s.getId();

          event.remove({ output: blockID });

          event.shapeless(blockID, tagItem);
          event.shapeless(tagItem, blockID);
        }
      }
    }
  }
});
