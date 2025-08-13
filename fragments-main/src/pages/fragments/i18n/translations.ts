// Fragments 페이지 다국어 번역 파일

export interface FragmentsTranslations {
  // 메인 페이지 (/fragments)
  mainTitle: string;
  mainSubtitle: string;
  
  // 케이스 카드
  caseTitle: string;
  caseSubtitle: string;
  difficulty: string;
  estimatedTime: string;
  startGame: string;
  
  // 난이도
  beginner: string;
  intermediate: string;
  advanced: string;
  
  // 시간 단위
  minutes: string;
  
  // 케이스별 제목 및 설명
  case1: {
    title: string;
    subtitle: string;
    description: string;
    storyTitle: string;
    storyContent: string;
  };
  case2: {
    title: string;
    subtitle: string;
    description: string;
    storyTitle: string;
    storyContent: string;
  };
  case6: {
    title: string;
    subtitle: string;
    description: string;
    storyTitle: string;
    storyContent: string;
  };
  
  // 게임 기능 설명
  features: {
    deduction: {
      title: string;
      description: string;
    };
    clues: {
      title: string;
      description: string;
    };
    hints: {
      title: string;
      description: string;
    };
    progress: {
      title: string;
      description: string;
    };
  };
  
  // 미리보기 카드
  preview: {
    suspects: {
      title: string;
      description: string;
    };
    evidence: {
      title: string;
      description: string;
    };
    locations: {
      title: string;
      description: string;
    };
  };
  
  // 네비게이션
  backToSelection: string;
  backButton: string;
  gameStart: string;
  backToHome: string;
  progress: string;
  completed: string;
  startChapter: string;
  playAgain: string;
  chapterCompleted: string;
  winConditionCardFound: string;
  
  // 사운드 설정
  soundSettings: string;
  soundDescription: string;
  volumeQuiet: string;
  volumeLoud: string;
}

// 한국어 번역
export const ko: FragmentsTranslations = {
  mainTitle: "단서의 파편",
  mainSubtitle: "흩어진 단서들을 조합하여 사건의 진실을 밝혀내는 추리 게임",
  
  caseTitle: "사건",
  caseSubtitle: "미스터리 추리 게임",
  difficulty: "난이도",
  estimatedTime: "예상 시간",
  startGame: "게임 시작",
  
  beginner: "초급",
  intermediate: "중급",
  advanced: "고급",
  
  minutes: "분",
  
  case1: {
    title: "카페의 의문",
    subtitle: "향기로운 비밀",
    description: "평온한 카페에서 벌어진 의문의 사건. 손님들 사이에 숨겨진 진실을 찾아보세요.",
    storyTitle: "사건 개요",
    storyContent: "도심 한복판의 작은 카페 '아로마'에서 상상할 수 없는 일이 벌어졌습니다. 평범해 보이는 손님들 사이에서 일어난 미스터리한 사건의 진실을 밝혀내세요. 각각의 단서는 서로 연결되어 있으며, 올바른 조합을 찾아야만 사건의 전모를 파악할 수 있습니다."
  },
  
  case2: {
    title: "크로노스 패러독스",
    subtitle: "시간의 미스터리",
    description: "시간 연구소에서 크로노스 박사가 갑자기 사라졌습니다. 시간 파편들을 조합하여 그의 실종 진실을 밝혀내세요.",
    storyTitle: "사건 개요", 
    storyContent: "최첨단 시간 연구소에서 천재 물리학자 크로노스 박사가 흔적도 없이 사라졌습니다. 그가 연구하던 시간 여행 실험과 관련이 있을까요? 시간 관측 AI, 경쟁 연구자, 연구 보조원들 사이에서 벌어진 복잡한 사건의 진실을 파헤쳐야 합니다. 시간의 파편들을 올바르게 조합하여 박사의 실종 미스터리를 해결해보세요."
  },
  case6: {
    title: "어둠의 수도원",
    subtitle: "신성한 벽 뒤의 비밀",
    description: "외딴 수도원에서 발견된 수도사의 시신. 성스러운 곳에서 벌어진 살인 사건의 진실을 파헤쳐보세요.",
    storyTitle: "사건 개요",
    storyContent: "깊은 산속 외딴 수도원에서 충격적인 사건이 발생했습니다. 새벽 기도 시간, 성당에서 한 수도사가 피를 흘린 채 발견되었습니다. 신성한 장소에서 벌어진 이 끔찍한 범죄는 수도원 전체를 공포에 떨게 했습니다. 피해자는 브라더 토마스, 도서관을 관리하던 온화한 수도사였습니다. 고요한 수도원의 평화를 깨뜨린 이 사건의 진실을 밝혀내세요."
  },
  
  features: {
    deduction: {
      title: "논리적 추리",
      description: "단서들을 논리적으로 연결하여 사건을 해결하세요"
    },
    clues: {
      title: "다양한 단서",
      description: "용의자, 증거품, 장소 등 다양한 종류의 단서가 등장합니다"
    },
    hints: {
      title: "힌트 시스템",
      description: "막힐 때는 힌트를 활용해 새로운 실마리를 찾아보세요"
    },
    progress: {
      title: "진행 저장",
      description: "게임 진행 상황이 자동으로 저장되어 언제든 이어서 플레이할 수 있습니다"
    }
  },
  
  preview: {
    suspects: {
      title: "용의자",
      description: "사건과 관련된 인물들"
    },
    evidence: {
      title: "증거",
      description: "중요한 단서가 될 증거품들"
    },
    locations: {
      title: "장소",
      description: "사건이 벌어진 주요 장소들"
    }
  },
  
  backToSelection: "← 사건 선택으로 돌아가기",
  backButton: "돌아가기",
  gameStart: "🚀 게임 시작하기",
  backToHome: "← 케이스 선택으로 돌아가기",
  progress: "진행률",
  completed: "완료",
  startChapter: "챕터 시작",
  playAgain: "다시 플레이",
  chapterCompleted: "챕터 완료",
  winConditionCardFound: "🎯 최종 단서를 발견했습니다! 카드를 클릭하여 수사를 완료하세요.",
  
  soundSettings: "설정",
  soundDescription: "게임에서 카드 선택, 시나리오, 챕터 선택 시<br/>소리가 재생됩니다.",
  volumeQuiet: "조용함",
  volumeLoud: "시끄러움"
};

