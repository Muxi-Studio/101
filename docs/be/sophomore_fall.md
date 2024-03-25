# 大二上学期

> 大二上学期主要的目标是，掌握 Web 开发的原理：网络编程，Unix 系统编程，数据库原理。并且加强 Golang 的功底。同时也可以看一下云原生相关的应用技术，因为在 团队的 Web 开发中经常要用到。

> 大二的节奏主要靠自己把控。总的来说，知道的越多，要学的东西就越多，所以其实是一个压力越来越大的过程。但也是一个探索越来越深入的过程。大二是很容易放弃，很容易放松的阶段，这个时候主要就靠自己的自控力。如果在这个阶段可以扎实的学一些东西，其实就以及有了以后工作的能力了。大学剩下的时间，可以用来研究一些更底层和深入的东西。

## 任务一：CSAPP 网络相关章节（高优先级）

通过这个任务，我们会接触 Unix 系统编程，了解信号量，系统 I/O，Socket 编程，并发编程相关知识，可以自己编写出一个简单的 HTTP Server，并通过 CGI 接口调用程序返回动态结果。

### 子任务 1

按顺序完成 CSAPP 第 7 章的学习。完成 [Shell Lab](http://csapp.cs.cmu.edu/3e/shlab.pdf)。

> Lab 相关材料在 [这个页面下载](http://csapp.cs.cmu.edu/3e/labs.html)。

### 子任务 2

阅读 CSAPP 第 10，11，12 章。11 和 12 章主要是网络编程，介绍 HTTP 协议，Socket 编程和 Web Server 的基本工作原理。以及 CGI 这种协议。12 章主要介绍了主流的并发实现方式以及并发中的一些概念，比如临界区，锁。

阅读这些章节，思考课后练习。对于 11 章中的简单的 HTTP server，把源码下载并运行，根据课后的题目对代码进行修改。

对于 HTTP server 的原理，和这些章节中的知识点，写一些思考的博客。可以和 Golang 中的实现进行对比。

### 子任务 3（拓展）

完成 Proxy Lab。

### 子任务 4（拓展）

系统的了解 Linux 系统编程，推荐材料：[《Linux 系统编程(第 2 版)》](http://e.dangdang.com/products/1900722505.html)，[《Linux/UNIX 系统编程手册(上、下册)》](http://product.dangdang.com/23399180.html)（权威参考手册性质）。

## 任务二：Golang 精进（高优先级）

这部分主要是阅读书籍和学习视频：

- [《The Go Programming Language》](http://product.dangdang.com/23895617.html)
- [《Go 语言并发之道》](http://product.dangdang.com/26317465.html)
- [《Go Web 编程》](http://product.dangdang.com/25199475.html)
- [《Go 语言高级编程》](http://product.dangdang.com/27896588.html)
- [Google 资深工程师深度讲解 Go 语言](https://coding.imooc.com/class/180.html)（视频网盘链接团队内获取）

这个过程主要的产出和练习方式：

- 用 Golang 刷题
- 写相关的 Demo（书上的）
- 参与一些 Web 项目
- 看开源项目的源码（Gin/Iris/Gorm/B 站（误））

## 任务三：数据库原理（中优先级）

这里所说的原理，主要是内部的一些实现机制，以及一些高级的调试技巧。开发者如果想真正的掌握数据库，驾驭数据库，写出最优化的代码，追求最快的查询速度，那就必须要了解这些。

### MySQL 相关

- [《MySQL 必知必会》](http://product.dangdang.com/20426804.html)
- [《高性能 MySQL》](http://product.dangdang.com/23214590.html)
- 《MySQL 实战 45 讲-极客时间》（网盘链接团队内获取）
- [MySQL 是怎样运行的：从根儿上理解 MySQL](https://juejin.im/book/5bffcbc9f265da614b11b731)

这些材料，其实都是从原理和概念上做了解释，如果想从事数据库开发，或者对数据库有更底层的理解，那关系型数据库具体的内部实现，那就需要跟一门国外的数据库课程，然后在真实的数据库代码里面进行修改和增加。这个内容在下学期会提到。

### Redis 相关

- [《Redis 实战》](http://product.dangdang.com/23800641.html)
- [《Redis 深度历险：核心原理与应用实践》](http://product.dangdang.com/25859315.html)

### MongoDB 相关

- [《MongoDB 实战（第二版）》](http://product.dangdang.com/24195532.html)
- [《左手 MongoDB，右手 Redis——从入门到商业实战》](http://product.dangdang.com/26511765.html)

## 任务四：云原生相关技术学习（拓展级：学有余力可以尝试）

### Docker

Docker 是目前的容器标准。容器是目前应用部署的通用标准。所以应用开发者都需要学习 Docker。

- [官方文档](https://www.docker.com/get-started)
- [深入浅出 Docker](http://product.dangdang.com/26917576.html)
- [Docker 实践](http://product.dangdang.com/25218250.html)

相关的书有很多，可以根据自己兴趣看。如果只是基本的使用，看官方文档之类的就可以。

### Kubernetes

[这篇文章](https://github.com/answer1991/articles/blob/master/Kubernetes-is-the-next-generation-os.md)是对当前时代所有开发者学习 K8s 必要性的解释。

- [官方文档](https://kubernetes.io/docs/home/)
- [Docker 容器与容器云 第 2 版](http://product.dangdang.com/24048539.html)

[minikube](https://github.com/kubernetes/minikube) 可以让你在本地运行一个 k8s 集群，用于练习和测试。

## 进阶任务：A Web Server called Liso（进阶级：有实力，有更高追求的同学可以尝试）

[传送门](/be/liso)

该 lab 是用 C 语言实现一个简单的 HTTP 服务器。 分为三个 checkpoint，checkpoint1 应该最难，要对传来的 HTTP 请求做语法和词法解析，这个涉及编译原理，可以不用深入研究，这部分代码直接抄就可，但是需要大致看懂代码，自己根据需求做一些改动。

代码可以参考[这里 ](https://github.com/Chiwency/Liso-Web-Server) 里面还有一个爬坑总结，做之前可以参考下。

## 进阶任务 6.S081: Operating System Engineering

[传送门](https://pdos.csail.mit.edu/6.828/2021/index.html)

操作系统相关 lab，用 C 语言分阶段实现一个简易操作系统的各种必备功能。

## 附录

### Go 慕课网实战项目课程

Golang 相关的实战项目课程，对于了解企业级的项目开发和特定场景下的开发套路，有很大的帮助。如果有兴趣，下面这些课程可以在团队内咨询获取资源：

- [Go 实战仿百度云盘实现企业级分布式云存储系统](https://coding.imooc.com/class/323.html)
- [Go 语言开发分布式任务调度轻松搞定高性能 Crontab](https://coding.imooc.com/class/281.html)
- [Go 语言实战流媒体视频网站](https://coding.imooc.com/class/227.html)

如果对[慕课网 Go 分类下其他实战课程](https://coding.imooc.com/?c=go)有兴趣的，也可以在团队内提出，一起想办法解决。
