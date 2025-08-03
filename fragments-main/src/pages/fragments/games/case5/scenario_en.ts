export interface GameScenario {
  id: string;
  title: string;
  story?: string;
  victim?: string;
  suspects?: any[];
  evidence?: any[];
  locations?: any[];
  connections?: any[];
  connectionRules?: any[];
  solution?: any;
  initialFragment?: string;
  finalFragment?: string;
  endingMessage?: string;
  fragments?: any[];
  text?: string;
  choices?: any[];
  clues?: any[];
  temporalFragments?: any[];
  // Game settings
  initialCards?: string[];
  winCondition?: string;
}

export const mansionMurderScenario: GameScenario = {
  "id": "ashes_of_brasshelm_ch3_en",
  "title": "Chapter 3: The Ashes of Brasshelm",
  "story": "Finally infiltrating the Shadow's fortress, the team of five faces an enemy far stronger than they imagined and a monstrous beast born from the Spark. They must use all their skills to fight back, but victory requires a tragic sacrifice.",
  "victim": "Lilia Bennet",
  "suspects": [
    {
      "id": "C-C01",
      "name": "Edwin Crawford",
      "role": "Protagonist/Leader",
      "description": "The protagonist, facing the final battle with his comrades. His choice will determine the end of everything.",
      "alibi": "He was infiltrating the Shadow's fortress and carrying out the operation with his team.",
      "motive": "To protect his comrades and stop the Shadow's plan to destroy the city."
    },
    {
      "id": "C-C02",
      "name": "Cassian, Isolde, Viktor, & Lilia",
      "role": "Key Ally Team",
      "description": "The core comrades with their designated roles (Information, Science, Strength, Technology). They are Edwin's greatest asset.",
      "alibi": "They were infiltrating the Shadow's fortress with Edwin, each performing their assigned tasks.",
      "motive": "To cooperate towards the common goal of destroying the Spark."
    },
    {
      "id": "C-C03",
      "name": "The Shadow Leader",
      "role": "Final Antagonist",
      "description": "The masked leader of the organization, waiting in the core control room. A fanatical visionary who seeks to reshape the world with the power of the Spark.",
      "alibi": "He was waiting for the intruders in the heart of his fortress.",
      "motive": "To complete the Prometheus Spark and establish a new world order under his control."
    }
  ],
  "evidence": [
    {
      "id": "C-E01",
      "name": "Final Plan: Destroy the Core",
      "description": "The ultimate goal is to destroy the central core that controls the Spark's energy.",
      "details": "According to Isolde's analysis, destroying the central core can stop the Spark's chain reaction and dissipate its energy.",
      "location": "C-L04"
    },
    {
      "id": "C-E02",
      "name": "Fortress Security Schematics (Re-examined)",
      "description": "The key to infiltrating the fortress.",
      "details": "Information provided by Lilia in Chapter 2. It contains the optimal route through the complex fortress and weaknesses in the security system.",
      "location": "C-L01"
    },
    {
      "id": "C-E03",
      "name": "Lilia's Wristwatch",
      "description": "An old, cherished wristwatch made by Lilia's father.",
      "details": "An object that symbolizes her beliefs and hopes. It gains significant meaning through her bond with Edwin.",
      "location": "C-L01"
    },
    {
      "id": "C-S01",
      "name": "The Eve of the Battle",
      "description": "The night before infiltrating the fortress, the comrades prepare themselves in their own ways.",
      "details": "Before the final battle, the team members talk about their pasts and futures, strengthening their final bond. Lilia shows Edwin her wristwatch and they promise to 'come back alive'.",
      "location": "C-L01"
    },
    {
      "id": "C-S02",
      "name": "Infiltration Begins",
      "description": "The team finally infiltrates the Shadow's fortress.",
      "details": "Lilia and Cassian disrupt the security system by exploiting its flaws, while Viktor clears obstacles. The team successfully enters the fortress as planned.",
      "location": "C-L01"
    },
    {
      "id": "C-E04",
      "name": "The Steam-Beast",
      "description": "A living machine monster created from the Spark's unstable energy.",
      "details": "When the Shadow Leader causes the core's energy to go berserk, surrounding metal and pipes melt and reform into a single, massive monster. It draws energy directly from the core.",
      "location": "C-L04"
    },
    {
      "id": "C-S03",
      "name": "Confronting the Leader",
      "description": "They face the final enemy, the Shadow Leader.",
      "details": "Upon reaching the core control room, the Shadow Leader reveals himself. He preaches about his ideal future and tries to persuade the team to join him.",
      "location": "C-L04"
    },
    {
      "id": "C-S04",
      "name": "Negotiations Fail",
      "description": "They decide to fight with force, not words.",
      "details": "Edwin flatly rejects the leader's dangerous ideology and makes his intention to destroy the Spark clear. The final battle begins.",
      "location": "C-L04"
    },
    {
      "id": "C-S05",
      "name": "Viktor's Stand",
      "description": "Viktor buys time by holding off the Steam-Beast.",
      "details": "He uses his immense strength to block the beast, but his exosuit reaches its limit against the monster, which draws infinite energy from the core.",
      "location": "C-L04"
    },
    {
      "id": "C-S06",
      "name": "Isolde's Analysis",
      "description": "Isolde discovers the beast's weakness.",
      "details": "In the chaos, Isolde realizes the beast is directly linked to the core and tells the team that the only way to defeat it is to destroy the core itself.",
      "location": "C-L04"
    },
    {
      "id": "C-S07",
      "name": "Cassian Disarms the Traps",
      "description": "Cassian clears the path to the core.",
      "details": "Cassian uses all his skills to quickly disable the deadly steam traps blocking the path to the core.",
      "location": "C-L04"
    },
    {
      "id": "C-S08",
      "name": "The Leader's Ambush",
      "description": "The Shadow Leader ambushes the team as they approach the core.",
      "details": "Just as the team is about to reach the core, the Shadow Leader appears from an unexpected spot and launches a fatal attack on the most off-guard member.",
      "location": "C-L04"
    },
    {
      "id": "C-S09",
      "name": "Lilia's Sacrifice",
      "description": "Lilia saves a comrade and is mortally wounded.",
      "details": "Instead of letting a comrade (or Cassian) take the hit, Lilia pushes them aside and takes the full force of the leader's attack. Her body falls limply.",
      "location": "C-L04"
    },
    {
      "id": "C-E05",
      "name": "Lilia's Last Request",
      "description": "Lilia's final words to Edwin.",
      "details": "\"You were... worth believing in... Finish it...\" Lilia presses her wristwatch into Edwin's hand and breathes her last.",
      "location": "C-L04"
    },
    {
      "id": "C-S10",
      "name": "Edwin's Awakening",
      "description": "Lilia's death shatters Edwin's cynicism completely.",
      "details": "Witnessing the death of his comrade, Edwin is no longer driven by money or survival, but by pure rage and a sense of duty.",
      "location": "C-L04"
    },
    {
      "id": "C-S11",
      "name": "The Leader's Downfall",
      "description": "Edwin defeats the Shadow Leader.",
      "details": "Using his journalistic insight and all his experience, Edwin cleverly lures the Shadow Leader into the unstable energy field of the core, defeating him.",
      "location": "C-L04"
    },
    {
      "id": "C-S12",
      "name": "Destroying the Core",
      "description": "The Prometheus Spark's core is finally destroyed.",
      "details": "Edwin uses all his strength to destroy the central core of the Spark. The beast's movements and the fortress's power cease.",
      "location": "C-L04"
    },
    {
      "id": "C-S13",
      "name": "The Fortress Collapses",
      "description": "With the core destroyed, the entire fortress begins to collapse.",
      "details": "Having lost its power source, the fortress starts to fall apart. The surviving team members make a desperate escape.",
      "location": "C-L04"
    },
    {
      "id": "C-S14",
      "name": "The Comrades Part Ways",
      "description": "After the incident, the surviving members go their separate ways.",
      "details": "A wounded Viktor returns to rebuild the docks, Isolde leaves for atonement, and Cassian disappears into the shadows. The heroes part on a bittersweet note.",
      "location": "C-L05"
    },
    {
      "id": "C-S15",
      "name": "Edwin's Choice",
      "description": "Edwin decides to leave the city.",
      "details": "Clutching Lilia's wristwatch, Edwin finds no reason to stay in Brasshelm and chooses to walk a new path.",
      "location": "C-L05"
    },
    {
      "id": "C-S16",
      "name": "A New Horizon",
      "description": "Edwin's inner change and a new beginning.",
      "details": "His steps are no longer filled with the cynicism of the past. A small change has begun within him amidst the pain of loss.",
      "location": "C-L05"
    },
    {
      "id": "C-X01",
      "name": "Final Ending: The Ashes of Brasshelm",
      "description": "The dawn of a new era for the city and the lonely silhouette of a man.",
      "details": "A new dawn breaks over the ashes of Brasshelm, but the story of the heroes who saved the city ends with a tragic sacrifice and a bittersweet aftertaste.",
      "location": "C-L05"
    }
  ],
  "locations": [
    {
      "id": "C-L01",
      "name": "The Shadow's Fortress (Exterior)",
      "description": "A fortress surrounded by heavy guards and complex steam pipes.",
      "details": "A massive facility built beneath the city's heart. It is the heart of the Shadow of Steam and the source of all tragedy."
    },
    {
      "id": "C-L02",
      "name": "Fortress Interior: The Engine Room",
      "description": "The lower level of the fortress, a maze of giant steam engines and pipes.",
      "details": "Filled with thick steam and deafening noise, making it hard to see ahead. It supplies power to the entire fortress."
    },
    {
      "id": "C-L03",
      "name": "Fortress Interior: The Research Sector",
      "description": "A chilling area with remnants of various experiments related to the Spark.",
      "details": "Numerous empty test tubes and unidentified records hint at the inhumane nature of the Spark."
    },
    {
      "id": "C-L04",
      "name": "Fortress Interior: The Core Control Room",
      "description": "The heart of the fortress, where the Prometheus Spark emits an unstable light.",
      "details": "The source of all the incidents, the Spark, radiates a sinister energy from within a giant mechanical device. This is the stage for the final battle."
    },
    {
      "id": "C-L05",
      "name": "The City in Ruins",
      "description": "The battle is over, but its aftermath has left parts of the city destroyed and in chaos.",
      "details": "The fortress's collapse has left deep scars on the city. From the ashes, people must prepare for a new beginning."
    }
  ],
  "connectionRules": [
    { "id": "rule_c_s02", "cards": ["C-L01", "C-E02"], "result": "Based on Lilia's schematics, the team bypasses the security system and finally infiltrates the fortress.", "unlock": "C-S02" },
    { "id": "rule_c_l02", "cards": ["C-S02", "C-L01"], "result": "The fortress interior is a maze of power pipes. The team decides to pass through the engine room.", "unlock": "C-L02" },
    { "id": "rule_c_l03", "cards": ["C-L02", "C-C02"], "result": "After the engine room, they arrive at the research sector, filled with traces of inhumane experiments.", "unlock": "C-L03" },
    { "id": "rule_c_l04", "cards": ["C-L03", "C-E01"], "result": "At last, they reach the center of all incidents: the Core Control Room where the Prometheus Spark is located.", "unlock": "C-L04" },
    { "id": "rule_c_c03", "cards": ["C-L04", "C-C01"], "result": "In the Core Control Room, the masked Shadow Leader appears, as if he had been waiting for them.", "unlock": "C-C03" },
    { "id": "rule_c_s03", "cards": ["C-C03", "C-C01"], "result": "The leader explains his grand plan and offers Edwin one last chance to cooperate.", "unlock": "C-S03" },
    { "id": "rule_c_s04", "cards": ["C-S03", "C-E01"], "result": "When Edwin refuses the offer, the leader unleashes the Spark's power, and the final battle begins.", "unlock": "C-S04" },
    { "id": "rule_c_e04", "cards": ["C-S04", "C-L04"], "result": "The rampaging energy consumes nearby metal, creating a massive 'Steam-Beast'.", "unlock": "C-E04" },
    { "id": "rule_c_s05", "cards": ["C-E04", "C-C02"], "result": "Viktor stands before the beast to protect the team, buying them time.", "unlock": "C-S05" },
    { "id": "rule_c_s06", "cards": ["C-E04", "C-S05"], "result": "Isolde realizes the beast is linked to the core and shouts that they must destroy the core.", "unlock": "C-S06" },
    { "id": "rule_c_s07", "cards": ["C-L04", "C-S06"], "result": "Cassian uses his skills to disarm all the steam traps blocking the way to the core.", "unlock": "C-S07" },
    { "id": "rule_c_s08", "cards": ["C-C03", "C-S07"], "result": "As the team approaches the core, the Shadow Leader ambushes them from an unexpected location.", "unlock": "C-S08" },
    { "id": "rule_c_s09", "cards": ["C-S08", "C-C02"], "result": "Lilia saves a comrade in danger but takes a fatal blow in the process.", "unlock": "C-S09" },
    { "id": "rule_c_e05", "cards": ["C-S09", "C-C01"], "result": "In Edwin's arms, Lilia utters her last words and dies.", "unlock": "C-E05" },
    { "id": "rule_c_s10", "cards": ["C-E05", "C-C01"], "result": "Something awakens within Edwin upon Lilia's death. He is filled with rage and a sense of duty.", "unlock": "C-S10" },
    { "id": "rule_c_s11", "cards": ["C-S10", "C-C03"], "result": "The awakened Edwin uses his cold-headed wit to lure the Shadow Leader into the Spark's unstable energy, defeating him.", "unlock": "C-S11" },
    { "id": "rule_c_s12", "cards": ["C-S11", "C-S05"], "result": "Edwin finally succeeds in destroying the central core of the Spark.", "unlock": "C-S12" },
    { "id": "rule_c_s13", "cards": ["C-S12", "C-L04"], "result": "With the core destroyed, the entire fortress begins to collapse. The surviving team members make a desperate escape.", "unlock": "C-S13" },
    { "id": "rule_c_l05", "cards": ["C-S13", "C-L01"], "result": "They escape, but the fortress's collapse has left a deep scar on the city. It is now in ruins.", "unlock": "C-L05" },
    { "id": "rule_c_s14", "cards": ["C-L05", "C-C02"], "result": "After everything is over, the surviving comrades part ways to follow their own paths.", "unlock": "C-S14" },
    { "id": "rule_c_s15", "cards": ["C-E03", "C-S14"], "result": "Edwin picks up Lilia's wristwatch and decides to leave the wounded city.", "unlock": "C-S15" },
    { "id": "rule_c_s16", "cards": ["C-S15", "C-C01"], "result": "As he leaves the city, his steps are heavy, but no longer cynical like before. A small change has begun within him.", "unlock": "C-S16" },
    { "id": "rule_c_x01", "cards": ["C-S16", "C-L05"], "result": "A new dawn breaks over the ashes of Brasshelm. The story of the heroes who saved the city ends with tragedy and a small glimmer of hope.", "unlock": "C-X01" }
  ],
  "fragments": [],
  "winCondition": "C-X01",
  "initialCards": [
    "C-C01",
    "C-C02",
    "C-L01",
    "C-E01",
    "C-E02",
    "C-S01",
    "C-E03"
  ]
}