// 영어 번역
export const en: FragmentsTranslations = {
  mainTitle: "Fragments of Mystery",
  mainSubtitle: "Combine scattered clues to uncover the truth behind mysterious cases",
  
  caseTitle: "Case",
  caseSubtitle: "Mystery Detective Game",
  difficulty: "Difficulty",
  estimatedTime: "Est. Time",
  startGame: "Start Game",
  
  beginner: "Beginner",
  intermediate: "Intermediate", 
  advanced: "Advanced",
  
  minutes: "min",
  
  case1: {
    title: "The Café Mystery",
    subtitle: "Aromatic Secrets",
    description: "A mysterious incident at a peaceful café. Discover the truth hidden among the customers.",
    storyTitle: "Case Overview",
    storyContent: "An unimaginable incident has occurred at 'Aroma', a small café in the heart of the city. Uncover the truth behind the mysterious case that happened among seemingly ordinary customers. Each clue is interconnected, and you must find the right combinations to understand the full scope of the incident."
  },
  
  case2: {
    title: "Chronos Paradox", 
    subtitle: "Mystery of Time",
    description: "Dr. Chronos has suddenly disappeared from the time research laboratory. Combine temporal fragments to uncover the truth behind his disappearance.",
    storyTitle: "Case Overview",
    storyContent: "The genius physicist Dr. Chronos has vanished without a trace from the cutting-edge temporal research laboratory. Could it be related to his time travel experiments? You must unravel the truth behind the complex case involving the temporal observation AI, rival researchers, and lab assistants. Correctly combine the fragments of time to solve the mystery of the doctor's disappearance."
  },
  case6: {
    title: "The Dark Abbey",
    subtitle: "Secrets Behind Sacred Walls",
    description: "A monk's body discovered in a remote abbey. Uncover the truth behind this murder in a holy place.",
    storyTitle: "Case Overview",
    storyContent: "A shocking incident has occurred at a remote abbey deep in the mountains. During morning prayers, a monk was found bleeding in the chapel. This horrific crime in a sacred place has filled the entire abbey with terror. The victim was Brother Thomas, a gentle monk who managed the library. Uncover the truth behind this incident that shattered the peace of the quiet abbey."
  },
  
  features: {
    deduction: {
      title: "Logical Deduction",
      description: "Connect clues logically to solve the case"
    },
    clues: {
      title: "Various Clues",
      description: "Encounter diverse types of clues including suspects, evidence, and locations"
    },
    hints: {
      title: "Hint System", 
      description: "Use hints to find new leads when you're stuck"
    },
    progress: {
      title: "Save Progress",
      description: "Your game progress is automatically saved so you can continue anytime"
    }
  },
  
  preview: {
    suspects: {
      title: "Suspects",
      description: "People related to the case"
    },
    evidence: {
      title: "Evidence",
      description: "Important evidence items that could be key clues"
    },
    locations: {
      title: "Locations", 
      description: "Key locations where the incident took place"
    }
  },
  
  backToSelection: "← Back to Case Selection",
  backButton: "Back",
  gameStart: "🚀 Start Game",
  backToHome: "← Back to Case Selection",
  progress: "Progress",
  completed: "Completed",
  startChapter: "Start Chapter",
  playAgain: "Play Again",
  chapterCompleted: "Chapter Completed",
  winConditionCardFound: "🎯 Final clue discovered! Click the card to complete the investigation.",
  
  soundSettings: "Settings",
  soundDescription: "Sounds will play when selecting cards, scenarios, and chapters in the game.",
  volumeQuiet: "Quiet",
  volumeLoud: "Loud"
};

// 기본 번역 객체
const translations = {
  ko,
  en
};

export default translations;