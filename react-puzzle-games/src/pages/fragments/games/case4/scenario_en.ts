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
  "id": "ashes_of_brasshelm_ch2_en",
  "title": "Chapter 2: The Unlikely Alliance",
  "story": "Searching for a defector scientist, Edwin and Cassian meet Dr. Isolde Marrow, who is tormented by guilt. After learning the terrible truth about the Spark, they recruit a vengeful fighter, Viktor, and a principled resistance mechanic, Lilia, to form an unlikely team of five.",
  "victim": "N/A",
  "suspects": [
    {
      "id": "B-C01",
      "name": "Edwin and Cassian",
      "role": "Investigation Team",
      "description": "The duo from Chapter 1, now working together to investigate the 'Shadow of Steam'. Edwin seeks the truth, while Cassian seeks profit.",
      "alibi": "Following the events of Chapter 1, they are actively working together to find information about the defector scientist.",
      "motive": "To uncover the secret of the Spark to either stop the Shadow of Steam's plan or to use it for a larger score."
    },
    {
      "id": "B-C02",
      "name": "Slum Informant",
      "role": "Information Provider",
      "description": "An informant acquainted with Cassian who sells information for a price. The more dangerous the information, the higher the price.",
      "alibi": "Always operating and gathering information in the dark corners of the slums.",
      "motive": "Only money. He has no interest in the content of the information or the client's purpose."
    },
    {
      "id": "B-C03",
      "name": "Dr. Isolde Marrow",
      "role": "Key Ally/Whistleblower",
      "description": "A former lead scientist for the Shadow of Steam. She defected after realizing the danger of her own creation and now lives in hiding, consumed by guilt and fear.",
      "alibi": "She has been hiding in her secret workshop since her defection.",
      "motive": "Atonement. She wants to stop the 'Prometheus Spark' from destroying the world she helped endanger."
    },
    {
      "id": "B-C04",
      "name": "Viktor 'Ironclad' Kane",
      "role": "Key Ally/Enforcer",
      "description": "A hulking fighter in a steam-powered exosuit. He harbors a deep-seated vengeance against the Shadow of Steam for the death of his sister in one of their factories.",
      "alibi": "He was either working at the docks or gathering information about the Shadow of Steam in underground fighting pits.",
      "motive": "Revenge for his sister's death. He desires the complete annihilation of the Shadow of Steam."
    },
    {
      "id": "B-C05",
      "name": "Lilia Bennet",
      "role": "Key Ally/Technician",
      "description": "A genius mechanic and a member of the resistance. She fights against the Shadow of Steam to liberate the oppressed.",
      "alibi": "She was either repairing equipment at the resistance's secret base or carrying out operations against Shadow facilities.",
      "motive": "A strong belief in creating a better world. The liberation and freedom of Brasshelm."
    }
  ],
  "evidence": [
    {
      "id": "B-E01",
      "name": "Inquiring about the Defector Scientist",
      "description": "A rumor about a scientist who defected from the Shadow of Steam.",
      "details": "Information from Chapter 1. An insider who knows the secret of the 'Spark' is said to be hiding somewhere in the slums.",
      "location": "B-L01"
    },
    {
      "id": "B-E02",
      "name": "Dockworker's Testimony",
      "description": "Testimony about the cruelty of the Shadow of Steam.",
      "details": "A grim rumor that the Shadow of Steam secretly eliminates any defiant workers as an example. Viktor's sister was one of the victims.",
      "location": "B-L02"
    },
    {
      "id": "B-E03",
      "name": "Info on Isolde's Hideout",
      "description": "Specific information on the defector scientist's location.",
      "details": "For a price, the slum informant provides a crucial tip: a female scientist with a mechanical arm is hiding in an abandoned boiler room.",
      "location": "B-L01"
    },
    {
      "id": "B-E04",
      "name": "The Glowing Cog (Re-examined)",
      "description": "A token to earn Isolde's trust.",
      "details": "Edwin presents the cog from Chapter 1 to prove he's not just another mercenary looking for profit.",
      "location": "B-L03"
    },
    {
      "id": "B-S01",
      "name": "Isolde's Test",
      "description": "Isolde gives the team a dangerous task to test their capabilities.",
      "details": "Seeing the cog lowers Isolde's guard slightly. To confirm their true intentions and skills, she assigns them a near-impossible mission: steal a 'Rare Energy Crystal' from a warehouse controlled by the Shadow.",
      "location": "B-L03"
    },
    {
      "id": "B-E05",
      "name": "Rare Energy Crystal",
      "description": "Isolde's test assignment.",
      "details": "An unstable mineral used in Spark research. It is extremely difficult to obtain as it's under strict control by the Shadow of Steam.",
      "location": "B-L02"
    },
    {
      "id": "B-S02",
      "name": "Proof of Trust",
      "description": "Edwin and Cassian complete the dangerous mission, earning Isolde's trust.",
      "details": "When Edwin and Cassian return with the energy crystal, Isolde finally trusts them and begins to share information about the Spark.",
      "location": "B-L03"
    },
    {
      "id": "B-E06",
      "name": "Partial Spark Schematics",
      "description": "The core schematics of the Spark that Isolde possesses.",
      "details": "Partial schematics that Isolde managed to smuggle out during her escape. They reveal a fatal flaw in the Spark that could cause an uncontrollable chain reaction.",
      "location": "B-L03"
    },
    {
      "id": "B-E07",
      "name": "Test Subject Report",
      "description": "Horrifying proof of the Spark's danger.",
      "details": "A report documenting failed experiments where human test subjects were turned to ash upon exposure to the Spark's unstable energy. It's definitive proof of the technology's inhumanity.",
      "location": "B-L03"
    },
    {
      "id": "B-E08",
      "name": "Information on Viktor",
      "description": "Information about a powerful, vengeful potential ally.",
      "details": "The dockworkers talk about 'Ironclad' Viktor, who is sharpening his blade of vengeance against the Shadow of Steam for his sister's death.",
      "location": "B-L02"
    },
    {
      "id": "B-S03",
      "name": "Brawl in the Fighting Pit",
      "description": "Edwin helps Viktor, forming an initial bond.",
      "details": "When Shadow henchmen raid the fighting pit to eliminate Viktor, Edwin helps him fight them off, creating an opportunity to gain his trust.",
      "location": "B-L04"
    },
    {
      "id": "B-E09",
      "name": "Sister's Locket",
      "description": "The source of Viktor's vengeance.",
      "details": "A worn locket Viktor cherishes, containing a picture of his sister who worked at a Shadow factory. It is his sole weakness and the greatest source of his rage.",
      "location": "B-L04"
    },
    {
      "id": "B-S04",
      "name": "An Alliance for Vengeance",
      "description": "Viktor joins the team for a common goal.",
      "details": "After Edwin persuades him that destroying the Shadow of Steam is the truest form of revenge, Viktor agrees to lend his strength to the team.",
      "location": "B-L04"
    },
    {
      "id": "B-E10",
      "name": "Technical Limitations",
      "description": "An additional technical expert is needed to infiltrate the fortress.",
      "details": "Isolde states that to access the Spark's core, they absolutely need the help of a genius mechanic to disable the Shadow's complex security systems.",
      "location": "B-L03"
    },
    {
      "id": "B-E11",
      "name": "Information on Lilia Bennet",
      "description": "A genius mechanic from the resistance.",
      "details": "Viktor recommends Lilia, a member of the resistance, believing she has the skills to break through the fortress's security.",
      "location": "B-L04"
    },
    {
      "id": "B-S05",
      "name": "A Clash of Ideals",
      "description": "The initial conflict between Edwin and Lilia.",
      "details": "Lilia distrusts Edwin for his seemingly money-driven attitude, while Edwin scoffs at her idealism, creating palpable tension between them.",
      "location": "B-L05"
    },
    {
      "id": "B-S06",
      "name": "Mutual Understanding",
      "description": "The two begin to understand each other through their comrades' mediation.",
      "details": "Isolde and Viktor step in to mediate, explaining the danger of the Spark and their common goal. Lilia begins to see Edwin in a new light.",
      "location": "B-L05"
    },
    {
      "id": "B-E12",
      "name": "Fortress Security Schematics",
      "description": "The key to infiltrating the fortress.",
      "details": "The latest security system schematics for the Shadow fortress, which Lilia obtained through her resistance activities. It dramatically increases the team's chances of a successful infiltration.",
      "location": "B-L05"
    },
    {
      "id": "B-S07",
      "name": "A Team of Five is Formed",
      "description": "At last, the perfect team to stand against the Shadow is formed.",
      "details": "Science (Isolde), Strength (Viktor), Technology (Lilia), Information (Cassian), and Leadership (Edwin). Five individuals with different motives unite under a single goal.",
      "location": "B-L05"
    },
    {
      "id": "B-X01",
      "name": "Chapter 2 End: The Eve of the Final Battle",
      "description": "All preparations are complete. The team of five heads to the Shadow's fortress, ready to risk it all.",
      "details": "The team finalizes their roles and plans, and sets out to destroy the 'Prometheus Spark', the source of all tragedy, located in the heart of the Shadow's fortress.",
      "location": "B-L05"
    }
  ],
  "locations": [
    {
      "id": "B-L01",
      "name": "The Slums of Brasshelm",
      "description": "A lawless area where the Shadow's surveillance is weak, but danger lurks.",
      "details": "An area polluted by factory smoke and wastewater. It's a place untouched by the city's law and order, where defectors and criminals hide."
    },
    {
      "id": "B-L02",
      "name": "The Docks",
      "description": "The site where the Shadow of Steam exploits its workers.",
      "details": "Lined with giant steamships and cranes, but behind the facade lies the pain and anger of workers exploited by the Shadow."
    },
    {
      "id": "B-L03",
      "name": "The Hidden Workshop",
      "description": "Dr. Isolde's secret laboratory and hideout.",
      "details": "A space in an abandoned boiler room deep within the slums. Here, she researches ways to stop the Spark, hidden from the Shadow's eyes."
    },
    {
      "id": "B-L04",
      "name": "The Underground Fighting Pit",
      "description": "An illegal fighting arena where dockworkers vent their frustrations.",
      "details": "A place where only winners and losers, money and violence, exist. Viktor hones his strength here, vowing revenge on the Shadow."
    },
    {
      "id": "B-L05",
      "name": "The Resistance's Secret Base",
      "description": "Lilia's workshop and the resistance's headquarters.",
      "details": "A space cleverly disguised in the basement of a scrapyard. It's filled with various weapons, equipment, and strategic plans to fight the Shadow."
    }
  ],
  "connectionRules": [
    { "id": "rule_b_e03", "cards": ["B-C02", "B-E01"], "result": "After Cassian pays a hefty sum, the informant reveals the location of a 'female scientist with a mechanical arm'.", "unlock": "B-E03" },
    { "id": "rule_b_l03", "cards": ["B-L01", "B-E03"], "result": "Following the information deep into the slums, they discover a 'Hidden Workshop' that looks like a converted boiler room.", "unlock": "B-L03" },
    { "id": "rule_b_c03", "cards": ["B-L03", "B-C01"], "result": "Dr. Isolde, encountered in the workshop, is extremely wary of the intruders.", "unlock": "B-C03" },
    { "id": "rule_b_e04", "cards": ["B-C03", "B-C01"], "result": "When conversation fails, Edwin shows her the 'Glowing Cog' from Chapter 1.", "unlock": "B-E04" },
    { "id": "rule_b_s01", "cards": ["B-E04", "B-C03"], "result": "Seeing the cog, Isolde's suspicion lessens slightly. She gives them a dangerous task to test their abilities.", "unlock": "B-S01" },
    { "id": "rule_b_e05", "cards": ["B-S01", "B-C03"], "result": "Isolde demands they steal a 'Rare Energy Crystal' from a warehouse at the docks controlled by the Shadow.", "unlock": "B-E05" },
    { "id": "rule_b_s02", "cards": ["B-E05", "B-C01"], "result": "When Edwin and Cassian return with the crystal, Isolde finally trusts them and starts sharing information.", "unlock": "B-S02" },
    { "id": "rule_b_e06", "cards": ["B-S02", "B-C03"], "result": "Isolde shows them her partial schematics, explaining that the Spark is an uncontrollable monster.", "unlock": "B-E06" },
    { "id": "rule_b_e07", "cards": ["B-E06", "B-L03"], "result": "To support her claim, Isolde reveals the 'Test Subject Report' hidden in her workshop.", "unlock": "B-E07" },
    { "id": "rule_b_e08", "cards": ["B-L02", "B-E02"], "result": "While investigating the docks, the workers tell them about 'Viktor', who is burning with vengeance for his sister.", "unlock": "B-E08" },
    { "id": "rule_b_l04", "cards": ["B-L02", "B-E08"], "result": "To find Viktor, they head to the 'Underground Fighting Pit' at the docks, where he often appears.", "unlock": "B-L04" },
    { "id": "rule_b_c04", "cards": ["B-L04", "B-C01"], "result": "Viktor, encountered at the pit, shows hostility towards the outsiders.", "unlock": "B-C04" },
    { "id": "rule_b_s03", "cards": ["B-C04", "B-L04"], "result": "Just then, Shadow henchmen raid the pit to eliminate Viktor. Edwin helps him fight them off.", "unlock": "B-S03" },
    { "id": "rule_b_e09", "cards": ["B-C04", "B-S03"], "result": "During the fight, a worn locket with his sister's picture falls from Viktor's pocket. They learn his story.", "unlock": "B-E09" },
    { "id": "rule_b_s04", "cards": ["B-E09", "B-C01"], "result": "Edwin convinces Viktor that destroying the Shadow is the truest revenge, and he agrees to join the team.", "unlock": "B-S04" },
    { "id": "rule_b_e10", "cards": ["B-E07", "B-S04"], "result": "Once the team assembles, Isolde says they need a tech expert to bypass the fortress's complex security.", "unlock": "B-E10" },
    { "id": "rule_b_e11", "cards": ["B-C04", "B-E10"], "result": "Viktor recommends 'Lilia Bennet', a genius mechanic from the resistance he worked with.", "unlock": "B-E11" },
    { "id": "rule_b_l05", "cards": ["B-E11", "B-L01"], "result": "Viktor guides them to the 'Resistance's Secret Base', cleverly disguised in the basement of a scrapyard.", "unlock": "B-L05" },
    { "id": "rule_b_c05", "cards": ["B-L05", "B-C01"], "result": "Lilia distrusts Edwin for his seemingly money-driven attitude and refuses to cooperate.", "unlock": "B-C05" },
    { "id": "rule_b_s05", "cards": ["B-C05", "B-C01"], "result": "Edwin scoffs at Lilia's idealism, and she condemns his cynicism, leading to a conflict.", "unlock": "B-S05" },
    { "id": "rule_b_s06", "cards": ["B-S05", "B-C03"], "result": "Isolde and Viktor step in to mediate, explaining the common goal. Lilia starts to see Edwin differently.", "unlock": "B-S06" },
    { "id": "rule_b_e12", "cards": ["B-C05", "B-S06"], "result": "Finally agreeing to cooperate, Lilia shares her best intel: the 'Fortress Security Schematics'.", "unlock": "B-E12" },
    { "id": "rule_b_s07", "cards": ["B-E12", "B-E07"], "result": "Science, Strength, Technology, Information, and Leadership. At last, the perfect team of five to fight the Shadow is formed.", "unlock": "B-S07" },
    { "id": "rule_b_x01", "cards": ["B-S07", "B-L02"], "result": "All preparations are complete. The team of five heads to the fortress, located underground near the docks, to risk it all for Brasshelm.", "unlock": "B-X01" }
  ],
  "fragments": [],
  "winCondition": "B-X01",
  "initialCards": [
    "B-C01",
    "B-E01",
    "B-L01",
    "B-L02",
    "B-E02",
    "B-C02"
  ]
}
