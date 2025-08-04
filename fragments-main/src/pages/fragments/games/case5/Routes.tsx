import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MysteryAlchemy5CaseIntro from './Intro';
import MysteryAlchemy5CaseGame from './Game';

const MysteryAlchemy5CaseRoutes: React.FC = () => {
  return (
    <Routes>
      <Route index element={<MysteryAlchemy5CaseIntro />} />
      <Route path="game" element={<MysteryAlchemy5CaseGame />} />
    </Routes>
  );
};

export default MysteryAlchemy5CaseRoutes;