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


### Task 4：A Robot 项目

// TODO

## 模块四：Web 开发基础

### Task 1：JavaScript 与浏览器

JavaScript 当年是作为 NetScape 浏览器的一个特性出现的。后面 JavaScript 成为了在浏览器中编程的唯一标准。随着互联网的发展，JS 也从浏览器里的一个小特性变为了一门使用非常广泛的主流语言。

我们如何在浏览器中使用 JS？JS/HTML/CSS 三者是如何构成一个页面的？这就是本节要讨论的话题。

阅读教材第 **13** 章，以及下面的拓展阅读材料。

知识要点：

+ 互联网（Internet）的基础概念：IP 地址，HTTP 协议，URL。
+ HTML 基础概念：标签语法，doctype，特殊字符转义，兼容语法错误（error-tolerant）。
+ 如何在 HTML 中引入 JS：`<script />` 标签。
+ 兼容性与[浏览器战争](https://zh.wikipedia.org/zh-hk/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%A4%A7%E6%88%98)（这个链接需要翻墙）。


拓展阅读：

+ [Javascript 诞生记](http://www.ruanyifeng.com/blog/2011/06/birth_of_javascript.html)
+ 浏览器厂商对 HTML/CSS/JS 等技术的实现如果不统一，会对开发者造成很大的困扰。因此需要一个中立的组织来制定 [Web 标准](https://juejin.im/post/5c700b1de51d457fd033f496)
+ 浏览器兼容性：IE 对 Web 标准的实现存在很多问题，因此在开发兼容 IE 的网页时，经常需要查阅相关的资料并做特定的处理。后来 HTML5 和 CSS3 普及之后，微软推出了符合 Web 标准的 Edge 浏览器，目前我们一般不需要兼容 IE 了（除了针对银行或者政府的业务）。目前主流的四大浏览器：Chrome，Safari，Firefox，Edge 被称为是常青浏览器（Evergreen Browser），这些浏览器遵守 Web 标准，并且会自动更新，兼容性的问题比较少。


### Task 2：模块


理想的程序应该是由多个自治的部分组成的。每个部分各司其职。本节引入了模块的概念。模块是每个主流编程语言（C++/Java/C#等等）都有的一个特性，它让你可以将代码写到一个模块中，控制代码对外暴露（可以从另一个模块访问）的函数和属性。我们通过将代码写成一个一个模块，就可以组成一个结构清晰，易于维护的大型前端应用。

阅读教材第 **10** 章并完成书上习题，上传到 Github

知识要点：

+ **模块**（Modules）的概念。模块就是一段代码，它声明了外部的依赖（dependencies），同时也声明了对外暴露的接口（Interface）。
+ **包**（Package）的概念。Package 就是可以被分发的模块，它有一个描述自身依赖的文件。为了让开发者可以共享代码，JS 有一个统一的包格式和包管理工具：[NPM](http://npmjs.org/)。
+ JS 一开始没有模块特性，我们有很多方法在 JS 中实现模块的效果：**立即执行函数表达式（IIFE)，eval 方式，CommonJS**。这些方式有各自的问题。CommonJS 和 NPM 一起出现，是比较常用的模块实现。
+ ECMAScript modules 是 JS 标准化的模块实现（语言内置）。**了解 ES 模块的基本语法以及静态特性**。
+ 浏览器对新的 JS 特性的支持是一个缓慢的过程。同时我们也会使用 [TypeScript](http://www.typescriptlang.org/) （编译到 JS 的静态类型语言）来为构建大型前端应用提供支持。为了提早使用这些特性，在编写完代码后，我们会对源代码进行**编译（compile）**，产生浏览器可以运行的 JS 代码。
+ 一个项目的模块的数量往往很大，但浏览器下载 JS 文件受到网络请求并发数的限制。因此我们在部署 JS 代码时，往往会进行**打包（bundling）**，将多个 JS 模块合并为一个文件。
+ **Building and bundling** 指的就是上述两个步骤，我们经常使用的工具是 [Webpack]() 和 [Babel]() 等等。
+ 目前我们使用 ES Module 编写的代码往往会被转化为 CommonJS，然后在浏览器运行。虽然主流浏览器对 ES Module 都有了支持，但为了兼容性考虑，在未来一段时间内，我们还是需要进行转译。
+ 模块设计是主观的，往往涉及很多利弊权衡（trade-offs），需要开发者进行深入的思考。
+ 模块设计一个重要方面就是要**容易使用（ease of use）**，因为不管是自己用还是给其他人用，如果过一段时间之后去看代码，都需要能尽快的想起模块的用法。模块对外暴露的 API 很重要。**好的 API 往往是模仿了现存的惯例**。如果你想不到好的 API 设计或者数据结构，最好的办法就是看看已有的开源模块是怎么设计的，并且仿造这个惯例。


拓展阅读：

1. [ES6 标准入门 - Module 的语法](https://es6.ruanyifeng.com/#docs/module) 入门教程
1. [ES6 标准入门 - Module 的加载实现](https://es6.ruanyifeng.com/#docs/module-loader) 入门教程
1. [JS 模块化七日谈](https://github.com/Huxpro/js-module-7day) 考古向
2. [Understanding ECMAScript 6 - Modules](https://leanpub.com/understandinges6/read/#leanpub-auto-encapsulating-code-with-modules) 深度的参考手册


小练习：

使用 Webpack 打包 Chapter 7 的 Robot 项目，并用 Babel 把代码转译为 ES5。最后可以在本地用 HTML 看到项目。

> TODO: 项目文档，项目代码准备。


### Task 3：DOM API 与事件处理

HTML 和 CSS 控制页面的结构和样式。在富交互的前端应用开发中，我们需要使用 JS 响应用户的点击事件，并对页面的结构进行动态的修改。

浏览器给 JS 提供了 DOM API，用于动态控制页面的结构和样式，以及用户交互事件的监听。对于现代前端应用（比如购物网站，社交网站，电子邮箱，在线文档）等等来说，这些 API 是必须掌握的。

阅读教材第 **14** 章和 **15** 章并完成书上习题，上传到 Github

知识要点：

**DOM**

+ 浏览器内部存储 HTML 文档的数据结构叫 **Document Object Model**，简称是 DOM。
+ DOM 是一个树结构。可以看这里了解一下[树（Tree）](https://www.cnblogs.com/jaxu/p/11309385.html)这种数据结构。
+ DOM 其实是一种标准，是一种**抽象的数据结构**。DOM 也可以用来解析 XML。这也是 DOM 中存在 NodeType 或者 Array like Object 的原因。
+ 遍历节点的方式：了解 childNodes，firstChild，lastChild，previousSibling，nextSibling，children 等属性。
+ 查找节点：了解 getElementsByTagName，getElementById，getElementsByClassName 等 API。
+ 插入/删除/替换节点：了解 remove，appendChild，insertBefore，replaceChild 等 API。注意 insertBefore 的参数。 
+ 创建节点：了解 createTextNode，createElement 等 API。
+ 属性（Attributes）：DOM 节点有属性，比如 a 标签的 href 等等。我们也可以在节点上加自定义的属性。这些自定义属性要用 getAttribute 和 setAttribute 两个方法去访问。class 这个属性是 JS 里的关键字，所以比较特殊，要用 node.className 访问，或者用 getAttribute['class'] 访问。
+ 布局（Layout）：块级元素（Block Elements） vs 行内元素（Inline Elements）的概念和主要区别。获取元素的宽高可以用 offsetHeght/offsetWidth 或者 clientHeight/clientWidth。两者的区别是前者包括边框，后者不包括。要获取元素的坐标，可以用 getBoundingClientRect 方法，返回的坐标是相对于屏幕左上角的。如果要获取相对整个文档的坐标，就要加上滚动条的位置：pageXOffset 或者 pageYOffset。当我们调用以上属性或者方法去获取元素的布局信息时，会触发浏览器的布局流程，涉及一些计算。因此我们要尽量少的去调用以上的 API。
+ 通过 style 属性我们可以动态的设置元素的样式。带中划线的属性，在 JS 中要使用驼峰命名来获取，比如：font-family -> fontFamily。
+ 查找元素时，我们通常用 **querySelector 和 querySelectorAll** 两个 API。这两个 API 让我们可以用 CSS 选择器去查找元素，非常方便，因此是最常用的。

**CSS**

+ CSS（Cascading Style Sheets）中的 **Cascade 代表层叠**。多个 CSS 选择器可以作用于同一个元素。最终元素的样式是多个样式表叠加的结果。因此 CSS 里有一个重要概念：选择器**优先级（specificity）**，也叫选择器权重。CSS 选择器优先级有一套专门的[计算规则](https://juejin.im/post/5be3d07be51d457d4932b043)。
+ 了解 CSS 的 position 属性，**相对定位和绝对定位**的概念和区别。
+ 了解 **requestAnimationFrame** API 的用法和使用场景。

**Event**

+ 在使用页面的时候，我们需要响应用户的输入，比如鼠标点击，或者键盘输入。每一次输入我们可以定义为一次事件。事件可以被放到一个队列里，我们可以定时去查询是否有事件发生。
+ 比定时查询（polling）更好的办法是：操作系统会处理用户的输入，然后通过一种方式通知我们事件发生。
+ 浏览器允许我们注册**事件处理函数（handlers）**。API 是 **window.addEventListener**。这个 API 接受事件名和一个回调函数（Callback），当指定的事件发生时，这个回调函数就会运行。
+ 我们也可以直接在 HTML 中用 onclick 这样的 on + 事件名 组成的属性来注册事件处理函数。但这样的坏处是只能注册一个函数，并且将逻辑和 HTML 结构耦合，因此我们一般还是用 addEventListener。
+ **removeEventListener** 用于移除事件注册函数。需要注意的是传入的函数必须和注册时的函数是同一个（同一个引用）。
+ 事件对象是事件处理函数被调用时传入的参数。可以从事件对象的属性中获得事件的相关信息，比如键盘按下了哪一个键等等。
+ **事件冒泡（propagation）**，DOM 树结构中，子节点上触发的事件，也会在所有的父节点上触发（**自底向上**，父，祖父，**依次触发**）。所有我们把这个过程叫做冒泡。事件对象中的 **target** 属性指向真正触发事件的节点。利用时间冒泡这个特性，在需要批量监听事件时，我们可以把事件注册在父节点上，这样就可以一次监听所有子节点的事件。这种做法被叫做**事件代理**。
+ 事件有默认行为，比如 a 标签在被点击时会跳转到对应的链接，滚动事件会使页面发生滚动。我们可以调用事件对象的 **preventDefault** 方法来阻止默认行为。
+ 了解主要事件：**键盘（Key），点击（Pointer），滚动（Scroll），聚焦（Focus），加载（Load）** 的事件对象的 API。
+ JS 是单线程执行的（某一时刻只能执行某一段代码）。因此如果我们执行了大量的计算，就会影响事件的及时响应，事件回调只有在没有 JS 代码运行的时刻才会被调用。对于长时间运行的计算，我们可以用 **webworker** 来解决。webworker 和主线程之间的内存空间的隔离的，因此传参需要进行 JSON 序列化，传给 worker 的是数据的 Copy。
+ **clearTimeout** 可以用于清除定时器（传入 setTimeout 的返回值）。**clearAnimationFrame** 用于清除 requestAnimationFrame。**setInterval** 用于每隔 X 毫秒执行一个函数。对应的清除函数是 **clearInterval**。
+ **节流（debouncing）** 是一种用来控制事件触发频率的技术。比如 scroll 或者 input 事件，如果频繁触发，并且在事件回调中做了影响性能的操作，就会造成卡顿。此时我们可以用节流和限制事件触发的频率。了解如何使用 setTimeout 实现节流。


### Task 4：异步编程

阅读教材第 **11** 章并完成书上习题，上传到 Github



知识要点：

+ Promise
+ async await


### Task 5：HTTP 基础，JS 网络请求与表单元素

前端开发主要实现基于 浏览器/服务器（B/S） 架构的 Web 应用。前端主要实现浏览器端的界面和逻辑。数据从服务端中获取。浏览器和服务端的通信主要通过 HTTP 协议。本节我们主要了解 HTTP 协议，在 JS 中如何发 HTTP 请求，以及常用的表单元素（用于搜集用户输入的信息）。

阅读教材第 **18** 章并完成书上习题，上传到 Github

知识要点：

+ 了解 HTTP 协议的格式。
+ 了解 [fetch API](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch) 的用法。
+ 处于安全考虑，浏览器禁止跨域的请求。了解跨域的[定义](https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy)和发送跨域请求的[几种方法](https://juejin.im/post/5c23993de51d457b8c1f4ee1)，书上讲的主要是 [CORS](http://www.ruanyifeng.com/blog/2016/04/cors.html) 方法。
+ B/S 架构的 Web 应用通常使用 HTTP 协议 + JSON 格式的请求体进行数据交互。我们利用不同的 HTTP method 表示不同的语义（GET 获取/POST 创建/PUT 更新/DELETE 删除）。HTTP 的 URL 则代表了要操作的资源，比如 `/user/1` 代表 id 为 1 的用户。
+ HTTPS
+ 了解表单（form）系列元素：form，input，textarea，select。input 元素有很多的 type，可以用于不同的用途，可以重点了解。
+ form 的 action 代表 form 被提交后发送的 HTTP 请求的 URL。但在现代前端应用中，表单元素不需要被包裹在 form 元素中，我们可以通过 JS 去搜集表单数据，使用 fetch 发送 HTTP 请求。
+ 了解 localStorage API

拓展阅读：

+ Web 应用：[B/S 架构](https://blog.csdn.net/qq_40587575/article/details/79673478)。
+ 现代 Web 应用的数据传输格式往往使用 JSON，对 JSON 不了解的话可以[回顾第四章讲到的 JSON](#task-3：对象，数组以及字符串)
+ [RESTful API 设计](https://www.ruanyifeng.com/blog/2011/09/restful.html)

// TODO 设计一个基于 Postman 发 HTTP 请求的 Lab

## 模块五：基于 Web 技术的多端 GUI 应用开发原理

### GUI 应用简介

// TODO

### 组件化思想

// TODO

### React 基础

// TODO

### JavaSript 与移动端应用

// TODO

### JavaSript 与小程序


// TODO
