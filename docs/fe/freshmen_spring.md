# 大一下学期

> 前端大一下学期的主要任务就是巩固之前学习的js、React知识，并且继续学习 TypeScript 以及 Scss
> 深入了解前端工程化，包括但不限于 打包工具、测试、性能优化
> 争取成为能独当一面的前端开发工程师


## 前2周：JS 精进

### JavaScript

目标：成为 JavaScript Ninja！

这个目标是说，我们要对 JS 的特性和语法了如指掌，并且可以写出 Idiomatic 的 JS 代码。符合 JS 特性的代码。简单的说，就是利用 JS 的一等函数的特性，围绕函数，结合一些函数式风格的概念（副作用，纯函数，组合优于继承），来编写代码。

- [《Eloquent JavaScript》](https://eloquentjavascript.net/) 如果大一没有系统看完，推荐再好好看一下，做完里面的练习。如果看完了，也推荐把函数，对象，高阶函数，等等章节再仔细阅读一下。可以写一些笔记。
- [《JS 忍者秘籍》](https://detail.tmall.com/item.htm?spm=a230r.1.14.4.4048133bbjlB5d&id=566464604411&ns=1&abbucket=2) 英文版请在团队内部咨询获取。这本书需要精读。读书笔记参考[这里](https://zxc0328.github.io/diary/2018/01/2018-01-08.html)
- [《你不知道的 JS》](http://product.dangdang.com/27883708.html) 这本书其实优先级比较低，上中下推荐按顺序阅读，没有时间的话可以主要看上册。

### Idiomatic JS（地道的 JS）

看完了上面的书，其实你已经对 Idiomatic JS 有了一定的理解了。下面还有一些材料可以辅助你理解：

- [学习 JavaScript 函数式编程 - JSUnconf 2016](https://www.youtube.com/watch?v=e-5obm1G_FY&list=LLHdx8Qwo6uxw0fj3gQ5yeTg&index=51)
- [Composition over Inheritance](https://www.youtube.com/watch?v=wfMtDGfHWpA)

<!-- ### TypeScript





下面是一些使用技巧：

- [《巧用 TypeScript》](https://zhuanlan.zhihu.com/p/39620591)
- [《巧用 Typescript (二)》](https://zhuanlan.zhihu.com/p/64423022) -->

### 练习！

首先 EloquentJS 里面的练习都是不错的。此外，还有一些不错的资源：

- [基于 TypeScript 从零重构 axios](https://coding.imooc.com/class/330.html)（视频网盘链接团队内获取）
- [ScriptOJ](http://scriptoj.mangojuice.top/problems?tag=all) 里面有很多经典的 JS 编程题

> 注：这里可能需要梳理一下常见的 JS 原生手写题目。

常见的：

- 实现 Event Emitter
- 实现防抖/节流
- ES5 实现 Class
- 实现 Bind
- 实现简单的 MVVM
- 实现字符串模板引擎
- 实现 Promise

## 第3-4周：React 精进

目标：成为 React 大师！

知道这个时候大家对于 React 的了解很浅薄，为此可以继续去看看[React学习指南](/fe/react_road_map.html)中的进阶部分。
同时也可以再去看看[hooks](https://react.dev/reference/react/hooks),尤其是最后的自定义hook，搭配例子食用，并思考：
- hook的作用是什么，它和普通函数有何不同？
- 为什么需要hook？
- 为什么useState是用数组解构而不是对象结构（涉及使用方面的问题）
- 如何实现一个useState和useEffect
- useEffect真的会阻止函数重新声明吗
- useEffect的依赖里放函数会发生什么，与放变量有什么不同
- 为什么hook只能在顶部调用，不能被嵌套
- 如何用useReducer和useContext实现一个redux类似的效果

这几个问题思考完，你的 React 水平就已经差不多算及格啦

## 第5-8周：TypeScript入门+精进

目标：驯服 TypeScript

参考资料：
- [《官方手册》](https://www.typescriptlang.org/docs/handbook/basic-types.html)
- [《TypeScript Deep Dive》](https://basarat.gitbooks.io/typescript/docs/getting-started.html)

### 基础任务

- 了解基础概念：了解 TypeScript 是什么，以及它与 JavaScript 的关系。
- 安装 TypeScript： 学习如何在你的开发环境中安装 TypeScript。
- 类型系统： 学习 TypeScript 的核心概念之一，包括基本类型、变量声明和类型注解。
- 函数和类： 学习如何使用 TypeScript 定义函数和类，并使用类型注解增强类型安全性。
  
#### 基础任务1.TypeScript 基本概念

TypeScript 是基于 JS 进行拓展的强类型语言，他包含了 JS 本身，是 JS 的超集。TS 最终编译到 JS
执行。目前 TS 在前端生态中已经占据了越来越重要的位置。强类型的静态编译型语言是构建大型应用，保证软件质量的必要条件，因此学习 TS 在当下已经是一个必修课了。

#### 基础任务2.安装运行TypeScript

推荐使用包管理工具（npm/yarn/pnpm/bun）下载：
```shell
bun add -g typescript
```
![运行结果](https://s2.loli.net/2024/04/07/rqVYepNknFwixIU.png)
可以看到，顺带一起下载下来的还有`tsc`和`tserver`，作用如下：
- tsc: 编译器，用来将ts文件编译为js文件
- tserver: ts服务器，用于和ide集成，实现实时代码审查和提示
`tserver`的作用基本是不言自明的，开发时也不会关注到它，因此在这跳过，我们直接来看看`tsc`干了什么
首先准备一段ts代码，代码含义不需理解，下文会做解释：
```typescript
let muxi_frontent: string = "great team"

console.log(muxi_frontend)
```
如果直接运行这段代码，**可能**会得到以下错误：
![直接运行报错](https://s2.loli.net/2024/04/07/GHOWEZAlwbBeP63.png)
这是因为**浏览器环境和node环境默认不支持typescript文件的解析**，但是为什么上边说可能会报错呢？
因为如果用的是`bun`,它默认支持`typscript`文件解析，因此会得到正常的输出

那么针对默认不支持`ts`的环境，就需要手动调用`tsc`编译，例如，将以上代码放入`typescript_template.ts`文件中，执行以下命令：
```shell
tsc typescript_template.ts
```
此时将会在同级目录生成`typescript_template.js`文件（也可以使用 --outDir 指定输出位置，不过`tsc`使用不在本教程范围内，可自行搜索`tsc详细使用教程`）,我们来看看这个文件都有什么改动：
```javascript
// typescript_template.js
var muxi_frontend = "great team";
console.log(muxi_frontend);
```
可以看到，编译后的js文件不仅去除了`类型注解`, 同时还把ES6的let语法，降级为兼容性更好的ES5语法。当然，要是不想让他进行降级操作，就要用到我们现在要讲的`tsconfig.json`了，该文件为ts的配置文件，每次启用tsc编译时都会在当前目录寻找该文件，如果不存在，则采用默认配置，刚才的编译采用的就是默认配置。
> 注意⚠️
> 使用tsc单独编译文件时不采用 tsconfig
> tsconfig 只有使用 tsc 直接编译整个项目时才起作用
一个基本的`tsconfig`文件格式如下：
```json
{
  "compilerOptions": {
    "target": "es6",                     // 编译后的 JavaScript 版本
    "module": "es6",                     // 使用的模块系统
    "strict": true,                      // 启用所有严格类型检查选项
    "esModuleInterop": true,             // 支持 CommonJS 模块和 ES 模块之间的互操作性
    "outDir": "dist"                     // 输出目录
  },
  "include": [
    "**/*"                          // 要包含的文件或文件夹
  ],
  "exclude": [
    "node_modules"                      // 要排除的文件或文件夹
  ]
}

```
可以看到，在这个文件中，配置target和module都为es6，就保证编译后的代码不会出现语法降级，
运行:
```shell
tsc
```
来看看结果：
```javascript
"use strict";
let muxi_frontend = "great team";
console.log(muxi_frontend);
```
当然，你肯定也不想每次跑一遍`tsc`编译项目来查看有无错误（当然你可以使用 `tsc -w`开启监听模式，但这样也着实麻烦，还要去控制台查看语法错误），这就要提到刚刚说的`tsserver`了，它可以为ide插件提供ts服务，让你在ide中能实时看到错误信息，就像是一门静态语言一样。关于插件，就自己去找吧，不同的ide可能会有不一样，就比如`VSCode`中就有很多，随便挑一个都可以；`WebStorm`中则是自带的



### 进阶任务

- 接口和类型别名： 深入了解如何使用接口和类型别名定义复杂数据结构。
- 泛型： 学习如何使用泛型来创建更具通用性的函数和类。
- 类型推断： 深入了解 TypeScript 如何推断变量和表达式的类型。
- 高级类型： 学习使用交叉类型、联合类型、条件类型等高级类型构建更复杂的类型逻辑。