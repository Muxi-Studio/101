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
    avatar: 'https://muxi-avatar.muxixyz.com//frontend/zhanghaoyan.jpg',
    name: '张颢严',
    desc: `拉拉，可是能成为我母亲的女人啊！`,
    org: '计算机学院',
    links: [
      { icon: 'github', link: 'https://github.com/159357254680' }
    ]
  },
  {
    avatar: 'https://muxi-avatar.muxixyz.com//frontend/liweipeng.png',
    name: 'limerence',
    desc: `掌握平衡，受益终生`,
    org: '计算机学院',
    links: [
      { icon: 'github', link: 'https://github.com/L-w-p-999' }
    ]
  },

  {
    avatar: 'https://muxi-avatar.muxixyz.com//frontend/yushirui.jpeg',
    name: '余诗蕊',
    desc: `宇宙第一美刁蛮小公主`,
    org: '人工智能教育学部',
    links: [
      { icon: 'github', link: 'https://github.com/YYYSSSRRR' }
    ]
  },
  {
    avatar: 'https://muxi-avatar.muxixyz.com//frontend/liuxingyu.jpg',
    name: '刘星宇',
    desc: `这个人很懒，只想把你留下`,
    org: '计算机学院',
    links: [
      { icon: 'github', link: 'https://github.com/bingling-sama' }
    ]
  },
   {
    avatar: 'https://muxi-avatar.muxixyz.com//frontend/yinjian.jpg',
    name: '尹健',
    desc: '天地本宽,而鄙者自隘',
    org: '计算机学院',
    links: [
      { icon: 'github', link: 'https://github.com/aabbcc-nwjian' }
    ]
  },
]

  
  const members2023 = [
    {
      avatar: 'https://www.github.com/eleliauk.png',
      name: 'eleliauk',
      desc: `繁花似锦寻安宁 \n  淡水流云渡此生`,
      org: '计算机学院',
      links: [
        { icon: 'github', link: 'https://github.com/eleliauk' },
      ]
    },
    {
      avatar: 'https://www.github.com/ynnnny.png',
      name: 'ynnnny',
      desc: `梦想成真！！`,
      org: '计算机学院',
      links: [
        { icon: 'github', link: 'https://github.com/ynnnny' },
      ]
    },
    
    {
      avatar: 'https://obs.jielong.co/Jl_FeedBackRecord/2024/08/10/82b99c8-d490388b-7662-4440-af2f-37bef005bcc.jpg?x-image-process=image/format,webp/quality,q_60',
      name: 'yaoyaoyiyi216',
      desc: `想法超多，执行为0.1的微死人`,
      org: '信息管理学院',
      links: [
        { icon: 'github', link: 'https://github.com/yaoyaoyiyi216' },
      ]
    },
     {
    avatar: 'https://muxi-avatar.muxixyz.com//frontend/tuyuheng.jpg',
    name: '涂宇恒',
    desc: `苍穹不负少年意，星光不枉赶路人`,
    org: '计算机学院',
    links: [
      { icon: 'github', link: 'https://github.com/fupingyezi' }
    ]
  },
  ]

  const members2022 = [
    {
      avatar: 'https://www.github.com/BlackishGreen33.png',
      name: 'BlackishGreen33',
      desc: `JS === "女子小学生"`,
      org: '计算机学院',
      links: [
        { icon: 'github', link: 'https://github.com/BlackishGreen33' },
      ]
    },
    {
      avatar: 'https://www.github.com/konodioda727.png',
      name: 'konodioda727',
      desc: `华师GGBond`,
      org: '计算机学院',
      links: [
        { icon: 'github', link: 'https://github.com/konodioda727' },
      ]
    },
    {
      avatar: 'https://www.github.com/poememory.png',
      name: 'poememory',
      desc: `早睡早起`,
      org: '人工智能教育学部',
      links: [
        { icon: 'github', link: 'https://github.com/poememory' },
      ]
    },
    {
      avatar: 'https://www.github.com/MaggieMii.png',
      name: 'MaggieMii',
      desc: `不驰于空想，不骛于虚声`,
      org: '计算机学院',
      links: [
        { icon: 'github', link: 'https://github.com/MaggieMii' },
      ]
    },
  ]

  const members2021 = [
    {
      avatar: 'https://www.github.com/Old-Second.png',
      name: 'OldSecond',
      desc: `Do not go gentle into that good night`,
      org: '计算机学院',
      links: [
        { icon: 'github', link: 'https://github.com/Old-Second' },
      ]
    },
    {
      avatar: 'https://www.github.com/MUMU46.png',
      name: 'MUMU',
      desc: `开心就好啊`,
      org: '计算机学院',
      links: [
        { icon: 'github', link: 'https://github.com/MUMU46' },
      ]
    },
    {
      avatar: 'https://www.github.com/lyxaaaa.png',
      name: 'lyxaaaa',
      desc: `慢慢走啊欣赏`,
      org: '计算机学院',
      links: [
        { icon: 'github', link: 'https://github.com/lyxaaaa' },
      ]
    },
    {
      avatar: 'https://www.github.com/KXNZH.png',
      name: 'KXNZH',
      desc: `乐观的搞笑女`,
      links: [
        { icon: 'github', link: 'https://github.com/KXNZH' },
      ]
    },
    {
      avatar: 'https://www.github.com/hiiiroko.png',
      name: 'H1rk',
      desc: `Life is short, you need Python.`,
      org: '计算机学院',
      links: [
        { icon: 'github', link: 'https://github.com/hiiiroko' },
      ]
    },
    {
      avatar: 'https://www.github.com/likeztmy.png',
      name: 'likeztmy',
      desc: `...CODING...`,
      org: '计算机学院',
      links: [
        { icon: 'github', link: 'https://github.com/likeztmy' },
      ]
    },
  ]

  const members2020 = [
    {
      avatar: 'https://www.github.com/joker0231.png',
      name: 'joker0231',
      links: [
        { icon: 'github', link: 'https://github.com/joker0231' },
      ]
    },
    {
      avatar: 'https://www.github.com/Lruler.png',
      name: 'Lruler',
      desc: `劳动最光荣`,
      org: '计算机学院',
      links: [
        { icon: 'github', link: 'https://github.com/Lruler' },
      ]
    },
    {
      avatar: 'https://www.github.com/qingxuanying.png',
      name: 'qingxuanying',
      links: [
        { icon: 'github', link: 'https://github.com/qingxuanying' },
      ]
    },
    {
      avatar: 'https://www.github.com/KiteU.png',
      name: 'KiteU',
      links: [
        { icon: 'github', link: 'https://github.com/KiteU' },
      ]
    },
    {
      avatar: 'https://www.github.com/jitu.png',
      name: 'jitu',
      links: [
        { icon: 'github', link: 'https://github.com/jitu' },
      ]
    },
    {
      avatar: 'https://www.github.com/EuniceGithub.png',
      name: 'EuniceGithub',
      links: [
        { icon: 'github', link: 'https://github.com/EuniceGithub' },
      ]
    },
  ]

  const members2019 = [
    {
      avatar: 'https://www.github.com/HCLacids.png',
      name: 'HCLacids',
      links: [
        { icon: 'github', link: 'https://github.com/HCLacids' },
      ]
    },
    {
      avatar: 'https://www.github.com/yolo.png',
      name: 'yolo',
      links: [
        { icon: 'github', link: 'https://github.com/yolo' },
      ]
    },
    {
      avatar: 'https://www.github.com/shi-zhong.png',
      name: 'shi-zhong',
      links: [
        { icon: 'github', link: 'https://github.com/shi-zhong' },
      ]
    },
    {
      avatar: 'https://www.github.com/sjy.png',
      name: 'sjy',
      links: [
        { icon: 'github', link: 'https://github.com/sjy' },
      ]
    },
  ]

  const members2018 = [
    {
      avatar: 'https://www.github.com/lilixuelian.png',
      name: 'lilixuelian',
      links: [
        { icon: 'github', link: 'https://github.com/lilixuelian' },
      ]
    },
    {
      avatar: 'https://www.github.com/LadderLay.png',
      name: 'LadderLay',
      links: [
        { icon: 'github', link: 'https://github.com/LadderLay' },
      ]
    },
    {
      avatar: 'https://www.github.com/ildnyy.png',
      name: 'ildnyy',
      links: [
        { icon: 'github', link: 'https://github.com/ildnyy' },
      ]
    },
    {
      avatar: 'https://www.github.com/jonusis.png',
      name: 'jonusis',
      links: [
        { icon: 'github', link: 'https://github.com/jonusis' },
      ]
    },
    {
      avatar: 'https://www.github.com/Amybiubiu.png',
      name: 'Amybiubiu',
      links: [
        { icon: 'github', link: 'https://github.com/Amybiubiu' },
      ]
    },
    {
      avatar: 'https://www.github.com/Moomyd.png',
      name: 'Moomyd',
      links: [
        { icon: 'github', link: 'https://github.com/Moomyd' },
      ]
    },
  ]

  const members2017 = [
    {
      avatar: 'https://www.github.com/KuTuGu.png',
      name: 'KuTuGu',
      links: [
        { icon: 'github', link: 'https://github.com/KuTuGu' },
      ]
    },
    {
      avatar: 'https://www.github.com/darkglimmer.png',
      name: 'darkglimmer',
      links: [
        { icon: 'github', link: 'https://github.com/darkglimmer' },
      ]
    },
    {
      avatar: 'https://www.github.com/yanyuw.png',
      name: 'yanyuw',
      links: [
        { icon: 'github', link: 'https://github.com/yanyuw' },
      ]
    },
    {
      avatar: 'https://www.github.com/wwyqianqian.png',
      name: 'wwyqianqian',
      links: [
        { icon: 'github', link: 'https://github.com/wwyqianqian' },
      ]
    },
  ]

  const members2016 = [
    {
      avatar: 'https://www.github.com/Cruyun.png',
      name: 'Cruyun',
      links: [
        { icon: 'github', link: 'https://github.com/Cruyun' },
      ]
    },
    {
      avatar: 'https://www.github.com/Zendq1998.png',
      name: 'Zendq1998',
      links: [
        { icon: 'github', link: 'https://github.com/Zendq1998' },
      ]
    },
    {
      avatar: 'https://www.github.com/fengzi2016.png',
      name: 'fengzi2016',
      links: [
        { icon: 'github', link: 'https://github.com/fengzi2016' },
      ]
    },
  ]

  const members2015 = [
    {
      avatar: 'https://www.github.com/Amanda111.png',
      name: 'Cruyun',
      links: [
        { icon: 'github', link: 'https://github.com/Amanda111' },
      ]
    },
    {
      avatar: 'https://www.github.com/Elegenthus.png',
      name: 'Elegenthus',
      links: [
        { icon: 'github', link: 'https://github.com/Elegenthus' },
      ]
    },
  ]

  const members2014 = [
    {
      avatar: 'https://www.github.com/stephenLYZ.png',
      name: 'stephenLYZ',
      links: [
        { icon: 'github', link: 'https://github.com/stephenLYZ' },
      ]
    },
  ]

  const members2013 = [
    {
      avatar: 'https://www.github.com/zxc0328.png',
      name: 'zxc0328',
      links: [
        { icon: 'github', link: 'https://github.com/zxc0328' },
      ]
    },
  ]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>木犀团队 前端组</template>
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
    <template #title>2013 级</template>
    <template #lead>...</template>
    <template #members>
      <VPTeamMembers size="small" :members="members2013"/>
    </template>
  </VPTeamPageSection>
</VPTeamPage>
