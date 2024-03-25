## 解决Deepin桌面下Office图标
> https://jlice.top/p/7t7af/

```bash
$ sudo rm /usr/share/mime/packages/wps-office-*.xml  
$ sudo update-mime-database /usr/share/mime
```

## deepin 安装vscode1.25，文件夹默认为vscode打开
`xdg-mime default dde-file-manager.desktop inode/directory`

## vim配置

~/.vimrc
set clipboard=unnamed
