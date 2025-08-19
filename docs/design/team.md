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
  //TODO =>23级的头像问题 
  const members2024 = [
  {
    avatar: 'https://muxi-avatar.muxixyz.com//design/weichuxi.jpg',
    name: '魏楚稀',
    desc: `祝大家万事胜意 前程似锦`,
    org: '人工智能学院',
    links: []
  },


  {
    avatar: 'https://muxi-avatar.muxixyz.com//design/dongyingfan.png',
    name: 'Butter fly',
    desc: `都是同龄人我原本没想降维打击`,
    org: '人工智能学院',
    links: []
  },
  {
    avatar: 'https://muxi-avatar.muxixyz.com//design/yinjiayi.jpeg',
    name: 'jenyinnn',
    desc: `安静 你的同胞正在做中国梦`,
    org: '美术学院',
    links: []
  },
  {
    avatar: 'https://muxi-avatar.muxixyz.com//design/liuyuan.jpg',
    name: '斯琴',
    desc: `刘媛只值六元`,
    org: '人工智能学院',
    links: []
  },
 
]

  const members2023 = [
    {
      avatar: 'https://obs.jielong.co/Jl_FeedBackRecord/2024/08/10/82b99c8-36f8078f-9660-47d0-80dc-2fc9689d3ea.jpg?x-image-process=image/format,webp/quality,q_60',
      name: '刘翠蝶',
      desc: `努力成为好设计ing～`,
    },
    {
      avatar: 'https://obs.jielong.co/Jl_FeedBackRecord/2024/08/10/82b99c8-48ebcc17-e18c-412a-9dba-387d1c431a8.jpg?x-image-process=image/format,webp/quality,q_60',
      name: '丁鼎峰',
      desc: `我叫丁鼎峰，热爱UI设计`,
    },
    {
      avatar:'https://obs.jielong.co/Jl_FeedBackRecord/2024/08/10/82b99c8-3f99994e-da09-4145-b792-39e50956723.jpg?x-image-process=image/format,webp/quality,q_60',
      name: '时丽静',
      desc: `最好的状态是保持进步`,
    },
    {
      avatar: 'https://obs.jielong.co/Jl_FeedBackRecord/2024/08/09/82b99c8-68752536-49a4-4193-b6a4-39e5aa937f9.jpg?x-image-process=image/format,webp/quality,q_60',
      name: '陈瑜伦',
      desc: `一个沉默的郎，比较随心所欲`,
    },
    {
      avatar: 'https://obs.jielong.co/Jl_FeedBackRecord/2024/08/09/82b99c8-c2019adf-9e88-4dcb-a861-39e41dcc9cd.jpg?x-image-process=image/format,webp/quality,q_60',
      name: '李畅龙',
      desc: `喜欢排球的设计少年.....`,
    },
    {
      avatar: 'https://obs.jielong.co/Jl_FeedBackRecord/2024/08/09/82b99c8-5c54ada2-af8b-413a-baf2-36afaefe762.jpg?x-image-process=image/format,webp/quality,q_60',
      name: '马丽敏',
      desc: `Better`,
    },
    {
      avatar: 'https://obs.jielong.co/Jl_FeedBackRecord/2024/08/09/82b99c8-96bfa6e0-4700-44fd-914d-39e5097ddfc.jpg?x-image-process=image/format,webp/quality,q_60',
      name: '余佳颖',
      desc: `我来自数字媒体技术专业~`,
    },
    {
      avatar: 'https://obs.jielong.co/Jl_FeedBackRecord/2024/08/09/82b99c8-66bf53d8-856c-4acf-9b60-39e5095bbd5.jpg?x-image-process=image/format,webp/quality,q_60',
      name: '赵宇轩',
      desc: `正在努力向技术栈进发`,
    },
     {
    avatar: 'https://muxi-avatar.muxixyz.com//design/helu.jpg',
    name: '何露',
    desc: `孩子们，我坠机了。`,
    org: '信管学院',
    links: []
  },
    {
    avatar: 'https://muxi-avatar.muxixyz.com//design/zhangjingxin.jpg',
    name: '张景昕',
    desc: `🧸`,
    org: '心理学院',
    links: []
  },
  ]
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
      {
    avatar: 'https://muxi-avatar.muxixyz.com//design/wumenghan.jpg',
    name: '吴梦晗',
    desc: `被蚊子搬走了`,
    org: '心理学院',
    links: []
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
