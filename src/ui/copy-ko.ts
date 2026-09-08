export const COPY_KO = {
	settings: { mode: "표시 모드", excludedFolders: "제외 폴더", excludedFoldersDesc: "한 줄에 폴더 하나. 이름은 모든 경로 구간에, 경로는 Vault 루트부터 적용됩니다. 비우면 일반 폴더를 포함합니다. 숨김 내부 루트는 계속 제외됩니다.", excludedStatuses: "제외 상태", excludedStatusesDesc: "한 줄에 값 하나. status, lifecycle, lifecycle_status에 적용합니다. 설정만 저장하며 노트는 변경하지 않습니다." },
	view: { title: "Linked Graph Navigator", openRibbon: "현재 문서를 Linked Graph Navigator로 보기", openCommand: "현재 문서의 Linked Graph Navigator 열기", refreshCommand: "Linked Graph Navigator 새로고침", focusSearchCommand: "경로 검색으로 이동", backCommand: "이 세션에서 뒤로 이동", forwardCommand: "이 세션에서 앞으로 이동" },
	actions: {
		search: "현재 링크 검색",
		back: "뒤로",
		forward: "앞으로",
		showGraph: "그래프 보기",
		showOutline: "목차 보기",
		expand: (label: string) => `${label} 펼치기`,
		collapse: (label: string) => `${label} 접기`,
		zoomOut: "축소",
		zoomIn: "확대",
		fitGraph: "그래프 맞춤",
		openParent: (label: string) => `상위 문서로 이동: ${label}`,
		showAllInOutline: "목차에서 모두 보기",
	},
	labels: {
		omissionSummary: (excluded: number, unresolved: number) => `${String(excluded)}개 설정으로 제외 · ${String(unresolved)}개 미해결 링크. 대상 파일과 플러그인 설정을 확인하세요.`,
		noCurrentDocument: "현재 Markdown 문서 없음", searchPlaceholder: "현재 경로 검색",
		routeCount: (count: number) => `현재 문서 · ${String(count)}개 경로`,
		treeAria: "현재 Markdown 문서의 링크 목차", graphAria: "현재 Markdown 문서의 1단계 링크 그래프", loading: "링크를 읽는 중…",
		openMarkdown: "Markdown 문서를 열면 작성된 링크 순서가 여기에 표시됩니다.", noLinks: "이 문서에 연결된 Markdown 링크가 없습니다.",
		noSearchResults: "일치하는 링크가 없습니다.", readFailed: "현재 문서의 링크를 읽지 못했습니다.",
		omittedRoutes: (count: number) => `그래프 반응성을 위해 경로 ${String(count)}개를 생략했습니다.`,
		previewStatus: (label: string, shown: number, total: number) => total === 0
			? `${label}에 확인할 다음 경로가 없습니다.`
			: `${label}: 다음 경로 ${String(total)}개 중 ${String(shown)}개를 표시합니다.`,
	},
	notice: { openMarkdownFirst: "먼저 Wiki 또는 Markdown 문서를 여세요." },
} as const;
