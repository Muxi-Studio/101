# 大一下学期

我们已经在大一上学期学习了 Java 和 Android 的基础开发知识，由于 Google 的支持，Android 开发中 Kotlin 已经占据非常重要的地位，所以这个学期要开始系统学习 Kotlin 了，Android 方面会进行 Jetpack 的练习。为了锻炼代码能力，同时希望大家都可以到 LeetCode 上写编程题了，题目的量可以视自己的能力定，你可以一周三四道，有能力的也可以每日一题，在学习的过程中希望大家可以根据自己的能力对相关的知识进行巩固，对于觉得自己语言基础薄弱的，可以回头看看  Java 的基础语法知识。总之，这个学期的方向主要是以下几个方面：

- Kotlin 和 Jetpack的学习
- LeetCode
- 复习 Java

<u>以下部分链接可能需要科学上网才可以打开</u>

## Leetcode

我们推荐按照**标签**在 LeetCode 上刷题，如果你之前没有接触过算法之类的，推荐的顺序是： 数组、双指针->滑动窗口->「数据结构」链表、堆、栈、树（重点理解递归）->图、各种算法等。推荐使用的编程语言：Java 。

官网链接：[LeetCode](https://leetcode-cn.com/problemset/all/)

## Jetpack

Jetpack 是一个由多个库组成的套件，可帮助开发者遵循最佳做法，减少样板代码并编写可在各种  Android 版本和设备中一致运行的代码，让开发者精力集中编写重要的代码。目前为止你们应该了解了至少Activity、Fragment、Naviagtion、Room等常用的库，之后我们会在官方的 Codelab 里实践各个常见库。

官方链接：[Jetpack](https://developer.android.google.cn/jetpack)、[CodeLab](https://codelabs.developers.google.com/?cat=android)

## Kotlin

Kotlin是一个基于 JVM 的新的编程语言，有 Jetbrains 开发，号称可以无缝衔接所有的 Java 库，在新版本的《安卓权威指南》、《第一行代码》都使用 Kotlin 作为基本语言了，Android 开发的未来可想而知。 Kotlin 作为 Google 大力扶持用作Android 开发的语言，Google 官方也有非常全套和友好的教程，这个学期我们会根据官方的教程和相关书籍一起学习Kotlin 这门语言的语法，同时会加入一些 Codelab 作为练习，之后会进一步学习 Kotlin 的特性，比如协程之类的。

官方教程的链接：

- 入门教程：[Kotlin Koans](https://play.kotlinlang.org/koans/overview) (这里主要是对于有 Java 基础的人快速入门 Kotlin 的教程)
- 特性事例的 Lab ：[Kotlin Examples](https://play.kotlinlang.org/byExample/overview) (这里就是有关 Kotlin 特性的一些样例)
- Kotlin 在 Android 上的基本使用：[Training](https://developer.android.com/courses/kotlin-android-fundamentals/toc)(这里是主要入门 Kotlin 的Android 开发，可以配合着《第一行代码》看)

相关书籍:

- 《kotlin核心编程》这本书会介绍 Kotlin 的语法和一些特性
- 《第一行代码》（第三版）这本书是用 Kotlin 让读者去写基础的 Android，可以用来一边学 Kotlin，一边复习Android    

## 详细计划

### week 1 - week 5：

- 提前准备，复习上个学期的 Android 相关知识

### week 6:

- Jetpack-Room：
  - [Room LiveData And ViewModel](https://developer.android.com/codelabs/android-training-livedata-viewmodel?index=..%2F..%2Fandroid-training#0)

### week 7:
- Java 复习：
  - 类和对象：**类和对象**的区别、**静态域静态方法**与普通方法的区别、构造器
  - Java 中各个**访问修饰符**的含义
  - String类
- Jetpack-Room2:
   - [Delete Data From Room](https://developer.android.com/codelabs/android-training-room-delete-data?index=..%2F..%2Fandroid-training#0)

### week 8:

 - Java复习：
    - 继承，什么是**多态**
    - 关于 object 类，**equals** 方法和==运算符，toString 和 hashcode 方法
    - 抽象类和接口，相似性与区别
    
- Kotlin：

    - 《Kotlin 核心编程》第二章，熟悉Kotlin的**变量和函数**的声明与书写

    - Kotlin Koans 的 [Introduce](https://play.kotlinlang.org/koans/Introduction/Hello,%20world!/Task.kt) 部分


### week 9:

- Java复习：
  - **Lambda** 表达式语法，函数式接口
  - 内部类
  - Java 的**异常**处理机制，常见的抛出异常
- kotlin：
  - 《Kotlin 核心编程》第三章，关于 Kotlin 的**面向对象**，**访问控制原则**，**数据类**，**Static** 和 **Object** 等
  - Kotlin Koans 的 [Classes](https://play.kotlinlang.org/koans/Classes/Data%20classes/Task.kt) 部分

### week 10:

- Java 复习：
  - 泛型数组，什么是**泛型**
  - 集合框架，迭代器，各种常见的集合
- Kotlin：
  - 《Kotlin 核心编程》第四章
    - 代数数据类型、模式匹配、**when**
  - 自觉跟进 Kotlin Koans 的内容

### week 11:

- Java 复习：（线程这块比较难理解，要好好看，对我们深入理解 Java 乃至其他计算机知识还是有很大帮助的）
  - 什么是线程
  - **synchronized** 与 **volatile** 关键字
  - 关于 Thread 类
- Java 多线程的深入理解

  - 锁机制，同步
  - 线程安全相关
  - 执行器

这周之后我们的 Java 第一轮复习就复习完了，花了五周的时间来复习 Java ，基本上时间差不多够了，如果对 Java 的一些基础概念还有不太清楚地方，请好好反省一下自己，之后的重心总共有两个，一个就是学习 Kotlin，再就是 MVP 设计模式以及 Rxjava 与 Retrofit 的搭配使用。

### week 12:

- Kotlin 部分：
  - 《Kotlin 核心编程》第五章
    - 可空类型、**泛型**、自动装箱拆箱、？符号
  - Kotlin Koans
  
- 学习 mvp 设计模式（推荐资源）：

  - Android 官方 MVP 以及其他设计模式的[示例仓库](https://github.com/android/architecture-samples)
  - [博客参考](https://zhuanlan.zhihu.com/p/336870585)

- Retrofit + Rxjava2 概念学习

  - [掘金教程](https://juejin.cn/post/6844903456365346823)

  （注意：这是一个系列的教程，不要只看第一节就放下了）

### week 13：

- Kotlin 部分：

  - 《Kotlin 核心编程》第六章
    - **Lambda 简化表达**、集合、**内联函数**
- MVP 与 Rxjava2 实战：
  - 请使用 MVP 设计模式还有 Rxjava2 + Retrofit 完成 工作台 [Task_1](https://pan.baidu.com/s/17NvdyNtIlEINqTC5OAehhw)  密码: 67te 
  - 由于原先的项目 API 已经挂掉了，所以这里有[替代的 API](https://github.com/xxdongs/github-trending)


### week 14:

- Kotlin 部分
  - 《Kotlin 核心编程》第七、八章
    - **多态**、扩展、反射、**注解**
  - 至此 Kotlin 基本语法就学完了
- 检验实战 app 成果以及 MVP 和网络请求的样例

