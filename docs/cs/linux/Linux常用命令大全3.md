# Linux 常用命令大全 3

首先要弄清两个概念：打包和压缩。打包是指将一大堆文件或目录变成一个总的文件；压缩则是将一个大的文件通过一些压缩算法变成一个小文件。  
为什么要区分这两个概念呢？这源于 Linux 中很多压缩程序只能针对一个文件进行压缩，这样当你想要压缩一大堆文件时，你得先将这一大堆文件先打成一个包（tar 命令），然后再用压缩程序进行压缩（gzip bzip2 命令）。

> 参考 http://man.linuxde.net/tar

## 打包

tar (选项) (参数)

```
-c  --create：建立新的备份文件
-t  --list：列出备份文件的内容；
-z  --gzip或--ungzip：通过gzip指令处理备份文件；
-f   <备份文件>或--file=<备份文件>：指定备份文件；
-v  --verbose：显示指令执行过程；
-r   ：添加文件到已经压缩的文件；
-x   ：从备份文件中还原文件；
-p   ：用原来的文件权限还原文件；
```

实例：  
**将文件全部打包成 tar 包：**

```
tar -cvf log.tar log2012.log    仅打包，不压缩！
tar -zcvf log.tar.gz log2012.log   打包后，以 gzip 压缩
tar -jcvf log.tar.bz2 log2012.log  打包后，以 bzip2 压缩
```

在选项 f 之后的文件档名是自己取的，我们习惯上都用 .tar 来作为辨识。 如果加 z 选项，则以.tar.gz 或.tgz 来代表 gzip 压缩过的 tar 包；如果加 j 选项，则以.tar.bz2 来作为 tar 包名。

**查阅上述 tar 包内有哪些文件：**  
`tar -ztvf log.tar.gz`  
由于我们使用 gzip 压缩的 log.tar.gz，所以要查阅 log.tar.gz 包内的文件时，就得要加上 z 这个选项了。

**将 tar 包解压缩：**  
`tar -zxvf /opt/soft/test/log.tar.gz`  
在预设的情况下，我们可以将压缩档在任何地方解开的

**只将 tar 内的部分文件解压出来：**  
`tar -zxvf /opt/soft/test/log30.tar.gz log2013.log`

**其实最简单的使用 tar 就只要记忆底下的方式即可：**

```
压　缩：tar -jcv -f filename.tar.bz2 要被压缩的文件或目录名称
查　询：tar -jtv -f filename.tar.bz2
解压缩：tar -jxv -f filename.tar.bz2 -C 欲解压缩的目录
```

## 压缩

**gzip 命令**用来压缩文件。  
gzip 是个使用广泛的压缩程序，文件经它压缩过后，其名称后面会多处“.gz”扩展名。

```
-d或--decompress或----uncompress 　解开压缩文件。
-l或--list 　列出压缩文件的相关信息。
-v或--verbose 　显示指令执行过程。
```

## 打包同时压缩

**zip 命令**可以用来解压缩文件，或者对文件进行打包操作。zip 是个使用广泛的压缩程序，文件经它压缩后会另外产生具有“.zip”扩展名的压缩文件。  
zip(选项)(参数)

```
-q：不显示指令执行过程；
-r：递归处理，将指定目录下的所有文件和子目录一并处理；
```

实例  
将/home/Blinux/html/这个目录下所有文件和文件夹打包为当前目录下的 html.zip：  
`zip -q -r html.zip /home/Blinux/html`

**unzip 命令**用于解压缩由 zip 命令压缩的“.zip”压缩包。  
unzip(选项)(参数)

```
-l：显示压缩文件内所包含的文件；
-v：执行时显示详细的信息；
```

实例  
将压缩文件 text.zip 在当前目录下解压缩。  
`unzip test.zip`  
查看压缩文件目录，但不解压。  
`unzip -v test.zip`
