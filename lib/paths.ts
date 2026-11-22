export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** Prefix public asset paths for GitHub Pages project deploys. */
export function withBasePath(path: string) {
  if (!path.startsWith("/") || path.startsWith("//") || path.startsWith("http")) return path;
  if (!basePath) return path;
  return `${basePath}${path}`;
}
