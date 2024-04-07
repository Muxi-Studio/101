# React 学习指南

## 初学者看这里

### 引子：React 与 Hyperapp

React 是 Facebook 于 2013 年开源的 JS 库，用于构建用户界面。这也是目前前端界最流行的 UI 基础库。

我们首先让大家接触 Hyperapp ，而不是直接学 React，就是因为 React 本身的设计思想，其实很简单。就是 UI = f(state)。而 Hyperapp 就是基于这个思想设计的简化版 React。

所以 React 相比 Hyperapp，更强大，适合真正的生产级别应用。但核心思想其实是一致的。懂了 Hyperapp，你可以很快上手 React。

React 的组件也是一个函数（React 16 之前只支持 Class 组件，不过目前我们一般都使用 React 16+，可以全盘使用函数式组件）。函数返回的是 JSX 表示的虚拟 DOM 节点树，和 Hyperapp 一致。

但相比 Hyperapp，React 的每个组件都可以有自己的状态，而不是只有顶层的 App 才存储状态。

> React 可以通过 Redux 这样的状态管理工具去拥有全局状态，组件局部状态和全局状态可以混合使用。Redux 同样和 Hyperapp 的状态管理有相似之处。

React 在函数式组件中的局部状态和副作用，是通过 Hook 来实现的。本身单纯的函数式组件是没有状态，也不能产生副作用的（比如发送网络请求），Hook 的出现改变了这一点。目前我们可以不用了解 Hook 具体的原理，只要掌握 Hook 的使用即可。

让我们来看一个简单的例子：

```jsx
import React, { useState } from "react";

function Example() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	);
}
```

Codepen 实例

`useState` 是用于获取状态的 Hook。Hook 其实就是普通的函数调用。`useState` 调用之后会返回一个数组，第一项是状态的值，第二项是一个用来修改状态的函数。

我们只要记住，每次组件被调用，组件（函数）就会执行，然后 `useState` 就会被调用。调用之后就可以拿到最新的状态。

通过这个例子，我们就可以实现一个计数器，需要注意的是，React 的事件回调属性是驼峰的形式，并且回调只是普通的函数，里面可以执行任意逻辑，无需像 Hyperapp 那样返回新的 state。

此外 React 比起 Hyperapp 还有一些核心功能

- 支持合成事件，抹平了不同浏览器的事件兼容性
- 内置了调度系统，会根据情况安排最合适的渲染时机，避免卡顿
- 使用 fiber 架构，可以把组件的渲染工作拆分到多次完成，避免卡顿
- 支持跨端，可以通过 React-native 编写 安卓/iOS/Web 三段通用的 App
- Context，Ref，Suspense，Fragment，Portal，各种 Hooks 等等多种多样的 API

### 学习材料推荐

学 React 之前需要明确一点，React 在 16.8 版本推出了 Hooks。Hooks 让函数式组件可以拥有状态和副作用，而函数式组件相比 Class 组件更符合 UI = f(state) 的理念。因此目前我们编写的组件，都是用 Hooks 实现的。

但官网上的教程，大部分都是以 Class 组件为基础的。所以目前还没法避免接触 Class 组件，以后在历史项目中也可能会遇到。Class 组件其实也不难学。但大家要把重心放到函数组件上。

首先要看官方文档，这是免不了的。首先是 [Main Concepts](https://reactjs.org/docs/hello-world.html)。

1. 了解基础： Props，State，组件定义，Class 组件声明周期，事件监听。
2. 了解如何编写条件渲染，列表渲染，关注 key 的作用。
3. 特别要关注：状态提升（Lifting State Up），组合 vs 继承（Composition vs Inheritance），受控组件 vs 非受控组件（Controlled Components vs Uncontrolled Components）

然后是 Hooks，看官方的 [Hooks 教程](https://reactjs.org/docs/hooks-intro.html)。useState 和 useEffect 是必须掌握的，其他的可以浏览一下。

之后就可以看一本完整的小册：[The Way To React](https://leanpub.com/the-road-to-learn-react-chinese/)。

> 这本书是免费的，把价格拖到 0 就行。如果下载有问题，可以在组群反馈。

这本书的食用方式：

- 这本书用一个 Hacker News 程序员论坛的例子，贯穿全书，每一节后面都有源码链接，是在线的，可以看当前章节完成之后书本例子的代码。一定要结合代码看，最好可以自己在本地起一个项目，跟着写。
- 每章结束后会有一些链接，主要是章节里提到的 JS 知识点，如果觉得有不懂的 JS 知识点，不妨先停下来复习一下。

### 小练习

将 Class 组件实现的 [React 官方教程](https://reactjs.org/tutorial/tutorial.html) 改造为函数式组件（Hooks）版本。新建仓库 react-tutorial-hooks 并上传到 Github。

## 进阶内容

- 受控 vs 非受控
- Advanced Topics
- ErrorBourbonry
- 设计模式：HOC + renderProps
- 自定义 Hooks
- Suspense
- cocurrent


## 原理

- 基本流程
- 合成事件
- fiber