# Ubuntu18.04 配置(2)

## 用户界面配置+美化桌面环境

### Tweaks 修改界面

安装 tweak `sudo apt-get install ubuntu-tweak`

- 修改字体大小
- 整体缩放
- 桌面图标（家目录、回收站等）
- 主题样式
- gnome-shell 扩展

安装插件扩展 `sudo apt install gnome-shell-extensions`

- Dash to panel 或 Dash to dock 修改 Dock 栏样式

### 微软雅黑字体

网上下载 msyh.ttf 安装  
设置浏览器字体为微软雅黑  
终端中文字体解决
https://gist.github.com/lihk11/23fd0c2e3f1bff966269dbeb73aaab13

### 文件浏览器设置---总是显示路径

`gsettings set org.gnome.nautilus.preferences always-use-location-entry true`

### 快捷键失效问题

注销、锁定后再次进入界面 重启 gnome Alt+F2 输入 r

### 显示休眠、睡眠按钮

--- 安装 suspend button 插件
https://askubuntu.com/questions/967205/where-is-the-suspend-hibernate-button-in-gnome-shell

--- 安装 Hibernate 插件
http://ubuntuhandbook.org/index.php/2018/05/add-hibernate-option-ubuntu-18-04/

> What is the difference between Hibernate and Suspend？

> Suspend does not turn off your computer. It puts the computer and all peripherals on a low power consumption mode. If the battery runs out or the computer turns off for some reason, the current session and unsaved changes will be lost.

> Hibernate saves the state of your computer to the hard disk and completely powers off. When resuming, the saved state is restored to RAM.

设置浅休眠时 不锁定
`gsettings set org.gnome.desktop.screensaver ubuntu-lock-on-suspend false`

## 终端大小写不敏感

编辑~/.inputrc（没有的话，就新建一个），在最后加一行：
set completion-ignore-case on
保存，重新打开终端就可以了。

## 自定义 APP

https://askubuntu.com/questions/403766/duplicate-icons-for-manually-created-gnome-launcher-items
https://blog.csdn.net/yanxiangtianji/article/details/81083299

## 其他问题

锁定后 重启 gnome-shell 以恢复自定义快捷键  
https://askubuntu.com/questions/455301/how-to-restart-gnome-shell-after-it-became-unresponsive-freeze/496999
https://askubuntu.com/questions/92218/how-to-execute-a-command-after-resume-from-suspend

sublime 输入中文问题  
https://github.com/lyfeyaj/sublime-text-imfix
