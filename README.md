# 木犀101

## 编写文档

首先要安装 nodejs。然后在这个仓库的目录下运行

`yarn install`

`yarn run docs:dev`

等构建完成，就可以看到类似以下输入：

```
success [22:18:37] Build ab32fe finished in 209 ms! ( http://localhost:8080/ )
```

就可以打开 [http://localhost:8080/](http://localhost:8080/)，看到我们的网站了（注意：这个地址的端口可能会不一样，如果你本地的 8080 端口被占用了，会自动换成其他端口）。

然后到对应的目录下面编写文档，目录我都建好，很容易看懂。

## Git Page 部署

在根目录下，跑 `sh deploy.sh`
