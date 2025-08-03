import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { FragmentsIndex } from './pages/fragments/FragmentsIndex';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/fragments" replace />} />
        <Route path="/fragments/*" element={<FragmentsIndex />} />
      </Routes>
    </div>
  );
}

export default App;