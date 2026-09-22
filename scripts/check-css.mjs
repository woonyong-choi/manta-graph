import { readFile } from "node:fs/promises";
import { transform } from "esbuild";

const source = await readFile(new URL("../styles.css", import.meta.url), "utf8");
await transform(source, { loader: "css", sourcefile: "styles.css" });
if (source.includes("!important")) throw new Error("styles.css must not use !important.");
if (!source.startsWith("/* linked-graph-design-tokens:start */")) throw new Error("Linked Graph tokens must start the stylesheet.");
if (!source.includes("/* linked-graph-design-tokens:end */")) throw new Error("Linked Graph token block is not closed.");
if (/\.context-tree|\.linked-canvas|--cg-|--ct-/.test(source)) throw new Error("Legacy Canvas or Context Graph selectors remain.");

const required = ["--lg-surface", "--lg-text", "--lg-muted", "--lg-border", "--lg-accent", "--lg-focus", "--lg-row-height"];
for (const token of required) {
	if (!source.includes(`${token}:`)) throw new Error(`Missing Linked Graph token: ${token}`);
}

// 색·글꼴·간격의 정본은 manta-tokens 이고, 생성물은 tokens:begin/end 사이에만 들어온다.
// 그 블록은 호스트 변수 + 리터럴 fallback 쌍이므로 검사에서 제외하고, 나머지 시트 전체는
// 리터럴 색을 가질 수 없다(예전에는 토큰 블록만 검사했다).
const generatedStart = source.indexOf("/* tokens:begin");
const generatedEnd = source.indexOf("/* tokens:end */");
if (generatedStart < 0 || generatedEnd < 0) throw new Error("manta-tokens generated block is missing.");
const owned = source.slice(0, generatedStart) + source.slice(generatedEnd);
if (/(?:#[\da-f]{3,8}|rgba?\(|hsla?\()/i.test(owned)) throw new Error("Colours must come from manta-tokens.");
if (!source.includes(":focus-visible")) throw new Error("Keyboard focus styling is required.");
