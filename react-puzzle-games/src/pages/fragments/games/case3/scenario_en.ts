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
  "id": "ashes_of_brasshelm_ch1_en",
  "title": "Chapter 1: The Spark of Intrigue",
  "story": "Arriving in Brasshelm, Edwin encounters a mysterious murder and a strange cog. He delves into the city's dark side, joining forces with the information broker Cassian Holt. Their goal is to uncover the truth about the secret society behind the incident, the 'Shadow of Steam'.",
  "victim": "An unnamed junior researcher",
  "suspects": [
    {
      "id": "A-C01",
      "name": "Edwin Crawford",
      "role": "Protagonist/Investigator",
      "description": "A cynical former journalist, jaded by past failures. He trades secrets for coin, but his professional curiosity is piqued by the murder before him.",
      "alibi": "At the time of the incident, he had just gotten off the train and was checking into his inn.",
      "motive": "Initially, to find a profitable secret, but his motive shifts to professional curiosity about the murder."
    },
    {
      "id": "A-C02",
      "name": "Innkeeper",
      "role": "Witness/Informer",
      "description": "The owner of the shabby inn. He is well-versed in the city's rumors but is extremely reluctant to get involved in dangerous affairs.",
      "alibi": "He was at the inn's counter, attending to guests, during the entire incident.",
      "motive": "To prevent any trouble at his inn and maintain peace."
    },
    {
      "id": "A-C03",
      "name": "Bystander",
      "role": "Witness",
      "description": "A passerby who witnessed the event from a distance. He is terrified after seeing large men chasing the victim.",
      "alibi": "He was coincidentally passing by the alley on his way home late at night.",
      "motive": "None. He is simply afraid of being involved in the incident."
    },
    {
      "id": "A-C04",
      "name": "Cassian Holt",
      "role": "Ally/Information Broker",
      "description": "A shrewd thief who knows the alleys of Brasshelm like the back of his hand. He's willing to take risks if there's money to be made.",
      "alibi": "He claims he was 'scouting for business opportunities' near the chaotic crime scene.",
      "motive": "To make a profit after recognizing the value of the glowing cog."
    },
    {
      "id": "A-C05",
      "name": "Shadow's Henchman",
      "role": "Antagonist",
      "description": "An enforcer tasked with retrieving the cog and eliminating any witnesses under the organization's orders.",
      "alibi": "He was tracking the victim under the organization's orders.",
      "motive": "To prevent the organization's secret (the cog) from being leaked."
    },
    {
      "id": "A-C06",
      "name": "Network of Informants",
      "role": "Resource",
      "description": "A collective of informants run by Cassian. They do not appear directly but can be used to obtain the city's secrets.",
      "alibi": "Scattered throughout the city, engaged in their activities.",
      "motive": "To gather requested information for a price."
    }
  ],
  "evidence": [
    {
      "id": "A-E01",
      "name": "A Murder Occurs",
      "description": "A mysterious murder case near the inn.",
      "details": "Late at night, a man was murdered in an alley near the inn. It doesn't seem like a simple robbery.",
      "location": "A-L03"
    },
    {
      "id": "A-E02",
      "name": "The Glowing Cog",
      "description": "A mysterious cog that emits an unnatural heat.",
      "details": "An artifact found clutched in the victim's hand. It seems to operate on a principle different from common steam technology.",
      "location": "A-L03"
    },
    {
      "id": "A-E03",
      "name": "The Dying Man's Last Words",
      "description": "A dire warning: 'Stop the Spark...'",
      "details": "The last words the victim uttered as he handed the cog to Edwin. The clue 'Spark' appears for the first time.",
      "location": "A-L03"
    },
    {
      "id": "A-E04",
      "name": "Rumors about the Spark",
      "description": "A dangerous rumor known by the innkeeper.",
      "details": "The rumor suggests that the city's rulers are creating a powerful but dangerous object called the 'Prometheus Spark'.",
      "location": "A-L02"
    },
    {
      "id": "A-E05",
      "name": "Crime Scene Investigation",
      "description": "Edwin carefully examines the scene using his journalistic experience.",
      "details": "The victim's body shows signs of a fierce struggle, and multiple sets of footprints are found nearby.",
      "location": "A-L03"
    },
    {
      "id": "A-E06",
      "name": "Victim's Belongings",
      "description": "An old factory access card found in the victim's pocket.",
      "details": "It's a researcher's access card for the 'Alpha Steam-Works' factory, located on the outskirts of Brasshelm.",
      "location": "A-L03"
    },
    {
      "id": "A-E07",
      "name": "Victim was a Junior Researcher",
      "description": "The victim's identity is revealed.",
      "details": "The access card confirms that the victim was a junior researcher at the 'Alpha Steam-Works' factory.",
      "location": "A-L03"
    },
    {
      "id": "A-E08",
      "name": "Bystander's Testimony",
      "description": "Testimony that the victim was being chased.",
      "details": "Two large men in similar dark coats were chasing the victim.",
      "location": "A-L03"
    },
    {
      "id": "A-S01",
      "name": "First Encounter with Cassian",
      "description": "Edwin catches Cassian's pickpocketing attempt and demands information.",
      "details": "Edwin grabs Cassian's wrist as he tries to steal his wallet. Instead of turning him over to the authorities, Edwin demands information about the scene in exchange for his silence.",
      "location": "A-L03"
    },
    {
      "id": "A-E09",
      "name": "The Cog's Technology",
      "description": "Cassian recognizes the extraordinary nature of the cog.",
      "details": "Cassian notes that the cog's technology is unlike anything else in the city and must be incredibly valuable.",
      "location": "A-L04"
    },
    {
      "id": "A-S02",
      "name": "Chase in the Alley",
      "description": "Henchmen appear, and Cassian helps Edwin escape.",
      "details": "When henchmen arrive to retrieve the cog and attack Edwin, Cassian helps him escape, claiming he's 'paying off a debt'. A dangerous chase ensues.",
      "location": "A-L03"
    },
    {
      "id": "A-E10",
      "name": "Henchman's Uniform Scrap",
      "description": "A clue obtained during the fight with the henchman.",
      "details": "During the chase, a piece of the henchman's coat is torn off. It has the 'Alpha Steam-Works' factory mark sewn on the lining.",
      "location": "A-L03"
    },
    {
      "id": "A-E11",
      "name": "Uniform and Access Card Match",
      "description": "Decisive proof that it was an inside job.",
      "details": "The henchman's uniform mark matches the victim's factory access card. The victim was killed by his own organization.",
      "location": "A-L03"
    },
    {
      "id": "A-E12",
      "name": "'Shadow of Steam'",
      "description": "The name of the secret society behind the incident.",
      "details": "Cassian explains that 'Alpha Steam-Works' is a front company for the secret society that truly rules the city: the 'Shadow of Steam'.",
      "location": "A-L04"
    },
    {
      "id": "A-E13",
      "name": "The Organization's Scale",
      "description": "The true, immense scale of the organization.",
      "details": "Through Cassian's network, it's revealed that the 'Shadow of Steam' is a massive organization controlling the city's economy, military, and press.",
      "location": "A-L04"
    },
    {
      "id": "A-S03",
      "name": "An Uneasy Alliance",
      "description": "Edwin and Cassian agree to work together for their own interests.",
      "details": "Edwin realizes the case is bigger than he imagined, and Cassian senses a major score. Though they don't fully trust each other, they form a temporary alliance for mutual benefit.",
      "location": "A-L04"
    },
    {
      "id": "A-E14",
      "name": "Possibility of a Whistleblower",
      "description": "A theory on the victim's motive.",
      "details": "The preliminary conclusion is that the victim was a whistleblower trying to expose the organization's secret (the 'Spark') and was eliminated for it.",
      "location": "A-L03"
    },
    {
      "id": "A-E15",
      "name": "The Need for an Expert",
      "description": "The condition for the next step.",
      "details": "To understand the cog and the 'Spark', they conclude that they desperately need the help of an expert who knows the organization's technology.",
      "location": "A-L04"
    },
    {
      "id": "A-S04",
      "name": "Setting the Next Goal",
      "description": "They decide to find a scientist who defected from the organization.",
      "details": "Working on the assumption that there might be other whistleblowers, Edwin and Cassian set their next goal: to find another expert who might have survived after betraying the organization—a 'defector scientist'.",
      "location": "A-L04"
    },
    {
      "id": "A-X01",
      "name": "Chapter 1 End: In Search of an Expert",
      "description": "The two head to the slums to find information about the defector scientist.",
      "details": "All clues lead to one conclusion: the key to unlocking the secret of the Spark is a scientist who defected from the organization. Edwin and Cassian decide to head to the city's slums, where the Shadow's surveillance is weak, to track him or her down.",
      "location": "A-L04"
    }
  ],
  "locations": [
    {
      "id": "A-L01",
      "name": "Brasshelm",
      "description": "A sprawling industrial city ruled by steam and steel.",
      "details": "A city of stark contrasts, filled with soot-blackened skies, the ceaseless clang of machinery, and a clear divide between the rich and the poor. The entire city is like a massive, volatile pressure cooker."
    },
    {
      "id": "A-L02",
      "name": "The Shabby Inn",
      "description": "The first place Edwin stays upon arriving in Brasshelm.",
      "details": "A place where all sorts of city rumors and secret deals are exchanged. It's here that Edwin first hears about the 'Prometheus Spark'."
    },
    {
      "id": "A-L03",
      "name": "The Alley Crime Scene",
      "description": "The dark, grimy alley behind the inn where the murder took place.",
      "details": "The first clues of the case are concentrated here. Bloodstains and multiple sets of footprints are scattered about chaotically."
    },
    {
      "id": "A-L04",
      "name": "Cassian's Hideout",
      "description": "Cassian's secret base, hidden within the city's complex pipelines.",
      "details": "A cluttered space filled with stolen goods, unidentified machine parts, and city maps. This is the origin of Cassian's information network."
    }
  ],
  "connectionRules": [
    { "id": "rule_a_e04", "cards": ["A-C02", "A-E03"], "result": "When Edwin mentions the word 'Spark', the innkeeper nervously tells him about the dangerous rumors circulating in the city.", "unlock": "A-E04" },
    { "id": "rule_a_l03", "cards": ["A-L02", "A-E01"], "result": "The commotion was coming from the alley right behind the inn. Edwin heads to the crime scene.", "unlock": "A-L03" },
    { "id": "rule_a_e05", "cards": ["A-L03", "A-C01"], "result": "Using his experience as a journalist, Edwin carefully examines the scene to find traces others might have missed.", "unlock": "A-E05" },
    { "id": "rule_a_e06", "cards": ["A-E05", "A-C01"], "result": "While searching the victim's clothes, Edwin discovers an old access card in an inside pocket.", "unlock": "A-E06" },
    { "id": "rule_a_e07", "cards": ["A-E06", "A-L01"], "result": "The 'Alpha Steam-Works' on the card is a large facility on the outskirts of Brasshelm. The victim's identity is revealed.", "unlock": "A-E07" },
    { "id": "rule_a_c03", "cards": ["A-L03", "A-C02"], "result": "The innkeeper tips off that a passerby who seemed to have witnessed the incident was hiding in a corner.", "unlock": "A-C03" },
    { "id": "rule_a_e08", "cards": ["A-C03", "A-C01"], "result": "After Edwin reassures him, the bystander testifies that the victim was being chased by large men.", "unlock": "A-E08" },
    { "id": "rule_a_c04", "cards": ["A-L03", "A-E05"], "result": "While examining the scene, Edwin spots a shrewd thief, Cassian, trying to steal something amidst the chaos.", "unlock": "A-C04" },
    { "id": "rule_a_s01", "cards": ["A-C01", "A-C04"], "result": "Edwin catches Cassian pickpocketing but offers a deal for information instead of turning him in.", "unlock": "A-S01" },
    { "id": "rule_a_e09", "cards": ["A-C04", "A-E02"], "result": "Cassian's eyes light up when he sees the cog. He recognizes its value, noting it's no ordinary piece of tech.", "unlock": "A-E09" },
    { "id": "rule_a_c05", "cards": ["A-E08", "A-E02"], "result": "The witness's testimony and the cog's existence make it clear someone will come to retrieve it. Soon, henchmen appear.", "unlock": "A-C05" },
    { "id": "rule_a_s02", "cards": ["A-C05", "A-S01"], "result": "When the henchmen attack Edwin, Cassian helps him escape, claiming to be 'paying off a debt'. A dangerous chase ensues.", "unlock": "A-S02" },
    { "id": "rule_a_e10", "cards": ["A-S02", "A-C05"], "result": "After a fierce struggle during the chase, Edwin manages to tear off a piece of the henchman's coat.", "unlock": "A-E10" },
    { "id": "rule_a_e11", "cards": ["A-E10", "A-E07"], "result": "The mark on the henchman's uniform matches the victim's access card. It's clear this was an inside job.", "unlock": "A-E11" },
    { "id": "rule_a_e12", "cards": ["A-C04", "A-E11"], "result": "Cassian explains that 'Alpha Steam-Works' is a front for the 'Shadow of Steam', the secret society that truly runs the city.", "unlock": "A-E12" },
    { "id": "rule_a_l04", "cards": ["A-S02", "A-C04"], "result": "After shaking off the henchmen, Cassian leads Edwin to his hideout.", "unlock": "A-L04" },
    { "id": "rule_a_c06", "cards": ["A-L04", "A-C04"], "result": "Cassian suggests that he can find out more by using his network of informants.", "unlock": "A-C06" },
    { "id": "rule_a_e13", "cards": ["A-C06", "A-E12"], "result": "The network reveals a shocking truth: the 'Shadow of Steam' has control over all of the city's infrastructure.", "unlock": "A-E13" },
    { "id": "rule_a_s03", "cards": ["A-C01", "A-E13"], "result": "Edwin realizes the case is bigger than he thought, while Cassian senses a huge score. They agree to work together for their own interests.", "unlock": "A-S03" },
    { "id": "rule_a_e14", "cards": ["A-E03", "A-E11"], "result": "The preliminary conclusion is that the victim was a whistleblower, killed by his own organization for trying to expose the secret of the 'Spark'.", "unlock": "A-E14" },
    { "id": "rule_a_e15", "cards": ["A-E09", "A-E14"], "result": "They conclude that to solve this mystery, they must find another expert who survived after betraying the organization.", "unlock": "A-E15" },
    { "id": "rule_a_s04", "cards": ["A-S03", "A-E15"], "result": "Edwin and Cassian set their next goal: to find the rumored scientist who defected from the Shadow of Steam.", "unlock": "A-S04" },
    { "id": "rule_a_x01", "cards": ["A-S04", "A-L01"], "result": "To find information about the defector scientist, the two decide to head to the city's slums, where the Shadow's surveillance is weak.", "unlock": "A-X01" }
  ],
  "fragments": [],
  "winCondition": "A-X01",
  "initialCards": [
    "A-C01",
    "A-C02",
    "A-L01",
    "A-L02",
    "A-E01",
    "A-E02",
    "A-E03"
  ]
}