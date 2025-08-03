import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ChronosParadoxIntro from './Intro';
import ChronosParadoxGame from './Game';

const ChronosParadoxRoutes: React.FC = () => {
  return (
    <Routes>
      <Route index element={<ChronosParadoxIntro />} />
      <Route path="game" element={<ChronosParadoxGame />} />
    </Routes>
  );
};

export default ChronosParadoxRoutes;