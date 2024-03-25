# Linux 常用命令大全 2

## 目录结构

**ls [OPTION]... [FILE]... 列出目录内容**

当执行 ls 命令时，默认显示的只有非隐藏文件的文件名、以文件名进行排序及文件名代表的颜色显示。当不加参数时，默认列出当前目录的列表信息。

```
-a：--all的缩写，显示所有的文件，包括隐藏文件(以.开头的文件)
-A：--almost-all的缩写，显示所有的文件，包括隐藏文件，但不包括表示当前目录.和上级目录..这两个文件。
-h：将文件内容大小以GB、KB等易读的方式显示
-l：列出长数据串，显示出文件的属性与权限等数据信息(常用)  其中时间为ctime
-d：--directory的缩写，仅列出目录本身，而不是列出目录里的内容列表
```

**tree 以树状图列出当前目录结构**

## 磁盘管理

**df [OPTION] [FILE] 显示文件系统（某一分区）磁盘使用量**

```
-a  列出所有挂在的文件系统
-t  限制列出文件系统的类型  例如 ext4
-h  使用人类可读的格式
-T  显示文件系统的形式
例如：
df /etc/passwd  -hT  查看/etc/passwd文件所在的文件系统，显示文件系统的类型，列出相关信息
df /dev/sda1 -h
df / -h
df -aT |grep sd
```

**du [OPTION]... [FILE]... 显示目录或文件的大小**  
_如果[FILE]为文件，则显示文件的大小_  
_如果[FILE]为文件夹，则列出所有子文件夹，并分别统计文件夹大小（计算了文件，但默认不列出）_

```
-a  列出所有文件（包括文件和文件夹）
-h  使用人类可读的格式
-s 或 --summarize 仅显示总计（不显示子文件夹）
例如：
du -sh /etc   显示/etc 文件夹的大小
du -h /etc/passwd   显示某个文件的大小
du -ah /var/log | sort -h  列出/var/log下所有文件和文件夹的大小，并从小到大排序
```

**mount [-t vfstype] [-o options] device dir**

-t vfstype 指定文件系统的类型，通常不必指定，mount 会自动选择正确的类型。

> 光盘或光盘镜像：iso9660
> DOS fat16 文件系统：msdos
> Windows 9x fat32 文件系统：vfat
> Windows NT ntfs 文件系统：ntfs
> Mount Windows 文件网络共享：smbfs
> UNIX(LINUX) 文件网络共享：nfs

-o options 主要用来描述设备或档案的挂接方式。

```
loop：用来把一个文件当成硬盘分区挂接上系统
ro：采用只读方式挂接设备
rw：采用读写方式挂接设备
iocharset：指定访问文件系统所用字符集
```

--bind 建立两个目录的映射关系（完全同步）

> 有时候需要在一个目前下，映射另一个目录下的内容。或者在开通 FTP 账号的时候，两个目录不在一起，而又需要可以在一个账号下访问这两个目录。第一种方法就是像 Server-U 一样添加多个目录，另一种就是建立两个目录的映射。  
> 我们可以使用 mount --bind 源目录 映射到的目标路径  
> 如： mount --bind /www/dir1 /www/xxr.so/dir2  
> /www/dir1 为源目录  
> /www/xxr.so/dir2 为需要映射到的目录。  
> 注意： dir2 目录必须是已经创建的目录，如果 dir2 目录不存在是无法完成操作的。  
> 当我们执行完上面的操作后我们可在 dir2 中看到 dir1 中的所有内容，如果我们对 dir2 中的内容进行修改或增删那么 dir1 中的内容也会跟着变化。因为 dir2 中其实并没有内容。他的所有内容都是映射自 dir1，你看到内容也都是 dir1k 中的内容。  
> 内容来自 CSDN https://blog.csdn.net/hotlinhao/article/details/8958704

**umount [FILE_SYS]**

下面两条命令分别通过设备名和挂载点卸载文件系统，同时输出详细信息：

```
# umount -v /dev/sda1          通过设备名卸载
/dev/sda1 umounted
# umount -v /mnt/mymount/      通过挂载点卸载
/tmp/diskboot.img umounted
```

**sync**

Linux sync 命令用于数据同步,sync 命令是在关闭 Linux 系统时使用的。  
Linux 系统中欲写入硬盘的资料有的时候会了效率起见，会写到 filesystem buffer 中，这个 buffer 是一块记忆体空间，如果欲写入硬盘的资料存于此 buffer 中，而系统又突然断电的话，那么资料就会流失了，sync 指令会将存于 buffer 中的资料强制写入硬盘中。

## 磁盘分区

**fdisk [options] [device] 操作硬盘分区表（MBR）** 【过时技术】，不推荐使用

```
-l 列出指定设备的分区表
例如：
sudo fdisk -l /dev/sda 查看sda硬盘上的分区表
sudo fdisk -l  列出所有设备上的分区表（/proc/partitions）
sudo fdisk /dev/sda    根据提示操作，对sda硬盘分区
```

**gdisk [-l] [device] 操作硬盘分区表（GPT）**

推荐使用 GUID 磁盘分区表，操作方式与 fdisk 类似  
`-l    列出指定设备的分区表`

**parted [options] [device [command [options...]...]] 分区**

```
-l --list 打印出所有block设备的分区信息
-m --machine 打印出方便机器解析的输出
-s --script 不进入用户交互模式
-a --alignment 对齐分区
```

## 文件转换

**dd [option] 读取、转换并输出数据**

```
if=文件名：输入文件名，缺省为标准输入。即指定源文件。
of=文件名：输出文件名，缺省为标准输出。即指定目的文件。
bs=bytes：同时设置读入/输出的块大小为bytes个字节
count=blocks：仅拷贝blocks个块，块大小等于ibs指定的字节数。
```

实例：

```
1.将本地的/dev/hdb整盘备份到/dev/hdd

dd if=/dev/hdb of=/dev/hdd

2.将/dev/hdb全盘数据备份到指定路径的image文件

dd if=/dev/hdb of=/root/image

注意！ 用dd备份磁盘生成的文件和源磁盘总空间差不多大

3.备份磁盘开始的512个字节大小的MBR信息到指定文件

dd if=/dev/hda of=/root/image count=1 bs=512

4.增加swap分区文件大小

第一步:创建一个大小为256M的文件:
dd if=/dev/zero of=/swapfile bs=1024 count=262144
第二步:把这个文件变成swap文件:
mkswap /swapfile
第三步:启用这个swap文件:
swapon /swapfile
第四步:编辑/etc/fstab文件,使在每次开机时自动加载swap文件:
/swapfile swap swap default 0 0
```
