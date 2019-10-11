# 大一上学期

> 这个学期主要是 C 语言 和 Linux 基础。

## C 语言学习

教材：[《明解 C 语言》](https://item.jd.com/11821338.html)

![book](./sry.png)

### 第一周 简单入门

阅读《明解 C 语言》第一第二章，完成书上相关习题

1. 熟悉 Linux 操作系统 C 语言开发方式 [C 语言介绍 -> linux 下的 c 语言开发](./clang/C语言介绍.html)
2. 写 Hello World 程序
3. 变量类型，声明，赋值
4. 简单的输入输出 学习 ASCII 编码
5. 运算

> 注意，代码需要在 Github 上新建仓库，然后推到 Github 上。注意**必须使用命令行**（不能使用图形界面工具）。然后仓库名要有**意义**，比如 c_pratice。

> 养成好的习惯，一个类型的练习/项目用**一个仓库**，不要把多个无关的东西放同一个仓库里。提交信息使用英文，说明这次提交的内容。不能随意写。每天如果写了代码都要及时在**当天** commit 和 push！

> Git 和 Github 的教程可以参考[这个](http://www.runoob.com/w3cnote/git-guide.html)，或者自行搜索。有疑问请提出。

### 第二周 控制流

阅读《明解 C 语言》第三、四、五章，完成书上相关习题

1. 表达式、语句和代码块
2. 条件分支 逻辑运算
3. 循环
4. 数组
5. 作用域 可见性

### 第三周 函数

阅读《明解 C 语言》第六章，完成书上相关习题

1. 区别声明和定义
2. 参数列表
3. 递归
4. 全局变量 静态变量
5. 类型转换

### 第四周 数组和结构体

阅读《明解 C 语言》第五、十二章，完成书上相关习题

### 综合练习题

[C 语言 50 题](./clang/c_50.html)

## Unix && Linux 学习

推荐学习材料：

- 《Unix & Linux 大学教程》（`首选` 里面好多小故事以及各种名词的出处，可以当小说来读了。PDF 在团队内获取）
- 《鸟哥的 Linux 私房菜》（PDF 在团队内获取）
- 网络课程（本系列的主要课程参考）：  
  [斯坦福：Practical Unix](https://practicalunix.org)  
  [讲解视频（需翻墙）](https://practicalunix.org/video-schedule)（可联系团队内获取百度网盘）

### Week 1

#### 了解 Unix & Linux 系统，历史，及简单使用

- 操作系统的发展历史，Unix & Linux 介绍及其历史，可以看《Unix & Linux 大学教程》的前五章
- 学习使用 Vim/Emacs 文本编辑器，学会基本操作
- 在终端使用 GCC 编译，GDB 调试 C 语言程序（更深入一点可以尝试学一下 make 工具，会写 makefile）

##### 任务：

1. 阅读《Unix & Linux 大学教程》的前五章
2. 用 Vim 在终端写 C 程序，并使用 GCC 编译，GDB 调试

### Week 2

#### Shell 及 Linux 基本常用命令学习，Linux 文件系统概念以及基本操作学习

- 了解什么是 Shell，了解 bash 等等经典的 Shell。安装使用更方便的 Zsh（oh-my-zsh），阅读《Unix & Linux 大学教程》11~14 章
- 学习 Linux 中常用的简单命令  
  [Unix/Linux Command Reference](http://www.cs.cmu.edu/~213/recitations/fwunixref.pdf)
- 了解 Linux 的文件系统概念，学习在终端中对文件系统进行基本操作（ls,cd,mkdir,touch,mv,cp）等等操作

#### 任务

1. 阅读《Unix & Linux 大学教程》11~14 章
2. 看 Practical Unix 的[video](https://practicalunix.org/video-schedule) 中的 Week 2: Intro and shell
3. 完成[Week2 lab](https://practicalunix.org/content/week-2-intro)
4. 阅读 《Unix & Linux 大学教程》23 章 总结 Linux 文件系统结构，了解根目录下各个目录的作用

### Week 3

#### I/O 重定向，过滤器，正则表达式学习

I/O 重定向和管道是 Unix 命令行工具箱之后隐藏的设计准则的体现，这些都是帮你升级为 Unix/Linux 进阶用户的有力工具

- 看《Unix & Linux 大学教程》的 15 ～ 20 章
- 学习正则表达式

#### 任务

1. 阅读《Unix & Linux 大学教程》的 15 ～ 20 章，看[视频](https://practicalunix.org/video-schedule)中的 Week 3: Input / output redirection
2. 完成 [Week3](https://practicalunix.org/content/week-3-pipelines)，[Week4](https://practicalunix.org/content/week-4-grep) 的 Lab

### Week 4

简单 Shell 脚本的编写， Linux 网络工具的使用  
有兴趣的还可以继续学一下 Shell 编程，写写 Shell 脚本

#### 任务

1. 学习[视频](https://practicalunix.org/video-schedule) 中 Week 7: Network
2. 完成 Shell 脚本编写 [Week5 Lab](https://practicalunix.org/content/week-5-scripting)
3. 网络编程，[Week 6](https://practicalunix.org/content/week-8) 和 [Week 7](https://practicalunix.org/content/week-7-web) lab

### Week 5

#### 简单的 Linux 系统编程（需 C 语言基础）

- 参考书[《Linux 系统编程》](http://product.dangdang.com/23460699.html)

这时你对 Linux 系统已经有了初步了解，且掌握 C 语言，所以可以更进一步，去接触一下 Linux 系统编程，调用系统接口，做一些有意思的事情。通过直接和 Linux 系统对话，来更深入的认识 Linux 系统

- 文件系统操作
- 进程，线程管理
- 内存管理
- 网络编程

## 博客搭建

博客是一个程序员发表自己技术文章的地方，相当于你的个人站点。在里面你可以展示自己的技术发现和总结，也可以闲聊你感兴趣的话题，还可以写一个自我介绍，让进入博客的人了解你。总之，这是一个程序员在线上的主页，是你展示自己，提升影响力的一个重要渠道。我们可以借助 Github 提供的 Git Page 功能轻松搭建自己的博客。

### 学习并使用 Markdown 语法

[Markdown](https://daringfireball.net/projects/markdown/) 以其易写、易读、纯键盘操作解放鼠标及学习简单 15 分钟即可上手等多种优势在众多书写格式中脱颖而出，它是全球最大的技术分享网站 GitHub 和技术问答网站 StackOverFlow 的御用书写格式，是程序员所应掌握的必备技能。

Markdown 也是我们平时写技术文章的源代码格式，可以很方便的对文章进行排版。因此在搭建博客之前，我们需要了解 Markdown 的语法。

- 阅读[教程](https://juejin.im/post/5d90cfbd51882532ce31348f)，并在[在线编辑器](https://www.mdeditor.com/)中体验 Markdown 语法
- 掌握最基本的 Markdown 语法操作(包括标题、列表、文字样式、图片、链接、引用、代码块、表格等基本操作)
- 寻找并选择一款喜欢的 Markdown 编辑器（客户端）

---

### 搭建基于 Git Page 的博客

在成功创建 Github 账号之后，我们希望你能够在 Github 上搭建自己的博客，并**定期更新自己的学习总结和想法等**(这是你的博客，你可以在上面写任何的内容)，总结是学习过程中必要的步骤，博客写的多，利人利己，好处多多。（基于 Github 搭建的博客很容易被 Google 检索到，所以你写了文章之后，就可以帮助到很多你不认识的同行，这也是一个很有成就感的事情）

- 搭建博客 ①[Windows 环境](https://www.cnblogs.com/liuxianan/p/build-blog-website-by-hexo-github.html)②[Ubuntu 环境](https://blog.csdn.net/hzq_0111/article/details/78956821)
- 为自己的博客选择合适的主题和样式(你可以尽可能的让它美观一些，别忘了一定要选择有语法高亮的主题)
- 更新你的第一篇博文吧，在上面总结一下你搭博客时遇到的问题及解决方式，并总结使用博客常用的命令行。
