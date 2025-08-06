import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UnifiedCaseIntro from './UnifiedCaseIntro';
import UnifiedChapterIntro from './UnifiedChapterIntro';

// 케이스 데이터 imports
import { case1IntroData } from '../games/case1/introData';
import { case2IntroData } from '../games/case2/introData';
import { case3IntroData } from '../games/case3/introData';
import { case4IntroData } from '../games/case4/introData';
import { case5IntroData } from '../games/case5/introData';

// 챕터 데이터 imports (case1만 완성된 상태)
import { chapter1IntroData as case1Chapter1 } from '../games/case1/chapter1/introData';
import { chapter2IntroData as case1Chapter2 } from '../games/case1/chapter2/introData';
import { chapter3IntroData as case1Chapter3 } from '../games/case1/chapter3/introData';
import { chapter4IntroData as case1Chapter4 } from '../games/case1/chapter4/introData';

// Case2 챕터 데이터 imports
import { chapter1IntroData as case2Chapter1 } from '../games/case2/chapter1/introData';
import { chapter2IntroData as case2Chapter2 } from '../games/case2/chapter2/introData';
import { chapter3IntroData as case2Chapter3 } from '../games/case2/chapter3/introData';
import { chapter4IntroData as case2Chapter4 } from '../games/case2/chapter4/introData';

// Case3 챕터 데이터 imports
import { chapter1IntroData as case3Chapter1 } from '../games/case3/chapter1/introData';
import { chapter2IntroData as case3Chapter2 } from '../games/case3/chapter2/introData';
import { chapter3IntroData as case3Chapter3 } from '../games/case3/chapter3/introData';

// Case4 챕터 데이터 imports
import { chapter1IntroData as case4Chapter1 } from '../games/case4/chapter1/introData';
import { chapter2IntroData as case4Chapter2 } from '../games/case4/chapter2/introData';
import { chapter3IntroData as case4Chapter3 } from '../games/case4/chapter3/introData';
import { chapter4IntroData as case4Chapter4 } from '../games/case4/chapter4/introData';

// Case5 챕터 데이터 imports
import { chapter1IntroData as case5Chapter1 } from '../games/case5/chapter1/introData';
import { chapter2IntroData as case5Chapter2 } from '../games/case5/chapter2/introData';
import { chapter3IntroData as case5Chapter3 } from '../games/case5/chapter3/introData';
import { chapter4IntroData as case5Chapter4 } from '../games/case5/chapter4/introData';
import { chapter5IntroData as case5Chapter5 } from '../games/case5/chapter5/introData';
import { chapter6IntroData as case5Chapter6 } from '../games/case5/chapter6/introData';
import { chapter7IntroData as case5Chapter7 } from '../games/case5/chapter7/introData';
import { chapter8IntroData as case5Chapter8 } from '../games/case5/chapter8/introData';

// 게임 컴포넌트 imports
import Case1Chapter1Game from '../games/case1/chapter1/Game';
import Case1Chapter2Game from '../games/case1/chapter2/Game';
import Case1Chapter3Game from '../games/case1/chapter3/Game';
import Case1Chapter4Game from '../games/case1/chapter4/Game';

import Case2Chapter1Game from '../games/case2/chapter1/Game';
import Case2Chapter2Game from '../games/case2/chapter2/Game';
import Case2Chapter3Game from '../games/case2/chapter3/Game';
import Case2Chapter4Game from '../games/case2/chapter4/Game';

import Case3Chapter1Game from '../games/case3/chapter1/Game';
import Case3Chapter2Game from '../games/case3/chapter2/Game';
import Case3Chapter3Game from '../games/case3/chapter3/Game';

import Case4Chapter1Game from '../games/case4/chapter1/Game';
import Case4Chapter2Game from '../games/case4/chapter2/Game';
import Case4Chapter3Game from '../games/case4/chapter3/Game';
import Case4Chapter4Game from '../games/case4/chapter4/Game';

import Case5Chapter1Game from '../games/case5/chapter1/Game';
import Case5Chapter2Game from '../games/case5/chapter2/Game';
import Case5Chapter3Game from '../games/case5/chapter3/Game';
import Case5Chapter4Game from '../games/case5/chapter4/Game';
import Case5Chapter5Game from '../games/case5/chapter5/Game';
import Case5Chapter6Game from '../games/case5/chapter6/Game';
import Case5Chapter7Game from '../games/case5/chapter7/Game';
import Case5Chapter8Game from '../games/case5/chapter8/Game';

