---
layout: page
---

<script setup>
  import {
    VPTeamPage,
    VPTeamPageTitle,
    VPTeamMembers,
    VPTeamPageSection
  } from 'vitepress/theme';
  const members2024 = [
 
  {
    avatar: 'https://muxi-avatar.muxixyz.com//operation/xuemiao.jpg',
    name: '薛淼',
    desc: `人生哪，能不能放过我这一次～`,
    org: '信管学院',
    links: []
  },
  {
    avatar: 'https://muxi-avatar.muxixyz.com//operation/wangyanhui.png',
    name: '王妍惠',
    desc: '找我听歌',
    org: '计算机学院',
    links: []
  },
]
const members2023 = [
 {
    avatar: 'https://muxi-avatar.muxixyz.com//operation/zhanglibin.jpg',
    name: '张丽彬',
    desc: `事已至此，先吃饭吧`,
    org: '计算机学院',
    links: []
  },
   {
      avatar: 'https://www.github.com/kuangkuang0326.png',
      name: 'kuangkuang0326',
      desc: `每天睡前祈祷明天没有小组作业`,
      org: '人工智能教育学部',
      links: [
        { icon: 'github', link: 'https://github.com/kuangkuang0326' },
      ]
    },
]

  

  
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>木犀团队 运营组</template>
    <template #lead>...</template>
  </VPTeamPageTitle>
  <VPTeamPageSection>
    <template #title>2024 级</template>
    <template #lead>...</template>
    <template #members>
      <VPTeamMembers size="small" :members="members2024"/>
    </template>
  </VPTeamPageSection>
<VPTeamPageSection>
    <template #title>2023 级</template>
    <template #lead>...</template>
    <template #members>
      <VPTeamMembers size="small" :members="members2023"/>
    </template>
  </VPTeamPageSection>
</VPTeamPage>
