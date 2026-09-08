import { App, PluginSettingTab, Setting } from "obsidian";
import type LinkedGraphPlugin from "./main";
import { COPY } from "./ui/copy";

export class GraphSettingTab extends PluginSettingTab {
	constructor(app: App, private readonly owner: LinkedGraphPlugin) { super(app, owner); }

	getSettingDefinitions(): { name: string; desc?: string; render: (setting: Setting) => void }[] {
		return [
			{
				name: COPY.settings.mode,
				render: (setting) => {
					setting.addDropdown((control) => control.addOption("graph", COPY.actions.showGraph)
						.addOption("outline", COPY.actions.showOutline).setValue(this.owner.preferences.mode)
						.onChange(async (value) => {
							this.owner.preferences.mode = value === "outline" ? "outline" : "graph";
							await this.owner.savePreferences();
						}));
				},
			},
			...["excludedFolders", "excludedStatuses"].map((name) => {
				const key = name as "excludedFolders" | "excludedStatuses";
				return {
					name: COPY.settings[key], desc: COPY.settings[`${key}Desc`],
					render: (setting: Setting) => {
						setting.addTextArea((control) => control.setValue(this.owner.preferences[key].join("\n"))
							.onChange(async (value) => {
								this.owner.preferences[key] = value.split("\n");
								await this.owner.savePreferences();
							}));
					},
				};
			}),
		];
	}

	// Keep the declared minimum Obsidian version working before settings search existed.
	display(): void {
		this.containerEl.empty();
		for (const definition of this.getSettingDefinitions()) {
			const setting = new Setting(this.containerEl).setName(definition.name ?? "");
			if (definition.desc) setting.setDesc(definition.desc);
			definition.render?.(setting);
		}
	}
}
