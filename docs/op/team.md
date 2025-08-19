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
  }
]
const members2023 = [
 {
    avatar: 'https://muxi-avatar.muxixyz.com//operation/zhanglibin.jpg',
    name: '张丽彬',
    desc: `事已至此，先吃饭吧`,
    org: '计算机学院',
    links: []
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
