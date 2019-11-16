# 大一上学期

> 编写中。教材是《Android 编程权威指南》，Java 教材需要另外选一本。培养计划就要结合这个教材。布置练习。之前的培养方案里面的内容也是可以用的。这里先把之前的培养方案 Copy 过来了。

Android 是移动开发的一大巨头，从 Android 1.0 到现在的10.0，功能不断的完善，还有很多各地大牛编写的开源库也让安卓开发变得更高效更炫酷。 总之，欢迎打开新世界的大门~
对于一个 developer，可以多去逛逛那些能够 get 各种技术最新动态的网站。Android 是开源的，新技术出得也比较快，多关注这些网站就像不定期淘金，可以了解国外最新的 Android 技术，还可以提问、看 demo，事半功倍。

## 开发环境

* ``Linux``或者``MacOS`` ： 虽然现在 Windows 开发也还行，但是不是所有的生产力工具都有 Windows 版本的。 Linux  可以使用 Ubuntu 如何给自己的电脑安装 Ubuntu 然后翻墙 可以看[这篇](自己动手装Ubuntu)

  有关 MacBook Pro 的好处： 相对客观的说，虽然 Linux 更加适合后期的学习，但是 MBP 以及上面的操作系统无疑增大了生产力，而且 Ubuntu 对一些电脑的兼容性可能不算太好，造成更快的电池损耗等。推荐的电脑的配置是 8G 以上的内存，256G 以上的硬盘，如果是双系统的同学可以分配 100G 左右给 Ubuntu。

* git 工具和 GitHub：git工作流可以大大提升工作效率 然后 GitHub能让你学习全世界的好代码，参与和发布自己的项目给千千万万的程序员使用 是不是特别酷! 

* Last but not the Least！建一个自己的博客或者选择一个好的笔记软件！也可以在GitHub上创建一个仓库，存放自己的笔记。笔记软件可以使用常用的编辑器。从初学者开始记录所学和自己的想法,以后不仅很好翻越复习(安卓的知识真的很杂很多)，对拿offer也很有帮助。Talk is cheap, show me your code.

## 详细计划

### 准备工作：

下面是在各部分学习之前要准备的东西，请在学习相关内容前准备好。书籍可以使用纸质书或者电子书。

- **Java**
	- 参考教材：《Java 核心技术 卷 I（第11版）》
	- JDK: 1.8
	- IDE: IntelliJ IDEA
- **Android**
	- 参考教材《Android 编程权威指南（第3版）》（从第四版开始就是 Kotlin Base）
	- IDE: Android Studio
	- 模拟器：原生模拟器 或 GenyMotion
	
### week 1

- Java 学习：《核心技术》第 3 章、第 4 章
	- 第 3 章是 Java 的基本知识，和 C 语言的相关内容有一定的重复，所以不需要很仔细的看，重点注意一下 C 语言和 Java 中不同的地方
	- 第 4 章是 Java 入门的关键，一定要认真阅读，重点了解：**面向对象程序设计**、**类与对象**、**自定义类**、**包**等基本概念
	- 训练：[1-10]()
	
### week 2

- Java 学习
	- 第 5 章：重点 **继承**、**超类和子类**、**多态**、**抽象类**、**泛型数组列表**、**Object类**等。
	- 第 6 章的 6.1、6.2、6.3： 重点 **接口*、 **回调**、**内部类**、**匿名内部类**等。
	- 训练：[11-16]()
	
### week 3

- Java 学习
	- 《核心技术》第7章。
		- 重点：**异常**、**日志**、**调试**
	- 做题
		- [Quiz](https://github.com/Muxi-Studio/Android-Wiki/blob/master/Java101/JavaQuiz.md) Java特性，第二题，并构造一个自定义异常，在异常发生时输出自定义的一段日志，以及断点到异常发生时的堆栈都有哪些

- 开始学习Android ***（注意前期准备）***
	- 《权威指南》第一章 1.1~1.4，跟随案例写 GeoQuiz
		- 重点：**简单布局和基本属性**、**Androidstudio的使用**
	- 学习使用 LinearLayout 和 RelativeLayout，并合理使用两种布局完成一个简单的计算器界面

### week 4

- Java 学习
	- 《核心技术》第8章、第9章、第14章可以慢慢看，但是一定要在本学期结束之前看完。
	- 如果觉得 PAT 乙级太简单的同学，可以开始在 [leetcode](https://leetcode-cn.com/problemset/all/) 上系统的刷题了，选择 C 或者 Java 可能是当前不错的选择。
- Android 学习
 	- 《权威指南》第1章的后半部分和第2章的内容，跟随案例写GeoQuiz。
 		- 重点：**监听器**、**Activity**、**MVC设计模式**、**在模拟器和物理设备上运行代码**、**Button的基本属性和使用方法**、**Toast的使用**等
 	- 完成挑战练习 1.11、2.7、2.8
	 	
	
### week 5

- Android 学习
	- 《权威指南》第3章、第4章，跟随案例写 GeoQuiz。
		- 重点：**Activity的生命周期**、**使用日志**、**使用Bundle保存数据**、**多种调试应用的方法**
	- 完成挑战练习 3.7、3.8

	
### week 6

- Android 学习
	- 《权威指南》第5章、第6章，跟随案例写 GeoQuiz。
		- 重点：**显式Intent的基本使用和传递数据的方法**、**在manifest.xml中声明**、**Android SDK**、**compileSdkVersion、minSdkVersion、targetSdkVersion的定义与区别**
	- 完成挑战练习：5.5的前两个漏洞，6.5

### week 7

+ Android学习
  + 《权威指南》第7-9章，跟随案例写CriminalIntent
    + 重点：**fragment的基本使用和相关知识**、**RecyclerView的使用方法**、**使用图形布局工具编辑布局**、**ConstraintLayout的基本使用**、**基本的布局属性**、
  + 完成挑战练习：8.8、9.5

### week 8

+ Android学习
  + 《权威指南》第10-13章，跟随案例写CriminalIntent
    + 重点：**使用argument传递数据**、**ViewPager的使用方法**、**fragment间的数据传递**、**在顶部栏添加menu**
  + 完成挑战练习：11.5、11.6、13.7

### week 9

+ Android学习

+ 《权威指南》第14-16章，跟随案例写CriminalIntent
  + 重点：**数据库的相关知识和SQLite的使用**、**隐式intent的组成和基本使用**、**使用隐式intent拍照**、**保存照片和加载本地照片**
+ 完成挑战练习：10.6、14.8、15.6、16.6

### week 10

+ Android学习
+ 《权威指南》第17-19章，跟随案例写CriminalIntent
  + 重点：
+ 完成挑战练习：

### week 12

+ Android学习

+ 《权威指南》第21-23章，跟随案例写BeatBox

### 冬令营

+ 《权威指南》看完，跟随案例写项目
  + NerdLauncher 
  + PhotoGallery
  + BoxDrawingView
  + Sunset
  + Locatr

