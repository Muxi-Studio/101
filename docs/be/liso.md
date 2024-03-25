# CMU 15-441 A Web Server Called Liso 导引

> Lab 所属方向：计算机网络
> 推荐学习人群：Web 组后端和有兴趣的前端同学
> 主页：[15-441](https://www.cs.cmu.edu/~prs/15-441-F16/)

这个 Lab 大概就是写一个 Web Server。15-213 里也会有一个 Tiny Server。和 15-213 的相比，这个 Lab 要求写的 Server 是一个比较完善的 Web Server。要求：

- 实现 HTTP RFC 的一个子集
- 借助 yacc 和 lex 自己实现 HTTP Parser
- 基于 select()的并发连接
- log 模块
- 支持 SSL
- CGI 支持（最后需要可以支持 Flask）

借助这个 Lab 可以获得的知识主要是：

- 让你主动去阅读 RFC 文档，接触工业标准
- 懂得 SSL 的基本原理
- 懂得用 yacc 和 lex 对 DSL 进行基本的处理
- 去了解 CGI 的标准
- 了解基于 select()的并发连接实现，这个在 15-213 里面已经有讲了

这个 Lab 还有一个亮点就是配备了非常完善的测试脚本，你可以借助这些脚本来量化的分析你的进度和成果。最后和 Flask 的联动也是非常惊艳的。

由于你已经有了 15-213 中学习到的系统编程知识（包括进程，线程，信号，I/O，网络等等），这个 Lab 会比较好上手，是一个进阶的不错选择。

**操作指南**

这个 Lab 有三个 Checkpoint

- [Checkpoint1](https://www.cs.cmu.edu/~prs/15-441-F16/pj1cp1.html)

给了 starter code。要求把一个简单的 echo server 改造成基于 select()的 echo server。

- [Checkpoint2](https://www.cs.cmu.edu/~prs/15-441-F16/pj1cp2.html)

要求实现 RFC 标准和 HTTP parser。简单的说就是要把 HTTP 的关键实现写了。

- [Checkpoint3](https://www.cs.cmu.edu/~prs/15-441-F16/pj1cp3.html)

实现高级特性，log，SSL 和 CGI。

要做这个 Lab 的办法自然就是阅读主页里 writeup 的每一个字，然后按 checkpoint 的顺序一个一个做。每个 checkoutpoint 都要通过自动化测试。要好好看提供给你的材料，在开始时复习一下 15-213 的知识。在系统编程上可以看主页里推荐的参考书。祝好运！

**[一个实现解析](http://zxc0328.github.io/diary/2017/11/2017-11-11.html)**
