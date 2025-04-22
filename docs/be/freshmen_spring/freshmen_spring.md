# 大一下学期

> 本学期主要内容是：学习各类常用中间件，包括但不限于Redis，Kafka，etcd等。学习分布式系统开发运维，主要包括微服务，分布式锁，分布式事务，K8S/K3S等。

## week1 泛型, 反射, context

### 泛型与反射

1. 泛型声明，类型约束，泛型函数与结构体
2. 常见使用场景

### context

1. 学习context的基本用法和基本类型
2. 了解[context底层](https://mp.weixin.qq.com/s/AavRL-xezwsiQLQ1OpLKmA)实现

### 拓展学习

1. 底层编程unsafe包的使用
2. cgo的使用

### 任务：

1. 使用泛型编写一个泛型栈实现能够对各种元素的出栈入栈
2. 自己实现一个json.Marshal()，选做json.Unmarshal()
3. 使用context和channel做一个简单的定时任务管理后端系统(具体任务形式自己定义)

要求:

- 暴露服务
- 使用http进行任务的增删改查

## week2 测试与CI/CD

测试是软件开发中相当重要的一环，尤其是在DevOps协同工作中占据了非常重要的地位，这一部分经常被开发者忽略，但是却是代码开发的重要部分

### 测试

1. 测试的基本概念（白箱测试，黑箱测试，单元测试，集成测试，模拟测试等）
2. 经典测试方法(表格驱动测试，假设测试等)
3. 学习编写go测试文件：xx_test.go（testify或者gomock库的使用）
4. 了解什么叫mock对象

### CI/CD

1. 了解什么叫CI/CD
2. 学习[github action](https://docs.github.com/en/actions)的使用

### 拓展学习

1. 了解什么是DevOps

### 任务：

1. 对mini后端的某一个模块（比如service中的某个多分支方法）进行测试

要求：

- 测试分支覆盖率达到90%以上

1. 基于github action完成一套完整的CI/CD工作流

要求：

- 编写测试样例，并对你的整个mini后端的某个几个接口进行集成测试
- 实现自动化测试
- 实现自动化部署（选做）

  

## week3 Redis与缓存

### 缓存

1. 缓存意义
2. 缓存使用场景
3. 缓存策略
4. BASE理论

### Redis

1. redis基本数据类型（hash，set，zset，string，list）的区别和使用场景
2. 熟悉Redis基本命令
3. 了解Redis高速的原因

### 学习资料

| redis                             | [redis基础](https://topjavaer.cn/redis/redis-basic/) |
| --------------------------------- | ---------------------------------------------------- |
| Redis 管理工具                    | [Tiny RDM](https://redis.tinycraft.cc/zh/)           |
| redis深度历险(非常值得一看的好书) | 暂时无法在飞书文档外展示此内容                       |

### 任务

1. 选取mini中的一个模块添加缓存，并测试优化了多少性能（思考你的项目什么地方需要缓存）
2. 利用redis实现一个定时任务管理系统

要求:

- 使用redis进行数据存储
- 使用channel实现定时检查任务是否应当发布
- 构建一个http后端应用,能够实现对任务的增删改查

### 拓展学习:

- [Go cache](https://github.com/patrickmn/go-cache)比较一下和redis的区别，思考什么时候用go cache更加合适
- redis分布式锁的使用
- lua脚本的使用

## week4 MongoDB和PG-JSONB

### MongoDB

1. Nosql基本概念以及mongdb和关系型数据库的区别
2. 使用[MongoDBCompass](https://www.mongodb.com/products/tools/compass)进行管理
3. 学习[mongo-driver库](https://github.com/mongodb/mongo-go-driver)的使用（可以了解下ODM与ORM的区别）

### PostgreSQL

1. 了解mysql与pg之间的区别
2. 学习jsonb功能的原理和使用
3. 使用gorm进行相关操作

### 拓展学习

1. 学习mysql逻辑架构和innoDB实现原理

### 任务：

1. 使用 MongoDB 和 PostgreSQL 分别实现一个简单的通用帖子后端服务

基础功能要求：

- 能够发布主帖子，包括标题、内容、作者等基础信息。
- 支持对主帖子的回复，并能够在回复中 **@某个回复**，形成嵌套的评论结构。
- 支持个性化拓展字段，能够灵活增加如图片、标签、位置等自定义字段。
- 提供 API 接口进行帖子和评论的增删改查。

数据模型设计：

- MongoDB：使用嵌套文档来表示主帖子及其评论。
- PostgreSQL：使用 JSONB 字段来存储个性化拓展字段，同时通过表关联来实现评论嵌套。

1. 测试两种实现方案的性能差异 (选做)

性能测试要求：

- 发布帖子性能：测试连续发布 1000 篇帖子所需时间。
- 查询单个帖子及其全部评论的性能。
- 增加评论的性能，测试每个帖子下添加 100 条评论的时间。
- 对个性化拓展字段的查询和更新性能。
- 并发测试，模拟 100 个并发用户同时对帖子进行发布和评论操作。

数据规模：

- 测试数据生成脚本，生成 1000 篇帖子，每篇帖子包含 10-20 条评论。
- 个性化拓展字段随机生成，字段数量 3-5 个。



## week5 消息队列Kafka

### KafKa

1. 了解Kafka基本实现原理
2. 了解Kafka核心概念:broker，topic，partion，producer，consumer等
3. 使用docker安装启用了Kraft的kafka

### Sarama

1. 研究Sarama包的API，达到能够不查资料实现一整套生产和消费链的水平

### 拓展学习

1. 了解feed流的概念，以及推模型和拉模型的区别
2. 了解一下Kafka和RocketMQ/RabbitMQ的区别

### 任务：

1. 实现一个简单的消费者和生产者并实现批量消费

## week6 Sarama实战与CAP原理

### CAP理论

- CAP 理论的基本概念
- 为什么 CAP 不能同时满足三者？
- CAP 理论的实际应用（AP、CP、CA 组合的现实意义）

### 任务：

1. BiliBili UP主视频更新实时提醒系统设计

要求：

- 用户可以订阅多个UP
- 当订阅的UP更新视频后应当对用户进行消息推送（发送Email）
- 使用爬虫实时监控制定UP的视频
- 使用kafka对消息进行生产和消费实现限流,最终消息存到数据库里面
- 暴露一个接口让用户可以获取数据(思考使用推模型还是拉模型并给出自己的理由)

注意:

- 爬虫重试频率不要太高防止被限流（10s~30s尝试一次即可）

## week7 DDD理论

> 可能是学了这么久后端接触的最玄之又玄的概念，DDD其实没有严格的范式，它更贴近一种设计理念而不是架构，只有基于DDD的架构，而没有DDD架构

### 基本概念：

1. 领域模型( Domain Model )
2. 实体（Entity）
3. 值对象（Value Object）
4. 聚合根（Aggregate Root）

### 重要思想：

1. 充血模型和失血模型
2. 限界上下文（Bounded Context）
3. 事件驱动（Event Driver）
4. 仓储模式（Repository Pattern）

### 经典划分层次:

- 应用层（Application Layer）
- 领域层（Domain Layer）
- 基础设施层（Infrastructure Layer）
- 接口层（Interface Layer）

### 任务：

- 学习并理解[kratos](https://go-kratos.dev/docs/)的基本架构，要求能够做到与DDD核心概念进行对应。

## week8 微服务理论入门

### **微服务基本概念**

- 服务拆分的原则?
- 什么时候适合拆分成微服务?
- 服务划分原则：单一职责原则等

### **Gateway** **与** **BFF**

- 核心区别是什么?
- 分别有什么实现方案?

### **注册中心：etcd**

- 了解不同注册中心的CAP的区别
- etcd 基本原理（分布式 KV 存储、Raft 协议）
- 微服务注册与发现（服务心跳、故障摘除）

### **配置中心**

- 为什么需要配置中心（集中管理 vs. 本地配置文件）
- 如何使用etcd作为配置中心?
- 配置动态刷新机制，热更新

### 任务：

> 建议每个服务都只有一两个文件,有一个最简单的功能就可以，不要花大量时间在写各种层次划分上

1. 写一个最简单的微服务

要求：

- 使用注册中心
- 使用配置中心进行集中配置
- 使用Gateway进行转发
- 涉及至少3个服务包括Gateway->A,B ; A->B的交叉调用

```go
           [API Gateway]
                |
        ----------------
        |              |
      [A 服务]      [B 服务]
        |
      [B 服务]
```

## week9 集群化运维

> 如果说Docker是云原生的门槛，那么Kubernetes就是云原生架构的核心

### 云原生下的服务架构

了解以下概念和它们的存在意义

- app架构：CS架构和BS架构
- 网络架构：[OSI七层模型](https://blog.csdn.net/weixin_44772566/article/details/136717134)，[公网与内网IP](https://xiaolincoding.com/network/4_ip/ip_base.html#前菜-ip-基本认识)的概念
- 后端架构：网关，Gateway，具体服务，可观测，数据库等各自的职责与具体关系

### **K8S：**

- 了解为什么要学[云原生](https://github.com/answer1991/articles/blob/master/Kubernetes-is-the-next-generation-os.md)
- 了解[k8s](https://kubernetes.io/zh-cn/docs/home/)的基本架构和核心组件kubectl,ingress
- 学习Kubelet和Ingress的基本使用

### 任务：

1. 使用k8s集群部署上一周你编写的微服务

要求:

- 在本地使用docker或者VM虚拟机（[VMBox](https://www.oracle.com/cn/virtualization/virtualbox/)等）启动至少两个linux虚拟机作为节点
- linux发行版本选相同的以避免cgroup的适配问题
- 如果使用VM需要手动处理内存分配问题，k8s建议每个节点分配2G及以上不然内存不够启动
- k8s集群搭建复杂度非常高，可以选择[k3s](https://docs.k3s.io/zh/)或者使用[kubeadm](https://kubernetes.io/zh-cn/docs/reference/setup-tools/kubeadm/)来搭建(对于k8s新手建议用k3s，喜欢挑战极限的话可以试试别的方案)
- 简单描述下你的服务分片策略

2. 画一个云原生下的项目架构图（能有多详细就有多详细，可选任务）

要求：

- 主要在后端部分进行细化，可以从服务和服务内部架构等多个层级进行详细描述

### 拓展任务:

1. 学习docker和k8s的底层架构设计,可以看看入门的书籍

- [《深入剖析Kubernetes》](https://learn.lianglianglee.com/专栏/深入剖析Kubernetes)
- [《深入浅出Docker》](https://product.dangdang.com/26917576.html)

## week10 分布式锁

### redis分布式锁

1. 锁的分类：单机锁，分布式锁，乐观锁，悲观锁
2. 分布式锁的使用场景
3. 使用[redis-go](https://github.com/redis/go-redis)库来实现一个简单的redis分布式锁(不喜欢造轮子也可以用[redsync](https://github.com/go-redsync/redsync)之类的库)

### 任务

1. 木犀外卖秒杀系统

现在~~黑马程序员~~找到了你，让你去实现一个go版本的~~苍穹外卖~~，你为了证明自己是~~IT黑马~~，英勇无畏的接下了这个任务

要求：

- 编写一个简单的秒杀系统，暴露两个路由

```go
post /kill //用于秒杀商品
post /register //用于注册账号
```

- 在k8s集群上部署10个副本
- 数据库有三个表，一个存储商品id和剩余数量，一个存储商品具体情况(主要是金额)，最后一个存储用户的账户余额（默认每个人初始都有一定钱）
- 使用压测工具例如([vegeta](https://github.com/tsenart/vegeta))进行测试

## week11 分布式事务

// TODO

## week12 搜索引擎 

// TODO

## week13 负载均衡与限流

// TODO

## week14 微服务架构

基于本学期所学提交一个微服务的基本模板

## 待续...

