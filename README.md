# 王彦坤的个人博客

基于 Hexo + NexT 主题的个人博客，部署在 GitHub Pages。

## 特性

- ✅ 响应式设计（电脑/平板/手机自适应）
- ✅ 深色模式支持
- ✅ 评论系统（Giscus）
- ✅ RSS 订阅
- ✅ 站内搜索
- ✅ 代码高亮
- ✅ 阅读进度条
- ✅ 自动部署（GitHub Actions）

## 技术栈

| 组件 | 选择 |
|------|------|
| 框架 | Hexo |
| 主题 | NexT v8 (Muse) |
| 评论 | Giscus |
| 部署 | GitHub Pages |
| CI/CD | GitHub Actions |

## 快速使用

```bash
# 安装依赖
npm install

# 本地预览
npx hexo server

# 构建
npx hexo generate

# 部署
git push origin main
```

## 写新文章

```bash
npx hexo new "文章标题"
```

然后在 `source/_posts/` 目录下编辑生成的 Markdown 文件。

## 文档
 
项目总结请查看 [个人博客搭建项目总结](https://wangyankun.github.io/2026/05/05/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E6%90%AD%E5%BB%BA%E9%A1%B9%E7%9B%AE%E6%80%BB%E7%BB%93/)

## License

MIT