const UnifiedFragmentsRouter: React.FC = () => {
  return (
    <Routes>
      {/* Case 1: 어둠의 대성당 */}
      <Route path="case1" element={<UnifiedCaseIntro data={case1IntroData} />} />
      <Route path="case1/chapter1" element={<UnifiedChapterIntro data={case1Chapter1} />} />
      <Route path="case1/chapter1/game" element={<Case1Chapter1Game />} />
      <Route path="case1/chapter2" element={<UnifiedChapterIntro data={case1Chapter2} />} />
      <Route path="case1/chapter2/game" element={<Case1Chapter2Game />} />
      <Route path="case1/chapter3" element={<UnifiedChapterIntro data={case1Chapter3} />} />
      <Route path="case1/chapter3/game" element={<Case1Chapter3Game />} />
      <Route path="case1/chapter4" element={<UnifiedChapterIntro data={case1Chapter4} />} />
      <Route path="case1/chapter4/game" element={<Case1Chapter4Game />} />

      {/* Case 2: 우주선 오디세이 */}
      <Route path="case2" element={<UnifiedCaseIntro data={case2IntroData} />} />
      <Route path="case2/chapter1" element={<UnifiedChapterIntro data={case2Chapter1} />} />
      <Route path="case2/chapter1/game" element={<Case2Chapter1Game />} />
      <Route path="case2/chapter2" element={<UnifiedChapterIntro data={case2Chapter2} />} />
      <Route path="case2/chapter2/game" element={<Case2Chapter2Game />} />
      <Route path="case2/chapter3" element={<UnifiedChapterIntro data={case2Chapter3} />} />
      <Route path="case2/chapter3/game" element={<Case2Chapter3Game />} />
      <Route path="case2/chapter4" element={<UnifiedChapterIntro data={case2Chapter4} />} />
      <Route path="case2/chapter4/game" element={<Case2Chapter4Game />} />

      {/* Case 3: 오리엔트 특급 열차 */}
      <Route path="case3" element={<UnifiedCaseIntro data={case3IntroData} />} />
      <Route path="case3/chapter1" element={<UnifiedChapterIntro data={case3Chapter1} />} />
      <Route path="case3/chapter1/game" element={<Case3Chapter1Game />} />
      <Route path="case3/chapter2" element={<UnifiedChapterIntro data={case3Chapter2} />} />
      <Route path="case3/chapter2/game" element={<Case3Chapter2Game />} />
      <Route path="case3/chapter3" element={<UnifiedChapterIntro data={case3Chapter3} />} />
      <Route path="case3/chapter3/game" element={<Case3Chapter3Game />} />

      {/* Case 4: 아르카눔 그림자 */}
      <Route path="case4" element={<UnifiedCaseIntro data={case4IntroData} />} />
      <Route path="case4/chapter1" element={<UnifiedChapterIntro data={case4Chapter1} />} />
      <Route path="case4/chapter1/game" element={<Case4Chapter1Game />} />
      <Route path="case4/chapter2" element={<UnifiedChapterIntro data={case4Chapter2} />} />
      <Route path="case4/chapter2/game" element={<Case4Chapter2Game />} />
      <Route path="case4/chapter3" element={<UnifiedChapterIntro data={case4Chapter3} />} />
      <Route path="case4/chapter3/game" element={<Case4Chapter3Game />} />
      <Route path="case4/chapter4" element={<UnifiedChapterIntro data={case4Chapter4} />} />
      <Route path="case4/chapter4/game" element={<Case4Chapter4Game />} />

      {/* Case 5: 크로노스의 시간여행 */}
      <Route path="case5" element={<UnifiedCaseIntro data={case5IntroData} />} />
      <Route path="case5/chapter1" element={<UnifiedChapterIntro data={case5Chapter1} />} />
      <Route path="case5/chapter1/game" element={<Case5Chapter1Game />} />
      <Route path="case5/chapter2" element={<UnifiedChapterIntro data={case5Chapter2} />} />
      <Route path="case5/chapter2/game" element={<Case5Chapter2Game />} />
      <Route path="case5/chapter3" element={<UnifiedChapterIntro data={case5Chapter3} />} />
      <Route path="case5/chapter3/game" element={<Case5Chapter3Game />} />
      <Route path="case5/chapter4" element={<UnifiedChapterIntro data={case5Chapter4} />} />
      <Route path="case5/chapter4/game" element={<Case5Chapter4Game />} />
      <Route path="case5/chapter5" element={<UnifiedChapterIntro data={case5Chapter5} />} />
      <Route path="case5/chapter5/game" element={<Case5Chapter5Game />} />
      <Route path="case5/chapter6" element={<UnifiedChapterIntro data={case5Chapter6} />} />
      <Route path="case5/chapter6/game" element={<Case5Chapter6Game />} />
      <Route path="case5/chapter7" element={<UnifiedChapterIntro data={case5Chapter7} />} />
      <Route path="case5/chapter7/game" element={<Case5Chapter7Game />} />
      <Route path="case5/chapter8" element={<UnifiedChapterIntro data={case5Chapter8} />} />
      <Route path="case5/chapter8/game" element={<Case5Chapter8Game />} />
    </Routes>
  );
};

export default UnifiedFragmentsRouter;