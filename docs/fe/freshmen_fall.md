# 大一上学期

> 编写中

## 模块一：HTML + CSS 基础

- 学习 HTML 和 CSS，参考资料：
  - [HTML-MDN](https://developer.mozilla.org/en-US/docs/Web/HTML)
  - [CSS-MDN](https://developer.mozilla.org/en-US/docs/Web/CSS)
  - [学习 CSS 布局](http://zh.learnlayout.com/)
  - [Flex 布局](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

**完成以下 Task(每周完成一项 task）**（保存在[JSBIN](http://js.jirengu.com/)里，完成任务后把链接发到自己的进度文档中）

### Task1

请实现以下表格的**HTML**部分
![表格](./task01.png)
提示：注意`<thead>`,`<tbody>`的使用

---

### Task 2

请实现以下表单的 HTML 部分
![图片名称](./task02.png)

---

### Task3

修改这个[模板](https://codepen.io/anon/pen/VBwqaL)，通过 CSS 实现以下效果
![图片效果](./task3.png)

要求使用浮动布局方法，并需要清除浮动。

---

### Task4

- 实现 [A Guide To Flex](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)中最后的练习
- 实现以下效果（Flex 布局实现垂直居中）：
  ![图片效果](./task4-1.png)
- 修改[模板](https://codepen.io/anon/pen/RBwEvg)实现以下效果（通过 Flex 布局实现水平居中，替换当前 display:inline 实现）：
  ![图片效果](./task4-2.png)

---

### Task5

实现如下效果：
Tips:两个扇形定位在矩形的两角，矩形水平垂直居中，通过绝对定位实现
![图片名称](./task5.png)

---

### Task6

分别通过“两边自适应，中间定宽”和“两边定宽，中间自适应”的方式实现基本效果：
![图片效果](./task6.png)

## 模块二：页面重构

### Task 1

重构[学而](/101/xueer.png)首页，做出一个和它一模一样的页面出来。并使用 Github 的 gh-pages 分支部署静态页面。

_团队内同学可以访问蓝湖上的设计稿，看标注和样式比较方便。具体链接团队内获取_

要求：

- HTML 与 CSS 分离（样式与结构分离）。
- 像素级还原。
- 只需实现静态页面。JS 效果不要求，比如推荐选项卡切换，点击按钮查看更多之类的都不用。
- 注意页面为**定宽居中**布局。
- 注意通过重复使用同一个 Class，或者组合不同的 Class 来复用样式。
- 使用 Git 作为版本控制工具，利用 Github 的 gh-pages 分支托管页面。最后在进度里发链接。

## 模块三：JavaScript 基础

> TODO 补充 JS 的历史和介绍

木犀前端组唯一官方指定权威教材：[Eloquent JavaScript (第三版)](http://eloquentjavascript.net/)

- [中文翻译](https://wizardforcel.gitbooks.io/eloquent-js-3e/content/)

_推荐阅读英文原版，中文翻译作为参考，作者行文飘逸，中文翻译比较别扭，而且以后总是要看英文的，不如早点_

_可以提供 PDF 打印服务，完美装订，价格低廉，方便随时随地看书，有需要团队内联系_

参考资料：

- [JavaScript学习指南 第3版](https://item.jd.com/12123997.html) 推荐购买，作为语言语法和特性的参考书
- [MDN JavaScript 指南](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide)

> TODO EloquentJS 每章的解（导）读

### Task 1：基础语法

阅读教材第 **1-2** 章并**完成书上习题，上传到 Github**
可以在[这里](https://eloquentjavascript.net/code/)测试代码

推荐流程：先看书，W3cshool 和 MDN 的教程先看基础语法部分。然后试着自己写一下（自己练习 JS 可以用 JSBin/CodePen/本地 HTML 文件/浏览器 Console/Nodejs 等多种环境），刷题中遇到困难多 Google

**知识要点：**

_第一章_

- 值（Value）：计算机中所有数据的都是一个值，存储方式是二进制的编码。这部分是很关键的计算机基础知识，可以看[《编码》](https://item.jd.com/11116026.html)这本书了解
- 基本数据类型：数字，字符串，布尔，_null 和 undefined_
- 运算符：算术，一元（unary），比较，逻辑。逻辑运算符比较常用，要了解*短路特性*（Short-circuiting of logical operators）。
- JS 的自动类型转换（Automatic type conversion）。JS 是*弱类型语言*，不同类型之间会有*隐式转换*（Implict type conversion）。

_第二章_

- 表达式（Expression）和语句（Statement）
- 变量（绑定（Bindings）），使用 var，const，let 关键字，了解*三者之间的区别*
- 变量名的规则，保留字不能作为变量名，同时变量名不能以数字开头，也不能包含 \$ 或者 \_ 之外的特殊字符
- 函数（Function）的概念，调用的方式
- 函数的返回值和*副作用*（Side effect）
- 控制流（Control flow）：条件，循环，switch 语句
- 跳出循环的方式，for 循环常用的 ++，+=，-=，-- 等操作符
- 驼峰命名法（Camel Case）
- 注释（Comment）

书上讲到的知识点，有一些只是提到，没有很仔细的讲。因此这里推荐一些专题学习，可以自行搜索资料（**谷歌搜！**），进一步了解，写一些总结学习的博客或者做一些分享：

+ 在 JS 中 0.1 + 0.2 为什么不等于 0.3？ JS 中 number 底层的存储格式是什么？（IEEE 754 浮点数）
+ var，const，let 关键字的区别是什么？（块级作用域，暂时性死区（Temporal Dead Zone））
+ 什么是函数的副作用？
+ 什么是弱类型语言？语言在类型上有哪些分类？JS 的隐式类型转换的规则是什么？
+ 什么是 JS 逻辑操作符的短路特性？这个特性在平时的应用是？

### Task 2：函数

函数是 JS 中的**一等公民**，也是程序运行的主要单位。将逻辑封装为一个一个职责单一的函数，避免重复的编写代码，可以让整个程序的可读性，可维护性都大大提升。

阅读教材第 **3** 章并**完成书上习题，上传到 Github**

知识要点：

+ 函数定义的方式。函数表达式 vs 函数声明。函数声明要注意声明提升
+ 函数的返回值：可以有，可以没有，没有则默认返回 undefined。函数可以制造副作用，也可以返回值
+ 作用域（Scope）：全局（Global）作用域，函数作用域，块级（Block）作用域
+ 作用域可以层层嵌套，形成一个作用域链
+ 作用域可以继承（看到/引用）上层作用域的变量，但不能看到子作用域的
+ 词法作用域（Lexical scoping）
+ 箭头函数（Arrow function）
+ 调用栈（Call stack）
+ 函数的参数（Paramater），参数默认都是可选的。可以指定参数的默认值
+ 递归（Recursion）的概念
+ 闭包（Closure）的概念
+ 添加函数的时机，什么时候应该新增一个函数？
+ 副作用与纯函数（Pure function）的概念


函数很重要，本章的内容比较多，因此推荐花一些时间对一些概念做**针对性学习**（推荐谷歌和知乎搜索）：

+ 编程语言中作用域的概念
+ JS ES6 新增的词法作用域是指什么？之前 JS 的作用域是什么样的（这部分和前一个 Task 的 let,const vs var 关键字有很大联系）
+ 词法作用域 vs 动态作用域
+ 闭包的概念
+ 纯函数是指什么？什么时候应该写纯函数
+ 什么时候应该新增一个函数？（学好这个对于写优雅的代码至关重要）

### Task 3：对象，数组以及字符串

对象和数组其实都是把很多值集合起来变成一个复杂的新的值，所以也可以把这些类型叫集合类型（逻辑上的概念，方便理解，不是语言规范）。对象是通过 key 去取不同的值，而数组是通过下标。主要的区别就是这样。同时对象和数组是引用类型，不同于原始类型，一个对象或者数组被赋值给其他的变量时，其实是传递了一个引用（学过 C 语言指针的话，其实就是传递了内存地址）。原始类型的话，传递的就是值本身了。

阅读教材第 **4** 章并**完成书上习题，上传到 Github**

知识要点：

+ 数组（Array）概念和语法
+ 属性（Properties）和方法（Methods）
+ 对象（Object）概念和语法
+ 数组其实也是一种对象，只是比较特殊，有 length 属性，可以用下标访问（但不是有数字属性和 length 属性的对象就是数组！）
+ 可变（Mutability） vs 不可变（Immutability），对象直接比较是在比较引用（reference）
+ Object.key 和 Object.assign 两个API 
+ 数组的常用属性和方法（push, pop, unshift, shift, indexOf, lastIndexOf, slice, concat）
+ 字符串的常用属性和方法（length, toUpperCase, slice, indexOf, trim, padStart, split, join, repeat）
+ 剩余参数（Rest parameters)
+ 解构（Destructuring）
+ 内置的 Math 对象
+ JSON 数据格式以及，JSON.stringify 和 JSON.parse 两个 API

### Task 4：高阶函数 && 面向对象 && 原型

这个 Task 介绍了高阶函数这个重要的概念，这个概念介绍了如何通过组合不同的函数来表达复杂的逻辑。

阅读教材第 **5-6** 章并**完成书上习题，上传到 Github**

知识点：

*高阶函数*

+ 高阶函数（Higher order function）：接受一个函数作为参数，或者返回一个函数的函数。
+ 函数是一种抽象（Abstraction），高阶函数的存在让我们可以任意组合这些抽象。我们编写一个一个小的逻辑单元，每个单元只负责一个小的环节（单一职责），通过**组合**这些函数，我们就可以表达复杂的逻辑，并且保证了代码的可维护性
+ 高阶函数如果接受一个函数作为参数，一般会在内部调用这个函数，这样从外界来看，调用这个高阶函数就组合了高阶函数自身和传入函数两者的功能，通过多层高阶函数调用，可以进行复杂的组合。
+ 高阶函数如果接受一个函数作为参数，也可能不在内部调用这个函数，而是返回一个新的函数，这个新的函数包装了传入的函数，并添加了附加的逻辑。这也是一种对抽象的组合。
+ 高阶函数如果不接受一个函数作为参数，就一定会返回一个新函数，这个新函数绑定了传入的参数。通过调用这个高阶函数，可以生成新的函数，类似一个函数工厂
+ 数组的高阶函数系列方法：map，reduce，filter
+ 字符编码概念：unicode，code unit，code point，UTF16 这些概念。推荐阅读[What every JavaScript developer should know about Unicode](https://dmitripavlutin.com/what-every-javascript-developer-should-know-about-unicode/)或者[Unicode与JavaScript详解](http://www.ruanyifeng.com/blog/2014/12/unicode.html)
+ JS 与 unicode：遍历字符串获得单个 unicode 字符的方法，获取单个 unicode 字符 code point 的方法 codePointAt()


*面向对象*

+ 面向对象的基本概念：封装，继承，多态
+ 原型的概念
+ JS 中 Class 的使用 

<!-- 自测练习：回答问题并说明原因

1.

```
var a = function(){}
a.b = 1
a.prototype.b = 2
a.prototype.c = 3
a.prototype.d = 4
console.log(a.b)
console.log(new a().b)

var foo = new a()
foo.c = 5
console.log(foo.c)
console.log(foo.d)
```

请问`console.log`的输出？

---

2.

```
var Foo = function(){
  this.a = 1
  return {
    a:2
  }
}

var bar = new Foo()
console.log(bar.a)
```

请问`console.log`的输出？

---

3.

```
var map = Object.create(null);
console.log("toString" in map);

var map = Object.create({a:1});
console.log("toString" in map);
console.log("a" in map);
```

请问`console.log`的输出？

---

4.

```
function foo(obj){
  return Object.prototype.toString.call(obj).slice(8,-1)
}

```

请说明函数`foo`的作用

---

5.

```
var a = {}
a.bar = 2

Object.defineProperty(a, "foo",
                      { value: "hi"});

console.log(delete a.foo)
console.log(delete a.bar)

a.foo = "world"
console.log(a.foo)


for (var key in a){
  console.log(key);
}

console.log("foo" in a);
console.log("bar" in a);
```

请问`console.log`的输出？

---

6.

```
var a = 1;

function test() {

	a = 0;

	console.log(a);

	console.log(this.a);

	var a;

	console.log(a);

}
test();
new test();
```

请问`test()`和`new test()`的输出分别是什么

---

7.

```
function foo(){
    f = function(){
        console.log('1');
    }
    return this;
}
foo.f = function(){
    console.log('2');
}
foo.prototype.f = function(){
    console.log('3');
}
var f = function(){
    console.log('4');
}
function f(){
    console.log('5');
}
//写出下面的结果
foo.f();
f();
foo().f();
new foo.f();
new foo().f();
new new foo().f();
```

写出结果说明原因

---

### Task3：

完成[JS 练习](https://hk.tower.im/projects/8b4990dc9e324866a0357c7a0dda0d5d/docs/f53eb2b6e8e645ed9d3b05f16f3ddd4a/) 上传 github -->

## 模块四：前端工程化基础与 JavaScript 进阶

前端开发中，起初只要在 `<script/>` 标签中嵌入几十上百行代码就能实现一些基本的交互效果，后来随着个人电脑性能提升和智能手机的普及以及编译器技术的发展，JavaScript 的性能得到了很大的提升。基于 Web 技术的复杂应用不断出现，JavaScript 面临着构建大型软件的挑战。Java/C++/C# 等等语言都有着面向对象特性，模块系统，静态类型检查等等特性，JavaScript 在一开始的设计中，没有考虑到这些，在基于 Web 技术构建大型软件越来越普遍的今天，这些特性都会慢慢补上。

一个模块是以一个 JS 文件为单位的，模块和模块之间有变量的隔离，因此 JS 的全局变量污染这样的问题在模块化的 JS 中将不再是问题。模块还方便了代码复用和依赖分析等等。我们接下来就来了解一下 JS 模块化的来龙去脉：

浏览一遍这些材料，了解模块化：

**模块化的原因和历史**

1. [网易前端架构-JS 模块化视频](http://pan.baidu.com/s/1pK6jxIr#path=%252Fjs%25E6%25A8%25A1%25E5%259D%2597%25E5%258C%2596)
2. [JS 模块化七日谈](https://github.com/Huxpro/js-module-7day)

**模块化的综合介绍**

3. [JS 教材第 10 章](http://eloquentjavascript.net/3rd_edition/10_modules.html)
4. [Programming JavaScript Applications-Chapter 4. Modules](https://www.safaribooksonline.com/library/view/programming-javascript-applications/9781491950289/ch04.html)

**ES6 模块**

5. [Understanding ECMAScript 6-Modules](https://leanpub.com/understandinges6/read/#leanpub-auto-modules)

然后我们用 CommonJS 规范来写 js 模块，这里还需要用到[webpack](https://webpack.js.org/guides/getting-started/)作为打包工具。

**task：**
构建一个项目，在项目中编写 3 个 js 文件，其中 module1 导出一段字符串，module2 导出一个如下所示的函数

```
function(str){
    document.write(str.split("").join(','));
}
```

其中实现 module3 依赖 module1 和 module2，将 module1 的字符串作为参数调用 module2 的函数

最后用 webpack 打包出来 bundle.js 文件，在 html 文件中引用。将项目上传 github，记得.gitignore

目录结构:
![modularity](https://cdn.hyperdev.com/us-east-1%3A49aaef6d-d661-4525-9c20-60ba343a85a3%2Fmodule.png)

### js 练习和深入学习

- 继续完成[JS 练习](https://hk.tower.im/teams/85051/documents/2798/) 上传 github
- 继续阅读[《Javascript 编程精解》(第三版)](http://eloquentjavascript.net/)
- 了解[ECMAScript 6 入门](http://es6.ruanyifeng.com/)

## 模块五：基于 Web 技术的多端 GUI 应用开发原理

### GUI 应用简介

### JavaSript 与浏览器：DOM 与 事件

### JavaSript 与移动端应用

### JavaSript 与小程序

## 模块六：网络基础
