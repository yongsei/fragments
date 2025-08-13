import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UnifiedCaseIntro from './UnifiedCaseIntro';

// 케이스 데이터 imports
import { case1IntroData } from '../games/case1/introData';
import { case2IntroData } from '../games/case2/introData';
import { case3IntroData } from '../games/case3/introData';
import { case4IntroData } from '../games/case4/introData';
import { case5IntroData } from '../games/case5/introData';
import { case6IntroData } from '../games/case6/introData';
import { case7IntroData } from '../games/case7/introData';
import { case8IntroData } from '../games/case8/introData';

// 챕터 소개 페이지를 사용하지 않으므로 이 imports들은 삭제

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

import Case6Chapter1Game from '../games/case6/chapter1/Game';
import Case6Chapter2Game from '../games/case6/chapter2/Game';
import Case6Chapter3Game from '../games/case6/chapter3/Game';
import Case6Chapter4Game from '../games/case6/chapter4/Game';

import Case7Chapter1Game from '../games/case7/chapter1/Game';
import Case7Chapter2Game from '../games/case7/chapter2/Game';
import Case7Chapter3Game from '../games/case7/chapter3/Game';
import Case7Chapter4Game from '../games/case7/chapter4/Game';
import Case7Chapter5Game from '../games/case7/chapter5/Game';

import Case8Chapter1Game from '../games/case8/chapter1/Game';
import Case8Chapter2Game from '../games/case8/chapter2/Game';
import Case8Chapter3Game from '../games/case8/chapter3/Game';
import Case8Chapter4Game from '../games/case8/chapter4/Game';
import Case8Chapter5Game from '../games/case8/chapter5/Game';
import Case8Chapter6Game from '../games/case8/chapter6/Game';
import Case8Chapter7Game from '../games/case8/chapter7/Game';

const UnifiedFragmentsRouter: React.FC = () => {
  return (
    <Routes>
      {/* Case 1: 어둠의 대성당 - /game 경로만 유지 */}
      <Route path="case1" element={<UnifiedCaseIntro data={case1IntroData} />} />
      <Route path="case1/chapter1/game" element={<Case1Chapter1Game />} />
      <Route path="case1/chapter2/game" element={<Case1Chapter2Game />} />
      <Route path="case1/chapter3/game" element={<Case1Chapter3Game />} />
      <Route path="case1/chapter4/game" element={<Case1Chapter4Game />} />

      {/* Case 2: 우주선 오디세이 - /game 경로만 유지 */}
      <Route path="case2" element={<UnifiedCaseIntro data={case2IntroData} />} />
      <Route path="case2/chapter1/game" element={<Case2Chapter1Game />} />
      <Route path="case2/chapter2/game" element={<Case2Chapter2Game />} />
      <Route path="case2/chapter3/game" element={<Case2Chapter3Game />} />
      <Route path="case2/chapter4/game" element={<Case2Chapter4Game />} />

      {/* Case 3: 오리엔트 특급 열차 - /game 경로만 유지 */}
      <Route path="case3" element={<UnifiedCaseIntro data={case3IntroData} />} />
      <Route path="case3/chapter1/game" element={<Case3Chapter1Game />} />
      <Route path="case3/chapter2/game" element={<Case3Chapter2Game />} />
      <Route path="case3/chapter3/game" element={<Case3Chapter3Game />} />

      {/* Case 4: 아르카눔 그림자 - /game 경로만 유지 */}
      <Route path="case4" element={<UnifiedCaseIntro data={case4IntroData} />} />
      <Route path="case4/chapter1/game" element={<Case4Chapter1Game />} />
      <Route path="case4/chapter2/game" element={<Case4Chapter2Game />} />
      <Route path="case4/chapter3/game" element={<Case4Chapter3Game />} />
      <Route path="case4/chapter4/game" element={<Case4Chapter4Game />} />

      {/* Case 5: 크로노스의 시간여행 - /game 경로만 유지 */}
      <Route path="case5" element={<UnifiedCaseIntro data={case5IntroData} />} />
      <Route path="case5/chapter1/game" element={<Case5Chapter1Game />} />
      <Route path="case5/chapter2/game" element={<Case5Chapter2Game />} />
      <Route path="case5/chapter3/game" element={<Case5Chapter3Game />} />
      <Route path="case5/chapter4/game" element={<Case5Chapter4Game />} />
      <Route path="case5/chapter5/game" element={<Case5Chapter5Game />} />
      <Route path="case5/chapter6/game" element={<Case5Chapter6Game />} />
      <Route path="case5/chapter7/game" element={<Case5Chapter7Game />} />
      <Route path="case5/chapter8/game" element={<Case5Chapter8Game />} />

      {/* Case 6: 어둠의 수도원 - /game 경로만 유지 */}
      <Route path="case6" element={<UnifiedCaseIntro data={case6IntroData} />} />
      <Route path="case6/chapter1/game" element={<Case6Chapter1Game />} />
      <Route path="case6/chapter2/game" element={<Case6Chapter2Game />} />
      <Route path="case6/chapter3/game" element={<Case6Chapter3Game />} />
      <Route path="case6/chapter4/game" element={<Case6Chapter4Game />} />

      {/* Case 7: 블랙우드 저택의 비밀 - /game 경로만 유지 */}
      <Route path="case7" element={<UnifiedCaseIntro data={case7IntroData} />} />
      <Route path="case7/chapter1/game" element={<Case7Chapter1Game />} />
      <Route path="case7/chapter2/game" element={<Case7Chapter2Game />} />
      <Route path="case7/chapter3/game" element={<Case7Chapter3Game />} />
      <Route path="case7/chapter4/game" element={<Case7Chapter4Game />} />
      <Route path="case7/chapter5/game" element={<Case7Chapter5Game />} />

      {/* Case 8: 에코우드의 저주 - /game 경로만 유지 */}
      <Route path="case8" element={<UnifiedCaseIntro data={case8IntroData} />} />
      <Route path="case8/chapter1/game" element={<Case8Chapter1Game />} />
      <Route path="case8/chapter2/game" element={<Case8Chapter2Game />} />
      <Route path="case8/chapter3/game" element={<Case8Chapter3Game />} />
      <Route path="case8/chapter4/game" element={<Case8Chapter4Game />} />
      <Route path="case8/chapter5/game" element={<Case8Chapter5Game />} />
      <Route path="case8/chapter6/game" element={<Case8Chapter6Game />} />
      <Route path="case8/chapter7/game" element={<Case8Chapter7Game />} />
    </Routes>
  );
};

export default UnifiedFragmentsRouter;