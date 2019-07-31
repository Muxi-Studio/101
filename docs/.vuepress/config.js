module.exports = {
  title: "木犀 101",
  description: "木犀沉淀的互联网技术入门指南",
  themeConfig: {
    nav: [
      { text: "前端", link: "/fe/" },
      { text: "安卓", link: "/android/" },
      { text: "后端", link: "/be/" },
      { text: "计算机基础", link: "/cs/" }
    ],
    // displayAllHeaders: true, // 默认值：false
    sidebar: {
      "/fe/": [
        {
          title: "前端",
          collapsable: false,
          children: ["", "foo"]
        }
      ]
    }
  }
};
