# Ubuntu 18.04 配置指南(1)

这几天都在折腾 Ubuntu，积累了一些经验，想把它记录下来分享给大家。主要包括我在使用过程中遇到的问题和解决方法，配置系统、桌面环境，还有各种界面美化、插件安装等等。  
本以为 Ubuntu18.04 会修复很多图形界面的 BUG 和设计失误，然而并没有，用了几天感觉很失望。各种小问题不断出现，极度影响用户体验。（绝大部分都是 GUI 的问题）  
下面开始进入正题～～ （本文持续更新）

## 安装过程

由于显卡驱动等问题，可能无法进入 Ubuntu 安装界面。  
在 Install Ubuntu 界面时 按“e”建进入编辑，修改倒数第二行：  
将  
`quite splash --- `  
改为  
`quite splash nomodeset`

nomodeset 的作用

> The newest kernels have moved the video mode setting into the kernel. So all the programming of the hardware specific clock rates and registers on the video card happen in the kernel rather than in the X driver when the X server starts.. This makes it possible to have high resolution nice looking splash (boot) screens and flicker free transitions from boot splash to login screen. Unfortunately, on some cards this doesnt work properly and you end up with a black screen. Adding the nomodeset parameter instructs the kernel to not load video drivers and use BIOS modes instead until X is loaded.  
> 翻译  
> 最新的内核已经把视频模式设置嵌入内核中，所以所有显卡硬件程序的指定时钟和寄存器当图形服务器启动时在内核进行而不是图形设备运行，这使得我们在启动时可以看到不闪的和高分辨率的好看的启动界面，但是，在某些视频卡它不能正常工作而现实黑屏，增加 nomodeset 参数则告诉内核不要加载显卡而用 BIOS 模式直到图形界面运行

## 配置 Ubuntu 系统

### 添加源

**什么是软件源?**  
源,在 Ubuntu 下,它相当于软件库,需要什么软件,只要记得正确的软件名就可以用命令安装

**软件源的分类**  
在 Ubuntu 中软件源其实还细分为下面两种：

- Ubuntu 官方软件源
- PPA 软件源  
  Ubuntu 官方软件源:
  Ubuntu 官方软件源中包含了 Ubuntu 系统中所用到的绝大部分的软件，它对应的源列表是 /etc/apt/sources.list。只需要修改这个文件，就能添加我们想要的源。

**一定要添加中科大的源！！！**推荐再加一个国内的源，比如阿里、网易、清华

> 参考资料 https://www.jianshu.com/p/57a91bc0c594

### sudo 免密码

在配置环境时，每次安装软件都要输密码感觉很麻烦，所以暂时取消 sudo 密码  
`$ sudo visudo`  
最后一行添加 `jzc    ALL=(ALL:ALL)NOPASSWD: ALL`

### 双击\*.sh 行为设置

为了安全，系统默认的方式是：双击\*.sh 开启编辑模式。但这样很不方便，如果要运行 shell 脚本，只能在终端里输入命令，右键菜单是找不到运行的。  
解决方法：  
任意文件夹下，菜单中选择 Edit->Preference->Behavior 选项卡，可以看到默认为 View executable text files when they are opened。把其选择为 Ask each time，之后每次鼠标点击，可以让用户选择以何种方式响应双击事件。

### grub 设置

1. 解决关机卡死的问题  
   `sudo vi /etc/default/grub`  
   `GRUB_CMDLINE_LINUX_DEFAULT="quiet splash"` -> `""` （删除引号中的内容）

2. 修改等待时间  
   `GRUB_TIMEOUT=5`

3. 保存记住上次的启动项  
   `GRUB_DEFAULT=saved`  
   `GRUB_SAVEDEFAULT=true`

### 编辑器的首选项

**设置终端的默认编辑器**  
`update-alternatives --config editor `  
**gedit 配置**  
打开 gedit，在左上角 Activities 的右边找到 gedit，右键，选择 Preference

## 软件设置

### 安装输入法 Input Method

1. 安装 fcitx
2. 设置，Language Support -> Keyboard input method system -> fcitx
3. 上网搜索 搜狗输入法 for Linux 下载安装
4. 重启
5. gnome 右上角 Keyboard -> Configure 添加 Sougou

### 科学上网

**安装 Chrome 同时保留 Firefox(很重要！！！！)**  
在抓包的时候 Chrome, Firefox 各有优缺点。

Firefox 不能翻墙问题

> Please also try setting network.proxy.socks_remote_dns to true in about:config. You can get a list of SOCKS proxies from samair. You may have to restart Firefox and also Clear Now the Cache and Cookies in Tools (Alt + T) > Clear Recent History.

下载 chrome for linux 安装包，离线安装  
pip 安装 ss 客户端配置格式如下(和服务器保持一致)

```json
{
	"server": "server_ip",
	"server_port": 30696,
	"local_port": 1080,
	"password": "password",
	"timeout": 600,
	"method": "rc4-md5"
}
```

启动 sslocal -c /home/usr/ss.json  
添加开机自启

kcptun 的安装及其配置  
略

### Git

1. 安装 git  
   `sudo apt install git`

2. 配置用户信息

```
ubuntu:~$ git config --global user.name "Your Name Here"
ubuntu:~$ git config --global user.email "youremail@address.here"
```

3. 创建秘钥文件  
   `ssh-keygen -t rsa -C "你的github账号邮箱"`  
   默认密钥文件路径在~/.ssh，id_rsa 是私钥文件，id_rsa.pub 是公钥文件

4. 将公钥添加到 Github  
   将 id_rsa.pub 文件内容全部复制  
   登陆到 GitHub 上，右上角小头像->Setting->SSH and GPG keys 中，点击 new SSH key
