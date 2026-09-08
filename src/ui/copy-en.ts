export const COPY_EN = {
	settings: { mode: "Display mode", excludedFolders: "Excluded folders", excludedFoldersDesc: "One folder per line. A name matches any path segment; a path matches from the Vault root. Clear to include ordinary folders. Hidden internal roots remain excluded.", excludedStatuses: "Excluded statuses", excludedStatusesDesc: "One value per line. Matches status, lifecycle, or lifecycle_status. Only preferences are saved; notes remain unchanged." },
	view: { title: "Linked Graph Navigator", openRibbon: "View the current note in Linked Graph Navigator", openCommand: "Open Linked Graph Navigator for the current note", refreshCommand: "Refresh Linked Graph Navigator", focusSearchCommand: "Focus route search", backCommand: "Navigate back in this session", forwardCommand: "Navigate forward in this session" },
	actions: {
		search: "Search current links", back: "Back", forward: "Forward", showGraph: "Graph view", showOutline: "Outline view",
		expand: (label: string) => `Expand ${label}`, collapse: (label: string) => `Collapse ${label}`,
		zoomOut: "Zoom out", zoomIn: "Zoom in", fitGraph: "Fit graph",
		openParent: (label: string) => `Open parent note: ${label}`,
		showAllInOutline: "Show all in Outline",
	},
	labels: {
		omissionSummary: (excluded: number, unresolved: number) => `${String(excluded)} excluded by settings · ${String(unresolved)} unresolved links. Check destination files and plugin settings.`,
		noCurrentDocument: "No current Markdown note", searchPlaceholder: "Search current routes",
		routeCount: (count: number) => `Current note · ${String(count)} routes`,
		treeAria: "Link outline authored from the current Markdown note", graphAria: "One-hop link graph for the current Markdown note", loading: "Reading links…",
		openMarkdown: "Open a Markdown note to see its authored links in order.", noLinks: "This note has no resolved Markdown links.",
		noSearchResults: "No matching links.", readFailed: "Linked Graph Navigator could not read the current note.",
		omittedRoutes: (count: number) => `${String(count)} more routes are hidden from the graph to keep it responsive.`,
		previewStatus: (label: string, shown: number, total: number) => total === 0
			? `${label} has no further resolved routes.`
			: `${label}: showing ${String(shown)} of ${String(total)} next routes.`,
	},
	notice: { openMarkdownFirst: "Open a Wiki or Markdown note first." },
} as const;
