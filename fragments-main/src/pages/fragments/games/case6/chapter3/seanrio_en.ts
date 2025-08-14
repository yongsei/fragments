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



export const case6ch3En: GameScenario = {
  id: 'case6_chapter3',
  title: 'The Web of Deception',
  story: 'The city is in turmoil as Elara, the respected librarian, is unjustly arrested for the glowing plague. Captain Valerius, a man of law and order, finds himself grappling with mounting inconsistencies in the case, leading him to a deeper, more clandestine investigation. The player must navigate a complex web of deceit, uncovering a smuggler\'s testimony, a hidden financial trail, and a desperate plea from a victim, all pointing away from Elara and squarely towards Kael, revealing the true extent of his influence and the desperate measures taken to conceal his crimes.',
  victim: '',
  suspects: [
    {
      id: 'CH3_CH01',
      name: 'Captain Valerius, the Troubled Enforcer',
      role: 'Character',
      description: 'Captain Valerius is a man of imposing stature and unwavering dedication to the law. His ornate city guard armor gleams, but his stern face is etched with a growing unease. Known for his fairness and his sharp mind, he finds himself troubled by the inconsistencies in Elara\'s case. His eyes, usually resolute, now hold a flicker of doubt, suggesting he suspects a larger conspiracy at play, forcing him to operate outside conventional channels.',
      alibi: '',
      motive: ''
    },
    {
      id: 'CH3_CH02',
      name: 'The Shady Informant',
      role: 'Character',
      description: 'A mysterious figure who operates in the city\'s underbelly, known only by whispers and fleeting glimpses. They possess an uncanny ability to gather information from the darkest corners of the city, trading secrets for favors or coin. Captain Valerius is seen meeting with them in clandestine locations, suggesting he is desperate for answers that official channels cannot provide. Their face is always obscured, and their voice a low rasp, adding to their enigmatic aura.',
      alibi: '',
      motive: ''
    },
    {
      id: 'CH3_CH03',
      name: 'The Disgruntled Accountant',
      role: 'Character',
      description: 'A meticulous, nervous man who once managed the finances of several wealthy, reclusive individuals, including Kael\'s anonymous client. He is a master of numbers but a coward at heart, easily intimidated. He possesses intimate knowledge of complex financial networks and offshore accounts, making him a potential goldmine of information. His recent dismissal from his post has left him bitter and willing to talk, for the right price, about the illicit dealings he witnessed.',
      alibi: '',
      motive: ''
    },
    {
      id: 'CH3_CH04',
      name: 'The Prison Warden, Elias Thorne',
      role: 'Character',
      description: 'A stern, unyielding man who oversees the city prison with an iron fist. Warden Thorne is a stickler for rules and procedure, rarely swayed by emotion or outside influence. He is initially dismissive of any doubts regarding Elara\'s guilt, but his rigid adherence to protocol means he will follow any legitimate order, even if it contradicts his personal beliefs. He holds the keys to Elara\'s fate and access to her, making him a crucial, albeit difficult, point of contact.',
      alibi: '',
      motive: ''
    },
    {
      id: 'CH3_CH05',
      name: 'The Desperate Family Member',
      role: 'Character',
      description: 'A distraught relative of the third victim, a young woman found with Kael\'s locket. They are consumed by grief and a desperate need for answers, willing to share any information, no matter how small. They provide details about the victim\'s relationship with Kael, her fascination with his promises of eternal youth, and her last known movements, painting a clearer picture of Kael\'s predatory methods and his manipulation of vulnerable individuals.',
      alibi: '',
      motive: ''
    }
  ],
  evidence: [
    {
      id: 'CH3_EV01',
      name: 'Elara\'s Unjust Arrest',
      description: 'Despite her pleas of innocence and her known dedication to the library, Elara is formally arrested by the city guard. The public outcry is mixed, some believing her a witch, others a scapegoat. She is accused of causing the glowing plague through forbidden rituals, a charge that feels increasingly hollow as new information emerges. Her defiant, yet worried, expression as she is led away speaks volumes about the injustice of the situation.',
      details: 'Despite her pleas of innocence and her known dedication to the library, Elara is formally arrested by the city guard. The public outcry is mixed, some believing her a witch, others a scapegoat. She is accused of causing the glowing plague through forbidden rituals, a charge that feels increasingly hollow as new information emerges. Her defiant, yet worried, expression as she is led away speaks volumes about the injustice of the situation.',
      location: ''
    },
    {
      id: 'CH3_EV02',
      name: 'Forensic Alchemical Analysis Report',
      description: 'A detailed, scientific report from the city\'s lead alchemist, analyzing samples taken from the victims of the glowing plague. The report conclusively states that the glowing substance is not a curse or a natural phenomenon, but a powerful, highly unstable alchemical concoction designed for cellular rejuvenation. It highlights the process\'s catastrophic flaw: an uncontrolled overload of life energy, leading to the victims\' gruesome demise. The findings directly contradict the initial assumptions about the plague.',
      details: 'A detailed, scientific report from the city\'s lead alchemist, analyzing samples taken from the victims of the glowing plague. The report conclusively states that the glowing substance is not a curse or a natural phenomenon, but a powerful, highly unstable alchemical concoction designed for cellular rejuvenation. It highlights the process\'s catastrophic flaw: an uncontrolled overload of life energy, leading to the victims\' gruesome demise. The findings directly contradict the initial assumptions about the plague.',
      location: ''
    },
    {
      id: 'CH3_EV03',
      name: 'The Smuggler\'s Interrogation Transcript',
      description: 'A tense, heavily redacted transcript of the interrogation of a known smuggler, apprehended by Captain Valerius\'s special unit. Under duress, the smuggler admits to transporting large quantities of rare, glowing algae from the coast to a hidden location in the city sewers. They describe a high-paying, anonymous client who insisted on absolute secrecy, providing crucial details about Kael\'s supply chain and confirming the illicit nature of his operations.',
      details: 'A tense, heavily redacted transcript of the interrogation of a known smuggler, apprehended by Captain Valerius\'s special unit. Under duress, the smuggler admits to transporting large quantities of rare, glowing algae from the coast to a hidden location in the city sewers. They describe a high-paying, anonymous client who insisted on absolute secrecy, providing crucial details about Kael\'s supply chain and confirming the illicit nature of his operations.',
      location: ''
    },
    {
      id: 'CH3_EV04',
      name: 'Kael\'s Offshore Financial Records',
      description: 'A meticulously compiled dossier of financial records, obtained through clandestine means, detailing a series of massive, anonymous payments flowing into Kael\'s offshore accounts. The transactions originate from a network of shell corporations and untraceable digital currencies, all pointing to a vast, illicit enterprise. The sheer volume of funds is staggering, far exceeding what a rogue alchemist would typically command, suggesting a powerful, hidden patron or a grander scheme at play.',
      details: 'A meticulously compiled dossier of financial records, obtained through clandestine means, detailing a series of massive, anonymous payments flowing into Kael\'s offshore accounts. The transactions originate from a network of shell corporations and untraceable digital currencies, all pointing to a vast, illicit enterprise. The sheer volume of funds is staggering, far exceeding what a rogue alchemist would typically command, suggesting a powerful, hidden patron or a grander scheme at play.',
      location: ''
    },
    {
      id: 'CH3_EV05',
      name: 'A Desperate Plea from the Second Victim',
      description: 'A crumpled, tear-stained letter, found among Kael\'s financial records, written by the wealthy merchant (the second victim of the glowing plague). The handwriting is shaky and desperate, begging Kael to speed up the process of his \'rejuvenation\' treatment, as he fears he doesn\'t have much time left. He offers a massive, additional bonus for a successful and swift result, highlighting his obsession with eternal youth and his willingness to pay any price.',
      details: 'A crumpled, tear-stained letter, found among Kael\'s financial records, written by the wealthy merchant (the second victim of the glowing plague). The handwriting is shaky and desperate, begging Kael to speed up the process of his \'rejuvenation\' treatment, as he fears he doesn\'t have much time left. He offers a massive, additional bonus for a successful and swift result, highlighting his obsession with eternal youth and his willingness to pay any price.',
      location: ''
    },
    {
      id: 'CH3_EV06',
      name: 'Elara\'s Coded Message from Prison',
      description: 'A small, tightly folded piece of parchment, smuggled out of Elara\'s prison cell. It contains a series of cryptic symbols and fragmented phrases, a coded message intended only for those who understand her research. Deciphering it reveals her desperate plea to find the \'Sunken Cathedral,\' a legendary underwater temple she believes holds the true source of the glowing algae and the key to stopping the plague. The message is her last hope for justice.',
      details: 'A small, tightly folded piece of parchment, smuggled out of Elara\'s prison cell. It contains a series of cryptic symbols and fragmented phrases, a coded message intended only for those who understand her research. Deciphering it reveals her desperate plea to find the \'Sunken Cathedral,\' a legendary underwater temple she believes holds the true source of the glowing algae and the key to stopping the plague. The message is her last hope for justice.',
      location: ''
    },
    {
      id: 'CH3_EV07',
      name: 'Captain Valerius\'s Secret Dossier',
      description: 'A confidential dossier compiled by Captain Valerius, containing his personal notes and observations on the Elara case. It reveals his growing doubts about her guilt, his suspicions of a larger conspiracy, and his attempts to gather evidence outside official channels. The dossier includes inconsistencies in witness testimonies, unusual patterns in the victims\' disappearances, and his own theories about Kael\'s involvement, marking a turning point in his investigation.',
      details: 'A confidential dossier compiled by Captain Valerius, containing his personal notes and observations on the Elara case. It reveals his growing doubts about her guilt, his suspicions of a larger conspiracy, and his attempts to gather evidence outside official channels. The dossier includes inconsistencies in witness testimonies, unusual patterns in the victims\' disappearances, and his own theories about Kael\'s involvement, marking a turning point in his investigation.',
      location: ''
    },
    {
      id: 'CH3_EV08',
      name: 'The Third Victim\'s Personal Locket',
      description: 'A small, intricately designed silver locket, found clutched in the hand of the third victim. It bears no outward markings, but inside, a faded, miniature portrait of Kael is barely visible. The locket is a chilling piece of evidence, directly linking Kael to the latest victim and suggesting a personal connection, perhaps even a romantic one, that he exploited for his dark purposes. Its discovery further exonerates Elara and solidifies Kael\'s guilt.',
      details: 'A small, intricately designed silver locket, found clutched in the hand of the third victim. It bears no outward markings, but inside, a faded, miniature portrait of Kael is barely visible. The locket is a chilling piece of evidence, directly linking Kael to the latest victim and suggesting a personal connection, perhaps even a romantic one, that he exploited for his dark purposes. Its discovery further exonerates Elara and solidifies Kael\'s guilt.',
      location: ''
    },
    {
      id: 'CH3_EV09',
      name: 'Kael\'s Intercepted Communications',
      description: 'A series of encrypted messages, intercepted by Captain Valerius\'s network, revealing Kael\'s desperate attempts to secure more bioluminescent algae and his growing paranoia. The communications detail his frustration with the slowing supply chain and his plans to accelerate his experiments, even at greater risk. They also hint at a final, grand ritual he intends to perform, suggesting a climactic event is imminent and confirming his continued, deadly activities.',
      details: 'A series of encrypted messages, intercepted by Captain Valerius\'s network, revealing Kael\'s desperate attempts to secure more bioluminescent algae and his growing paranoia. The communications detail his frustration with the slowing supply chain and his plans to accelerate his experiments, even at greater risk. They also hint at a final, grand ritual he intends to perform, suggesting a climactic event is imminent and confirming his continued, deadly activities.',
      location: ''
    },
    {
      id: 'CH3_EV10',
      name: 'Hidden Truth',
      description: 'New facts revealed from the Shady Informant and Disgruntled Accountant\'s investigation.',
      details: 'Hints that Kael\'s experiments go beyond simple immortality pursuit to attempt direct contact with deep-sea entities.',
      location: 'CH3_CH02'
    },
    {
      id: 'CH3_EV11',
      name: 'Connection Link',
      description: 'A mysterious connection point between the Prison Warden and the City Archives\' Restricted Section.',
      details: 'Shows the complex relationship between official institutions and secret knowledge repositories.',
      location: 'CH3_LC04'
    },
    {
      id: 'CH3_EV12',
      name: 'Dark Signal',
      description: 'Supernatural correlation discovered between the hidden truth and connection link.',
      details: 'Reveals that all events are part of a larger cosmic plan and that Kael is not merely an alchemist.',
      location: 'CH3_EV10'
    },
    {
      id: 'CH3_FINAL',
      name: 'The True Purpose of the Web of Deception',
      description: 'Decisive evidence revealed when all clues and evidence are combined to uncover the ultimate goal behind the web of deception.',
      details: 'It is fully revealed that Kael\'s alchemical experiments were not for immortality, but part of a ritual to summon ancient entities from the depths to the surface world.',
      location: 'CH3_EV11'
    }
  ],
  locations: [
    {
      id: 'CH3_LC01',
      name: 'The Grim City Prison',
      description: 'A formidable, ancient fortress of cold, damp stone and iron bars, the city prison looms over the city\'s lower district. Its walls are thick with the echoes of despair and the faint, metallic tang of fear. Heavily guarded and seemingly impenetrable, it is where the city\'s most dangerous criminals, and now, its most controversial figures, are held. The atmosphere is oppressive, a stark reminder of the harsh realities of justice in the city.',
      details: 'A formidable, ancient fortress of cold, damp stone and iron bars, the city prison looms over the city\'s lower district. Its walls are thick with the echoes of despair and the faint, metallic tang of fear. Heavily guarded and seemingly impenetrable, it is where the city\'s most dangerous criminals, and now, its most controversial figures, are held. The atmosphere is oppressive, a stark reminder of the harsh realities of justice in the city.'
    },
    {
      id: 'CH3_LC02',
      name: 'The Smuggler\'s Den',
      description: 'A grimy, dimly lit warehouse near the city docks, reeking of stale fish and illicit goods. It serves as a front for a vast smuggling operation, a place where anything can be bought or sold under the table. Hidden compartments and secret passages abound, suggesting a long history of clandestine activities. This is where the rare, bioluminescent algae, crucial to Kael\'s experiments, is brought into the city, making it a key node in the conspiracy\'s supply chain.',
      details: 'A grimy, dimly lit warehouse near the city docks, reeking of stale fish and illicit goods. It serves as a front for a vast smuggling operation, a place where anything can be bought or sold under the table. Hidden compartments and secret passages abound, suggesting a long history of clandestine activities. This is where the rare, bioluminescent algae, crucial to Kael\'s experiments, is brought into the city, making it a key node in the conspiracy\'s supply chain.'
    },
    {
      id: 'CH3_LC03',
      name: 'The Abandoned Bank Vault',
      description: 'A forgotten, dust-laden vault deep beneath the city\'s oldest bank, long since decommissioned. Its massive steel door stands ajar, revealing a cavernous, empty space. The air is stale and carries the faint scent of old paper and forgotten wealth. This vault was once used by Kael\'s anonymous client to store sensitive documents and illicit funds, making it a silent witness to the conspiracy\'s financial dealings and a potential source of hidden clues.',
      details: 'A forgotten, dust-laden vault deep beneath the city\'s oldest bank, long since decommissioned. Its massive steel door stands ajar, revealing a cavernous, empty space. The air is stale and carries the faint scent of old paper and forgotten wealth. This vault was once used by Kael\'s anonymous client to store sensitive documents and illicit funds, making it a silent witness to the conspiracy\'s financial dealings and a potential source of hidden clues.'
    },
    {
      id: 'CH3_LC04',
      name: 'The City Archives\' Restricted Section',
      description: 'A vast, dusty, and rarely accessed section of the city archives, containing ancient maps, forgotten treaties, and obscure historical records. The air is heavy with the scent of decaying paper and forgotten knowledge. This section holds records of the city\'s geological history, including ancient legends of submerged structures and unusual aquatic phenomena, making it a potential source of information about the \'Sunken Cathedral.\'',
      details: 'A vast, dusty, and rarely accessed section of the city archives, containing ancient maps, forgotten treaties, and obscure historical records. The air is heavy with the scent of decaying paper and forgotten knowledge. This section holds records of the city\'s geological history, including ancient legends of submerged structures and unusual aquatic phenomena, making it a potential source of information about the \'Sunken Cathedral.\'',
      location: ''
    },
    {
      id: 'CH3_LC05',
      name: 'The City Watch Headquarters\' Interrogation Room',
      description: 'A stark, uninviting room within the City Watch Headquarters, designed for intense questioning. The air is thick with unspoken tension and the faint scent of stale coffee. A single, bare bulb hangs overhead, casting harsh shadows. This is where Captain Valerius conducts his most sensitive interrogations, a place where truths are extracted, and lies are exposed, making it a crucial setting for confronting suspects and gathering vital information.',
      details: 'A stark, uninviting room within the City Watch Headquarters, designed for intense questioning. The air is thick with unspoken tension and the faint scent of stale coffee. A single, bare bulb hangs overhead, casting harsh shadows. This is where Captain Valerius conducts his most sensitive interrogations, a place where truths are extracted, and lies are exposed, making it a crucial setting for confronting suspects and gathering vital information.'
    },
    {
      id: 'CH3_LC06',
      name: 'The Abandoned Lighthouse',
      description: 'A desolate, crumbling lighthouse perched on a rocky outcrop overlooking the turbulent sea, far from the city\'s bustling center. Its light has long since faded, and its interior is a ruin of rusted metal and broken glass. The air is filled with the mournful cry of gulls and the crashing of waves against the rocks. This remote location serves as Kael\'s final, desperate rendezvous point for his most crucial, and dangerous, transactions, a place where he plans to acquire the last components for his ultimate ritual.',
      details: 'A desolate, crumbling lighthouse perched on a rocky outcrop overlooking the turbulent sea, far from the city\'s bustling center. Its light has long since faded, and its interior is a ruin of rusted metal and broken glass. The air is filled with the mournful cry of gulls and the crashing of waves against the rocks. This remote location serves as Kael\'s final, desperate rendezvous point for his most crucial, and dangerous, transactions, a place where he plans to acquire the last components for his ultimate ritual.'
    }
  ],
  connectionRules: [
    {
      id: 'rule_CH3_1',
      cards: ['CH3_EV01', 'CH3_CH01'],
      result: 'Elara\'s unjust arrest prompts Captain Valerius to order a thorough forensic alchemical analysis of the glowing plague, seeking scientific truth.',
      unlock: 'CH3_EV02'
    },
    {
      id: 'rule_CH3_2',
      cards: ['CH3_CH01', 'CH3_LC01'],
      result: 'Captain Valerius, troubled by the case, seeks information from a shady informant operating in the city\'s underbelly, revealing his clandestine methods.',
      unlock: 'CH3_CH02'
    },
    {
      id: 'rule_CH3_3',
      cards: ['CH3_EV02', 'CH3_CH02'],
      result: 'The forensic analysis, combined with the informant\'s tips, leads to the discovery of the Smuggler\'s Den, a key location for illicit goods.',
      unlock: 'CH3_LC02'
    },
    {
      id: 'rule_CH3_4',
      cards: ['CH3_CH01', 'CH3_LC02'],
      result: 'Captain Valerius\'s investigation into the Smuggler\'s Den leads to the apprehension and interrogation of a key smuggler, revealing crucial details about Kael\'s supply chain.',
      unlock: 'CH3_EV03'
    },
    {
      id: 'rule_CH3_5',
      cards: ['CH3_EV03', 'CH3_CH03'],
      result: 'The smuggler\'s testimony, combined with insights from the disgruntled accountant, reveals Kael\'s extensive offshore financial records, exposing his vast illicit enterprise.',
      unlock: 'CH3_EV04'
    },
    {
      id: 'rule_CH3_6',
      cards: ['CH3_EV04', 'CH3_LC03'],
      result: 'Kael\'s offshore financial records lead to the discovery of the Abandoned Bank Vault, where his anonymous client stored sensitive documents and illicit funds.',
      unlock: 'CH3_EV05'
    },
    {
      id: 'rule_CH3_7',
      cards: ['CH3_EV05', 'CH3_CH04'],
      result: 'A desperate plea from the second victim, found among Kael\'s financial records, is brought to the attention of the Prison Warden, who holds the key to Elara\'s fate.',
      unlock: 'CH3_EV06'
    },
    {
      id: 'rule_CH3_8',
      cards: ['CH3_EV06', 'CH3_CH01'],
      result: 'Elara\'s coded message from prison, when deciphered by Captain Valerius, reveals his secret dossier, containing his growing doubts about her guilt and suspicions of a larger conspiracy.',
      unlock: 'CH3_EV07'
    },
    {
      id: 'rule_CH3_9',
      cards: ['CH3_EV07', 'CH3_CH05'],
      result: 'Captain Valerius\'s secret dossier, combined with information from the desperate family member, reveals the third victim\'s personal locket, directly linking Kael to the latest victim.',
      unlock: 'CH3_EV08'
    },
    {
      id: 'rule_CH3_10',
      cards: ['CH3_EV08', 'CH3_CH01'],
      result: 'The third victim\'s locket, when presented to Captain Valerius, leads to a tense interrogation in the City Watch Headquarters\' Interrogation Room, where Kael\'s guilt is solidified.',
      unlock: 'CH3_LC05'
    },
    {
      id: 'rule_CH3_11',
      cards: ['CH3_LC05', 'CH3_CH05'],
      result: 'The interrogation in the City Watch Headquarters, combined with the desperate family member\'s insights, leads to the interception of Kael\'s frantic communications, revealing his plans for a final ritual.',
      unlock: 'CH3_EV09'
    },
    {
      id: 'rule_CH3_12',
      cards: ['CH3_EV09', 'CH3_EV06'],
      result: 'Kael\'s intercepted communications and Elara\'s coded message from prison, when combined, reveal the Abandoned Lighthouse as Kael\'s final, desperate rendezvous point for his ultimate ritual.',
      unlock: 'CH3_LC06'
    },
    
    // Additional connection rules - ensuring all cards are needed for victory
    {
      id: 'rule_CH3_13_new',
      cards: ['CH3_CH02', 'CH3_CH03'],
      result: 'The Shady Informant and Disgruntled Accountant\'s investigation combine to reveal new truths.',
      unlock: 'CH3_EV10'
    },
    {
      id: 'rule_CH3_14_new',
      cards: ['CH3_CH04', 'CH3_LC04'],
      result: 'A connection link between the Prison Warden and the City Archives\' Restricted Section has been discovered.',
      unlock: 'CH3_EV11'
    },
    {
      id: 'rule_CH3_15_new',
      cards: ['CH3_EV10', 'CH3_EV11'],
      result: 'The hidden truth and connection link combine to reveal the dark signal.',
      unlock: 'CH3_EV12'
    },
    // Final victory combination
    {
      id: 'rule_CH3_16_final',
      cards: ['CH3_LC06', 'CH3_EV12'],
      result: 'The Abandoned Lighthouse and the dark signal combine to fully reveal the true purpose of the web of deception.',
      unlock: 'CH3_FINAL'
    }
  ],
  fragments: [],
  winCondition: 'CH3_FINAL',
  initialCards: [
    'CH3_EV01',
    'CH3_LC01',
    'CH3_CH01'
  ]
};