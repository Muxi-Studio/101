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
  const members2023 = [
    {
      avatar: 'https://obs.jielong.co/Jl_FeedBackRecord/2024/08/09/82b99c8-d753ec96-1a58-44d5-a103-36c35acb0e6.jpg?x-image-process=image/format,webp/quality,q_60',
      name: '许月红',
      desc: `“幸福的生活，就是每天有事做，有人爱，有期待。”`,
    },
    {
      avatar: 'https://obs.jielong.co/Jl_FeedBackRecord/2024/08/09/82b99c8-55bb971c-36eb-4483-b381-362285dfb1a.jpg?x-image-process=image/format,webp/quality,q_60',
      name: '柏佳慧',
      desc: `戏称“摸鱼开柏”（但是很少能摸到鱼…）。喜欢的格言是“人生即产品”。野心勃勃，奋发向上！`,
    },
    {
      avatar: 'https://obs.jielong.co/Jl_FeedBackRecord/2024/08/09/82b99c8-d5b542f0-4a8a-4036-b0fe-39e538cfd86.jpg?x-image-process=image/format,webp/quality,q_60',
      name: '池若萱',
      desc: `极限加班的产品`,
    },
    {
      avatar: 'https://obs.jielong.co/Jl_FeedBackRecord/2024/08/10/82b99c8-aab0be3f-7a88-46f3-a9e6-39e50a4581b.jpg?x-image-process=image/format,webp/quality,q_60',
      name: '翁伟恩',
      desc: `学习做出一款好产品`,
    },
  ]
  const members2022 = [
    {
      avatar: 'https://workbench-static.muxixyz.com/1669470225.246666.365AAB60-BF4E-4A23-AF17-80D6C3E56F13.jpeg ',
      name: '张雅',
      desc: `偷得浮生半日闲`,
    },
    {
      avatar: 'https://static.muxixyz.com/workbench/avatar/9.png',
      name: '张舒涵',
      desc: `尬聊小能手`,
    },
    {
      avatar: 'https://workbench-static.muxixyz.com/1665289311.3582513.165A9FEA-E901-4053-946D-A67E1413DA56.jpeg',
      name: '梁畅',
      desc: `隐藏野心 悄悄发光`,
    },
    {
      avatar: 'https://workbench-static.muxixyz.com/1673625460.0780535.QQ20230113235659.jpg',
      name: '李曈曈',
      desc: `我有一个绝妙的点子！需要过审核？呃，那没有了`,
    },
    {
      avatar: 'https://workbench-static.muxixyz.com/1665883263.22128.DA3BA84B-EB2C-4C4A-A71E-47BAA3CEA9C9.jpeg',
      name: '唐歆雅',
      desc: `脑洞全宇宙漂移`,
    },
    {
      avatar: 'https://static.muxixyz.com/workbench/avatar/5.png',
      name: '张铭秋',
    },
  ]

  const members2021 = [
    {
      avatar: 'https://workbench-static.muxixyz.com/1633877041.2810264.IMG_20210912_003750.jpg',
      name: '李忠桉',
      desc: `试图将生活过得多姿多彩~(～￣▽￣)～`,
    },
    {
      avatar: 'https://workbench-static.muxixyz.com/1643212743.6831107.20220125203027.jpg',
      name: '韩金娜',
      desc: `嗨害嗨!`,
    },
    {
      avatar: 'https://static.muxixyz.com/workbench/avatar/12.png',
      name: '骆紫盈',
      desc: `多思考，多扩展自我边界。`,
    },
    {
      avatar: 'https://workbench-static.muxixyz.com/1634571021.3779593.QQ20171003151221.jpg',
      name: '林邑多',
      desc: `赞美干饭，你是在天上的，你是自有永有`,
    },
    {
      avatar: 'https://workbench-static.muxixyz.com/1637409994.5615695.heieh1.jpg',
      name: '耿雅柔',
      desc: `巴拉巴拉`,
    },
  ]

  const members2020 = [
    {
      avatar: 'https://static.muxixyz.com/workbench/avatar/6.png',
      name: '程文璇',
      desc: `完成好过完美`,
    },
    {
      avatar: 'https://workbench-static.muxixyz.com/1610870983.8439746.img-8b0107c3c7a97c74b537eaebb3f76ab0_2.jpg',
      name: '郭子亮',
      desc: `白敬亭八抬大轿的夫人`,
    },
    {
      avatar: 'https://workbench-static.muxixyz.com/1626163225.3726187.69b4-ixkvvuc3151576.jpg',
      name: '邓远星',
      desc: `自律即高级`,
    },
    {
      avatar: 'https://workbench-static.muxixyz.com/1612792884.067052.png',
      name: '朱力令',
      desc: `活着`,
    },
    {
      avatar: 'https://static.muxixyz.com/workbench/avatar/3.png',
      name: '王家珺',
      desc: `此人来过`,
    },
  ]

  const members2019 = [
    {
      avatar: 'https://muxi-avatar.muxixyz.com//product/sunao.jpg',
      name: '孙奥',
      desc: `绞尽脑汁，原地爆炸`,
    },
    {
      avatar: 'https://muxi-avatar.muxixyz.com//product/lilinpei.png',
      name: '李林沛',
      desc: `我永远喜欢高等数学`,
    },
    {
      avatar: 'https://muxi-avatar.muxixyz.com//product/mengrongyuan.jpg',
      name: '孟镕媛',
      desc: `骄傲且顽固的小孟`,
    },
    {
      avatar: 'https://muxi-avatar.muxixyz.com//product/wangyuxin.jpg',
      name: '王雨欣',
      desc: `天天开心`,
    },
  ]

  const members2018 = [
    {
      avatar: 'https://static.muxixyz.com/workbench/avatar/5.png',
      name: 'Z 司机',
    },
    {
      avatar: 'https://static.muxixyz.com/workbench/avatar/5.png',
      name: 'cyf',
    },
  ]

  const members2017 = [
    {
      avatar: 'https://static.muxixyz.com/workbench/avatar/5.png',
      name: 'Summer',
    },
  ]

  const members2016 = [
    {
      avatar: 'https://static.muxixyz.com/workbench/avatar/5.png',
      name: 'Zing',
    },
  ]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>木犀团队 产品组</template>
    <template #lead>...</template>
  </VPTeamPageTitle>
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
  <VPTeamPageSection>
    <template #title>2018 级</template>
    <template #lead>...</template>
    <template #members>
      <VPTeamMembers size="small" :members="members2018"/>
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>2017 级</template>
    <template #lead>...</template>
    <template #members>
      <VPTeamMembers size="small" :members="members2017"/>
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>2016 级</template>
    <template #lead>...</template>
    <template #members>
      <VPTeamMembers size="small" :members="members2016"/>
    </template>
  </VPTeamPageSection>
</VPTeamPage>
