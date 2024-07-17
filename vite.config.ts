import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './', // 프로젝트의 루트 디렉토리 설정
  build: {
    outDir: 'dist', // 빌드 출력 디렉토리
  },
});
