// Only the Obsidian host boundary is replaced; the production view renders unchanged.
export class TFile { path = ""; basename = ""; extension = "md"; }
export class WorkspaceLeaf {}
export class ItemView {
	containerEl = document.createElement("div");
	constructor() { this.containerEl.append(document.createElement("div"), document.createElement("div")); }
}
export function setIcon(element: HTMLElement, icon: string): void { element.dataset.icon = icon; }
