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


export const mansionMurderScenario: GameScenario = {
  id: 'mansion_murder',
  title: '저택 살인 사건',
  story: '부유한 사업가 리차드 웨스트가 자신의 저택에서 독살당했습니다.',
  victim: '리차드 웨스트',
  suspects: [
    {
      id: 'mary_west',
      name: '메리 웨스트',
      role: '피해자의 아내',
      description: '리차드의 아내로, 최근 부부 관계가 좋지 않았다는 소문이 있다.',
      alibi: '사건 당시 정원에서 꽃을 가꾸고 있었다고 주장',
      motive: '유산 상속과 거액의 보험금'
    },
    {
      id: 'james_butler',
      name: '제임스 집사',
      role: '저택 집사',
      description: '웨스트 가문을 20년간 섬긴 충실한 집사',
      alibi: '사건 당시 부엌에서 저녁 준비를 하고 있었다고 주장',
      motive: '리차드가 그를 해고하려 했다는 소문'
    },
    {
      id: 'dr_harrison',
      name: '해리슨 박사',
      role: '가정의',
      description: '웨스트 가문의 오랜 주치의',
      alibi: '사건 당시 다른 환자를 진료하고 있었다고 주장',
      motive: '리차드가 의료 사기를 의심하고 있었다는 정보'
    }
  ],
  evidence: [
    {
      id: 'tea_cup',
      name: '독이 든 차 컵',
      description: '리차드가 마시던 차 컵',
      details: '청산가리 성분이 검출된 차 컵. 지문은 깨끗하게 닦여 있음.',
      location: '서재'
    },
    {
      id: 'will_draft',
      name: '유언장 초안',
      description: '리차드가 작성 중이던 유언장',
      details: '메리를 상속에서 제외하고 자선단체에 기부하려는 내용이 담겨 있음.',
      location: '서재'
    },
    {
      id: 'diary',
      name: '메리의 일기장',
      description: '메리의 개인 일기장',
      details: '리차드에 대한 원망과 경제적 어려움에 대한 고민이 적혀 있음.',
      location: '침실'
    },
    {
      id: 'insurance_policy',
      name: '생명보험증서',
      description: '리차드의 거액 생명보험증서',
      details: '수혜자가 최근 메리에서 자선단체로 변경되려 했으나 아직 처리되지 않음.',
      location: '서재'
    },
    {
      id: 'garden_gloves',
      name: '정원용 장갑',
      description: '메리가 사용하던 정원용 장갑',
      details: '손가락 부분에 미세한 화학 잔여물이 검출됨.',
      location: '정원'
    },
    {
      id: 'butler_schedule',
      name: '집사 업무 일정표',
      description: '제임스 집사의 당일 업무 계획',
      details: '사건 시간대에 부엌 청소가 예정되어 있었지만 실제로는 실행되지 않음.',
      location: '부엌'
    },
    {
      id: 'medical_records',
      name: '진료 기록',
      description: '해리슨 박사의 환자 진료 기록',
      details: '사건 당일 다른 환자 진료 기록이 있지만 시간이 애매함.',
      location: '서재'
    },
    {
      id: 'phone_records',
      name: '전화 통화 기록',
      description: '리차드의 휴대폰 통화 기록',
      details: '사건 하루 전 메리와 30분간 격렬한 통화를 한 기록이 있음.',
      location: '서재'
    },
    {
      id: 'poison_container',
      name: '빈 독 용기',
      description: '정원 창고에서 발견된 빈 살충제 용기',
      details: '청산가리 기반 살충제 용기. 최근 사용된 흔적이 있음.',
      location: '정원'
    },
    {
      id: 'fake_alibi_note',
      name: '위조된 메모',
      description: '집사가 작성한 것으로 보이는 시간표',
      details: '당일 일정이 적혀있지만 필체가 평소와 다름.',
      location: '부엌'
    },
    // 조합으로 얻는 카드들
    {
      id: 'butler_testimony',
      name: '집사의 증언',
      description: '제임스 집사가 제공한 중요한 증언',
      details: '집사가 유언장 작성 과정을 목격했다는 신뢰할 만한 증언.'
    },
    {
      id: 'counseling_record',
      name: '상담 기록',
      description: '해리슨 박사의 심리 상담 기록',
      details: '메리의 심리 상태와 스트레스 수준에 대한 의료진 기록.'
    },
    {
      id: 'mary_motive_revealed',
      name: '메리의 동기 확인',
      description: '메리 웨스트의 범행 동기가 명확해짐',
      details: '경제적 절망과 배신감이 범행의 주요 동기로 확인됨.'
    },
    {
      id: 'mary_kitchen_access',
      name: '메리의 접근 기회',
      description: '메리가 독을 차에 넣을 기회가 있었음',
      details: '집사가 없는 시간에 부엌에 접근할 수 있었던 증거.'
    },
    {
      id: 'mary_psychological_profile',
      name: '메리의 심리 분석',
      description: '메리의 범행 당시 심리 상태 분석',
      details: '극도의 스트레스와 절망감으로 범행을 저지를 수 있는 상태였음.'
    },
    {
      id: 'mary_capability_confirmed',
      name: '메리의 범행 능력 확인',
      description: '메리가 독살을 실행할 능력이 있었음',
      details: '독 취급 경험과 기회, 방법 모두 확인됨.'
    },
    {
      id: 'mary_motive_method_link',
      name: '동기와 방법의 연결',
      description: '메리의 동기와 범행 방법이 완벽히 일치',
      details: '보험금 동기와 독살 방법이 논리적으로 연결됨.'
    },
    {
      id: 'mary_opportunity_confirmed',
      name: '메리의 범행 기회 확정',
      description: '메리의 범행 기회가 확실히 입증됨',
      details: '시간, 장소, 접근성 모든 면에서 범행 가능성 확인.'
    },
    {
      id: 'mary_complete_analysis',
      name: '메리 완전 분석',
      description: '메리에 대한 모든 분석이 완료됨',
      details: '동기, 방법, 기회, 심리 상태 모든 측면이 범행을 뒷받침함.'
    },
    {
      id: 'butler_cleared',
      name: '집사 무혐의',
      description: '제임스 집사의 혐의가 벗겨짐',
      details: '충분한 조사 결과 집사는 범인이 아님이 확인됨.'
    },
    {
      id: 'doctor_cleared',
      name: '의사 무혐의',
      description: '해리슨 박사의 혐의가 벗겨짐',
      details: '알리바이와 동기 부족으로 의사는 범인이 아님이 확인됨.'
    },
    {
      id: 'reliable_witness_confirmed',
      name: '신뢰할 만한 증인 확인',
      description: '집사의 증언이 신뢰할 만함이 확인됨',
      details: '집사의 증언 내용이 다른 증거들과 일치하여 신뢰성 확보.'
    }
  ],
  locations: [
    {
      id: 'study',
      name: '서재',
      description: '리차드가 사망한 장소',
      details: '책상 위에 독이 든 차 컵과 유언장 초안이 발견됨.'
    },
    {
      id: 'kitchen',
      name: '부엌',
      description: '차가 준비된 장소',
      details: '집사가 차를 우려내는 도구들이 있음. 청소가 깨끗하게 되어 있음.'
    },
    {
      id: 'bedroom',
      name: '침실',
      description: '메리와 리차드의 침실',
      details: '메리의 일기장이 발견된 곳. 부부의 사진들이 있음.'
    },
    {
      id: 'garden',
      name: '정원',
      description: '메리가 있었다고 주장하는 장소',
      details: '최근에 가꾼 흔적이 있지만, 사건 당일의 확실한 증거는 없음.'
    }
  ],
  connectionRules: [
    // 0단계: 추가 증거 발견 규칙
    {
      id: 'search_study_deeper',
      cards: ['study', 'will_draft'],
      result: '서재를 더 자세히 조사하여 보험증서를 발견했습니다!',
      unlock: 'insurance_policy'
    },
    {
      id: 'investigate_garden_gloves',
      cards: ['garden', 'mary_west'],
      result: '정원을 수색하여 메리의 장갑을 발견했습니다!',
      unlock: 'garden_gloves'
    },
    {
      id: 'investigate_poison_container',
      cards: ['garden', 'tea_cup'],
      result: '정원을 수색하여 빈 독 용기를 발견했습니다!',
      unlock: 'poison_container'
    },
    {
      id: 'check_butler_schedule',
      cards: ['kitchen', 'james_butler'],
      result: '부엌에서 집사의 업무 일정표를 발견했습니다!',
      unlock: 'butler_schedule'
    },
    {
      id: 'check_fake_alibi_note',
      cards: ['butler_schedule', 'james_butler'],
      result: '집사의 업무 일정표와 집사를 통해 의문스러운 메모를 발견했습니다!',
      unlock: 'fake_alibi_note'
    },
    {
      id: 'examine_phone_records',
      cards: ['study', 'dr_harrison'],
      result: '서재에서 전화기록을 추가로 발견했습니다!',
      unlock: 'phone_records'
    },
    {
      id: 'examine_medical_records',
      cards: ['phone_records', 'dr_harrison'],
      result: '전화 기록과 박사를 통해 진료 기록을 추가로 발견했습니다!',
      unlock: 'medical_records'
    },

    // 1단계: 기본 범행 현장 분석
    {
      id: 'scene_poison',
      cards: ['tea_cup', 'study'],
      result: '범행 현장에서 독이 든 차 컵이 발견되었습니다. 보험 관련 서류를 추가로 발견했습니다!',
      unlock: 'insurance_policy'
    },
    {
      id: 'mary_diary_connection',
      cards: ['mary_west', 'diary'],
      result: '메리의 일기에서 남편에 대한 원망과 계획이 발견되었습니다!',
      unlock: 'mary_motive_revealed'
    },
    {
      id: 'poison_source',
      cards: ['tea_cup', 'poison_container'],
      result: '차 컵의 독과 정원 살충제가 같은 성분입니다. 전화 통화 기록을 발견했습니다!',
      unlock: 'phone_records'
    },

    // 2단계: 동기 분석 (복잡한 재정 상황)
    {
      id: 'financial_crisis',
      cards: ['will_draft', 'insurance_policy'],
      result: '리차드가 메리를 유산과 보험금에서 제외하려 했습니다. 집사의 업무 일정표를 발견했습니다!',
      unlock: 'butler_schedule'
    },
    {
      id: 'desperate_situation',
      cards: ['diary', 'phone_records'],
      result: '메리가 격렬한 통화 후 절망적 계획을 세웠습니다. 정원용 장갑을 발견했습니다!',
      unlock: 'garden_gloves'
    },

    // 3단계: 범행 방법 추적 (물리적 증거)
    {
      id: 'poison_handling',
      cards: ['garden_gloves', 'poison_container'],
      result: '정원용 장갑에서 독 잔여물이 발견되었습니다. 위조된 메모를 발견했습니다!',
      unlock: 'fake_alibi_note'
    },
    {
      id: 'access_opportunity',
      cards: ['mary_west', 'kitchen'],
      result: '메리가 차를 준비할 기회가 있었습니다. 메리의 접근 기회를 확인했습니다!',
      unlock: 'mary_kitchen_access'
    },

    // 4단계: 시간대 분석과 알리바이 검증 (실제 카드가 발견되지 않는 단계)
    {
      id: 'timeline_analysis',
      cards: ['butler_schedule', 'fake_alibi_note'],
      result: '집사의 알리바이에 모순이 발견되었지만 결정적이지 않습니다. 새로운 카드는 발견되지 않았습니다.',
      unlock: ''
    },
    {
      id: 'doctor_alibi_check',
      cards: ['medical_records', 'dr_harrison'],
      result: '의사의 진료 기록에 시간적 공백이 있지만 명확하지 않습니다. 새로운 카드는 발견되지 않았습니다.',
      unlock: ''
    },

    // 5단계: 고급 추리 - 미끼 단서 제거
    {
      id: 'butler_witness_account',
      cards: ['james_butler', 'will_draft'],
      result: '집사가 유언장 작성을 목격했다는 증언이 나왔습니다. 집사의 증언을 확보했습니다!',
      unlock: 'butler_testimony'
    },
    {
      id: 'doctor_counseling_record',
      cards: ['dr_harrison', 'diary'],
      result: '의사가 메리의 심리 상담을 했다는 기록이 발견되었습니다. 상담 기록을 확보했습니다!',
      unlock: 'counseling_record'
    },

    // 6단계: 중간 단서들을 조합한 고급 추리
    {
      id: 'butler_testimony_analysis',
      cards: ['butler_testimony', 'counseling_record'],
      result: '집사의 증언과 상담 기록을 종합하여 메리의 심리 상태를 파악했습니다!',
      unlock: 'mary_psychological_profile'
    },
    {
      id: 'mary_access_analysis',
      cards: ['mary_kitchen_access', 'medical_records'],
      result: '메리의 접근 기회와 의료 기록을 통해 범행 가능성을 확인했습니다!',
      unlock: 'mary_capability_confirmed'
    },

    // 7-8단계: 최종 추리 - 복합 증거 분석 (추리 완성 단계)
    {
      id: 'mary_motive_method',
      cards: ['insurance_policy', 'garden_gloves'],
      result: '메리의 동기와 범행 방법이 연결되었습니다. 추리가 완성되어 가고 있습니다!',
      unlock: 'mary_motive_method_link'
    },
    {
      id: 'mary_opportunity_evidence',
      cards: ['fake_alibi_note', 'phone_records'],
      result: '메리의 범행 기회와 물리적 증거가 일치합니다. 모든 증거가 메리를 가리킵니다!',
      unlock: 'mary_opportunity_confirmed'
    },
    {
      id: 'mary_complete_profile',
      cards: ['mary_psychological_profile', 'mary_capability_confirmed'],
      result: '메리의 심리적 동기와 범행 능력이 모두 확인되었습니다!',
      unlock: 'mary_complete_analysis'
    },

    // 최종 결론 - 여러 경로 제공
    {
      id: 'final_verdict',
      cards: ['mary_complete_analysis', 'poison_container'],
      result: '메리 웨스트가 범인임이 확실합니다! 사건이 해결되었습니다!',
      unlock: 'mary_guilty'
    },
    {
      id: 'alternative_final_verdict',
      cards: ['mary_motive_method_link', 'mary_opportunity_confirmed'],
      result: '메리의 동기, 방법, 기회가 모두 증명되었습니다! 사건이 해결되었습니다!',
      unlock: 'mary_guilty'
    },
    {
      id: 'direct_evidence_verdict',
      cards: ['insurance_policy', 'garden_gloves'],
      result: '보험금 동기와 독 처리 증거로 메리가 범인임이 명확합니다!',
      unlock: 'mary_guilty'
    },
    {
      id: 'poison_trail_verdict',
      cards: ['poison_container', 'mary_west'],
      result: '독 용기와 메리를 직접 연결하여 범인을 특정했습니다!',
      unlock: 'mary_guilty'
    },

    // 미끼 단서들 - 잘못된 방향으로 유도하지만 고유한 결과 제공
    {
      id: 'butler_deeper_investigation',
      cards: ['butler_schedule', 'medical_records'],
      result: '집사에 대한 의혹이 깊어지지만 결정적 증거가 없습니다. 집사는 용의선상에서 제외됩니다.',
      unlock: 'butler_cleared'
    },
    {
      id: 'doctor_cleared_evidence',
      cards: ['medical_records', 'phone_records'],
      result: '의사의 알리바이가 확인되어 용의선상에서 제외됩니다. 박사의 무죄가 입증되었습니다.',
      unlock: 'doctor_cleared'
    },
    {
      id: 'butler_testimony_verification',
      cards: ['butler_testimony', 'butler_cleared'],
      result: '집사의 증언이 신뢰할 만하다는 것이 확인되었습니다.',
      unlock: 'reliable_witness_confirmed'
    }
  ],
  fragments: [],
  // 게임 초기 설정
  initialCards: ['mary_west', 'james_butler', 'dr_harrison', 'study', 'kitchen', 'bedroom', 'garden', 'tea_cup', 'will_draft', 'diary'],
  winCondition: 'mary_guilty'
};