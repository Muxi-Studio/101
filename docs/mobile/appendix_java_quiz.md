# 附录 - Java 习题

这里大部分是引自网络上的题目，可在下方链接找到参考答案：

- https://www.jianshu.com/p/886252693889

1. 『构造方法』：编写 Java 程序模拟简单的计算器。定义名为 Number 的类其中有两个整型数据成员 n1 和 n2 应声明为私有。编写构造方法赋予 n1 和 n2 初始值再为该类定义加 addition、减 subtration、乘 multiplication、除 division 等公有成员方法分别对两个成员变量执行加、减、乘、除的运算。在 main 方法中创建 Number 类的对象调用各个方法并显示计算结果。
2. 『构造方法』：编写 Java 程序用于显示人的姓名和年龄。定义一个人类 Person 该类中应该有两个私有属性姓名 name 和年龄 age。定义构造方法用来初始化数据成员。再定义显示 display 方法将姓名和年龄打印出来。在 main 方法中创建人类的实例然后将信息显示。
3. 『get 方法和 set 方法』：定义一个类该类有一个私有成员变量通过构造方法将其进行赋初值并提供该成员的 getXXX()和 setXXX()方法。
4. 『构造方法与重载』：为“无名的粉”写一个类 class WuMingFen 要求： 1.有三个属性 面码:String theMa 粉的分量(两) int quantity 是否带汤 boolean likeSoup 2.写一个构造方法 以便于简化初始化过程 如 WuMingFen f1 = new WuMingFen("牛肉",3,true); 3.重载构造方法 使得初始化过程可以多样化 WuMingFen f2 = new WuMingFen("牛肉",2); 4.如何使得下列语句构造出来的粉对象是酸辣面码、2 两、带汤的 WuMingFen f3 = new WuMingFen(); 5.写一个普通方法 check() 用于查看粉是否符合要求。即 将对象的三个属性打印在控制台上。
5. 『构造方法的重载』：定义一个名为 Vehicles 交通工具 的基类 该类中应包含 String 类型的成员属性 brand 商标 和 color 颜色 还应包含成员方法 run 行驶 在控制台显示“我已经开动了” 和 showInfo 显示信息 在控制台显示商标和颜色 并编写构造方法初始化其成员属性。 编写 Car 小汽车 类继承于 Vehicles 类 增加 int 型成员属性 seats 座位 还应增加成员方法 showCar 在控制台显示小汽车的信息 并编写构造方法。 编写 Truck 卡车 类继承于 Vehicles 类 增加 float 型成员属性 load 载重 还应增加成员方法 showTruck 在控制台显示卡车的信息 并编写构造方法。 在 main 方法中测试以上各类。
6. 『构造方法与重载』：定义一个网络用户类 要处理的信息有用户 ID、用户密码、email 地址。在建立类的实例时 把以上三个信息都作为构造函数的参数输入 其中用户 ID 和用户密码时必须的 缺省的 email 地址是用户 ID 加上字符串"@gameschool.com"
7. 『构造方法与重载、包 编写 Addition 类』：该类中应包含一组实现两数相加运算的重载方法。 实现加法运算的方法 应接受两个参数 即加数和被加数 方法将两个参数进行加法运算后 返回相加结果。考虑可能针对不同的数据类型进行计算 重载一组方法 包括整型、长整型、浮点型、双精度浮点型、还有字符串。 在 main 方法中创建 Addition 类的实例 分别调用重载方法测试其效果。 应将 Addition 类打入到包中 以自己名字的拼音为包命名。
8. 『构造方法与重载』：建立一个汽车类 包括轮胎个数 汽车颜色 车身重量等属性。并通过不同的构造方法创建事例。 至少要求 汽车能够加速 减速 停车。 要求 命名规范 代码体现层次 有友好的操作提示。
9. 『构造方法与重载』：创建一个类 为该类定义三个构造函数 分别执行下列操作 1、传递两个整数值并找出其中较大的一个值 2、传递三个 double 值并求出其乘积 3、传递两个字符串值并检查其是否相同 4、在 main 方法中测试构造函数的调用
10. 『static 关键字与普通变量的区别』：创建一个名称为 StaticDemo 的类并声明一个静态变量和一个普通变量。对变量分别赋予 10 和 5 的初始值。在 main()方法中输出变量值。
11. 『覆盖、继承』：建立一个汽车 Auto 类 包括轮胎个数 汽车颜色 车身重量、速度等成员变量。并通过不同的构造方法创建实例。至少要求 汽车能够加速 减速 停车。 再定义一个小汽车类 Car 继承 Auto 并添加空调、CD 等成员变量 覆盖加速 减速的方法。
12. 『抽象类』：创建一个 Vehicle 类并将它声明为抽象类。在 Vehicle 类中声明一个 NoOfWheels 方法 使它返回一个字符串值。创建两个类 Car 和 Motorbike 从 Vehicle 类继承 并在这两个类中实现 NoOfWheels 方法。在 Car 类中 应当显示“四轮车”信息 而在 Motorbike 类中 应当显示“双轮车”信息。创建另一个带 main 方法的类 在该类中创建 Car 和 Motorbike 的实例 并在控制台中显示消息。
13. 『接口』：创建一个名称为 Vehicle 的接口 在接口中添加两个带有一个参数的方法 start()和 stop()。在两个名称分别为 Bike 和 Bus 的类中实现 Vehicle 接口。创建一个名称为 interfaceDemo 的类 在 interfaceDemo 的 main()方法中创建 Bike 和 Bus 对象 并访问 start()和 stop()方法。
14. 『接口』：创建一个名称为 Vehicle 的接口 在接口中添加两个带有一个参数的方法 start()和 stop()。在两个名称分别为 Bike 和 Bus 的类中实现 Vehicle 接口。创建一个名称为 interfaceDemo 的类 在 interfaceDemo 的 main()方法中创建 Bike 和 Bus 对象 并访问 start()和 stop()方法。
15. 『抽象类、继承、接口综合』：设计一个系统 XXX 门的实现过程 流程 设计一张抽象的门 Door 那么对于这张门来说 就应该拥有所有门的共性 开门 openDoor() 和关门 closeDoor() 然后对门进行另外的功能设计,防盗--theftproof()、防水--waterproof()、防弹--bulletproof()、防火、防锈…… 要求 利用继承、抽象类、接口的知识设计该门。
16. 『抽象类、继承、接口综合』：设计一个系统 xxx 纯净水生产线 目前流程是 从某个地方把水取出来 然后经过缓冲 过滤 加热和放糖的步骤 abstract 水{ public void 水(); } interface 过滤{} interface 缓冲{} interface 加热{} interface 放糖{} class 纯净水 1 extends 水 imps 过滤,缓冲{} class 纯净水 2 extends 水 imps 缓冲{} class 纯净水 2 extends 水 imps 过滤{}
