<img src="https://raw.githubusercontent.com/woonyong-choi/manta-graph/main/docs/assets/product-icon.svg" alt="" width="48" height="48" />

# Manta Graph

Manta Graph is an Obsidian Community plugin that reads the current note's outgoing links and presents them as an ordered outline or a one-hop graph.

- It reads one active note and its direct links; it does not build a Vault-wide graph or infer backlinks.
- Markdown and Canvas files are never changed. Only normalized display preferences are saved; graph positions, previews, search, and navigation history stay in the session.
- Version 1.6.15 supports desktop and mobile. The automated suite covers parsing, ordering, navigation, settings, and the large-note budget; release checks still require a loaded-plugin smoke test.

**[Install in Obsidian](https://community.obsidian.md/plugins/linked-graph) · [Try the demo Vault](https://github.com/woonyong-choi/obsidian-navigator-demo-vault/releases/latest) · [User guide](docs/user-guide.md)**

Version: **1.6.15** · Obsidian **1.8.0+** · Desktop and mobile. See [release notes](CHANGELOG.md) for shipped changes and the [roadmap](ROADMAP.md) for work in progress and plans.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/woonyong-choi/manta-graph/main/docs/assets/manta-graph-intro-dark.gif">
  <img src="https://raw.githubusercontent.com/woonyong-choi/manta-graph/main/docs/assets/manta-graph-intro.gif" alt="Manta Graph: preview connections, open a note and return to the outline" width="1200">
</picture>

A six-second loop of the current view using sample notes. Timing is condensed. This is a view fixture; the original Obsidian capture is below.

## Install and try

1. Open the [existing Community entry](https://community.obsidian.md/plugins/linked-graph) in Obsidian, then install and enable it.
2. Create notes named `Lesson` and `Practice`. Link to them in a third note:

```markdown
- [[Lesson]]
- [[Practice]]
```

3. Keep that note active and run **Open Manta Graph for the current note**. Select **Outline** to follow the links in their written order.

Works offline without an account. It follows existing links and does not edit your notes. Create link targets first; unresolved links do not become routes.

Manual installation: download the three plugin files from [Releases](https://github.com/woonyong-choi/manta-graph/releases/latest) into `.obsidian/plugins/linked-graph/`, then reload Obsidian.

<details>
<summary>Original runtime capture and recorded version</summary>

![Manta Graph walkthrough](https://raw.githubusercontent.com/woonyong-choi/manta-graph/main/docs/assets/linked-graph-demo.gif)

Obsidian desktop capture, September 11, 2026 (1.6.12), using public sample notes. The capture predates the Manta name.

</details>

## Part of the Manta family

The plugins work independently and share ordinary Markdown and links: [Manta Diagrams](https://github.com/woonyong-choi/manta-diagrams), [Manta Code Blocks](https://github.com/woonyong-choi/manta-code-blocks), and [Manta Calendar](https://github.com/woonyong-choi/manta-calendar).

## Help and development

[User guide](docs/user-guide.md) · [Report a problem](https://github.com/woonyong-choi/manta-graph/issues) · [Community page](https://community.obsidian.md/plugins/linked-graph) · [Contributing](CONTRIBUTING.md)

[MIT](LICENSE)
