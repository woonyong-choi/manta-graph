# Roadmap

Manta Graph remains a read-only, current-note navigator over authored Markdown links. It will not become a Vault-wide graph or relationship database.

## Available

- Current-note Graph and deterministic Outline over the same resolved outgoing links.
- Authored section context, search, session-only Back and Forward navigation, and keyboard-first route opening.
- Bounded graph and next-step DOM with a complete Outline fallback for dense notes.

## In progress

- Review focus preservation when following an active note, informed by an [external focus report](https://github.com/zsviczian/excalibrain/issues/228). Confirm behavior here before treating it as a defect.

## Under consideration

- Improve context labels for repeated headings without adding generated relationships.
- Expand screen-reader and third-party-theme coverage.
- Publish additional reproducible large-note measurements across desktop and mobile devices.

## Next: reading paths and stable focus

Keep actual link targets and authored order intact when a file moves or changes. Improve focus restoration, dense neighborhoods and the Graph/Outline transition. A planned external AI tool should return only the requested existing links and source locations; it must not add a remote AI service to the plugin or invent relationships.

Align type sizes, spacing, neutral surfaces, keyboard focus and status wording with the other Manta tools. Keep this plugin useful on its own. Measure first-use completion, manual corrections, recovery and repeat use against the same public inputs before claiming an improvement. These are planned changes.

[Shared product direction and release criteria](https://github.com/woonyong-choi/manta-diagrams/blob/main/docs/product-direction.md)

## Out of scope

- Vault-wide global graph replacement, backlinks, or relationship editing.
- A second relationship store, automatic link generation, or saved graph layouts.
- Remote AI, telemetry, accounts, or network services.

Use [Issues](https://github.com/woonyong-choi/manta-graph/issues/new/choose) for reproducible bugs and use cases. Broader questions belong in [Discussions](https://github.com/woonyong-choi/manta-graph/discussions).
