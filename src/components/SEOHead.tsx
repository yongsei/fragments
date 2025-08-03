import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEOProps } from '../types';

interface SEOHeadProps extends SEOProps {
  children?: React.ReactNode;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonical,
  type = 'website',
  image,
  children
}) => {
  const baseUrl = 'https://norri.netlify.app';
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;
  const ogImage = image ? `${baseUrl}${image}` : `${baseUrl}/images/og-image.png`;
  
  // SEO 최적화된 메타 데이터
  const siteName = 'Norri Puzzle Games';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Norri Puzzle Games" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <link rel="canonical" href={fullCanonical} />
      
      {/* 언어 및 지역 */}
      <meta httpEquiv="content-language" content="ko" />
      <meta name="geo.region" content="KR" />
      <meta name="geo.country" content="KR" />
      
      {/* 모바일 최적화 */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* 성능 최적화 */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />

      {/* Open Graph 최적화 */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="ko_KR" />
      
      {/* Twitter Card 최적화 */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:site" content="@norripuzzle" />
      <meta name="twitter:creator" content="@norripuzzle" />

      {/* Google AdSense */}
      <meta name="google-adsense-account" content="ca-pub-2557790798742070" />
      
      {/* Apple 터치 아이콘 */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      {/* 웹앱 매니페스트 */}
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#6366f1" />
      <meta name="application-name" content={siteName} />
      <meta name="apple-mobile-web-app-title" content={siteName} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      {children}
    </Helmet>
  );
};

export default SEOHead;