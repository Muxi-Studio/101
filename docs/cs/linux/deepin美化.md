## 解决 Deepin 桌面下 Office 图标

> https://jlice.top/p/7t7af/

```bash
$ sudo rm /usr/share/mime/packages/wps-office-*.xml
$ sudo update-mime-database /usr/share/mime
```

## deepin 安装 vscode1.25，文件夹默认为 vscode 打开

`xdg-mime default dde-file-manager.desktop inode/directory`

## vim 配置

~/.vimrc
set clipboard=unnamed
