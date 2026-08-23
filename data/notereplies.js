/* Maintainer replies to notes on the My Notes screen, keyed by the note's
   storage key. Shipped with the commit that addresses the note, so the reply
   and the fix always arrive together. An entry whose note no longer exists is
   harmless and gets pruned in a later commit. This file never touches saved
   progress. */
var NOTEREPLY={
"h:1foszhk-12gqztz":"Pinned in build 9dcde2c from your run: #93 MEGA ARMOR is the armored soldier out front, #92 IMPERIAL ELITE is the dinner-break fight. Caves of Narshe had it right; jinsoku's assignment was wrong. Route bullet, walkabout map, bestiary and gate labels all updated.",
"h:1ivjy1s-al8hfj":"Fixed in build d26ab6f: it was more than 4 — 18 gate rows duplicated a Treasure row (Imperial Camp, Sealed Gate cave, Burning House, Esper Cave, Tzen, both choice records, the Celes-cave X-Potion). Each pair is now one shared checkbox.",
"h:ekbqm8-1pdnvo":"Fixed in build d26ab6f: one tap now ticks both places — checking an item under Missable checks its Treasure row and vice versa, and the total stops counting it twice (581 → 563). Ticks you already made under either row carry over automatically.",
"gen:1787376025671":"Corrected in build e5e5410 — you were RIGHT, and my first answer was wrong. The Returners' Hideout raft (hidden passage in Banon's room) re-runs the river along Sabin's fork, and from the landing you can walk the Phantom Forest, re-jump Baren Falls onto the Veldt, and ferry home from Nikeah — documented by Caves of Narshe ch. 1.20, with every eastern leg separately PR-verified on jinsoku. The route now has a LETHE RIVER LOOP stop between Zozo and the Opera; that placement banks Aspiran, Anguiform AND Gobbledygook before their target fights (Opera Ultros, the Cranes, Number 024). The Baren Falls stop still banks the five early rages for the fights before the loop.",
"h:js3gn4-lmmlqk":"Fixed in build 5341865: a tick now officially means BANKED (you have the rage), matching how you use it. The want-list is tracked separately as the complement — ◎ TARGET tags and highlights now mark groups carrying rages you have NOT banked yet, and they clear as you bank each one. The ⚠ no-formation warning moved to un-banked rages, where it matters."
};
