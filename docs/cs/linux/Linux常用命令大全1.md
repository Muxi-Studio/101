# Linux 常用命令大全 1

## 文件

### 文件内容查阅

1. cat [-An] [FILE1] [FILE2] ... 　输出文件内容
   ```
   -A 显示特殊字符 $行尾  ^I TAB
   -n 标出行号
   ```
2. tac 反向输出文件内容（从最后一行开始）
3. more 翻页显示
   ```
   [Enter]　下一行
   [Space]　下一页
   [q] 退出
   ```
4. less 一页一页翻动
   ```
   [pageup] [pagedown] 　翻页
   /Str 　向下搜索
   ?Str 　向上搜索
   [n] 　　搜索下一个
   [N] 　　搜索上一个
   ```
5. head [-n num] [FILE]　　取出前面几行
6. tail [-n num] [FILE]　　取出后面几行
7. od [-t TYPE] [FILE]　　输出二进制文件

### 文件内容搜索

grep 　搜索正则表达式并把匹配的行打印出来  
grep (global search regular expression(RE) and print out the line,全面搜索正则表达式并把行打印出来)是一种强大的文本搜索工具，它能使用正则表达式搜索文本，并把匹配的行打印出来。  
**正则表达式简单来说有三大流派：PCRE、BRE、ERE。grep 默认使用 BRE**

**推荐使用 Perl 正则表达式 grep -P 简洁优美，通用强大**  
关于基本、扩展正则表达式的问题参考 http://blog.51cto.com/linuxkeep/956155  
关于正则流派、引擎的问题参考 https://yelf.me/notes/computer/re/  
语法：

```
grep [OPTIONS] PATTERN [FILE...]
grep [OPTIONS] -e PATTERN ... [FILE...]
grep [OPTIONS] -f FILE ... [FILE...]
```

- 正则流派选项

```
Matcher Selection
       -E, --extended-regexp
         Interpret PATTERN as an extended regular expression (ERE, see below).
       -F, --fixed-strings
         Interpret  PATTERN as a list of fixed strings (instead of regular expressions), separated by newlines, any of which is to be matched.
       -G, --basic-regexp
          Interpret PATTERN as a basic regular expression (BRE, see below).  This is the default.
       -P, --perl-regexp
          Interpret the pattern as a Perl-compatible regular expression (PCRE).  This is experimental and grep -P  may  warn  of unimplemented features.
```

- 匹配控制选项

```
-i, --ignore-case
      Ignore case distinctions, so that characters that differ only in case match each other.
-v, --invert-match
      Invert the sense of matching, to select non-matching lines.
-e PATTERN, --regexp=PATTERN
      Use  PATTERN as the pattern.  If this option is used multiple times or is combined with the -f (--file) option, search for all patterns given.  This option can be used to protect a pattern beginning with “-”.
```

- 文件与文件夹选项

```
-r, --recursive
     Read all files under each directory, recursively, following symbolic links only if they are on the command line.  Note that if no file operand is given, grep searches the working directory.  This is equivalent to the -d recurse option.
```

### 文件搜索

1. which [-a] command 　　搜索命令程序的位置
   ```
   -a 列出所有出现的位置
   which -a ls　　搜索ls命令的位置
   ```
2. whereis [FILE] 　　搜索二进制文件、手册文件、源文件
3. locate [-ir] keyword 　　　利用数据库搜索文件
   ```
   -i  　忽略大小写的差异；
   -r  　后面可接正规表示法的显示方式
   ```
   sudo updatedb 　　更新数据库  
   updatedb：根据 /etc/updatedb.conf 的配置去搜寻系统硬盘内的档名，并升级 /var/lib/mlocate 内的数据库文件  
   locate：依据 /var/lib/mlocate 内的数据库记载，找出使用者输入的关键字档名。
