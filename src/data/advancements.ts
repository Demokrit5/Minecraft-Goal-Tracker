import { Advancement, Criteria } from '../interface/advancement'
import { Sprite } from '../interface/icon'

const criteriaList: Record<string, Criteria> = {
  'adventure/kill_all_mobs': {
    iconCollection: Sprite.Entity,
    items: {
      blaze: 'blaze',
      pillager: 'pillager',
      skeleton: 'skeleton',
      elder_guardian: 'elder-guardian',
      zoglin: 'zoglin',
      ravager: 'ravager',
      ghast: 'ghast',
      hoglin: 'hoglin',
      guardian: 'guardian',
      vindicator: 'vindicator',
      magma_cube: 'magma-cube',
      piglin_brute: 'piglin-brute',
      spider: 'spider',
      creeper: 'creeper',
      wither: 'wither',
      evoker: 'evoker',
      slime: 'slime',
      phantom: 'phantom',
      zombified_piglin: 'zombified-piglin',
      witch: 'witch',
      wither_skeleton: 'wither-skeleton',
      husk: 'husk',
      ender_dragon: 'ender-dragon',
      shulker: 'shulker',
      cave_spider: 'cave-spider',
      piglin: 'piglin',
      enderman: 'enderman',
      silverfish: 'silverfish',
      stray: 'stray',
      endermite: 'endermite',
      vex: 'vex',
      zombie: 'zombie',
      drowned: 'drowned',
      zombie_villager: 'zombie-villager',
    },
  },
  'husbandry/complete_catalogue': {
    iconCollection: Sprite.Entity,
    items: {
      white: 'white-cat',
      tabby: 'tabby-cat',
      calico: 'calico-cat',
      siamese: 'siamese-cat',
      jellie: 'jellie-cat',
      persian: 'persian-cat',
      black: 'tuxedo-cat',
      all_black: 'black-cat',
      ragdoll: 'ragdoll-cat',
      british_shorthair: 'british-shorthair-cat',
      red: 'red-cat',
    },
  },
  'nether/explore_nether': {
    iconCollection: Sprite.Biome,
    items: {
      crimson_forest: 'crimson-forest',
      nether_wastes: 'nether-wastes',
      soul_sand_valley: 'soul-sand-valley',
      basalt_deltas: 'basalt-deltas',
      warped_forest: 'warped-forest',
    },
  },
  'adventure/adventuring_time': {
    iconCollection: Sprite.Biome,
    items: {
      snowy_slopes: 'snowy-slopes',
      old_growth_pine_taiga: 'old-growth-pine-taiga',
      mushroom_fields: 'mushroom-fields',
      taiga: 'taiga',
      deep_ocean: 'deep-ocean',
      eroded_badlands: 'eroded-badlands',
      frozen_river: 'frozen-river',
      sunflower_plains: 'sunflower-plains',
      birch_forest: 'birch-forest',
      windswept_hills: 'windswept-hills',
      bamboo_jungle: 'bamboo-jungle',
      wooded_badlands: 'wooded-badlands',
      badlands: 'badlands',
      savanna_plateau: 'savanna-plateau',
      beach: 'beach',
      dark_forest: 'dark-forest',
      stony_peaks: 'stony-peaks',
      mangrove_swamp: 'mangrove-swamp',
      sparse_jungle: 'sparse-jungle',
      lukewarm_ocean: 'lukewarm-ocean',
      river: 'river',
      snowy_plains: 'snowy-plains',
      stony_shore: 'stony-shore',
      dripstone_caves: 'dripstone-caves',
      snowy_taiga: 'snowy-taiga',
      grove: 'grove',
      swamp: 'swamp',
      jagged_peaks: 'jagged-peaks',
      cold_ocean: 'cold-ocean',
      forest: 'forest',
      lush_caves: 'lush-caves',
      deep_cold_ocean: 'deep-cold-ocean',
      ice_spikes: 'ice-spikes',
      frozen_ocean: 'frozen-ocean',
      desert: 'desert',
      deep_frozen_ocean: 'deep-frozen-ocean',
      windswept_forest: 'windswept-forest',
      jungle: 'jungle',
      ocean: 'ocean',
      old_growth_spruce_taiga: 'old-growth-spruce-taiga',
      snowy_beach: 'snowy-beach',
      windswept_savanna: 'windswept-savanna',
      warm_ocean: 'warm-ocean',
      deep_lukewarm_ocean: 'deep-lukewarm-ocean',
      flower_forest: 'flower-forest',
      frozen_peaks: 'frozen-peaks',
      old_growth_birch_forest: 'old-growth-birch-forest',
      deep_dark: 'deep-dark',
      meadow: 'meadow',
      windswept_gravelly_hills: 'windswept-gravelly-hills',
      savanna: 'savanna',
      plains: 'plains',
    },
  },
  'husbandry/bred_all_animals': {
    iconCollection: Sprite.Entity,
    items: {
      cat: 'cat',
      donkey: 'donkey',
      fox: 'fox',
      llama: 'llama',
      pig: 'pig',
      frog: 'frog',
      turtle: 'turtle',
      sheep: 'sheep',
      mule: 'mule',
      hoglin: 'hoglin',
      mooshroom: 'mooshroom',
      strider: 'strider',
      ocelot: 'ocelot',
      cow: 'cow',
      goat: 'goat',
      chicken: 'chicken',
      wolf: 'wolf',
      panda: 'panda',
      horse: 'horse',
      rabbit: 'rabbit',
      bee: 'bee',
      axolotl: 'axolotl',
    },
  },
  'husbandry/balanced_diet': {
    iconCollection: Sprite.Inventory,
    noGap: true,
    items: {
      cooked_porkchop: 'Cooked Porkchop',
      chicken: 'Raw Chicken',
      honey_bottle: 'Honey Bottle',
      cooked_mutton: 'Cooked Mutton',
      sweet_berries: 'Sweet Berries',
      chorus_fruit: 'Chorus Fruit',
      cooked_beef: 'Cooked Beef',
      baked_potato: 'Baked Potato',
      beef: 'Raw Beef',
      porkchop: 'Raw Porkchop',
      tropical_fish: 'Tropical Fish',
      beetroot_soup: 'Beetroot Soup',
      apple: 'Apple',
      spider_eye: 'Spider Eye',
      potato: 'Potato',
      cooked_cod: 'Cooked Cod',
      rabbit: 'Raw Rabbit',
      poisonous_potato: 'Poisonous Potato',
      pumpkin_pie: 'Pumpkin Pie',
      mutton: 'Raw Mutton',
      pufferfish: 'Pufferfish',
      bread: 'Bread',
      golden_apple: 'Golden Apple',
      cookie: 'Cookie',
      rotten_flesh: 'Rotten Flesh',
      suspicious_stew: 'Suspicious Stew',
      glow_berries: 'Glow Berries',
      dried_kelp: 'Dried Kelp',
      salmon: 'Raw Salmon',
      melon_slice: 'Melon Slice',
      beetroot: 'Beetroot',
      golden_carrot: 'Golden Carrot',
      cooked_rabbit: 'Cooked Rabbit',
      cooked_chicken: 'Cooked Chicken',
      enchanted_golden_apple: 'Enchanted Golden Apple',
      mushroom_stew: 'Mushroom Stew',
      cod: 'Raw Cod',
      rabbit_stew: 'Rabbit Stew',
      cooked_salmon: 'Cooked Salmon',
      carrot: 'Carrot',
    },
  },
}

