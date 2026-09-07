import assert from "node:assert/strict";
import test from "node:test";
import { graphLayoutMetrics, nodeAnchorOffset } from "../src/graph-layout";

test("uses more of a large graph panel without shrinking compact sidebars", () => {
	const compact = graphLayoutMetrics(400, 620, 8);
	const large = graphLayoutMetrics(722, 914, 8);

	assert.equal(compact.directDistance, 160);
	assert.ok(large.directDistance >= 288);
	assert.ok(large.directDistance > compact.directDistance);
	assert.ok(large.previewDistance > compact.previewDistance);
});

test("expands the unbounded world for dense one-hop graphs", () => {
	const sparse = graphLayoutMetrics(722, 914, 8);
	const dense = graphLayoutMetrics(722, 914, 40);
	const veryDense = graphLayoutMetrics(722, 914, 100);

	assert.ok(dense.directDistance > sparse.directDistance);
	assert.ok(dense.directDistance > 280);
	assert.ok(veryDense.directDistance > dense.directDistance);
	assert.ok(dense.chargeDistance >= dense.directDistance + dense.previewDistance);
});

test("gives chapter-sized graphs enough world space to keep labels from stacking", () => {
	const chapter = graphLayoutMetrics(302, 620, 18);

	assert.ok(chapter.directDistance >= 340);
});

test("anchors graph edges to the visible dot instead of the label group centre", () => {
	const anchor = nodeAnchorOffset(
		{ height: 60, left: 100, top: 200, width: 120 },
		{ height: 8, left: 174, top: 214, width: 8 },
		1,
	);

	assert.deepEqual(anchor, { x: 18, y: -12 });
});

test("converts screen-space dot offsets back into the scaled graph world", () => {
	const anchor = nodeAnchorOffset(
		{ height: 120, left: 40, top: 80, width: 240 },
		{ height: 16, left: 188, top: 108, width: 16 },
		2,
	);

	assert.deepEqual(anchor, { x: 18, y: -12 });
});
