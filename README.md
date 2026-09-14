<img src="docs/assets/product-icon.svg" alt="" width="48" height="48" />

# Manta Graph

Follow your notes in the order you wrote them.

**[Install in Obsidian](https://community.obsidian.md/plugins/linked-graph) · [Try the demo Vault](https://github.com/woonyong-choi/obsidian-navigator-demo-vault/releases/latest) · [User guide](docs/user-guide.md)**

Version: **1.6.14** · Obsidian **1.8.0+** · Desktop and mobile. See [release notes](CHANGELOG.md) for shipped changes and the [roadmap](ROADMAP.md) for work in progress and plans.

## Install and try

1. In **Settings → Community plugins → Browse**, find **Manta Graph**, then install and enable it.
2. Create notes named `Lesson` and `Practice`. Link to them in a third note:

```markdown
- [[Lesson]]
- [[Practice]]
```

3. Keep that note active and run **Open Manta Graph for the current note**. Select **Outline** to follow the links in their written order.

Works offline without an account. It follows existing links and does not edit your notes. Create link targets first; unresolved links do not become routes.

Manual installation: download the three plugin files from [Releases](https://github.com/woonyong-choi/manta-graph/releases/latest) into `.obsidian/plugins/linked-graph/`, then reload Obsidian.

![Manta Graph walkthrough](docs/assets/linked-graph-demo.gif)

Obsidian desktop capture, September 11, 2026 (1.6.12), using public sample notes. The capture predates the Manta name.

## Help and development

[User guide](docs/user-guide.md) · [Report a problem](https://github.com/woonyong-choi/manta-graph/issues) · [Community page](https://community.obsidian.md/plugins/linked-graph) · [Contributing](CONTRIBUTING.md)

[MIT](LICENSE)