4. find [PATH] [option] [action] 　　从硬盘上搜索文件（复杂）  
    与时间有关的选项：共有 -atime, -ctime 与 -mtime ，以 -mtime 说明
   ``
	-mtime  n ：n 为数字，意义为在 n 天之前的『一天之内』被更动过内容的文件；
	-mtime +n ：列出在 n 天之前(不含 n 天本身)被更动过内容的文件档名；
	-mtime -n ：列出在 n 天之内(含 n 天本身)被更动过内容的文件档名。
	-newer file ：file 为一个存在的文件，列出比 file 还要新的文件档名
	+4代表大於等於5天前的档名：`ex> find /var -mtime +4`  
	-4代表小於等於4天内的文件档名：`ex> find /var -mtime -4`  
	4则是代表4-5那一天的文件档名：`ex> find /var -mtime 4`  
	``  
    与使用者或群组名称有关的参数：
   `    -uid n ：n 为数字，这个数字是使用者的帐号 ID，亦即 UID ，这个 UID 是记录在 /etc/passwd 里面与帐号名称对应的数字。这方面我们会在第四篇介绍。
	-gid n ：n 为数字，这个数字是群组名称的 ID，亦即 GID，这个 GID 记录在/etc/group
	-user name ：name 为使用者帐号名称喔！例如 dmtsai 
	-group name：name 为群组名称喔，例如 users ；
	-nouser    ：寻找文件的拥有者不存在 /etc/passwd 的人！
	-nogroup   ：寻找文件的拥有群组不存在於 /etc/group 的文件！当你自行安装软件时，很可能该软件的属性当中并没有文件拥有者，这是可能的！在这个时候，就可以使用 -nouser 与 -nogroup 搜寻。
   `  
    与文件权限及名称有关的参数：  
    `    -name filename：搜寻文件名称为 filename 的文件；
	-size [+-]SIZE：搜寻比 SIZE 还要大(+)或小(-)的文件。这个 SIZE 的规格有：c: 代表 byte， k: 代表 1024bytes。所以，要找比 50KB还要大的文件，就是『 -size +50k 』
	-type TYPE    ：搜寻文件的类型为 TYPE 的，类型主要有：一般正规文件 (f),装置文件 (b, c), 目录 (d), 连结档 (l), socket (s),及 FIFO (p) 等属性。
	-perm mode  ：搜寻文件权限『刚好等於』 mode 的文件，这个 mode 为类似 chmod的属性值，举例来说， -rwsr-xr-x 的属性为 4755 ！
	-perm -mode ：搜寻文件权限『必须要全部囊括 mode 的权限』的文件，举例来说，我们要搜寻 -rwxr--r-- ，亦即 0744 的文件，使用 -perm -0744，当一个文件的权限为 -rwsr-xr-x ，亦即 4755 时，也会被列出来，因为 -rwsr-xr-x 的属性已经囊括了 -rwxr--r-- 的属性了。
	-perm +mode ：搜寻文件权限『包含任一 mode 的权限』的文件，举例来说，我们搜寻-rwxr-xr-x ，亦即 -perm +755 时，但一个文件属性为 -rw-------也会被列出来，因为他有 -rw.... 的属性存在！
   `
   额外可进行的动作：
   `
	-exec command ：command 为其他命令，-exec 后面可再接额外的命令来处理搜寻到的结果。
	-print        ：将结果列印到萤幕上，这个动作是默认动作！
	`
   find 的特殊功能就是能够进行额外的动作(action)。例如：  
    `sudo find /var/log -type f -name "*.gz" -exec rm -f {} \;`  
    该范例中特殊的地方有 {} 以及 \; 还有 -exec 这个关键字，这些东西的意义为：  
   {} 代表的是『由 find 找到的内容』，如上图所示，find 的结果会被放置到 {} 位置中；  
   -exec 一直到 \; 是关键字，代表 find 额外动作的开始 (-exec) 到结束 (\;) ，在这中间的就是 find 命令内的额外动作。  
   因为『 ; 』在 bash 环境下是有特殊意义的，因此利用反斜线来跳脱。

### 文件操作与管理

1. ls [-aAdfFhilnrRSt] [DIR]　　文件与目录的检阅
   ```
   -a  ：全部的文件，连同隐藏档( 开头为 . 的文件) 一起列出来(常用)
   -d  ：仅列出目录本身，而不是列出目录内的文件数据(常用)
   -h  ：将文件容量以人类较易读的方式(例如 GB, KB 等等)列出来(常用)；
   -l  ：长数据串列出，包含文件的属性与权限等等数据；(常用)
   -f  ：直接列出结果，而不进行排序 (ls 默认会以档名排序！)
   -i  ：列出 inode 号码，inode 的意义下一章将会介绍；
   -n  ：列出 UID 与 GID 而非使用者与群组的名称 (UID与GID会在帐号管理提到！)
   -R  ：连同子目录内容一起列出来，等於该目录下的所有文件都会显示出来；
   ```
