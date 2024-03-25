module.exports = {
	base: "/101/",
	title: "木犀 101",
	description: "木犀沉淀的互联网学习入门指南",
	themeConfig: {
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
					title: "前端",
					collapsable: false,
					children: [
						"",
						{
							title: "学习路线",
							collapsable: false,
							children: ["freshmen_fall", "freshmen_spring", "sophomore_fall"],
						},
						{
							title: "项目开发",
							collapsable: false,
							children: ["project"],
						},
						{
							title: "专题学习",
							collapsable: false,
							children: [
								"react_road_map",
								// "infra",
								// "mobile",
								// "cg_road_map",
								// "ui_lib_design",
							],
						},
						{
							title: "基础话题",
							collapsable: false,
							children: ["component"],
						},
						{
							title: "Labs",
							collapsable: false,
							children: ["lab_http", "lab_module", "lab_hyperapp"],
						},
					],
				},
			],
			"/cs/": [
				{
					title: "计算机基础",
					collapsable: false,
					children: [
						"",
						"prepare",
						"culture",
						"freshmen_fall",
						"freshmen_spring",
						"c_study",
						"linux_study",
						"computer_study",
					],
				},
			],
			"/be/": [
				{
					title: "后端",
					collapsable: false,
					children: ["", "freshmen_fall", "freshmen_spring", "sophomore_fall"],
				},
			],
			"/mobile/": [
				{
					title: "安卓",
					collapsable: false,
					children: [
						"",
						"freshmen_fall",
						"freshmen_spring",
						"appendix_java_quiz",
						"appendix_reference",
						"appendix_tech_direction",
					],
				},
				{
					title: "iOS",
					collapsable: false,
					children: ["ios"],
				},
			],
			"/product/": [
				{
					title: "产品",
					collapsable: false,
					children: ["", "freshmen_fall"],
				},
			],
		},
	},
};
