import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MysteryAlchemy3CaseIntro from './Intro';
import MysteryAlchemy3CaseGame from './Game';

const MysteryAlchemy3CaseRoutes: React.FC = () => {
  return (
    <Routes>
      <Route index element={<MysteryAlchemy3CaseIntro />} />
      <Route path="game" element={<MysteryAlchemy3CaseGame />} />
    </Routes>
  );
};

export default MysteryAlchemy3CaseRoutes;