import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MysteryAlchemy1CaseIntro from './Intro';
import MysteryAlchemy1CaseGame from './Game';

const MysteryAlchemy1CaseRoutes: React.FC = () => {
  return (
    <Routes>
      <Route index element={<MysteryAlchemy1CaseIntro />} />
      <Route path="game" element={<MysteryAlchemy1CaseGame />} />
    </Routes>
  );
};

export default MysteryAlchemy1CaseRoutes;