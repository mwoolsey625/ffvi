/* Maintainer replies to notes on the My Notes screen, keyed by the note's
   storage key. Shipped with the commit that addresses the note, so the reply
   and the fix always arrive together. An entry whose note no longer exists is
   harmless and gets pruned in a later commit. This file never touches saved
   progress. */
var NOTEREPLY={
"h:1foszhk-12gqztz":"Pinned in build 9dcde2c from your run: #93 MEGA ARMOR is the armored soldier out front, #92 IMPERIAL ELITE is the dinner-break fight. Caves of Narshe had it right; jinsoku's assignment was wrong. Route bullet, walkabout map, bestiary and gate labels all updated.",
"h:1ivjy1s-al8hfj":"Fixed in build d26ab6f: it was more than 4 — 18 gate rows duplicated a Treasure row (Imperial Camp, Sealed Gate cave, Burning House, Esper Cave, Tzen, both choice records, the Celes-cave X-Potion). Each pair is now one shared checkbox.",
"h:ekbqm8-1pdnvo":"Fixed in build d26ab6f: one tap now ticks both places — checking an item under Missable checks its Treasure row and vice versa, and the total stops counting it twice (581 → 563). Ticks you already made under either row carry over automatically.",
"h:js3gn4-lmmlqk":"Fixed in build 5341865: a tick now officially means BANKED (you have the rage), matching how you use it. The want-list is tracked separately as the complement — ◎ TARGET tags and highlights now mark groups carrying rages you have NOT banked yet, and they clear as you bank each one. The ⚠ no-formation warning moved to un-banked rages, where it matters."
};
