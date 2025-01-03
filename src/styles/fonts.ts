// src/styles/fonts.ts
import localFont from 'next/font/local';

export const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.ttf',
  variable: '--font-pretendard',
  display: 'swap',
  preload: true,
  fallback: [
    'Pretendard',
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'Roboto',
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
});
