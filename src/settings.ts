export interface GraphSettings {
	mode: "graph" | "outline";
	excludedFolders: string[];
	excludedStatuses: string[];
}

export const DEFAULT_SETTINGS: GraphSettings = {
	mode: "graph",
	excludedFolders: ["private", "_sources", "_generated", "generated", "archive", "archived"],
	excludedStatuses: ["archived", "retired", "superseded"],
};

export function normalizeSettings(value: unknown): GraphSettings {
	const stored = value && typeof value === "object" ? value as Record<string, unknown> : {};
	return {
		mode: stored.mode === "outline" ? "outline" : "graph",
		excludedFolders: normalizeList(stored.excludedFolders, DEFAULT_SETTINGS.excludedFolders),
		excludedStatuses: normalizeList(stored.excludedStatuses, DEFAULT_SETTINGS.excludedStatuses),
	};
}

function normalizeList(value: unknown, fallback: string[]): string[] {
	if (!Array.isArray(value)) return [...fallback];
	return [...new Set(value.filter((item): item is string => typeof item === "string")
		.map((item) => item.trim().replace(/\\/g, "/").replace(/^\/+|\/+$/g, "").toLocaleLowerCase()).filter(Boolean))];
}
