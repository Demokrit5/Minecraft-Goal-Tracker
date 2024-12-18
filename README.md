# Minecraft goal tracker

**Forked from:** https://xorik.github.io/advancements/

TODO rewrite

### Features:
- Show the total progress of all advancements
- Show finished criteria for complex advancements (e.g. for "A Balanced Diet" advancement)
- Doesn't require a server, works 100% in your browser

### Ideas/TODOs:
- Currently, supports only Minecraft Java 1.19, but it's easy to support older/newer versions
- It's possible to show the time when some advancement or criteria was finished. I can use it, just need to figure out how to make a nice UI
- Filter advancement by title is easy to do
- Offline mode
- Advancements JSON file also has unlocked recipes, so it's possible to track them
- Check if the Bedrock edition has a similar file, containing finished advancements
- Add share button (needs to figure out how to compact this huge JSON and add to URL)

### Limitation:
- When you finished a new advancement, you need to drag & drop the file again. Any ideas about automating this are appreciated
- There is a delay between finishing criteria (e.g. after eating a new type of food) and updating a JSON file in your world directory. To force save the JSON file, you can exit the world
- I have no idea how to do it for multiplayer servers. Any ideas are welcome

### Development:
For development purposes the Website can be hosted on GitHub Pages. This is especially useful for obtaining small changes in the UI, where the hosting location is irrelevant.

To enable Deployment to GitHub Pages go to the *Settings* section of the repository in GitHub. Sroll down to *Pages*, choose a *Branch* (**has to be** *gh-pages*) and a directory (usually */ (root)*).

**Don't forget to DISABLE**  GitHub Pages afterwards by changing *Branch* to *None*.

GitHub Pages link for the repository (if enabled):
https://demokrit5.github.io/Minecraft-Tracker/


---------


start of own notes
### Setup:
- **Raspberry Pi:** Webserver (based on node.js?) -> available on LAN
- **Minecraft Servers:** on per team on a dedicated PC (Erich & Marvin) -> available on LAN
- **Clients:** all Players -> available on LAN


### Dependencies/needed:
- goal tracker plugin on minecraft server
- backpack plugin to share items accross players



## TODO
- finish sections for blocks/items (untere reihe in inventory in creative mode fehlt noch)
- all blocks/items: generate a list of all blocks/items that are obtainable in 1.20.4
- ensure that game can be continued when web server or minecraft server are shutdown
    - save status of tracked goals in file in minecraft server
    - save status of tracked goals of all minecraft servers partioning in game in a file
    - save game config in file: (json)
        - players: teams
        - mc server: version, ips, 
        - goals: advancements/blocks/items
            configuration of options (exlude goal xy)

- track game duration (game started until game ended, eventually with breaks in between)
- players should be able to join/leave (teams) during the game

### Process

#### before game

start game:
    create folder 'all_{goal}_{date}_{timestamp}' for persistence

#### during game


#### after game



### webserver structure
- directories:
    - templates: with templates for all advancements/blocks/items for each minmecraft version


## Frontend Features:

