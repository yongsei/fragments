import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { StatusBar } from '@capacitor/status-bar';
import { FragmentsIndex } from './pages/fragments/FragmentsIndex';
import GameResultTest from './pages/fragments/test/GameResultTest';
// 배경음악 제거됨 - 효과음만 사용
import './App.css';

// 케이스별 테마 파일 import (각 케이스 폴더에서)
import { case1Theme } from './pages/fragments/games/case1/case1-theme';
import { case2Theme } from './pages/fragments/games/case2/case2-theme';
// import { case3Theme } from './pages/fragments/games/case3/case3-theme';
// import { chapter1Theme } from './pages/fragments/games/case3/chapter1/chapter1-theme';
// import { chapter2Theme } from './pages/fragments/games/case3/chapter2/chapter2-theme';
// import { chapter3Theme } from './pages/fragments/games/case3/chapter3/chapter3-theme';

// 경로별 테마 색상 정의 (테마 파일 참조)
const getThemeColors = (pathname: string) => {
  if (pathname.includes('/case1')) {
    return case1Theme.main;
  } else if (pathname.includes('/case2')) {
    return case2Theme.main;
  } else if (pathname.includes('/case3')) {
    // case3 기본 테마 색상 (임시)
    return 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)';
  } else if (pathname.includes('/case5')) {
    // case5 다크 테마 색상
    return 'linear-gradient(135deg, #0f0f23 0%, #16213e 50%, #1a1a2e 100%)';
  }
  // 기본 색상 (메인 페이지)
  return case1Theme.main;
};

// 경로별 StatusBar 색상 정의 (그라데이션의 첫 번째 색상 사용)
const getStatusBarColor = (pathname: string) => {
  if (pathname.includes('/case1')) {
    return '#1a1a2e'; // case1 다크 네이비
  } else if (pathname.includes('/case2')) {
    return '#2d1b2f'; // case2 다크 핑크
  } else if (pathname.includes('/case3')) {
    return '#ff9a9e'; // case3 핑크
  } else if (pathname.includes('/case5')) {
    return '#0f0f23'; // case5 다크
  }
  // 기본 색상 (메인 페이지)
  return '#1a1a2e';
};

function App() {
  const location = useLocation();
  
  // 배경음악 제거됨 - 효과음만 사용

  // 경로 변경 시 body 배경색과 StatusBar 동적 설정
  useEffect(() => {
    const themeGradient = getThemeColors(location.pathname);
    const statusBarColor = getStatusBarColor(location.pathname);
    
    // Body 배경색 설정
    document.body.style.background = themeGradient;
    
    // App 클래스의 배경도 동적으로 설정
    const appElement = document.querySelector('.App') as HTMLElement;
    if (appElement) {
      appElement.style.background = themeGradient;
    }
    
    // 🎨 StatusBar 색상 동적 변경 (Capacitor 네이티브 앱에서만 동작)
    const setStatusBarColor = async () => {
      try {
        await StatusBar.setBackgroundColor({ color: statusBarColor });
        console.log(`📱 StatusBar 색상 변경: ${statusBarColor} (경로: ${location.pathname})`);
      } catch (error) {
        // 웹 브라우저에서는 StatusBar API가 작동하지 않으므로 에러 무시
        console.log('💻 웹 브라우저 환경 - StatusBar 색상 변경 스킵');
      }
    };
    
    setStatusBarColor();
  }, [location.pathname]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/fragments" replace />} />
        <Route path="/fragments/*" element={<FragmentsIndex />} />
        <Route path="/test-result" element={<GameResultTest />} />
      </Routes>
    </div>
  );
}

export default App;