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
  // 게임 설정 추가
  initialCards?: string[];
  winCondition?: string;
}// 임시 파일 - 빌드 오류 해결을 위한 최소한의 export


export const case4ChEn1: GameScenario = {
  "id": "arcanum_shadows_chapter1_en",
  "title": "Chapter 1: The Paradox of the Locked Room and the Missing Heart",
  "story": "In Arcanum, a city where magic and technology coexist, the magi-engineer Stonewick is murdered in a perfect locked room, and his heart disappears. Victor Crow investigates the scene, interrogates suspects, and secures the first clues.",
  "victim": "Elijah Stonewick",
  "suspects": [
    {
      "id": "A01",
      "name": "Victor Crow",
      "role": "Detective",
      "description": "A cold, human detective skeptical of magic. Believes in logic and science.",
      "alibi": "",
      "motive": ""
    },
    {
      "id": "A10",
      "name": "Aelen Silverwood, Elf Sorceress",
      "role": "Suspect",
      "description": "Stonewick's long-time rival and head of the ancient Elf Magic Guild.",
      "alibi": "Claims to have been meditating in her magic tower at the time of the incident.",
      "motive": "Criticized Stonewick's magi-engineering research for defiling the purity of ancient magic."
    },
    {
      "id": "A11",
      "name": "Grimlok Steelhammer, Dwarf Engineer",
      "role": "Suspect",
      "description": "Stonewick's former colleague and head of the 'Black Hammer' underground crime syndicate in Arcanum.",
      "alibi": "Claims to have been working on a new invention in his underground workshop all night.",
      "motive": "Coveted Stonewick's technology and had a large deal pending with him."
    },
    {
      "id": "A12",
      "name": "Liliana Bane, Human Scholar",
      "role": "Suspect",
      "description": "Chief scholar of the Arcanum Historical Archives. Raised ethical concerns about Stonewick's research methods.",
      "alibi": "Claims to have been researching ancient texts in the Arcanum Historical Archives all night.",
      "motive": "Information about ancient artifacts Stonewick was researching."
    },
    {
      "id": "A13",
      "name": "Grok Bloodaxe, Orc Mercenary",
      "role": "Suspect",
      "description": "Stonewick's personal bodyguard. Has a painful past, having lost family to Stonewick.",
      "alibi": "Claims to have been on external patrol of the tower at the time of the incident.",
      "motive": "Past grudge."
    },
    {
      "id": "A14",
      "name": "Kairen Nightshade, Half-Elf Assistant",
      "role": "Suspect",
      "description": "Stonewick's closest assistant. The only one who knows all his research and secrets.",
      "alibi": "Claims to have been in his room right next to the lab at the time of the incident.",
      "motive": "Stonewick's dangerous research."
    }
  ],
  "evidence": [
    {
      "id": "A02",
      "name": "Elijah Stonewick's Body",
      "description": "Body found with a magic staff piercing his heart.",
      "details": "His heart had mysteriously vanished from his chest.",
      "location": "A03"
    },
    {
      "id": "A04",
      "name": "Missing Heart",
      "description": "Stonewick's heart, mysteriously vanished from his chest.",
      "details": "As if someone meticulously extracted only the heart with precise magic.",
      "location": "A02"
    },
    {
      "id": "A05",
      "name": "Cracked Magic Staff",
      "description": "A subtle crack at the tip of Stonewick's staff.",
      "details": "Suggests excessive magical energy was used.",
      "location": "A02"
    },
    {
      "id": "A06",
      "name": "Faintly Glowing Crystal Shard",
      "description": "A small crystal fragment found next to the body, emitting magical residue.",
      "details": "A fragment of a precisely crafted magic amplification device.",
      "location": "A02"
    },
    {
      "id": "A07",
      "name": "Worn Leather Pouch",
      "description": "A small pouch tightly clutched in Stonewick's hand.",
      "details": "Contains a dried red petal and a silver coin with an unknown emblem.",
      "location": "A02"
    },
    {
      "id": "A08",
      "name": "Dried Red Petal",
      "description": "A rare flower petal found in the pouch, not native to Arcanum.",
      "details": "A rare magical plant called 'Blood Rose', used in ancient Elf magic rituals for absorbing life energy.",
      "location": "A07"
    },
    {
      "id": "A09",
      "name": "Silver Coin with Unknown Emblem",
      "description": "A silver coin found in the pouch, engraved with an ancient Dwarf emblem.",
      "details": "The 'Heartbreaker' emblem. Symbolizes a weapon used to destroy hearts in Dwarf legends.",
      "location": "A07"
    },
    {
      "id": "A15",
      "name": "Suspects' Alibis",
      "description": "Statements from the 5 suspects regarding their whereabouts at the time of the incident.",
      "details": "All seem perfect, but something feels off.",
      "location": ""
    },
    {
      "id": "A16",
      "name": "Perfect Magic Barrier",
      "description": "Confirmation that the lab's magic barrier perfectly blocked external intrusion.",
      "details": "Proves the paradox of the locked-room murder.",
      "location": "A03"
    },
    {
      "id": "A17",
      "name": "Intact Physical Locks",
      "description": "No signs of damage on the lab door and window's physical locks.",
      "details": "Proves external intrusion was impossible.",
      "location": "A03"
    },
    {
      "id": "A18",
      "name": "Paradox of the Locked Room",
      "description": "The contradiction of a murder occurring in a perfectly sealed room where external intrusion is impossible.",
      "details": "The culprit is inside the tower.",
      "location": "A03"
    }
  ],
  "locations": [
    {
      "id": "A03",
      "name": "Arcanum Tower Lab",
      "description": "The sealed lab where Stonewick was murdered, protected by a magic barrier.",
      "details": "Windows were reinforced with magic-infused steel, and the door was locked with magic seals and biometric recognition."
    }
  ],
  "connectionRules": [
    {"id": "rule_A04", "cards": ["A02", "A03"], "result": "Investigating Stonewick's body and the lab, you discover his heart has vanished from his chest.", "unlock": "A04"},
    {"id": "rule_A05", "cards": ["A02", "A04"], "result": "Through Stonewick's body and the missing heart, you find a subtle crack at the tip of his magic staff.", "unlock": "A05"},
    {"id": "rule_A06", "cards": ["A02", "A05"], "result": "Through Stonewick's body and the cracked magic staff, you discover a faintly glowing crystal shard next to the body.", "unlock": "A06"},
    {"id": "rule_A07", "cards": ["A02", "A04"], "result": "Through Stonewick's body and the missing heart, you find a worn leather pouch tightly clutched in his hand.", "unlock": "A07"},
    {"id": "rule_A08", "cards": ["A07", "A06"], "result": "Through the worn leather pouch and the crystal shard, you discover a dried red petal inside the pouch.", "unlock": "A08"},
    {"id": "rule_A09", "cards": ["A07", "A06"], "result": "Through the worn leather pouch and the crystal shard, you discover a silver coin with an unknown emblem inside the pouch.", "unlock": "A09"},
    {"id": "rule_A15", "cards": ["A10", "A11"], "result": "Interrogating Aelen Silverwood and Grimrok Steelhammer, you secure the suspects' alibis.", "unlock": "A15"},
    {"id": "rule_A16", "cards": ["A03", "A05"], "result": "Through the Arcanum Tower Lab and the cracked magic staff, you confirm the magic barrier was perfect.", "unlock": "A16"},
    {"id": "rule_A17", "cards": ["A03", "A06"], "result": "Through the Arcanum Tower Lab and the crystal shard, you confirm no signs of damage on the physical locks.", "unlock": "A17"},
    {"id": "rule_A18", "cards": ["A16", "A17"], "result": "Through the perfect magic barrier and intact physical locks, you understand the paradox of a murder occurring in a perfectly sealed room.", "unlock": "A18"}
  ],
  "fragments": [],
  "winCondition": "A18",
  "initialCards": ["A01", "A02", "A03"]
}
