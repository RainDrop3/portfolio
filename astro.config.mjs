import { defineConfig } from 'astro/config';

// 프로젝트 사이트: https://raindrop3.github.io/portfolio/
// (raindrop3.github.io 저장소는 기술 블로그가 사용 중이라 별도 저장소 'portfolio'로 배포)
export default defineConfig({
  site: 'https://raindrop3.github.io',
  base: '/portfolio',
});
