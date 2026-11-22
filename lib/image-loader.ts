import { withBasePath } from "@/lib/paths";

export default function imageLoader({ src }: { src: string; width: number; quality?: number }) {
  return withBasePath(src);
}
