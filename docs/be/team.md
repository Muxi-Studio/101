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
  const members2023= [
    {
      avatar: 'https://avatars.githubusercontent.com/u/110370811?v=4',
      name: 'sunjunnan79',
      desc: `前端转前台，后端转后厨。我们都有光明的未来`,
      org: '信息管理学院',
      links: [
        { icon: 'github', link: 'https://github.com/sunjunnan79' },
      ]
    },
    {
      avatar: 'https://obs.jielong.co/Jl_FeedBackRecord/2024/08/09/82b99c8-e41d15e3-7f48-4fea-b79f-39e59777dc3.jpg?x-image-process=image/format,webp/quality,q_60',
      name: 'bugoutianzhen123',
      desc: `后端擦玻璃的`,
      org: '计算机学院',
      links: [
        { icon: 'github', link: 'https://github.com/bugoutianzhen123' },
      ]
    },
    {
      avatar: 'https://obs.jielong.co/Jl_FeedBackRecord/2024/08/09/82b99c8-b89afe87-abc4-4395-9c15-39e51bc91b1.jpg?x-image-process=image/format,webp/quality,q_60',
      name: 'Wslydgithub',
      desc: `后端小透明，眼神清澈大学生`,
      org: '信息管理学院',
      links: [
        { icon: 'github', link: 'https://github.com/wslydgithub' },
      ]
    },
    {
      avatar: 'https://avatars.githubusercontent.com/u/140409375?v=4',
      name: 'wslydgithub',
      desc: `Hello World`,
      org: '计算机学院',
      links: [
        { icon: 'github', link: 'https://github.com/wslydgithub' },
      ]
    },
    {
      avatar: 'https://www.github.com/chencheng8888.png',
      name: 'chencheng8888',
      desc: `学就对了`,
      org: '计算机学院',
      links: [
        { icon: 'github', link: 'https://github.com/chencheng8888' },
      ]
    }
  ]
  const members2022 = [
    {
      avatar: 'https://www.github.com/big-dust.png',
      name: 'big-dust',
      desc: `脱离了高级趣味的人`,
      org: '计算机学院',
      links: [
        { icon: 'github', link: 'https://github.com/big-dust' },
      ]
    },
    {
      avatar: 'https://www.github.com/KitZhangYs.png',
      name: 'KitZhangYs',
      desc: `你是？我是？他是？`,
      org: '计算机学院',
      links: [
        { icon: 'github', link: 'https://github.com/KitZhangYs' },
      ]
    },
    {
      avatar: 'https://www.github.com/Cg1028.png',
      name: 'Cg1028',
      desc: `｛"code": 418, "msg": "I'm a teapot"｝`,
      org: '人工智能教育学部',
      links: [
        { icon: 'github', link: 'https://github.com/Cg1028' },
      ]
    },
    {
      avatar: 'https://www.github.com/a48zhang.png',
      name: 'a48zhang',
      desc: `我是后端茶倒水的鶸，好吃懒做不求上进的ddl战士。`,
      org: '计算机学院',
      links: [
        { icon: 'github', link: 'https://github.com/a48zhang' },
      ]
    },
    {
      avatar: 'https://www.github.com/CielWaaah.png',
      name: 'CielWaaah',
      desc: `去去重去去，来时是来时。`,
      org: '计算机学院',
      links: [
        { icon: 'github', link: 'https://github.com/CielWaaah' },
      ]
    },
    {
      avatar: 'https://www.github.com/serlarde.png',
      name: 'serlarde',
      desc: `大白菜大学生。`,
      org: '计算机学院',
      links: [
        { icon: 'github', link: 'https://github.com/serlarde' },
      ]
    },
    {
      avatar: 'https://www.github.com/LogSingleDog.png',
      name: 'LogSingleDog',
      desc: `写下err！=nil的人`,
      org: '计算机学院',
      links: [
        { icon: 'github', link: 'https://github.com/LogSingleDog' },
      ]
    },
  ]

  const members2021 = [
    {
      avatar: 'https://www.github.com/Wishforpeace.png',
      name: 'Wishforpeace',
      desc: `YOLO`,
      org: '计算机学院',
      links: [
        { icon: 'github', link: 'https://github.com/Wishforpeace' },
      ]
    },
    {
      avatar: 'https://www.github.com/SUIYUELIANYI.png',
      name: 'SUIYUELIANYI',
      desc: `摸鱼中`,
      org: '计算机学院',
      links: [
        { icon: 'github', link: 'https://github.com/SUIYUELIANYI' },
      ]
    },
    {
      avatar: 'https://www.github.com/Eternal-Faith.png',
      name: 'Eternal-Faith',
      org: '计算机学院',
      links: [
        { icon: 'github', link: 'https://github.com/Eternal-Faith' },
      ]
    },
    {
      avatar: 'https://www.github.com/jackj-ohn1.png',
      name: 'jackj-ohn1',
      desc: `普通的菜狗`,
      org: '计算机学院',
      links: [
        { icon: 'github', link: 'https://github.com/jackj-ohn1' },
      ]
    },
  ]

  const members2020 = [
    {
      avatar: 'https://www.github.com/TAODEI.png',
      name: 'TAODEI',
      links: [
        { icon: 'github', link: 'https://github.com/TAODEI' },
      ]
    },
    {
      avatar: 'https://www.github.com/royal-dargon.png',
      name: 'royal-dargon',
      links: [
        { icon: 'github', link: 'https://github.com/royal-dargon' },
      ]
    },
    {
      avatar: 'https://www.github.com/HX-Ray.png',
      name: 'HX-Ray',
      links: [
        { icon: 'github', link: 'https://github.com/HX-Ray' },
      ]
    },
    {
      avatar: 'https://www.github.com/kuangkuangkuangha.png',
      name: 'kuangkuangkuangha',
      links: [
        { icon: 'github', link: 'https://github.com/kuangkuangkuangha' },
      ]
    },
    {
      avatar: 'https://www.github.com/Lemonade.png',
      name: 'Lemonade',
      links: [
        { icon: 'github', link: 'https://github.com/Lemonade' },
      ]
    },
    {
      avatar: 'https://www.github.com/gongna-au.png',
      name: 'gongna-au',
      links: [
        { icon: 'github', link: 'https://github.com/gongna-au' },
      ]
    },
  ]

  const members2019 = [
    {
      avatar: 'https://www.github.com/JacksieCheung.png',
      name: 'JacksieCheung',
      links: [
        { icon: 'github', link: 'https://github.com/JacksieCheung' },
      ]
    },
    {
      avatar: 'https://www.github.com/Chiwency.png',
      name: 'Chiwency',
      links: [
        { icon: 'github', link: 'https://github.com/Chiwency' },
      ]
    },
    {
      avatar: 'https://www.github.com/kocoler.png',
      name: 'kocoler',
      links: [
        { icon: 'github', link: 'https://github.com/kocoler' },
      ]
    },
    {
      avatar: 'https://www.github.com/hlyyy.png',
      name: 'hlyyy',
      links: [
        { icon: 'github', link: 'https://github.com/hlyyy' },
      ]
    },
    {
      avatar: 'https://www.github.com/jepril.png',
      name: 'jepril',
      links: [
        { icon: 'github', link: 'https://github.com/jepril' },
      ]
    },
    {
      avatar: 'https://www.github.com/Mochigo.png',
      name: 'Mochigo',
      links: [
        { icon: 'github', link: 'https://github.com/Mochigo' },
      ]
    },
  ]

  const members2018 = [
    {
      avatar: 'https://www.github.com/Shadowmaple.png',
      name: 'Shadowmaple',
      links: [
        { icon: 'github', link: 'https://github.com/Shadowmaple' },
      ]
    },
    {
      avatar: 'https://www.github.com/Bowser1704.png',
      name: 'Bowser1704',
      links: [
        { icon: 'github', link: 'https://github.com/Bowser1704' },
      ]
    },
    {
      avatar: 'https://www.github.com/hjm.png',
      name: 'hjm',
      links: [
        { icon: 'github', link: 'https://github.com/hjm' },
      ]
    },
    {
      avatar: 'https://www.github.com/jiangzc.png',
      name: 'jiangzc',
      links: [
        { icon: 'github', link: 'https://github.com/jiangzc' },
      ]
    },
  ]

  const members2017 = [
    {
      avatar: 'https://www.github.com/ShiinaOrez.png',
      name: 'ShiinaOrez',
      desc: `日积代码千行，则无往而不利也@学业进行中`,
      org: '计算机学院',
      links: [
        { icon: 'github', link: 'https://github.com/ShiinaOrez' },
      ]
    },
    {
      avatar: 'https://www.github.com/Darren.png',
      name: 'Darren',
      links: [
        { icon: 'github', link: 'https://github.com/Darren' },
      ]
    },
    {
      avatar: 'https://www.github.com/CGH.png',
      name: 'CGH',
      links: [
        { icon: 'github', link: 'https://github.com/CGH' },
      ]
    },
  ]

  const members2016 = [
    {
      avatar: 'https://www.github.com/Humbertzhang.png',
      name: 'Humbertzhang',
      links: [
        { icon: 'github', link: 'https://github.com/Humbertzhang' },
      ]
    },
    {
      avatar: 'https://www.github.com/yuyilei.png',
      name: 'yuyilei',
      links: [
        { icon: 'github', link: 'https://github.com/yuyilei' },
      ]
    },
    {
      avatar: 'https://www.github.com/Andrewpqc.png',
      name: 'Andrewpqc',
      links: [
        { icon: 'github', link: 'https://github.com/Andrewpqc' },
      ]
    },
    {
      avatar: 'https://www.github.com/AnyaLeung.png',
      name: 'AnyaLeung',
      links: [
        { icon: 'github', link: 'https://github.com/AnyaLeung' },
      ]
    },
  ]

  const members2015 = [
    {
      avatar: 'https://www.github.com/kasheemlew.png',
      name: 'kasheemlew',
      links: [
        { icon: 'github', link: 'https://github.com/kasheemlew' },
      ]
    },
    {
      avatar: 'https://www.github.com/RoseOu.png',
      name: 'RoseOu',
      links: [
        { icon: 'github', link: 'https://github.com/RoseOu' },
      ]
    },
  ]

  const members2014 = [
    {
      avatar: 'https://www.github.com/Misakar.png',
      name: 'Misakar',
      links: [
        { icon: 'github', link: 'https://github.com/Misakar' },
      ]
    },
  ]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>木犀团队 后端组</template>
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
</VPTeamPage>
