# 预备知识

> 编写中，这里整合各个组之前新人计划里面的各种准备知识，比如 Linux 安装，Markdown 学习，搭建博客，Google 搜索，翻墙等等问题。如果有一些和方向有关的准备工作，还是放到各组自己的文档里。



### 计算机基础知识
* 安装Ubuntu系统
* 注册Github账号并搭建仓库
* 学习并使用markdown语法
* 搭建Github博客
* 翻墙


---
### 安装Ubuntu系统
* 安装Ubuntu系统[安装教程](https://ywnz.com/linuxaz/2588.html)
* 安装完成后尝试去配置它，让你的系统更加美观
* 安装配置Zsh终端
* 掌握常用的命令行操作
* 如果你有余力的话推荐你去看《Unix&Linux大学教程》，熟悉更多的linux系统操作

其他参考内容：
[why Linux](https://www.jianshu.com/p/5020fbd76d0c)
[Linux 特点](https://www.sohu.com/a/248995053_700886)

---
### 注册Github账号并搭建仓库
GitHub，全世界开发者的安全空间，在这里，你可以**分享你的代码**为大家所用，也可以和全世界的开发者一起**共建完善你的代码**。在这里，你可以**学习借鉴前辈的经验**快速提升技能，也可以更好地**展示自己的学习成果**为未来发展撰写自己的名片。

* 注册自己的账号
* 完善github上的个人信息(包括地址、姓名、头像等)
* 在本地成功搭建仓库 
* 学习Git的常用命令，完成第一次contribution
* 如果你有余力的话可以再了解了解Git操作背后的机制(git commit 和 git push的背后发生了什么)
* 如果你有余力的话希望你能学习更多的Git命令，尝试掌握更多的Git用法：例如版本控制、多人合作等等

[创建账号搭建博客的参考教程](https://blog.csdn.net/p10010/article/details/51336332)

---
### 学习并使用Markdown语法
Markdown以其易写、易读、纯键盘操作解放鼠标及学习简单15分钟即可上手等多种优势在众多书写格式中脱颖而出，它是全球最大的技术分享网站GitHub和技术问答网站StackOverFlow的御用书写格式，是程序员所应掌握的必备技能。

* 寻找并选择一款喜欢的Markdown编辑器
* 通过自己查阅资料掌握最基本的Markdown语法操作(包括标题、列表、文字样式、图片、链接、引用、代码块、表格等基本操作)
* 用学会的Markdown语法在自己的Github上更新一篇进度吧！
---
### 搭建Github博客
在成功创建Github账号之后，我们希望你能够在Github上搭建自己的博客，并**定期更新自己的学习总结和想法等**(这是你的博客，你可以在上面写任何的内容)，总结是学习过程中必要的步骤。

* 搭建博客①[Windows环境](https://www.cnblogs.com/liuxianan/p/build-blog-website-by-hexo-github.html)②[Ubuntu环境](https://blog.csdn.net/hzq_0111/article/details/78956821)
* 为自己的博客选择合适的主题和样式(你可以尽可能的让它美观一些，别忘了一定要选择有语法高亮的主题)
* 更新你的第一篇博文吧，在上面总结一下你搭博客时遇到的问题及解决方式，并总结使用博客常用的命令行。
---
### 科学上网
少数国家实行了高强度的网络审查，同时大多数国家都有一定的网络规范与监视系统存在。以中国大陆为例，中国通过其在网络建设的“防火长城”限制或阻止境内居民访问其境外的色情、当局无法管控的的新闻网站（例如BBC中文网）和社交网站（例如Facebook、Twitter）等。若中国大陆居民需要访问这些被屏蔽的网站，则需要翻墙。

突破网络审查或突破网络封锁，俗称翻墙、科学上网、魔法上网等。由于“翻墙”在中国大陆境内成为敏感词汇，现在更多的使用科学上网来代替“翻墙”，通常特指在中国大陆绕过互联网审查封锁技术，实现对网络内容的访问。

访问境外网站时的网络连接示意图。每当用户需要获取信息，都经过了 GFW，GFW将它不喜欢的内容统统过滤掉，于是当客户触发 GFW 的过滤规则的时候，就会收到 Connection Reset 这样的响应内容，而无法接收到正常的内容。

![](./whats-shadowsocks-02.png)

突破网络审查的软件通常被称作翻墙软件，俗称梯子。翻墙软件并不只是VPN、代理软件。它们着眼于获得被屏蔽的网站内容，并在访问受限网站时向ISP隐藏自己的真实地址信息。

[ShadowSocks](https://github.com/shadowsocks/shadowsocks)是一个开源的翻墙软件, 木犀在美国的另外一台服务器上配置了ShadowSocks。ShadowSocks的优点在于可以扫描长城防火墙的端口，访问国外网站时走美国，访问国内网站时走国内，体验很好。

ShadowSocks原理示意图

![](./whats-shadowsocks-04.png)

**ShadowSocks配置:**
可以安装ShadowSocks客户端

 + [Mac客户端](https://tower.im/projects/a1482d8ab658462eb68a7557cb1ba897/uploads/3964b13b64ea428da2867420410f2f18?version=1)
 + [Windows客户端](https://tower.im/projects/a1482d8ab658462eb68a7557cb1ba897/uploads/7dd679982fb349fba71e916c1c41f7dc?version=1)
 + [ios客户端](https://github.com/shadowsocks/shadowsocks-iOS)
 + [安卓客户端](https://github.com/shadowsocks/shadowsocks-android)
 + [Linux客户端 SSR](https://github.com/qingshuisiyuan/electron-ssr-backup)

ShadowSocksR 则是原版ShadowSocks（SS）的一个衍生版本，相比原版而言，主要增加了混淆参数功能。

+ Shadowsocks原版(另一人接手)：[shadowsocks-windows](https://github.com/shadowsocks/shadowsocks-windows/releases)
+ Shadowsocks原版 安卓版：[shadowsocks-android](https://github.com/shadowsocks/shadowsocks-android/releases)
+ ShadowsocksR跨平台客户端：[electron-ssr](https://github.com/qingshuisiyuan/electron-ssr-backup)

**其他:**
还可以使用其他的vpn运营商提供的服务

+ [熊猫翻滚](https://pandafan.org/)
+ [鱼摆摆](https://ybb1024.com)

