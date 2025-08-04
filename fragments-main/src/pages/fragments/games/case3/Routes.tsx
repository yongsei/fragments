import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Chapter1Routes from './chapter1/Routes';
import Chapter2Routes from './chapter2/Routes';
import Chapter3Routes from './chapter3/Routes';
import Case3Intro from './Intro';

const Case3Routes: React.FC = () => {
  return (
    <Routes>
      {/* 메인 인트로 페이지 */}
      <Route index element={<Case3Intro />} />
      
      {/* 챕터별 라우팅 */}
      <Route path="chapter1/*" element={<Chapter1Routes />} />
      <Route path="chapter2/*" element={<Chapter2Routes />} />
      <Route path="chapter3/*" element={<Chapter3Routes />} />
    </Routes>
  );
};

export default Case3Routes;