### All:
- **goal display:** (TODO move this docu section to another place/file)
    - collapsible sections: display all goals grouped by type ordered in collapsible sections
        - sections should also be removable to get a collpased view of all missing stuff
        - remove section if done ( =empty)
        - type:
            - advancements: 
                - minecraft
                - nether:
                    - wither: nether/get_wither_skull, nether/summon_wither, nether/create_beacon, nether/create_full_beacon
                - end
                - adventure:
                    - brush: adventure/salvage_sherd, adventure/craft_decorated_pot_using_only_sherds,  
                    - crossbow: adventure/ol_betsy, adventure/whos_the_pillager_now, adventure/two_birds_one_arrow, adventure/arbalistic 
                    - spyglass: adventurespyglass_at_parrot, adventure/spyglass_at_ghast, adventure/spyglass_at_dragon     
                    - thunder: adventure/lightning_rod_with_villager_no_fire, adventure/very_very_frightening
                - husbandry:
                    - allays: husbandry/allay_deliver_item_to_player, husbandry/allay_deliver_cake_to_note_block 
                    - bees: husbandry/safely_harvest_honey, husbandry/silk_touch_nest, husbandry/wax_on, husbandry/wax_off, adventure/honey_block_slide
                    - frogs: husbandry/tadpole_in_a_bucket, husbandry/leash_all_frog_variants, husbandry/froglights
                    - sniffer: husbandry/obtain_sniffer_egg, husbandry/feed_snifflet, husbandry/plant_any_sniffer_seed 
            - blocks:
                - bees: bee nest, honeycomb block, honey block, beehive 
                - colored (all 16 colors): wool, carpet, terracotte, glazed terracotta, concrete, concrete powder, glass, glass pane, tinted glass, shulker boxes, beds, candle, banner  
                - end: endstone, purpur, chrous plant, chorus flower, end rod, dragon head, dragon egg
                - functional: torch, lantern, redstone lamps, redstone tools, crafting table, furnace, ambosses, note block, jukebox, enchanting table, painting, camp fire, brewing stnad, cauldron, bell, beacon, conduit, ladder, scaffoling, flower pot, decorated pot, item frame, glow item frame, bookshelf (chiseled), chest, trapped, chest, enderchest, omnious banner, target,m lever, srting, tripwire hook, daylight detector, pistons (sticky), dispenser, dropper, hopper, observer, rails,    
                - heads: wither skull, skeleton, thunder related (zombie, creeper, piglin)
                - plants: seeds, leaves, saplings, flowers, acalea, mushroom (red, brown, crimson, warped), grass, bushes, fern, bamboo, sugar cane, cactus, crimson/warped roots sprouts vines, vines, glow berry, sweet berry, nether wart, lily pad, melone, pumpkin, hey bale
                - nature: grass, podzol, mycelium, dirt path?, red/brown mushroom block, mushroom stem, mud, clay, cravel, ice variants, snow, moss, calcite, dripstone, magma block, amethyst blocks & growing crystals, glow lichen, hanging roots, turtle egg, sniffer egg, slime block, sculk blocks, cobweb 
                - nether: crymson nylium, warped nylium, netherrack, nether brick, red nether brick, basalt, blackstone (polished), gold ord, quartz ore, ancient debris, netherite, quartz blocks, obsidian, crying obsidian, respawn anchor, soul sand/soil, bone block, nether wart block, warped wart block, shroomlight, soul torch/lantern/campfire, glowstone, end crystal, lodestone 
                - ocean: sea lantern, prismarine (bricks), dark prismarine, corals, sea grass, sea pickle, kelp, sponge, 
                - ore: ores themselve, coal, iron, copper (lightning rod), copper blocks (oxidized, waxed), gold, redstone, emerald, lapis, diamond
                - silk touch: 
                - stone: from every stone (stone, cobble, smooth stone, stone brick, mossy cobble, mossy stone bricks, granite, granite, diorite, andesite, deepslate, cobbeled deepslate, deepslate bricks, tuff, bricks, mud, sandstone (smooth, cut), red sandstone (smooth, cut) ) the following if exists:
                    default, stairs, slap, button, pressure plate, wall
                - woods: from every wood (oak, spruce, birch, jungle, arcacia, dark oak, mangrove, cherry, bamboo (special stuff), crimson, warped) the following if exists:
                    log, wood, stripped log, stripped wood, plank, stair, slap, fence, fence gate, door, trapdoor, pressure plate, button, sign, hanging sign
                - work stations (zusammenlegen mit functional?): stonecutter, cartography, fletching table, smithing table, grindstone, loom, blast furnace, smoker, composter, lectern, barrel



            - items: (iadd to sections from blocks)  
                - animals: egg, 
                - armor: 
                - (blocks)
                - buckets: empty, water, lava, axolotl, cod, pufferfish, salmon, tadpole, tropical fish
                - end: elytra
                - entitys: minecarts, boats (with chest)
                - enchantments:
                - food: everything eatable
                - functional: armor stand
                - potions: 
                - tools:
                - weapons: bow, crossbow, swords, trident
                - wool:     
                - rest: snowball, ender pearl, eye of ender, firework rocket, bottel o' Enchanting, fire charge, flint and Steel, (glow) item frame, lead



### Admin:
- **define goals:** 

    goals: 
    - all advancements 
    - all blocks 
    - all items

    options: 
    - exclude single goals for the next game 
        - advancements:
            - How Did We Get Here? nether/all_effects
            - Smithing with Style: adventure/trim_with_all_exclusive_armor_patterns
            - With Our Powers Combined!: husbandry/froglights

    
    - exlude grouped goals 
        - advancements: thunder-related (adventure/very_very_frightening, adventure/lightning_rod_with_villager_no_fire)
        - blocks: thunder-related
            - froglights
            - paintings: all types
        - items: thunder-related
            - arrows: all types
            - banner pattern: all types
            - goat horn: all types
            - music disc: all types
            - potions: lingering ones
            - pottery shards: all types
            - suspicios stew: all types (effects)
            - templates: all types

    - advancements: 
    werden criteria aufgesplittet?
    - blocks/items: verschwinden items wenn man sie im inventar hat




    - sounds: enable/disable sounds when a criteria or advancement/item was achieved 
    







- node.js v22.12.0
- npm 10.9.0


### Minecraft server
create a default server with all the necessary properties/configuration to copy it on other devices
- players need the permission to change difficulty for raids
- permissions: only me as operator



### Tools:
- **Vue:** JavaScript Framework for building web user interfaces
- **Vite:** Build Tool for Frontend and Development Server
- TODO: eslint, prettier, postcss, tailwind, tsconfig.node.js

