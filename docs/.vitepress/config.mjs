import { defineConfig } from "vitepress";

export default defineConfig({
	lang: "zh-CN",
	base: "/101/",
	title: "木犀 101",
	siteTitle: "木犀",
	description: "木犀沉淀的互联网学习入门指南",
	lastUpdated: true,
	srcExclude: ["**/README.md", "**/TODO.md"],
	head: [
		["link", { rel: "icon", type: "image/ico", href: "/101/muxilogo.ico" }],
	],
	markdown: {
		lineNumbers: true,
		// math: true,
		image: {
			lazyLoading: true,
		},
	},
	sitemap: {
		hostname: "https://muxi-studio.github.io/101/",
	},
	themeConfig: {
		logo: "/muxilogo.ico",
		footer: {
			message: "Hello from CCNU.",
			copyright: "Copyright © 2014-present Muxistudio",
		},
		search: {
			provider: "local",
			options: {
				translations: {
					button: {
						buttonText: "搜索文档",
						buttonAriaLabel: "搜索文档",
					},
					modal: {
						noResultsText: "无法找到相关结果",
						resetButtonTitle: "清除查询条件",
						footer: {
							selectText: "选择",
							navigateText: "切换",
							closeText: "关闭",
						},
					},
				},
			},
		},
		outline: [1, 6],
		editLink: {
			pattern: "https://github.com/Muxi-Studio/101/edit/master/docs/:path",
			text: "在 GitHub 上编辑此页",
		},
		externalLinkIcon: true,
		lastUpdated: {
			text: "更新于",
			formatOptions: {
				dateStyle: "full",
				timeStyle: "medium",
			},
		},
		socialLinks: [
			{ icon: "github", link: "https://github.com/Muxi-Studio/101" },
		],
		nav: [
			{ text: "前端", link: "/fe/" },
			{ text: "移动端", link: "/mobile/" },
			{ text: "后端", link: "/be/" },
			{ text: "产品", link: "/product/" },
			{ text: "设计", link: "/design/" },
			{ text: "计算机基础", link: "/cs/" },
			// { text: "软技能", link: "/soft/" },
			// { text: "求职", link: "/job/" },
		],
		// displayAllHeaders: true, // 默认值：false
		sidebar: {
			"/fe/": [
				{
					text: "前端",
					items: [
						{
							text: "前端组简介",
							link: "/fe/",
						},
						{
							text: "团队成员",
							link: "/fe/team",
						},
						{
							text: "学习路线",
							items: [
								{ text: "大一上学期", link: "/fe/freshmen_fall" },
								{ text: "大一下学期", link: "/fe/freshmen_spring" },
								{ text: "大二上学期", link: "/fe/sophomore_fall" },
							],
						},
						{
							text: "项目开发",
							items: [{ text: "前端项目须知", link: "/fe/project" }],
						},
						{
							text: "专题学习",
							items: [
								{ text: "React 学习指南", link: "/fe/react_road_map" },
								// "infra",
								// "mobile",
								// "cg_road_map",
								// "ui_lib_design",
							],
						},
						{
							text: "基础话题",
							items: [{ text: "组件化", link: "/fe/component" }],
						},
						{
							text: "Labs",
							items: [
								{
									text: "Lab: 使用 HTTP API 操作 Github issues",
									link: "/fe/lab_http",
								},
								{
									text: "Lab: 使用 Webpack 对 JS 应用进行构建",
									link: "/fe/lab_module",
								},
								{
									text: "Lab: 使用 Hyperapp 编写 TodoList",
									link: "/fe/lab_hyperapp",
								},
							],
						},
					],
				},
			],
			"/cs/": [
				{
					text: "计算机基础",
					items: [
						{ text: "简介", link: "/cs/" },
						{ text: "预备知识", link: "/cs/prepare" },
						{ text: "计算机文化：推荐资源", link: "/cs/culture" },
						{ text: "大一上学期", link: "/cs/freshmen_fall" },
						{ text: "大一下学期", link: "/cs/freshmen_spring" },
						{ text: "C 语言专题", link: "/cs/c_study" },
						{ text: "Linux 专题", link: "/cs/linux_study" },
						{ text: "计算机专题", link: "/cs/computer_study" },
					],
				},
			],
			"/be/": [
				{
					text: "后端",
					items: [
						{ text: "后端组简介", link: "/be/" },
						{ text: "团队成员", link: "/be/team" },
						{ text: "大一上学期", link: "/be/freshmen_fall" },
						{ text: "大一下学期", link: "/be/freshmen_spring" },
						{ text: "大二上学期", link: "/be/sophomore_fall" },
					],
				},
			],
			"/mobile/": [
				{
					text: "安卓",
					items: [
						{ text: "安卓组简介", link: "/mobile/" },
						{ text: "团队成员", link: "/mobile/team" },
						{ text: "大一上学期", link: "/mobile/freshmen_fall" },
						{ text: "大一下学期", link: "/mobile/freshmen_spring" },
						{ text: "附录 - Java 习题", link: "/mobile/appendix_java_quiz" },
						{
							text: "附录 - 值得一看的资料",
							link: "/mobile/appendix_reference",
						},
						{
							text: "附录 - 职业方向",
							link: "/mobile/appendix_tech_direction",
						},
					],
				},
				{
					text: "iOS",
					items: [{ text: "入门学习", link: "/mobile/ios" }],
				},
			],
			"/product/": [
				{
					text: "产品",
					items: [
						{ text: "产品组简介", link: "/product/" },
						{ text: "大一上学期", link: "/product/freshmen_fall" },
					],
				},
			],
			"/design/": [
				{
					text: "设计",
					items: [
						{ text: "设计组简介", link: "/design/" },
						{ text: "团队成员", link: "/design/team" },
					],
				},
			],
		},
	},
});