// source: https://minecraft.fandom.com/wiki/Advancement?action=edit
// cleanup regex: \{\{(?!Advancements)((?!\{\{)(.|\n))*?\}\}

// Replace regex:
// \|bg=(\w+)\n\|title=(.*?)\n
// |title=$2\n|bg=$1\n

// Replace regex:
// \{\{Advancements\n(?:.|\n)*?\|title=(.*?)\n\|bg=(\w+)\n\|(.*?)\n(?:.|\n)*?\|(\w+\/\w+).*?}\}
// "$4": {title: "$1", type: "$2", icon: "$3"},
const advancements: Record<string, Advancement> = {
  'story/root': {
    title: 'Minecraft',
    type: 'plain',
    icon: 'Grass Block',
  },
  'story/mine_stone': {
    title: 'Stone Age',
    type: 'plain',
    icon: 'Wooden Pickaxe',
  },
  'story/upgrade_tools': {
    title: 'Getting an Upgrade',
    type: 'plain',
    icon: 'Stone Pickaxe',
  },
  'story/smelt_iron': {
    title: 'Acquire Hardware',
    type: 'plain',
    icon: 'Iron Ingot',
  },
  'story/obtain_armor': {
    title: 'Suit Up',
    type: 'plain',
    icon: 'Iron Chestplate',
  },
  'story/lava_bucket': {
    title: 'Hot Stuff',
    type: 'plain',
    icon: 'Lava Bucket',
  },
  'story/iron_tools': {
    title: "Isn't It Iron Pick",
    type: 'plain',
    icon: 'Iron Pickaxe',
  },
  'story/deflect_arrow': {
    title: 'Not Today, Thank You',
    type: 'plain',
    icon: 'Shield',
  },
  'story/form_obsidian': {
    title: 'Ice Bucket Challenge',
    type: 'plain',
    icon: 'Obsidian',
  },
  'story/mine_diamond': {
    title: 'Diamonds!',
    type: 'plain',
    icon: 'Diamond',
  },
  'story/enter_the_nether': {
    title: 'We Need to Go Deeper',
    type: 'plain',
    icon: 'Flint and Steel',
  },
  'story/shiny_gear': {
    title: 'Cover Me with Diamonds',
    type: 'plain',
    icon: 'Diamond Chestplate',
  },
  'story/enchant_item': {
    title: 'Enchanter',
    type: 'plain',
    icon: 'Enchanted Book',
  },
  'story/cure_zombie_villager': {
    title: 'Zombie Doctor',
    type: 'oval',
    icon: 'Golden Apple',
  },
  'story/follow_ender_eye': {
    title: 'Eye Spy',
    type: 'plain',
    icon: 'Eye of Ender',
  },
  'story/enter_the_end': {
    title: 'The End?',
    type: 'plain',
    icon: 'End Stone',
  },
  'nether/root': {
    title: 'Nether',
    type: 'plain',
    icon: 'Red Nether Bricks',
  },
  'nether/return_to_sender': {
    title: 'Return to Sender',
    type: 'fancy',
    icon: 'Fire Charge',
  },
  'nether/find_bastion': {
    title: 'Those Were the Days',
    type: 'plain',
    icon: 'Polished Blackstone Bricks',
  },
  'nether/obtain_ancient_debris': {
    title: 'Hidden in the Depths',
    type: 'plain',
    icon: 'Ancient Debris',
  },
  'nether/fast_travel': {
    title: 'Subspace Bubble',
    type: 'fancy',
    icon: 'Empty Map',
  },
  'nether/find_fortress': {
    title: 'A Terrible Fortress',
    type: 'plain',
    icon: 'Nether Bricks',
  },
  'nether/obtain_crying_obsidian': {
    title: 'Who is Cutting Onions?',
    type: 'plain',
    icon: 'Crying Obsidian',
  },
  'nether/distract_piglin': {
    title: 'Oh Shiny',
    type: 'plain',
    icon: 'Gold Ingot',
  },
  'nether/ride_strider': {
    title: 'This Boat Has Legs',
    type: 'plain',
    icon: 'Warped Fungus on a Stick',
  },
  'nether/uneasy_alliance': {
    title: 'Uneasy Alliance',
    type: 'fancy',
    icon: 'Ghast Tear',
  },
  'nether/loot_bastion': {
    title: 'War Pigs',
    type: 'plain',
    icon: 'Chest',
  },
  'nether/use_lodestone': {
    title: 'Country Lode, Take Me Home',
    type: 'plain',
    icon: 'Lodestone',
  },
  'nether/netherite_armor': {
    title: 'Cover Me in Debris',
    type: 'fancy',
    icon: 'Netherite Chestplate',
  },
  'nether/get_wither_skull': {
    title: 'Spooky Scary Skeleton',
    type: 'plain',
    icon: 'Wither Skeleton Skull',
  },
  'nether/obtain_blaze_rod': {
    title: 'Into Fire',
    type: 'plain',
    icon: 'Blaze Rod',
  },
  'nether/charge_respawn_anchor': {
    title: "Not Quite 'Nine' Lives",
    type: 'plain',
    icon: 'Respawn Anchor',
  },
  'nether/ride_strider_in_overworld_lava': {
    title: 'Feels Like Home',
    type: 'plain',
    icon: 'Warped Fungus on a Stick',
  },
  'nether/explore_nether': {
    title: 'Hot Tourist Destinations',
    type: 'fancy',
    icon: 'Netherite Boots',
  },
  'nether/summon_wither': {
    title: 'Withering Heights',
    type: 'plain',
    icon: 'Nether Star',
  },
  'nether/brew_potion': {
    title: 'Local Brewery',
    type: 'plain',
    icon: 'Uncraftable Potion',
  },
  'nether/create_beacon': {
    title: 'Bring Home the Beacon',
    type: 'plain',
    icon: 'Beacon',
  },
  'nether/all_potions': {
    title: 'A Furious Cocktail',
    type: 'fancy',
    icon: 'Milk Bucket',
  },
  'nether/create_full_beacon': {
    title: 'Beaconator',
    type: 'oval',
    icon: 'Beacon',
  },
  'nether/all_effects': {
    title: 'How Did We Get Here?',
    type: 'fancy',
    icon: 'Bucket',
  },
  'end/root': {
    title: 'The End?',
    type: 'plain',
    icon: 'End Stone',
  },
  'end/kill_dragon': {
    title: 'Free the End',
    type: 'plain',
    icon: 'Dragon Head',
  },
  'end/dragon_egg': {
    title: 'The Next Generation',
    type: 'oval',
    icon: 'Dragon Egg',
  },
  'end/enter_end_gateway': {
    title: 'Remote Getaway',
    type: 'plain',
    icon: 'Ender Pearl',
  },
  'end/respawn_dragon': {
    title: 'The End... Again...',
    type: 'oval',
    icon: 'End Crystal',
  },
  'end/dragon_breath': {
    title: 'You Need a Mint',
    type: 'oval',
    icon: "Dragon's Breath",
  },
  'end/find_end_city': {
    title: 'The City at the End of the Game',
    type: 'plain',
    icon: 'Purpur Block',
  },
  'end/elytra': {
    title: "Sky's the Limit",
    type: 'oval',
    icon: 'Elytra',
  },
  'end/levitate': {
    title: 'Great View From Up Here',
    type: 'fancy',
    icon: 'Shulker Shell',
  },
  'adventure/root': {
    title: 'Adventure',
    type: 'plain',
    icon: 'Empty Map',
  },
  'adventure/voluntary_exile': {
    title: 'Voluntary Exile',
    type: 'plain',
    icon: 'Ominous Banner',
  },
  'adventure/spyglass_at_parrot': {
    title: 'Is It a Bird?',
    type: 'plain',
    icon: 'Spyglass',
  },
  'adventure/kill_a_mob': {
    title: 'Monster Hunter',
    type: 'plain',
    icon: 'Iron Sword',
  },
  'adventure/trade': {
    title: 'What a Deal!',
    type: 'plain',
    icon: 'Emerald',
  },
  'adventure/honey_block_slide': {
    title: 'Sticky Situation',
    type: 'plain',
    icon: 'Honey Block',
  },
  'adventure/ol_betsy': {
    title: "Ol' Betsy",
    type: 'plain',
    icon: 'Crossbow',
  },
  'adventure/lightning_rod_with_villager_no_fire': {
    title: 'Surge Protector',
    type: 'plain',
    icon: 'Lightning Rod',
  },
  'adventure/fall_from_world_height': {
    title: 'Caves & Cliffs',
    type: 'plain',
    icon: 'Water Bucket',
  },
  'adventure/avoid_vibration': {
    title: 'Sneak 100',
    type: 'plain',
    icon: 'Sculk Sensor',
  },
  'adventure/sleep_in_bed': {
    title: 'Sweet Dreams',
    type: 'plain',
    icon: 'Red Bed',
  },
  'adventure/hero_of_the_village': {
    title: 'Hero of the Village',
    type: 'fancy',
    icon: 'Ominous Banner',
  },
  'adventure/spyglass_at_ghast': {
    title: 'Is It a Balloon?',
    type: 'plain',
    icon: 'Spyglass',
  },
  'adventure/throw_trident': {
    title: 'A Throwaway Joke',
    type: 'plain',
    icon: 'Trident',
  },
  'adventure/kill_mob_near_sculk_catalyst': {
    title: 'It Spreads',
    type: 'fancy',
    icon: 'Sculk Catalyst',
  },
  'adventure/shoot_arrow': {
    title: 'Take Aim',
    type: 'plain',
    icon: 'Bow',
  },
  'adventure/kill_all_mobs': {
    title: 'Monsters Hunted',
    type: 'fancy',
    icon: 'Diamond Sword',
    rowspan: 3,
  },
  'adventure/totem_of_undying': {
    title: 'Postmortal',
    type: 'oval',
    icon: 'Totem of Undying',
  },
  'adventure/summon_iron_golem': {
    title: 'Hired Help',
    type: 'oval',
    icon: 'Carved Pumpkin',
  },
  'adventure/trade_at_world_height': {
    title: 'Star Trader',
    type: 'plain',
    icon: 'Emerald',
  },
  'adventure/two_birds_one_arrow': {
    title: 'Two Birds, One Arrow',
    type: 'fancy',
    icon: 'Crossbow',
  },
  'adventure/whos_the_pillager_now': {
    title: "Who's the Pillager Now?",
    type: 'plain',
    icon: 'Crossbow',
  },
  'adventure/arbalistic': {
    title: 'Arbalistic',
    type: 'fancy',
    icon: 'Crossbow',
  },
  'adventure/adventuring_time': {
    title: 'Adventuring Time',
    type: 'fancy',
    icon: 'Diamond Boots',
    rowspan: 4,
  },
  'adventure/play_jukebox_in_meadows': {
    title: 'Sound of Music',
    type: 'plain',
    icon: 'Jukebox',
  },
  'adventure/walk_on_powder_snow_with_leather_boots': {
    title: 'Light as a Rabbit',
    type: 'plain',
    icon: 'Leather Boots',
  },
  'adventure/spyglass_at_dragon': {
    title: 'Is It a Plane?',
    type: 'plain',
    icon: 'Spyglass',
  },
  'adventure/very_very_frightening': {
    title: 'Very Very Frightening',
    type: 'plain',
    icon: 'Trident',
  },
  'adventure/sniper_duel': {
    title: 'Sniper Duel',
    type: 'fancy',
    icon: 'Arrow',
  },
  'adventure/bullseye': {
    title: 'Bullseye',
    type: 'fancy',
    icon: 'Target',
  },
  'husbandry/root': {
    title: 'Husbandry',
    type: 'plain',
    icon: 'Hay Bale',
  },
  'husbandry/safely_harvest_honey': {
    title: 'Bee Our Guest',
    type: 'plain',
    icon: 'Honey Bottle',
  },
  'husbandry/breed_an_animal': {
    title: 'The Parrots and the Bats',
    type: 'plain',
    icon: 'Wheat',
  },
  'husbandry/allay_deliver_item_to_player': {
    title: "You've Got a Friend in Me",
    type: 'plain',
    icon: 'Cookie',
  },
  'husbandry/ride_a_boat_with_a_goat': {
    title: 'Whatever Floats Your Goat!',
    type: 'plain',
    icon: 'Oak Boat',
  },
  'husbandry/tame_an_animal': {
    title: 'Best Friends Forever',
    type: 'plain',
    icon: 'Lead',
  },
  'husbandry/make_a_sign_glow': {
    title: 'Glow and Behold!',
    type: 'plain',
    icon: 'Glow Ink Sac',
  },
  'husbandry/fishy_business': {
    title: 'Fishy Business',
    type: 'plain',
    icon: 'Fishing Rod',
  },
  'husbandry/silk_touch_nest': {
    title: 'Total Beelocation',
    type: 'plain',
    icon: 'Bee Nest',
  },
  'husbandry/tadpole_in_a_bucket': {
    title: 'Bukkit Bukkit',
    type: 'plain',
    icon: 'Bucket of Tadpole',
  },
  'husbandry/plant_seed': {
    title: 'A Seedy Place',
    type: 'plain',
    icon: 'Wheat',
  },
  'husbandry/wax_on': {
    title: 'Wax On',
    type: 'plain',
    icon: 'Honeycomb',
  },
  'husbandry/bred_all_animals': {
    title: 'Two by Two',
    type: 'fancy',
    icon: 'Golden Carrot',
    rowspan: 3,
  },
  'husbandry/allay_deliver_cake_to_note_block': {
    title: 'Birthday Song',
    type: 'fancy',
    icon: 'Note Block',
  },
  'husbandry/complete_catalogue': {
    title: 'A Complete Catalogue',
    type: 'fancy',
    icon: 'Raw Cod',
    rowspan: 2,
  },
  'husbandry/tactical_fishing': {
    title: 'Tactical Fishing',
    type: 'plain',
    icon: 'Bucket of Pufferfish',
  },
  'husbandry/leash_all_frog_variants': {
    title: 'When the Squad Hops into Town',
    type: 'plain',
    icon: 'Lead',
  },
  'husbandry/balanced_diet': {
    title: 'A Balanced Diet',
    type: 'fancy',
    icon: 'Apple',
    rowspan: 3,
  },
  'husbandry/obtain_netherite_hoe': {
    title: 'Serious Dedication',
    type: 'fancy',
    icon: 'Netherite Hoe',
  },
  'husbandry/wax_off': {
    title: 'Wax Off',
    type: 'plain',
    icon: 'Stone Axe',
  },
  'husbandry/axolotl_in_a_bucket': {
    title: 'The Cutest Predator',
    type: 'plain',
    icon: 'Bucket of Axolotl',
  },
  'husbandry/froglights': {
    title: 'With Our Powers Combined!',
    type: 'fancy',
    icon: 'Verdant Froglight',
  },
  'husbandry/kill_axolotl_target': {
    title: 'The Healing Power of Friendship',
    type: 'plain',
    icon: 'Bucket of Tropical Fish',
  },
}

export { advancements, criteriaList }
