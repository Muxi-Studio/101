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

  const members2022 = [
    {
      avatar: 'https://workbench-static.muxixyz.com/1679245329.5890565.DB71F9512A79177FDF139F968632F78F.jpg',
      name: '张琪',
      desc: `目标是成为全栈——？！`,
    },
    {
      avatar: 'https://workbench-static.muxixyz.com/1665375444.7576077.QQ20221010121703.jpg',
      name: '叶晓芸',
      desc: `二刺猿`,
    },
    {
      avatar: 'https://workbench-static.muxixyz.com/1665930326.42843.86257174-371D-46A7-86CD-4DFF7F165489.jpeg',
      name: '陈睿',
      desc: `吃好喝好，长生不老`,
    },
    {
      avatar: 'https://static.muxixyz.com/workbench/avatar/5.png',
      name: '陈扶农',
      desc: `woc，农！`,
    },
    {
      avatar: 'https://workbench-static.muxixyz.com/1665802252.3330014.png',
      name: '来宇航',
      desc: `好的，没问题，马上改`,
    },
    {
      avatar: 'https://workbench-static.muxixyz.com/1666185891.647377.20C450EB47F928BC68542118B3FC3F5E.png',
      name: '赵珂慧',
      desc: `学弟学妹快来！让我啃啃！`,
    },
    {
      avatar: 'https://static.muxixyz.com/workbench/avatar/13.png',
      name: '许蓝菁',
      desc: `努力跟进前辈脚步的大学生`,
    },
  ]

  const members2021 = [
    {
      avatar: 'https://static.muxixyz.com/workbench/avatar/9.png',
      name: '刘晨萱',
      desc: `快乐不需要等到明天，下一秒都觉得遥远～`,
    },
    {
      avatar: 'https://static.muxixyz.com/workbench/avatar/5.png',
      name: '袁昕怡',
      desc: `快乐不需要等到明天，下一秒都觉得遥远～`,
    },
  ]

  const members2020 = [
    {
      avatar: 'https://workbench-static.muxixyz.com/1635301043.4406018.jpg',
      name: '全正',
      desc: `不会画画的屑设计`,
    },
    {
      avatar: 'https://static.muxixyz.com/workbench/avatar/4.png',
      name: '莫程泽',
      desc: `设计小白，求各位大佬带飞¦•'-'•)و✧`,
    },
  ]

  const members2019 = [
    {
      avatar: 'https://muxi-avatar.muxixyz.com//design/mengfanyao.png',
      name: '孟凡瑶',
      desc: `快乐不需要等到明天，下一秒都觉得遥远～`,
    },
    {
      avatar: 'https://muxi-avatar.muxixyz.com//design/daixianping.png',
      name: '戴纤萍',
      desc: `好好向上天天学习`,
    },
    {
      avatar: 'https://muxi-avatar.muxixyz.com//design/tanhang.png',
      name: '谭航',
      desc: `呜啦啦啦火车笛，随着奔腾的马蹄~`,
    },
  ]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>木犀团队 设计组</template>
    <template #lead>...</template>
  </VPTeamPageTitle>
  <VPTeamPageSection>
    <template #title>2022 级</template>
    <template #lead>...</template>
    <template #members>
      <VPTeamMembers size="small" :members="members2022"/>
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>2021 级</template>
    <template #lead>...</template>
    <template #members>
      <VPTeamMembers size="small" :members="members2021"/>
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>2020 级</template>
    <template #lead>...</template>
    <template #members>
      <VPTeamMembers size="small" :members="members2020"/>
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>2019 级</template>
    <template #lead>...</template>
    <template #members>
      <VPTeamMembers size="small" :members="members2019"/>
    </template>
  </VPTeamPageSection>
</VPTeamPage>
