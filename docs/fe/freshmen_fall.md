# 大一上学期


# 基本路线
* 9月末，10月：学习 C语言，完成HTML、CSS新人任务，搭博客，学习Linux常用命令和基础知识，掌握 Git 的使用
* 10月底考核
* 11月： C语言50道练习题，学而静态页面重构，JS 新人任务
* 12月：刷pat，看《编码》《Unix & Linux大学教程》
* 1月：刷完 pat 乙级
* 2月冬令营：学习JS，看《Eloquent JS》Chapter 1-5
* 寒假：JS 刷题、模块化，《Eloquent JS》Chapter 6、7、10
* 大一下：用hyperapp入门学习前端组件化和工程化开发

# 具体任务安排

###  基本配置(Mac)：
- [翻墙](https://github.com/shadowsocks/ShadowsocksX-NG/releases/)
- Chrome浏览器
- [iterm2](https://www.iterm2.com/) 替代Mac自带终端
- [oh-my-zsh](http://ohmyz.sh/)
- 学习[Git](https://hk.tower.im/projects/a1482d8ab658462eb68a7557cb1ba897/docs/0a72bb62f4de4aa08ffb29ece752f5e2/)基础命令，注册github

安装好以上的东西就可以把代码传到github上面了。C语言需要上传.c文件，HTML任务上传html文件

---

## 第一周       
+ 机试题、[星计划](http://blog.muxixyz.com/second/11)题目做完
+ 安装linux系统并熟悉操作
+ 学习markdown语法
+ 查找文章学习github账号申请和git基本命令学习(如[链接](https://blog.csdn.net/p10010/article/details/51336332))                
+ 根据文章搭建博客([链接](https://kutugu.github.io/2017/11/27/Hexo+Next%E9%85%8D%E7%BD%AE/#more))          
+ 常用命令行语句学习([见链接](https://blog.csdn.net/buptdavid/article/details/46619033)，看《unix&linux大学教程》，掌握常用命令即可)       
            
         
## 第二周至第五周
+ 学习《明解C语言》，并完成课后练习，放在自己的github上
+ 开始[50道练习](https://tower.im/projects/a1482d8ab658462eb68a7557cb1ba897/docs/4d938fcdf1484dfda23c0739fea7fc00/)，完成后在该题后署名

## 第二周到第七周（与C语言并行）
+ 学习HTML和CSS，参考资料：
  - [HTML-MDN](https://developer.mozilla.org/en-US/docs/Web/HTML)  
  - [CSS-MDN](https://developer.mozilla.org/en-US/docs/Web/CSS)   
  - [学习CSS布局](http://zh.learnlayout.com/)
  - [flex布局](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
 

**完成以下Task(每周完成一项task）**（保存在[JSBIN](http://jsbin.com/)里，完成任务后把链接发到自己的进度文档中）

### Task1
请实现以下表格的**HTML**部分
  ![表格](http://img0.ph.126.net/jReiWl-VWIitXr0nsPdeUg==/6630910535536407774.jpg)
  提示：注意`<thead>`,`<tbody>`的使用

---

### Task 2
请实现以下表单的HTML部分
![图片名称](http://img1.ph.126.net/sI-WnTqxzRSqSS3B9KzOpA==/6630162867629341750.jpg)

---

### Task3
将这个[模板](https://codepen.io/anon/pen/VBwqaL)通过CSS实现以下效果
![图片效果](https://cdn.glitch.com/6fab60b1-32c5-42ee-b5f3-40edd35dc042%2F%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202018-07-11%20%E4%B8%8A%E5%8D%883.26.56.png?1531251836695)
要求使用浮动布局方法，并需要清除浮动。

---

### Task4
+ 实现 [flex布局](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)最后的练习
+ 实现以下效果（flex布局实现垂直居中）：
![图片效果](https://cdn.glitch.com/6fab60b1-32c5-42ee-b5f3-40edd35dc042%2F%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202018-07-11%20%E4%B8%8A%E5%8D%883.59.34.png?1531252795865)
+ 修改[模板](https://codepen.io/anon/pen/RBwEvg)实现以下效果（flex布局实现水平居中）：
![图片效果](https://cdn.glitch.com/6fab60b1-32c5-42ee-b5f3-40edd35dc042%2F%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202018-07-11%20%E4%B8%8A%E5%8D%884.03.58.png?1531253129738)

---
### Task5
布局:定位与居中
Tips:两个扇形定位在矩形的两角，矩形水平垂直居中，通过绝对定位实现
![图片名称](https://wx4.sinaimg.cn/mw690/bf4e3631gy1fw5texmjepj20gw0a3q3w.jpg)

---
### Task6
分别通过“两边自适应，中间定宽”和“两边定宽，中间自适应”的方式实现基本效果
![图片效果](http://p9lce13x8.bkt.clouddn.com/5818615.jpg)

## 第六、七周
第六周：重构[学而](https://lanhuapp.com/web/#/item/board?pid=ad392018-e073-4316-876e-8861dbe3180a)首页，做出一个和它一模一样的页面出来

第七周：根据导师的 codeview进行修正完善

要求：
- HTML 与 CSS 分离
- 像素级还原。
- 只需实现静态页面。js效果不要求，比如推荐选项卡切换，点击按钮查看更多之类的都不用。
- 注意页面为**定宽居中**布局
- 注意 class 复用
- 使用git作为版本控制工具，利用github的gh-pages分支托管页面。最后在进度里发链接。

## 第八周至第十二周
+ 学习指针部分内容，完成总结
+ 截止完成50题练习，开始刷PAT乙级
+ 继续看《unix&linux大学教程》
+ 看《图解HTTP》，简单了解网络协议；并参考相关文章写一些网络协议的总结       
+ 看《编码:隐匿在计算机软硬件背后的语言》，简单了解计算机底层知识


## 冬令营：JS基础学习

参考书目：[《Javascript编程精解》(第三版)](http://eloquentjavascript.net/)

学习资料：
+ [w3cschool-js](http://www.w3school.com.cn/js/js_intro.asp)
+ [MDN JS Guide](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide)

推荐流程：先看书，w3cshool和MDN的教程先看基础语法部分。然后试着自己写一下，刷题中遇到什么困难多google

掌握js基础语法: 数据类型、函数、常用的字符串方法和数组方法，对象，原型和原型链。

### task1：
JavaScript编程精解(第三版) 阅读1-6章并完成书上习题，上传github 
可以在[这里](https://eloquentjavascript.net/code/)测试代码

### task2：

自测练习：回答问题并说明原因
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

### task3：
完成[JS练习](https://hk.tower.im/projects/8b4990dc9e324866a0357c7a0dda0d5d/docs/f53eb2b6e8e645ed9d3b05f16f3ddd4a/) 上传github


## 寒假：
### 模块化和webpack
前端开发中，起初只要在script标签中嵌入几十上百行代码就能实现一些基本的交互效果，后来js得到重视，应用也广泛起来了，前端项目越来越复杂。所以，Javascript模块化编程已经成为一个迫切的需求。一个模块就是实现特定功能的文件。

浏览一遍这些材料，了解模块化：
`// 模块化的原因和历史`

1. [网易前端架构-JS模块化视频](http://pan.baidu.com/s/1pK6jxIr#path=%252Fjs%25E6%25A8%25A1%25E5%259D%2597%25E5%258C%2596)
2. [JS模块化七日谈](https://github.com/Huxpro/js-module-7day)

`// 以下两章属于模块化的综合介绍`

3. [Eloquent JavaScript-Chapter 10. Modules](http://eloquentjavascript.net/3rd_edition/10_modules.html)
4. [Programming JavaScript Applications-Chapter 4. Modules](https://www.safaribooksonline.com/library/view/programming-javascript-applications/9781491950289/ch04.html)

`// 这一章专门讲的ES6模块`
5. [Understanding ECMAScript 6-Modules](https://leanpub.com/understandinges6/read/#leanpub-auto-modules)

然后我们用CommonJS规范来写js模块，这里还需要用到[webpack](https://webpack.js.org/guides/getting-started/)作为打包工具。

**task：**
构建一个项目，在项目中编写3个js文件，其中module1导出一段字符串，module2导出一个如下所示的函数
```
function(str){
    document.write(str.split("").join(','));
}
```
其中实现module3依赖module1和module2，将module1的字符串作为参数调用module2的函数

最后用webpack打包出来bundle.js文件，在html文件中引用。将项目上传github，记得.gitignore

目录结构:
![modularity](https://cdn.hyperdev.com/us-east-1%3A49aaef6d-d661-4525-9c20-60ba343a85a3%2Fmodule.png)


### js练习和深入学习

+ 继续完成[JS 练习](https://hk.tower.im/teams/85051/documents/2798/) 上传github
+ 继续阅读[《Javascript编程精解》(第三版)](http://eloquentjavascript.net/)
+ 了解[ECMAScript 6 入门](http://es6.ruanyifeng.com/)

### C语言学习与总结
完成PAT乙级并且自行总结归纳知识点，或者题目的思路

## 第二学期

目标：巩固JS、初步了解项目结构以及vue等前端框架

日常：刷题 和 看书

### 第一周：平台游戏
实现一个如图的Platform Game ，更多题目描述请移步到[Eloquent JavaScript A Platform Game](http://eloquentjavascript.net/16_game.html)
![game](http://g.recordit.co/jToUSjNpuT.gif)

---

### 第二周：hyperapp
学习[hyperapp](https://github.com/hyperapp/hyperapp)相关知识，完成TODO list，包括 添加、删除、修改、全选功能