2. cp [-adfilprsu] [source] [destination]　　复制
   ```
   -a  ：相当於 -pdr 的意思，至於 pdr 请参考下列说明；(常用)
   -d  ：若来源档为连结档的属性(link file)，则复制连结档属性而非文件本身；
   -f  ：为强制(force)的意思，若目标文件已经存在且无法开启，则移除后再尝试一次；
   -i  ：若目标档(destination)已经存在时，在覆盖时会先询问动作的进行(常用)
   -l  ：进行硬式连结(hard link)的连结档创建，而非复制文件本身；
   -p  ：连同文件的属性一起复制过去，而非使用默认属性(备份常用)；
   -r  ：递回持续复制，用於目录的复制行为；(常用)
   -s  ：复制成为符号连结档 (symbolic link)，亦即『捷径』文件；
   -u  ：若 destination 比 source 旧才升级 destination ！
   ```
3. rm [-fir] [FILE|DIR]　　删除
   ```
   -f  ：就是 force 的意思，忽略不存在的文件，不会出现警告信息；
   -i  ：互动模式，在删除前会询问使用者是否动作
   -r  ：递回删除啊！最常用在目录的删除了！这是非常危险的选项！！！
   ```
4. mv [-fiu] [source] [destination]　　移动、重命名
   ```
   -f  ：force 强制的意思，如果目标文件已经存在，不会询问而直接覆盖；
   -i  ：若目标文件 (destination) 已经存在时，就会询问是否覆盖！
   -u  ：若目标文件已经存在，且 source 比较新，才会升级 (update)
   ```
5. basename [path]　　获取文件名
6. dirname [path]　　获取目录名
   ```
   [root@www ~]# basename /etc/sysconfig/network
   network         <== 很简单！就取得最后的档名～
   [root@www ~]# dirname /etc/sysconfig/network
   /etc/sysconfig  <== 取得的变成目录名了！
   ```

### 文件状态

1. file [-i] [FILE]　　辨识文件类型  
   它是通过查看文件的头部信息来获取文件类型，而不是像 Windows 通过扩展名来确定文件类型的。
   ```
   -i 显示文件的多媒体类型(text/plain)，而不是更易理解的描述(UTF-8 Unicode text)
   [root@localhost ~]# file install.log
   install.log: UTF-8 Unicode text
   ```
2. stat 查看文件状态
3. touch 新建文件或修改文件时间

### 差异与校验

经常用 Linux 系统下载软件的人，一定会有一个良好的习惯：校验文件的 hash，以确定文件的完整性甚至是安全性。校验方法当前一般是 MD5，SHA1。

1. md5sum [-c] [FILE]　　 md5 校验
   ```
   -c 从文件中读取校验码和文件名进行确认
   md5sum aa
   a0a2ae54db7177569d620befdc589aff  aa
   ```
2. sha1sum [FILE]　　 sha1 校验
3. cksum [FILE]　　 CRC 校验
4. diff [FILE1] [FILE2] 　比较两个文本文件的差异  
   diff 分析两个文件，并输出两个文件的不同的行。diff 的输出结果表明需要对一个文件做怎样的操作之后才能与第二个文件相匹配。

```
我们使用diff比较他们的不同：
diff file1.txt file2.txt
输出如下结果：
2,4c2,4
< I need to run the laundry.
< I need to wash the dog.
< I need to get the car detailed.
> I need to do the laundry.
> I need to wash the car.
> I need to get the dog detailed.
我们来说明一下该输出结果的含义，要明白diff比较结果的含义，我们必须牢记一点，diff描述两个文件不同的方式是告诉我们怎么样改变第一个文件之后与第二个文件匹配。我们看看上面的比较结果中的第一行 2,4c2,4 前面的数字2,4表示第一个文件中的行，中间有一个字母c表示需要在第一个文件上做的操作(a=add,c=change,d=delete)，后面的数字2,4表示第二个文件中的行。
2,4c2,4 的含义是：第一个文件中的第[2,4]行(注意这是一个闭合区间，包括第2行和第4行)需要做出修改才能与第二个文件中的[2,4]行相匹配。
接下来的内容则告诉我们需要修改的地方，前面带 < 的部分表示左边文件的第[2,4]行的内容，而带> 的部分表示右边文件的第[2,4]行的内容，中间的 --- 则是两个文件内容的分隔符号。
```

    参考资料： https://www.cnblogs.com/wf-linux/p/9488257.html

### 权限与属性

1. chown
2. chgrp
3. chmod
4. chattr
5. lsattr
6. umask
