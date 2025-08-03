// Google Tag Manager 공통 스크립트
(function() {
    'use strict';
    
    const GTM_ID = 'GTM-KCWR5D73';
    
    // GTM 헤더 스크립트 추가
    function addGTMHeader() {
        const script = document.createElement('script');
        script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`;
        document.head.appendChild(script);
    }
    
    // GTM noscript 추가
    function addGTMNoscript() {
        const noscript = document.createElement('noscript');
        noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
        document.body.insertBefore(noscript, document.body.firstChild);
    }
    
    // 페이지 로드 시 GTM 초기화
    function initGTM() {
        addGTMHeader();
        addGTMNoscript();
        console.log('Google Tag Manager initialized with ID:', GTM_ID);
    }
    
    // DOM이 로드되면 실행
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initGTM);
    } else {
        initGTM();
    }
})();