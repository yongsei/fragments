import { ChapterIntroData } from '../../../components/UnifiedChapterIntro';

export const chapter4IntroData: ChapterIntroData = {
  caseId: 'case1',
  chapterNumber: 4,
  icon: '⚔️',
  title: {
    kr: '챕터 4: 최후의 대결',
    en: 'Chapter 4: Final Confrontation'
  },
  subtitle: {
    kr: '어둠의 종료',
    en: 'End of Darkness'
  },
  story: {
    kr: '모든 진실이 밝혀지는 마지막 순간입니다. 대주교를 살해한 진짜 범인은 바로 수녀 막달레나였습니다. 그녀는 대주교의 어둠의 의식을 막으려 했지만, 결국 자신도 그 어둠에 물들어 버렸습니다. 성물의 힘으로 어둠의 존재들을 소환하려는 그녀와의 최후 대결이 대성당에서 벌어집니다. 수사관 김다크는 성당을 구하고 도시에 평화를 되찾을 수 있을까요? 어둠과 빛의 최종 승부가 시작됩니다.',
    en: 'This is the final moment when all truths are revealed. The real culprit who murdered the Archbishop was Sister Magdalena. She tried to stop the Archbishop\'s dark ritual, but eventually became tainted by that darkness herself. The final battle against her, who tries to summon dark beings with the power of the relic, takes place in the cathedral. Can Investigator Kim Dark save the cathedral and restore peace to the city? The ultimate battle between darkness and light begins.'
  },
  keyCharacters: [
    {
      kr: '수녀 막달레나 - 어둠에 물든 진짜 범인',
      en: 'Sister Magdalena - The real culprit tainted by darkness'
    },
    {
      kr: '어둠의 존재들 - 성물로 소환된 악령들',
      en: 'Dark Beings - Evil spirits summoned by the relic'
    },
    {
      kr: '김다크 수사관 - 최후의 희망',
      en: 'Investigator Kim Dark - The final hope'
    }
  ],
  keyEvidence: [
    {
      kr: '막달레나의 진짜 정체',
      en: 'Magdalena\'s true identity'
    },
    {
      kr: '완성된 어둠의 의식',
      en: 'Completed dark ritual'
    },
    {
      kr: '성물의 진정한 힘',
      en: 'True power of the relic'
    }
  ],
  goal: {
    kr: '막달레나를 막고 어둠의 의식을 저지하여 대성당과 도시를 구하세요!',
    en: 'Stop Magdalena and prevent the dark ritual to save the cathedral and the city!'
  },
  gameLink: '/fragments/case1/chapter4/game',
  theme: {
    primaryGradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f0f23 70%, #1e1e2e 100%)',
    secondaryGradient: 'linear-gradient(135deg, #9d4edd 0%, #7209b7 100%)',
    textPrimary: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.8)',
    accentPrimary: '#9d4edd',
    accentSecondary: '#7209b7',
    navigationBg: 'rgba(0, 0, 0, 0.3)',
    cardBackground: 'rgba(157, 78, 221, 0.1)',
    cardBorder: 'rgba(157, 78, 221, 0.3)',
    cardShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
    cardShadowHover: '0 12px 40px rgba(0, 0, 0, 0.5)',
    buttonPrimary: 'linear-gradient(135deg, #9d4edd 0%, #7209b7 100%)',
    suspectCard: 'rgba(157, 78, 221, 0.15)',
    evidenceCard: 'rgba(114, 9, 183, 0.15)',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
  }
};