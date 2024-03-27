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
      avatar: 'https://www.github.com/continuematical.png',
      name: 'continuematical',
      links: [
        { icon: 'github', link: 'https://github.com/continuematical' },
      ]
    },
    {
      avatar: 'https://www.github.com/Gyicyo.png',
      name: 'Gyicyo',
      links: [
        { icon: 'github', link: 'https://github.com/Gyicyo' },
      ]
    },
    {
      avatar: 'https://www.github.com/Edmund-Liz.png',
      name: 'Edmund-Liz',
      desc: `举世罕见的摆子`,
      org: '计算机学院',
      links: [
        { icon: 'github', link: 'https://github.com/Edmund-Liz' },
      ]
    },
    {
      avatar: 'https://www.github.com/dwqing.png',
      name: 'dwqing',
      links: [
        { icon: 'github', link: 'https://github.com/dwqing' },
      ]
    },
    {
      avatar: 'https://www.github.com/PureLipper.png',
      name: 'PureLipper',
      desc: `事安卓组，喜欢音游，兴趣加入此地XD。`,
      org: '人工智能教育学部',
      links: [
        { icon: 'github', link: 'https://github.com/PureLipper' },
      ]
    },
    {
      avatar: 'https://www.github.com/hydrogenair.png',
      name: 'hydrogenair',
      desc: `一键查询精神状态`,
      org: '计算机学院',
      links: [
        { icon: 'github', link: 'https://github.com/hydrogenair' },
      ]
    },
  ]

  const members2021 = [
    {
      avatar: 'https://www.github.com/jie-junyi.png',
      name: 'jie-junyi',
      links: [
        { icon: 'github', link: 'https://github.com/jie-junyi' },
      ]
    },
    {
      avatar: 'https://www.github.com/flsdqm.png',
      name: 'flsdqm',
      links: [
        { icon: 'github', link: 'https://github.com/flsdqm' },
      ]
    },
    {
      avatar: 'https://www.github.com/Nutcra-yu.png',
      name: 'Nutcra-yu',
      links: [
        { icon: 'github', link: 'https://github.com/Nutcra-yu' },
      ]
    },
    {
      avatar: 'https://www.github.com/caohuisheng.png',
      name: 'caohuisheng',
      links: [
        { icon: 'github', link: 'https://github.com/caohuisheng' },
      ]
    },
  ]

  const members2020 = [
    {
      avatar: 'https://www.github.com/xiaozhu-sorce.png',
      name: 'xiaozhu-sorce',
      links: [
        { icon: 'github', link: 'https://github.com/xiaozhu-sorce' },
      ]
    },
    {
      avatar: 'https://www.github.com/tiddster.png',
      name: 'tiddster',
      links: [
        { icon: 'github', link: 'https://github.com/tiddster' },
      ]
    },
    {
      avatar: 'https://www.github.com/huangxinhere.png',
      name: 'huangxinhere',
      links: [
        { icon: 'github', link: 'https://github.com/huangxinhere' },
      ]
    },
    {
      avatar: 'https://www.github.com/qiu-yunhao.png',
      name: 'qiu-yunhao',
      links: [
        { icon: 'github', link: 'https://github.com/qiu-yunhao' },
      ]
    },
    {
      avatar: 'https://www.github.com/liuyuxin-cloud.png',
      name: 'liuyuxin-cloud',
      links: [
        { icon: 'github', link: 'https://github.com/liuyuxin-cloud' },
      ]
    },
    {
      avatar: 'https://www.github.com/hyl-code.png',
      name: 'hyl-code',
      links: [
        { icon: 'github', link: 'https://github.com/hyl-code' },
      ]
    },
  ]

  const members2019 = [
    {
      avatar: 'https://www.github.com/charming-c.png',
      name: 'charming-c',
      links: [
        { icon: 'github', link: 'https://github.com/charming-c' },
      ]
    },
    {
      avatar: 'https://www.github.com/iulay1007.png',
      name: 'iulay1007',
      links: [
        { icon: 'github', link: 'https://github.com/iulay1007' },
      ]
    },
  ]

  const members2018 = [
    {
      avatar: 'https://www.github.com/zyflool.png',
      name: 'zyflool',
      links: [
        { icon: 'github', link: 'https://github.com/zyflool' },
      ]
    },
    {
      avatar: 'https://www.github.com/Ljl233.png',
      name: 'Ljl',
      links: [
        { icon: 'github', link: 'https://github.com/Ljl233' },
      ]
    },
    {
      avatar: 'https://www.github.com/wenxiny.png',
      name: 'wenxiny',
      links: [
        { icon: 'github', link: 'https://github.com/wenxiny' },
      ]
    },
  ]

  const members2017 = [
    {
      avatar: 'https://www.github.com/messi-wpy.png',
      name: 'messi-wpy',
      links: [
        { icon: 'github', link: 'https://github.com/messi-wpy' },
      ]
    },
    {
      avatar: 'https://www.github.com/BAHUANNN.png',
      name: 'BAHUANNN',
      links: [
        { icon: 'github', link: 'https://github.com/BAHUANNN' },
      ]
    },
    {
      avatar: 'https://www.github.com/yueyy.png',
      name: 'yueyy',
      links: [
        { icon: 'github', link: 'https://github.com/yueyy' },
      ]
    },
  ]

  const members2016 = [
    {
      avatar: 'https://www.github.com/kolibreath.png',
      name: 'kolibreath',
      links: [
        { icon: 'github', link: 'https://github.com/kolibreath' },
      ]
    },
  ]

  const members2015 = [
    {
      avatar: 'https://www.github.com/December1900.png',
      name: 'December1900',
      links: [
        { icon: 'github', link: 'https://github.com/December1900' },
      ]
    },
  ]

  const members2014 = [
    {
      avatar: 'https://www.github.com/fengminchao.png',
      name: 'fengminchao',
      links: [
        { icon: 'github', link: 'https://github.com/fengminchao' },
      ]
    },
  ]

  const members2012 = [
    {
      avatar: 'https://www.github.com/2bab.png',
      name: '2BAB（顾问）',
      links: [
        { icon: 'github', link: 'https://github.com/2bab' },
      ]
    },
  ]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>木犀团队 安卓组</template>
    <template #lead>噢  我知道  就写匣子的那个嘛</template>
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
  <VPTeamPageSection>
    <template #title>2015 级</template>
    <template #lead>...</template>
    <template #members>
      <VPTeamMembers size="small" :members="members2015"/>
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>2014 级</template>
    <template #lead>...</template>
    <template #members>
      <VPTeamMembers size="small" :members="members2014"/>
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>2012 级</template>
    <template #lead>...</template>
    <template #members>
      <VPTeamMembers size="small" :members="members2012"/>
    </template>
  </VPTeamPageSection>
</VPTeamPage>
