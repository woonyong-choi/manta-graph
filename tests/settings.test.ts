import assert from "node:assert/strict";
import test from "node:test";
import { normalizeSettings } from "../src/settings";
import { isGraphDestinationVisible } from "../src/navigation";

test("preferences round-trip without persisting note or session data", () => {
 const settings = normalizeSettings({ mode: "outline", excludedFolders: [" Archive ", "Archive"], excludedStatuses: [], note: "secret", history: ["private.md"] });
 assert.deepEqual(settings, { mode: "outline", excludedFolders: ["archive"], excludedStatuses: [] });
 assert.deepEqual(normalizeSettings(JSON.parse(JSON.stringify(settings))), settings);
});
test("explicitly empty exclusions reveal ordinary folders but not internal roots", () => {
 const settings = normalizeSettings({ excludedFolders: [], excludedStatuses: [] });
 assert.equal(isGraphDestinationVisible("private/Note.md", {status: "retired"}, settings), true);
 assert.equal(isGraphDestinationVisible(".obsidian/Note.md", null, settings), false);
});
test("folder names match segments and folder paths match only the root prefix", () => {
 const settings = normalizeSettings({excludedFolders: ["Work/Archive"]});
 assert.equal(isGraphDestinationVisible("Work/Archive/Note.md", null, settings), false);
 assert.equal(isGraphDestinationVisible("Other/Work/Archive/Note.md", null, settings), true);
 assert.equal(isGraphDestinationVisible("Work/Archived/Note.md", null, settings), true);
});
test("missing preferences retain previous exclusions and invalid modes use graph", () => {
 const settings = normalizeSettings({mode: "invalid"});
 assert.equal(settings.mode, "graph");
 assert.equal(isGraphDestinationVisible("archive/Note.md", null, settings), false);
});
