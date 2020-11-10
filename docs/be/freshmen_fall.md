# 大一上学期

> 本学期主要内容是：学习 Go 语言基础；学习数据库基础和 SQL 语言；学习使用 Gin 和 Gorm 开发 Web 应用。

## Week 1 - 2 Go 语言学习

相比较其它语言来说，Go 是一门十分年轻的语言。虽然年轻，但它高效而简洁，并且原生支持了并发编程，是云计算时代的首选语言。同时因为 Go 继承了 C 的很多语法特点，已经经历了 C 语言的学习，要上手 Go 并不难。

教材：

+   [《The way to go》](https://www.kancloud.cn/kancloud/the-way-to-go/72432)（主要）
+   [《The Go Programming Language》](https://www.kancloud.cn/hartnett/gopl-zh/126045)（辅助）
+   [宋老板的 Go 教程](https://github.com/ShiinaOrez/Tutor-Go)（辅助）

**目标**：

+   了解 Go 语言的历史
    +   阅读《The Go Programming Language》的**前言**；
    +   《The way to go》**第一章**；
    +   谷歌搜索了解一下 Go 语言的**主要作者**；
+   安装和运行 Golang
    +   Golang 安装可以参照《The way to go》的第 2.3 部分；源码到[这里](https://studygolang.com/dl)下载；
    +   在本地运行 **Hello World**；
+   学习 Golang 的基本语法
    +   《The way to go》**4 - 10.6 章**；
    +   《The Go Programming Language》的 **2 - 6 章**。

### 主要知识点

基础语法

+   基本数据类型
+   变量声明（特别注意 Short Variable Declarations）
+   指针类型（《The Go Programming Language》2.3.2）
+   函数声明和调用（详细的在《The Go Programming Language》第五章
+   包（Package）

数据结构

+   数组与切片
+   字符串
+   Map
+   切片、数组、字符串的内部实现和联系

类型系统

+   结构体
+   结构体方法（Value receiver VS Pointer receiver）
+   ~~接口（interface）与实现~~
+   类型组合

### 扩展阅读

+   [静态语言和动态语言的区别](https://juejin.im/entry/5c7373426fb9a049bd42eff4)
+   [值传递 VS 引用传递](https://goinbigdata.com/golang-pass-by-pointer-vs-pass-by-value/)

+   [Golang 需要避免踩的 50 个坑](https://juejin.im/post/6844903816018542600)
+   [Go 标准库](https://golang.org/pkg/)，英文阅读困难的也可选择[中文版](https://studygolang.com/static/pkgdoc/main.html)

## Week 3

目标：

+   了解 HTTP、Json、Token 和 Cookie
+   了解 Web 的相关知识
+   学习 [net/http](https://golang.org/pkg/net/http) 包
+   写一个用户系统

推荐阅读：[《图解 HTTP》](https://item.jd.com/11449491.html)

## Week 4

目标：学习用 Golang 写简单的爬虫，学会模拟登陆。

>   [爬虫简明教程](./crawler/go_crawler.md)
>
>   [模拟登陆简明教程](./crawler/simulate_login.md)

### task 1

爬取一个自己想爬的页面，具体难度需提前评估

### task 2

模拟登陆豆瓣网

## Week 5

数据库在后端中是一个十分重要的概念，它是后端开发与运维中必不可少的一项工具。

 [Gorm](https://gorm.io/) 是 Go 语言中一个实现数据库访问的 ORM（对象关系映射）库。使用这个库，我们方便地对数据库中的数据进行 CRUD（增删改查）。

目标：

+   学习和使用 Gorm
+   了解数据库的基本概念，以及各种数据库之间的区别，如关系型与非关系型。

## Week 6 - 8

Gin 是 Golang 的一个 HTTP web框架，用它可以进行基本的 web 开发。

目标：

-   学习和使用 [Gin](https://github.com/gin-gonic/gin)

-   学习RESTful API
-   [ginny](https://github.com/ShiinaOrez/ginny)项目实战
-   web开发基本流程

>   https://shiinaorez.github.io/2019/04/09/API/

### task

亲手写一个ginny，并进行适当修改

## Week 9

目标：学习数据库设计，ER图，UML图

## 冬令营

Mini Project
