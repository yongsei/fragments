// 수정된 탭 컴포넌트 JSX

<div style={{
  display: 'flex',
  gap: '4px',
  flexDirection: 'column',
  overflow: 'visible', // auto hidden에서 변경
  scrollBehavior: 'smooth',
  flex: '1 1 0%',
  height: 'auto', // 100%에서 auto로 변경
  minHeight: '120px', // 최소 높이 설정
  paddingBottom: '20px', // 10px에서 20px로 증가
  scrollbarWidth: 'none'
}}>
  
  {/* 첫 번째 탭 행 */}
  <div style={{
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center',
    minHeight: '40px', // 36px에서 40px로 증가
    marginBottom: '8px' // 간격 추가
  }}>
    <button style={{
      background: 'linear-gradient(45deg, rgb(139, 92, 246), rgba(139, 92, 246, 0.867))',
      color: 'white',
      border: '2px solid rgb(139, 92, 246)',
      borderRadius: '20px',
      padding: '10px 14px', // 8px 12px에서 증가
      fontSize: '0.8rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: '0.3s',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      minWidth: 'fit-content',
      whiteSpace: 'nowrap',
      flexShrink: '0'
    }}>
      <span style={{ fontSize: '0.9rem' }}>🎯</span>
      <span>전체</span>
      <span style={{
        background: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '8px',
        padding: '1px 4px',
        fontSize: '0.65rem',
        fontWeight: '700',
        minWidth: '16px',
        textAlign: 'center'
      }}>13</span>
    </button>
    
    <button style={{
      background: 'rgba(255, 255, 255, 0.1)',
      color: 'rgba(255, 255, 255, 0.7)',
      border: '2px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '20px',
      padding: '10px 14px', // 8px 12px에서 증가
      fontSize: '0.8rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: '0.3s',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      minWidth: 'fit-content',
      whiteSpace: 'nowrap',
      flexShrink: '0'
    }}>
      <span style={{ fontSize: '0.9rem' }}>👤</span>
      <span>용의자</span>
      <span style={{
        background: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '8px',
        padding: '1px 4px',
        fontSize: '0.65rem',
        fontWeight: '700',
        minWidth: '16px',
        textAlign: 'center'
      }}>6</span>
    </button>
    
    <button style={{
      background: 'rgba(255, 255, 255, 0.1)',
      color: 'rgba(255, 255, 255, 0.7)',
      border: '2px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '20px',
      padding: '10px 14px', // 8px 12px에서 증가
      fontSize: '0.8rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: '0.3s',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      minWidth: 'fit-content',
      whiteSpace: 'nowrap',
      flexShrink: '0'
    }}>
      <span style={{ fontSize: '0.9rem' }}>📍</span>
      <span>장소</span>
      <span style={{
        background: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '8px',
        padding: '1px 4px',
        fontSize: '0.65rem',
        fontWeight: '700',
        minWidth: '16px',
        textAlign: 'center'
      }}>7</span>
    </button>
  </div>
  
  {/* 두 번째 탭 행 (문제의 부분 - 수정됨) */}
  <div style={{
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center',
    minHeight: '60px', // 50px에서 60px로 증가
    padding: '12px 1rem', // 8px에서 12px로 증가
    overflowX: 'auto',
    overflowY: 'visible', // hidden에서 visible로 변경
    scrollBehavior: 'smooth',
    scrollbarWidth: 'thin',
    marginBottom: '10px' // 하단 여백 추가
  }}>
    <button style={{
      background: 'linear-gradient(45deg, rgb(139, 92, 246), rgba(139, 92, 246, 0.867))',
      color: 'white',
      border: '2px solid rgb(139, 92, 246)',
      borderRadius: '16px',
      padding: '6px 10px', // 4px 8px에서 증가
      fontSize: '0.75rem', // 0.7rem에서 증가
      fontWeight: '500',
      cursor: 'pointer',
      transition: '0.3s',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      gap: '3px',
      minWidth: 'fit-content',
      whiteSpace: 'nowrap',
      flexShrink: '0',
      opacity: '1',
      marginBottom: '5px' // 하단 여백 추가
    }}>
      <span style={{ fontSize: '0.75rem' }}>🎯</span>
      <span>전체A</span>
      <span style={{
        background: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '6px',
        padding: '1px 3px',
        fontSize: '0.55rem',
        fontWeight: '700',
        minWidth: '12px',
        textAlign: 'center'
      }}>9</span>
    </button>
    
    <button style={{
      background: 'rgba(255, 255, 255, 0.05)',
      color: 'rgba(255, 255, 255, 0.6)',
      border: '2px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '16px',
      padding: '6px 10px', // 4px 8px에서 증가
      fontSize: '0.75rem', // 0.7rem에서 증가
      fontWeight: '500',
      cursor: 'pointer',
      transition: '0.3s',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      gap: '3px',
      minWidth: 'fit-content',
      whiteSpace: 'nowrap',
      flexShrink: '0',
      opacity: '0.8',
      marginBottom: '5px' // 하단 여백 추가
    }}>
      <span style={{ fontSize: '0.75rem' }}>🎯</span>
      <span>전체B</span>
      <span style={{
        background: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '6px',
        padding: '1px 3px',
        fontSize: '0.55rem',
        fontWeight: '700',
        minWidth: '12px',
        textAlign: 'center'
      }}>4</span>
    </button>
  </div>
</div>