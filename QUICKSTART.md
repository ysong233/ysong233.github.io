# 🚀 快速开始指南

## 第一步：安装依赖

### 方式一：使用自动脚本（推荐）
```bash
./start.sh
```

### 方式二：手动安装
```bash
# 安装Jekyll和搜索插件
gem install jekyll bundler jekyll-lunr-search jekyll-spark

# 安装项目依赖
bundle install
```

## 第二步：启动博客

```bash
bundle exec jekyll serve
```

然后访问: **http://localhost:4000**

## 第三步：开始写作

### 创建新文章
```bash
# 在 _posts 目录创建新文件
# 命名格式: YYYY-MM-DD-文章标题.md

# 示例
touch _posts/2026-03-25-我的第一篇文章.md
```

### 写作模板
```markdown
---
title: "文章标题"
date: 2026-03-25
excerpt: "简短的摘要"
categories: ["分类1", "分类2"]
tags: ["标签1", "标签2"]
---

# 文章标题

这里是你的文章内容...

使用Markdown语法编写。

**粗体文本**
*斜体文本*
`代码`

代码块示例：
```javascript
console.log("Hello Cyberpunk!");
```
```

## 常用命令

```bash
# 启动开发服务器
bundle exec jekyll serve

# 生成静态文件
bundle exec jekyll build

# 清理生成文件
bundle exec jekyll clean

# 检查配置问题
bundle exec jekyll doctor

# 查看站点信息
bundle exec jekyll version
```

## 文章管理

### 已有文章
- `2016-08-27-example-post-one.md`
- `2016-08-28-example-post-two.md`
- `2016-08-29-example-post-three.md`
- `2026-03-24-欢迎使用赛博朋克主题.md` (新增测试文章)

### 创建新文章
1. 在 `_posts` 目录创建新文件
2. 遵循命名格式 `YYYY-MM-DD-文章标题.md`
3. 添加Front Matter
4. 开始编写内容

## 访问页面

- **首页**: http://localhost:4000
- **博客列表**: http://localhost:4000/blog/
- **搜索页面**: http://localhost:4000/search
- **分类页面**: http://localhost:4000/categories/

## 自定义主题

### 修改颜色
编辑 `assets/styles.cyberpunk.scss`:
```css
:root {
  --cyber-primary: #00ff9d;    /* 主色调 */
  --cyber-secondary: #bd00ff;  /* 次色调 */
  --cyber-bg: #0a0a0a;        /* 背景色 */
  --cyber-text: #ffffff;      /* 文字色 */
}
```

### 修改网站信息
编辑 `_config.yml`:
```yaml
title: "NEON-CYBER"
url: "https://yourdomain.com"
description: "你的博客描述"
```

## 故障排除

### 问题：bundle install失败
```bash
# 清理缓存
bundle clean
# 重新安装
bundle install
```

### 问题：Jekyll启动失败
```bash
# 更新Jekyll
gem update jekyll
# 清理缓存
bundle clean
# 重新安装
bundle install
```

### 问题：端口被占用
```bash
# 使用其他端口
bundle exec jekyll serve --port 4001
```

## 发布到GitHub Pages

1. 推送到GitHub:
```bash
git add .
git commit -m "升级到赛博朋克主题"
git push origin main
```

2. 在GitHub仓库设置中启用Pages

3. 等待部署完成

## 文件说明

- `INSTALL.md` - 完整安装指南
- `TEST.md` - 测试总结
- `QUICKSTART.md` - 快速开始（本文件）
- `start.sh` - 自动启动脚本
- `_config.yml` - 主配置文件
- `assets/styles.cyberpunk.scss` - 赛博朋克样式

## 支持的Markdown特性

✅ 标题（H1-H6）
✅ 粗体、斜体、删除线
✅ 代码（行内和块级）
✅ 代码高亮
✅ 链接和图片
✅ 列表（有序和无序）
✅ 引用
✅ 表格
✅ 任务列表
✅ 分隔线

## 赛博朋克特性

- 🌟 霓虹发光效果
- 💫 动画过渡
- 🎨 荧光绿和紫色配色
- 💻 代码重点展示
- 📱 响应式设计
- 🔍 全站搜索
- 🎯 404错误页面

## 下一步

1. 阅读详细文档: `INSTALL.md`
2. 查看测试总结: `TEST.md`
3. 开始创作你的第一篇文章！
4. 自定义主题样式

祝创作愉快！ 🚀✨