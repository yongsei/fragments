import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MysteryAlchemy4CaseIntro from './Intro';
import MysteryAlchemy4CaseGame from './Game';

const MysteryAlchemy4CaseRoutes: React.FC = () => {
  return (
    <Routes>
      <Route index element={<MysteryAlchemy4CaseIntro />} />
      <Route path="game" element={<MysteryAlchemy4CaseGame />} />
    </Routes>
  );
};

export default MysteryAlchemy4CaseRoutes;