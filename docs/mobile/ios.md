# 入门学习

![](https://raw.githubusercontent.com/zxc0328/for-picgo/master/%E6%88%AA%E5%B1%8F2021-08-06%20%E4%B8%8A%E5%8D%8811.33.02.png)
*欢迎来到木犀 iOS 开发新手村！*

### iOS 开发简介

有 Android 基础的话，学习 iOS 并不难。本质上都是移动端开发，只不过是使用编程语言不同，目标操作系统不同，操作系统提供的 UI 组件和 API 不同。

![](https://raw.githubusercontent.com/zxc0328/for-picgo/master/%E6%88%AA%E5%B1%8F2021-08-06%20%E4%B8%8A%E5%8D%8811.31.19.png)
![](https://raw.githubusercontent.com/zxc0328/for-picgo/master/%E6%88%AA%E5%B1%8F2021-08-06%20%E4%B8%8A%E5%8D%8811.31.23.png)


iOS 下面使用的编程语言是 Swift，类似安卓的 Kotlin，是新一代的编程语言。有类型推导，函数式编程等等新式的特性。iOS 老的编程语言的 Objective-C。目前 iOS 官方已经全面切到 Swift 了，但 OC 也还是可以用的，并且两者可以混编。OC 在国内用的还不少，国外已经比较少用了。如果是以后想找 iOS 工作的话，OC 还是要学的，如果是先学一下 iOS 作为兴趣，OC 目前可以先不接触。

编程范式上，iOS 是传统的 MVC。平时写的主要就是 View（视图），ViewController（视图控制器）和 Model（数据模型）。我们也可以用第三方库支持其他的编程范式或者组件化，比如 [ReactiveCocoa](https://github.com/ReactiveCocoa/ReactiveCocoa) 和 [ComponentKit](https://componentkit.org/)。

iOS 官方的下一代编程范式是 SwiftUI，和 Android 的 Jetpack 类似，提供了 MVVM 和数据绑定等等。不过 SwiftUI 目前还处于普及阶段，在系统版本上的兼容一般，所以使用的不多。不过在 iOS 桌面小部件这样的新场景，Apple 强制使用了 SwiftUI，所以我们还是会接触到的。

### 入门学习材料

iOS 写起来很简单，XCode 装好就可以，不用配置很多东西，编译工具链都是自带的。包管理主要是用 [cocoapods](https://cocoapods.org/)。

学习主要靠这些材料：

+ [斯坦福 iOS 课程](https://www.bilibili.com/video/BV1rb411C7eN?from=search&seid=14447357722721788424) 这是 17 年版本，比较老了。但最新的 2020 年版本是基于 SwiftUI 的，所以不太适合。这个课程并不用完全看，只需要看 MVC 简介、Swift 语言、UIView、ViewController 相关的章节。


书：最好的就是 The Big Nerd Ranch Guide 系列了。安卓学习用的安卓权威指南也是这个系列的。

![](https://raw.githubusercontent.com/zxc0328/for-picgo/master/ios_book.png)

这本书有中文版：[iOS编程（第6版）](https://book.douban.com/subject/33431782/) （看翻译的书基本很难及时看到最新版，你懂的，所以学好英语很重要）
第七版英文版的 PDF [在此下载](https://salttiger.com/ios-programming-the-big-nerd-ranch-guide-7th-edition/)

这本书基本讲的很全了，各方面都有涉及。在学的时候一边是看理论内容，更重要的是练习。这本书的特点就是练习驱动，所以可以把书里面的例子的代码都自己写一下练习一下。基本就会了。

网站：

+ [raywenderlich](https://www.raywenderlich.com/) 最好的 iOS 教程网站
+ [iOS 人机交互指南](https://developer.apple.com/design/human-interface-guidelines/ios/overview/themes/)
+ [Swift 官网文档](https://swift.org/documentation/)

实际上你也不用去找其他网站，一般好的材料在谷歌搜索的时候都会搜到。记得用英文关键词。比如 uitableview Swift 这样搜。

### 学习建议


+ 去体验 iOS 的交互感觉。iOS 和安卓有一些不太一样的交互细节和内置组件。如果没有真机，可以用模拟器试一下 iOS 系统。然后读一下 [HCI](https://developer.apple.com/design/human-interface-guidelines/ios/overview/themes/)。这样才可以知道哪些功能适合用哪些组件实现，哪些交互是不符合 iOS 习惯的。
+ 布局上，iOS 有一套成熟的拖拽式的布局系统：StoryBoard。但在多人协作时，这种系统生成的 UI 代码是很难维护的。所以在实际项目里面我们是使用代码来做布局的。这个代码就是真的代码，而不是 XML 那样的描述文件。所以写起来会有点不习惯。布局这块我们团队选择了 [YogaKit](https://yogalayout.com/) 来写，使用类似 CSS 的声明式布局，会降低上手和维护的成本。尽管如此，StoryBoard 和代码编写约束这些布局方式还是可以了解一下的。
+ 网络、数据库之类的，和安卓一样，每个都有对应的库去做。我们用的网络库是 Alamofire，数据库是 Realm。iOS 自带了 CoreData，但不太好用。
+ 学习的时候重点关注：MVC 架构、页面之间如何跳转（导航）、布局、文本输入组件、列表组件、滚动组件、网络请求、多线程 这些基本的元素，如果你写一个 App，其实用到的也就是这些知识了。细节上的东西基本是边做边学、项目驱动。