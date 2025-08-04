import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { FragmentsIndex } from './pages/fragments/FragmentsIndex';
import './App.css';

// 케이스별 테마 파일 import (각 케이스 폴더에서)
import { case1Theme } from './pages/fragments/games/case1/case1-theme';
import { case2Theme } from './pages/fragments/games/case2/case2-theme';
import { case3Theme } from './pages/fragments/games/case3/case3-theme';
import { chapter1Theme } from './pages/fragments/games/case3/chapter1/chapter1-theme';
import { chapter2Theme } from './pages/fragments/games/case3/chapter2/chapter2-theme';
import { chapter3Theme } from './pages/fragments/games/case3/chapter3/chapter3-theme';

// 경로별 테마 색상 정의 (테마 파일 참조)
const getThemeColors = (pathname: string) => {
  if (pathname.includes('/case1')) {
    return case1Theme.main;
  } else if (pathname.includes('/case2')) {
    return case2Theme.main;
  } else if (pathname.includes('/case3/chapter1')) {
    return chapter1Theme.main;
  } else if (pathname.includes('/case3/chapter2')) {
    return chapter2Theme.main;
  } else if (pathname.includes('/case3/chapter3')) {
    return chapter3Theme.main;
  } else if (pathname.includes('/case3')) {
    return case3Theme.main; // 분홍색 계열로 변경됨!
  }
  // 기본 색상 (메인 페이지)
  return case1Theme.main;
};

function App() {
  const location = useLocation();

  // 경로 변경 시 body 배경색 동적 설정
  useEffect(() => {
    const themeGradient = getThemeColors(location.pathname);
    document.body.style.background = themeGradient;
    
    // App 클래스의 배경도 동적으로 설정
    const appElement = document.querySelector('.App') as HTMLElement;
    if (appElement) {
      appElement.style.background = themeGradient;
    }
  }, [location.pathname]);

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