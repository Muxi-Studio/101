# 大一上学期

> 本学期主要内容是：学习 Go 语言基础。了解数据库基础和SQL 语言。学习使用 Gin 和 gorm 开发 Web 应用。

## Week 1 - 2 Go 语言入门

相比较其它语言来说，Go 是一门十分年轻的语言。虽然年轻，但它高效而简洁，并且原生支持了并发编程，是云计算时代的首选语言。而且因为 Go 继承了 C 的很多语法特点，经过 C 语言的学习，要上手 Go 并不难。

教材：[《Go in Action》](http://product.dangdang.com/26914357.html)（主要） + [《The Go Programming Language》](http://product.dangdang.com/25072202.html)（参考） （两书PDF 版可在团队内获取）

其他参考资料：

+ [The way to go](https://www.kancloud.cn/kancloud/the-way-to-go/72432)
+ [宋老板的Go教程](https://github.com/ShiinaOrez/Tutor-Go)

**目标**：

+ 了解 Go 语言的历史，阅读《The Go Programming Language》**Preface（序言）**。以及《Go in action》第一章。谷歌搜索了解一下 Go 语言的**主要作者**。在本地运行一个 Go 的 **Hello World**。
+ 学习 Go 的基本语法，阅读 《The Go Programming Language》 **第二，三章**。
+ 学习 Go 的数据结构和类型系统，阅读 《Go in action》**第 四、五 章**。（《The Go Programming Language》的 **4-7 章可以作为参考**）
+ 完成下面的 **3 道练习**


主要知识点（看完书可以按这个查漏补缺）：

*基础语法*

+ 基本数据类型
+ 变量声明（特别注意 Short Variable Declarations）
+ 指针类型（《The Go Programming Language》2.3.2）
+ 函数声明和调用（详细的在《The Go Programming Language》第五章
+ 包（Package）

*数据结构*

+ 数组与切片
+ 字符串
+ Map
+ 切片，数组，字符串的内部实现和联系

*类型系统*

+ 结构体
+ 结构体方法（Value receiver VS Pointer receiver）
+ 接口（interface）与实现
+ 类型组合


附：如果不了解 [值传递 VS 引用传递](https://goinbigdata.com/golang-pass-by-pointer-vs-pass-by-value/)。可以看一下。

***

### Task 1

#### 寻找子串

题目描述：

现在给定字符串str1、str2 ，要求在str1中寻找到str2第一次出现的位置。

题目要求：

1.  编写函数进行解决，即文件中不应该只包括主函数，应当声明一个函数。若能查找成功，即str2能在str1中被找到，则返回索引位置，若不能，则返回 -1。

    ```go
    // 函数原型
    func FindSubstring(str1, str2 string) int {
    	// ...
    }
    ```
    
2.  使用切片


### task 2

#### 罗马数字的转换

题目描述：

罗马数字包含一下几个字符：`I, V, X, L, C, D, M`。与阿拉伯数字的对应关系如下：

| 字符 | 数值 |
| :---: | :---: |
| I    | 1    |
| V    | 5    |
| X    | 10   |
| L    | 50   |
| C    | 100  |
| D    | 500  |
| M    | 1000 |

现要求实现罗马数字与阿拉伯数字之间的相互转换。如：`XII`对应12，`XXVII`对应27。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 `IIII`，而是 `IV`。这个特殊的规则只适用于以下六种情况：

+   `I` 可以放在 `V` (5) 和 `X`(10) 的左边，来表示 4 和 9。
+   `X` 可以放在 `L` (50) 和 `C` (100) 的左边，来表示 40 和 90。 
+   `C` 可以放在 `D` (500) 和 `M` (1000) 的左边，来表示 400 和 900。

题目要求：

1.  编写两个函数，分别用于各自的转换

    ```go
    // 罗马数字转阿拉伯数字
    func RomanToInt(romanNum string) int {
    	// ...
    }
    
    // 阿拉伯数字转罗马数字
    func IntToRoman(num int) string {
        // ...
    }
    ```

### task 3

#### 长方体的体积和表面积

题目描述：

输入一个长方体的长宽高，分别计算它的体积和表面积

题目要求：

1.  定义结构体，创建长方体的实例
2.  分别定义一个用于计算长方体的体积和表面积的方法

## Week 3

并发是 go语言 的一项十分重要的特性，go原生支持并发，实现go并发是每一个go语言学习者都必须要掌握的技能。

目标：

+   阅读《Go inaction》第六章，学习并发，锁和通道

+   完成练习

### task

#### 并发实现

对以下`GetUserList()`的代码进行更改，实现并发，注意在写入操作时要避免竟态

```go
type UserInfo struct {
	Id	 	 int64
	Name 	 string
	CourseId int64
}

// 根据用户id获取用户信息，以映射的形式返回
func GetUserList(userId []int64) (map[int64]*UserInfo, error) {
	userList := make(map[int64]*UserInfo, 0)

	for _, id := range userId {
        // 获取姓名
		name, err := GetName(id)
		if err != nil {
			return nil, err
		}

        // 获取课堂号
		courseId, err := GetCourseId(id)
		if err != nil {
			return nil, err
		}

		// 添加用户
		userList[id] = &UserInfo{
			Id:		  id,
			Name: 	  name,
			CourseId: courseId,
		}
	}

	return userList, nil
}

// 获取姓名
func GetName(id int64) (string, error) {
	// ...
}

// 获取课堂号
func GetCourseId(id int64) (int64, error){
	// ...
}
```



## Week 4

目标：学习用 Golang 写简单的爬虫，学会模拟登陆。

>   [爬虫简明教程](https://github.com/Shadowmaple/notes/blob/master/crawler/go_crawler.md)
>
>   [模拟登陆简明教程](https://github.com/Shadowmaple/notes/blob/master/crawler/simulate_login.md)

### task 1

爬取一个自己想爬的页面，具体难度需提前评估

### task 2

模拟登陆豆瓣网

## Week 5

数据库在后端中是一个十分重要的概念，它是后端开发与运维中必不可少的一项工具。

 [gorm](https://gorm.io/) 是go语言中一个实现数据库访问的 ORM（对象关系映射）库。使用这个库，我们方便地对数据库中的数据进行 CRUD（增删改查）。

目标：

+   学习和使用 gorm
+   了解数据库的基本概念，以及各种数据库之间的区别，如关系型与非关系型。

## week 6 - 8

Gin 是 golang 的一个http web框架，用它可以进行基本的web开发。

目标：

-   学习和使用 [gin](https://github.com/gin-gonic/gin)

-   学习RESTful API
-   [ginny](https://github.com/ShiinaOrez/ginny)项目实战
-   web开发基本流程

>   https://shiinaorez.github.io/2019/04/09/API/

### task

亲手写一个ginny，并进行适当修改

## week 9

目标：学习如何进行数据库的设计，ER图，UML图

## 寒假

MiniProject
