// astro.config.mjs의 base('/portfolio')를 내부 경로 앞에 붙인다.
// 외부 링크(http, mailto 등)와 이미 base가 붙은 경로, '#'은 그대로 둔다.
export default function withBase(path: string = "/"): string {
  if (!path || path.startsWith("#") || /^[a-z][a-z0-9+.-]*:/i.test(path) || path.startsWith("//")) {
    return path;
  }
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  if (base && (path === base || path.startsWith(base + "/"))) return path;
  return base + (path.startsWith("/") ? path : "/" + path);
}
