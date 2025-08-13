package com.fragmentmystery.app;

import android.os.Bundle;
import android.view.View;
import android.view.WindowManager;
import androidx.activity.EdgeToEdge;
import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.WindowInsetsControllerCompat;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
        // 🚀 Android 15+ Edge-to-Edge 지원 (Google 권장)
        EdgeToEdge.enable(this);
        
        // 상태바와 네비게이션 바 설정 (기존 호환성 유지)
        WindowCompat.setDecorFitsSystemWindows(getWindow(), false);
        
        // 상태바 스타일 설정
        WindowInsetsControllerCompat windowInsetsController = 
            WindowCompat.getInsetsController(getWindow(), getWindow().getDecorView());
        
        if (windowInsetsController != null) {
            // 상태바를 어둡게 설정 (밝은 배경용)
            windowInsetsController.setAppearanceLightStatusBars(false);
            // 네비게이션 바를 어둡게 설정
            windowInsetsController.setAppearanceLightNavigationBars(false);
        }
        
        // 상태바 배경색 설정
        getWindow().setStatusBarColor(android.graphics.Color.parseColor("#1a1a2e"));
        // 네비게이션 바 배경색 설정
        getWindow().setNavigationBarColor(android.graphics.Color.parseColor("#1a1a2e"));
    }
}
