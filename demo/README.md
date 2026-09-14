# Manta Graph demo

Public-safe 16:9 source captures and the deterministic GIF recipe belong to this plugin repository. Generated output stays ignored; verified release media remains under `docs/assets/`.

The 2026-09-08 recipe reuses the public graph and preview PNGs directly and the native Outline capture in `captures/frames/03-outline.png`. Native 1920×1111 captures are padded to 1984×1116 without reconstructing the UI. Earlier source frames are historical and are not inputs to the current recipe.

Run `npm run demo:build` to rebuild `demo/dist/linked-graph-demo.gif`. A rebuilt file is only a demo candidate; replace release media and update its verification hash through the normal release workflow.
