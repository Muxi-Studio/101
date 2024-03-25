# CMU 15-441 A Web Server Called Liso导引

> Lab所属方向：计算机网络
推荐学习人群：Web组后端和有兴趣的前端同学
主页：[15-441](https://www.cs.cmu.edu/~prs/15-441-F16/)

这个Lab大概就是写一个Web Server。15-213里也会有一个Tiny Server。和15-213的相比，这个Lab要求写的Server是一个比较完善的Web Server。要求：

+ 实现HTTP RFC的一个子集
+ 借助yacc和lex自己实现HTTP Parser
+ 基于select()的并发连接
+ log模块
+ 支持SSL
+ CGI支持（最后需要可以支持Flask）

借助这个Lab可以获得的知识主要是：

+ 让你主动去阅读RFC文档，接触工业标准
+ 懂得SSL的基本原理
+ 懂得用yacc和lex对DSL进行基本的处理
+ 去了解CGI的标准
+ 了解基于select()的并发连接实现，这个在15-213里面已经有讲了

这个Lab还有一个亮点就是配备了非常完善的测试脚本，你可以借助这些脚本来量化的分析你的进度和成果。最后和Flask的联动也是非常惊艳的。

由于你已经有了15-213中学习到的系统编程知识（包括进程，线程，信号，I/O，网络等等），这个Lab会比较好上手，是一个进阶的不错选择。

**操作指南**


这个Lab有三个Checkpoint

+ [Checkpoint1](https://www.cs.cmu.edu/~prs/15-441-F16/pj1cp1.html)

给了starter code。要求把一个简单的echo server改造成基于select()的echo server。


+ [Checkpoint2](https://www.cs.cmu.edu/~prs/15-441-F16/pj1cp2.html)

要求实现RFC标准和HTTP parser。简单的说就是要把HTTP的关键实现写了。

+ [Checkpoint3](https://www.cs.cmu.edu/~prs/15-441-F16/pj1cp3.html)

实现高级特性，log，SSL和CGI。


要做这个Lab的办法自然就是阅读主页里writeup的每一个字，然后按checkpoint的顺序一个一个做。每个checkoutpoint都要通过自动化测试。要好好看提供给你的材料，在开始时复习一下15-213的知识。在系统编程上可以看主页里推荐的参考书。祝好运！

**[一个实现解析](http://zxc0328.github.io/diary/2017/11/2017-11-11.html)**



