# 木犀 101

## 编写文档
首先要安装 nodejs。然后在这个仓库的目录下运行

```bash
$ pnpm install
$ pnpm run docs:dev
```

等构建完成，就可以看到类似以下输入：

```bash
  vitepress v1.0.1

  ➜  Local:   http://localhost:5173/101/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

就可以打开 http://localhost:5173/101/ ，看到我们的网站了。  
（注意：这个地址的端口可能会不一样，如果你本地的 5713 端口被占用了，会自动换成其他端口。）

然后到对应的目录下面编写文档，目录我都建好，很容易看懂。

## GitHub Pages 部署
已设置好 GitHub Actions，提交 commit 到 `master` 分支后会自动部署。
