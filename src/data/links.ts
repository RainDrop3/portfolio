// 사이트 전체에서 쓰는 이름과 링크. 여기만 고치면 모든 페이지에 반영된다.
export const NAME = "RainDrop3";
export const REAL_NAME = "강민규";            // 오른쪽 정보 패널에 표시
export const EMAIL = "kanghy6220@gmail.com";
export const GITHUB_URL = "https://github.com/RainDrop3";
export const BLOG_URL = "https://raindrop3.github.io";
export const KAKAO_LOG_URL = "https://raindrop3.github.io/kakaotech-log/";

export interface Suggestion {
  label: string;     // 검색어처럼 보이는 문구
  href: string;      // 사이트 내부는 '/about' 형태, 외부는 https://...
  external?: boolean;
  download?: boolean;
}

// 검색창을 눌렀을 때 '최근 검색어'처럼 뜨는 목록
export const SUGGESTIONS: Suggestion[] = [
  { label: "소개", href: "/about" },
  { label: "대표 프로젝트", href: "/projects" },
  { label: "GitHub", href: GITHUB_URL, external: true },
  { label: "블로그", href: BLOG_URL, external: true },
];
