import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const repository = new URL("../", import.meta.url);

test("runtime is a read-only projection with no second knowledge store", async () => {
	const [main, view] = await Promise.all([
		readFile(new URL("src/main.ts", repository), "utf8"),
		readFile(new URL("src/view.ts", repository), "utf8"),
	]);
	const runtime = `${main}\n${view}`;
	for (const forbidden of ["vault.create(", "vault.modify(", "vault.delete(", "vault.trash("]) {
		assert.equal(runtime.includes(forbidden), false, `runtime must not contain ${forbidden}`);
	}
});

test("manifest exposes the renamed product and no desktop-only dependency", async () => {
	const manifest = JSON.parse(await readFile(new URL("manifest.json", repository), "utf8")) as Record<string, unknown>;
	assert.equal(manifest.id, "linked-graph");
	assert.equal(manifest.name, "Manta Graph");
	assert.equal(manifest.isDesktopOnly, false);
});
