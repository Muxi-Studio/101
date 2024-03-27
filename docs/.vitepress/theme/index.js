// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import giscusTalk from "vitepress-plugin-comment-with-giscus";
import { useData, useRoute } from "vitepress";
import "./style.css";

/** @type {import('vitepress').Theme} */
export default {
	extends: DefaultTheme,
	Layout: () => {
		return h(DefaultTheme.Layout, null, {
			// https://vitepress.dev/guide/extending-default-theme#layout-slots
		});
	},
	enhanceApp({ app, router, siteData }) {
		// ...
	},
	setup() {
		// 获取前言和路由
		const { frontmatter } = useData();
		const route = useRoute();

		// 评论组件 - https://giscus.app/
		giscusTalk(
			{
				repo: "Muxi-Studio/101", //仓库
				repoId: "MDEwOlJlcG9zaXRvcnkxOTk3NjMzNDI=", //仓库ID
				category: "DIC_kwDOC-gljs4CeRk6", // 讨论分类
				categoryId: "your category id", //讨论分类ID
				mapping: "pathname", // 默认: `pathname`
				strict: "1",
				term: "Welcome to @giscus/vue component!",
				reactionsEnabled: "1",
				emitMetadata: "1",
				inputPosition: "top", // 默认: `top`
				lang: "zh-CN", // 默认: `zh-CN`
				lightTheme: "light", // 默认: `light`
				darkTheme: "dark", // 默认: `transparent_dark`
				loading: "lazy",
			},
			{
				frontmatter,
				route,
			},
			//默认值为true，表示已启用，此参数可以忽略；
			//如果为false，则表示未启用
			//您可以使用“comment:true”序言在页面上单独启用它
			true
		);
	},
};
