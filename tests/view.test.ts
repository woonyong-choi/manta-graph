import assert from "node:assert/strict";
import test from "node:test";
import { build } from "esbuild";
import { Window } from "happy-dom";
import type LinkedGraphPlugin from "../src/main";
import type { TFile, WorkspaceLeaf } from "obsidian";
import { parseDocumentLinks } from "../src/model";
import { normalizeSettings } from "../src/settings";

const window = new Window();
for (const key of ["window", "document", "navigator", "HTMLElement", "SVGElement", "ResizeObserver"] as const) {
	Reflect.set(globalThis, key, key === "window" ? window : window[key]);
}
const prototype = window.HTMLElement.prototype;
interface Options { cls?: string; text?: string; type?: string; placeholder?: string; attr?: Record<string, string>; }
for (const [method, tag] of [["createDiv", "div"], ["createSpan", "span"], ["createEl", ""]]) {
	Reflect.set(prototype, method!, function(this: HTMLElement, input: string | Options = {}, extra: Options = {}) {
		const options = tag ? typeof input === "string" ? {cls: input} : input : extra;
		const child = window.document.createElement(tag || String(input));
		if (options.cls) child.className = options.cls;
		if (options.text) child.textContent = options.text;
		for (const [name, value] of Object.entries(options.attr ?? {})) child.setAttribute(name, value);
		if (options.type) child.setAttribute("type", options.type);
		if (options.placeholder) child.setAttribute("placeholder", options.placeholder);
		this.appendChild(child as unknown as Node);
		return child;
	});
}
Reflect.set(prototype, "empty", function(this: HTMLElement) { this.replaceChildren(); });
Reflect.set(prototype, "setText", function(this: HTMLElement, text: string) { this.textContent = text; });
Reflect.set(prototype, "addClass", function(this: HTMLElement, name: string) { this.classList.add(name); });
Reflect.set(prototype, "hasClass", function(this: HTMLElement, name: string) { return this.classList.contains(name); });
Reflect.set(prototype, "toggleClass", function(this: HTMLElement, name: string, enabled: boolean) { this.classList.toggle(name, enabled); });
const result = await build({ entryPoints: ["src/view.ts"], bundle: true, write: false, platform: "node", format: "esm", alias: {obsidian: "./tests/fixtures/obsidian.ts"} });
const source = result.outputFiles[0]?.text;
assert.ok(source);
const { LinkedGraphView } = await import(`data:text/javascript;base64,${Buffer.from(source).toString("base64")}`) as typeof import("../src/view");

test("Outline search focuses and opens the authored route", async () => {
	const file = {path: "Hub.md", basename: "Hub", extension: "md"} as TFile;
	const opened: string[] = [];
	const plugin = {
		preferences: normalizeSettings({mode: "outline"}), activeSource: () => file,
		graphFor: async () => parseDocumentLinks("## Course\n- [[Alpha]]\n- [[Beta]]", "Hub.md", "Hub", (name) => `${name}.md`),
		historyState: () => ({canBack: false, canForward: false}),
		openLinkedNote: async (name: string) => { opened.push(name); },
	} as unknown as LinkedGraphPlugin;
	const view = new LinkedGraphView({} as WorkspaceLeaf, plugin);
	window.document.body.appendChild(view.containerEl as never);
	await view.onOpen();
	const input = view.containerEl.querySelector<HTMLInputElement>("input");
	assert.ok(input);
	input.value = "Beta";
	input.dispatchEvent(new window.Event("input") as unknown as Event);
	assert.equal(view.containerEl.querySelectorAll(".linked-graph-link").length, 1);
	input.dispatchEvent(new window.KeyboardEvent("keydown", {key: "ArrowDown"}) as unknown as Event);
	const route = view.containerEl.querySelector<HTMLButtonElement>(".linked-graph-link");
	assert.ok(route);
	assert.equal(window.document.activeElement, route);
	route.click();
	assert.deepEqual(opened, ["Beta"]);
	await view.onClose();
	view.containerEl.remove();
});

test("empty view explains omissions and saves an explicit mode switch", async () => {
	let saved = "";
	const preferences = normalizeSettings(null);
	const file = {path: "Hub.md"} as TFile;
	const plugin = {
		preferences, activeSource: () => file,
		graphFor: async () => ({sourcePath: "Hub.md", title: "Hub", entries: [], linkCount: 0, diagnostics: {excluded: 2, unresolved: 1}}),
		historyState: () => ({canBack: false, canForward: false}),
		savePreferences: async () => { saved = JSON.stringify(preferences); },
	} as unknown as LinkedGraphPlugin;
	const view = new LinkedGraphView({} as WorkspaceLeaf, plugin);
	await view.onOpen();
	assert.match(view.containerEl.textContent ?? "", /2 excluded.*1 unresolved/);
	view.containerEl.querySelector<HTMLButtonElement>(".linked-graph-mode")?.click();
	assert.equal(normalizeSettings(JSON.parse(saved)).mode, "outline");
	await view.onClose();
});
