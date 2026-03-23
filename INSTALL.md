# 赛博朋克博客升级指南

## 已完成的配置

### 1. 添加的依赖
- jekyll-lunr-search: 全站搜索功能
- jekyll-spark: 网格组件库

### 2. 修改的配置文件
- `_config.yml`: 更新为主题为"NEON-CYBER"
- `Gemfile`: 添加了搜索插件
- `404.md`: 添加了赛博朋克风格的错误页面

### 3. 新增的样式文件
- `assets/styles.cyberpunk.scss`: 完整的赛博朋克主题样式

## 安装步骤

### 1. 安装Ruby和Jekyll
```bash
# macOS使用Homebrew安装
brew install ruby
gem install jekyll bundler

# 或者使用rbenv/rbenv-ruby安装
rbenv install 3.1.0
```

### 2. 安装依赖
```bash
bundle install
```

### 3. 启动开发服务器
```bash
bundle exec jekyll serve
```

### 4. 访问网站
打开浏览器访问: `http://localhost:4000`

## 写博客指南

### 创建新文章
在 `_posts` 目录下创建新文件，命名格式: `YYYY-MM-DD-文章标题.md`

示例:
```markdown
---
title: "我的第一篇赛博朋克博客"
date: 2026-03-24
excerpt: "这是我的第一篇博客文章"
categories: ["tech", "life"]
---

# 开始写作

这里是你的博客内容...

使用Markdown语法进行编写。

**支持的功能:**
- Markdown语法
- 代码高亮
- 代码块
- 图片
- 链接
```

### 文章结构
- `title`: 文章标题（必填）
- `date`: 发布日期（必填）
- `excerpt`: 文章摘要（可选）
- `categories`: 文章分类（可选）
- `tags`: 文章标签（可选）

### Markdown技巧
- 标题: `# 一级标题 ## 二级标题`
- 粗体: `**粗体**`
- 斜体: `*斜体*`
- 代码: `代码内容`
- 代码块: ```语言 ``` 
- 链接: [链接文字](URL)
- 图片: ![描述](图片URL)
- 列表: `- 项目1`
- 引用: `> 引用内容`

## 搜索功能

搜索功能已集成，使用Lunr.js实现。访问 `/search` 页面可以使用。

## 404错误页面

当访问不存在的页面时，会显示赛博朋克风格的404页面。

## 自定义配置

### 修改主题颜色
编辑 `assets/styles.cyberpunk.scss` 中的CSS变量:
```css
:root {
  --cyber-primary: #00ff9d;      /* 主色调 */
  --cyber-secondary: #bd00ff;    /* 次色调 */
  --cyber-bg: #0a0a0a;          /* 背景色 */
  --cyber-text: #ffffff;        /* 文字色 */
}
```

### 修改网站信息
编辑 `_config.yml`:
```yaml
title: "NEON-CYBER"              # 网站标题
url: "https://yourdomain.com"    # 网站URL
description: "你的博客描述"      # 博客描述
```

### 添加文章分类
在 `_config.yml` 中添加:
```yaml
collections:
  posts:
    output: true
```

### 自定义导航
编辑 `_config.yml` 的 `navigation_header` 部分:
```yaml
navigation_header:
- title: 首页
  url: /
- title: 博客
  url: /blog/
- title: 关于
  url: /about/
```

## 发布到GitHub Pages

1. 推送到GitHub仓库
```bash
git add .
git commit -m "Upgrade to cyberpunk theme"
git push
```

2. 启用GitHub Pages
   - 进入GitHub仓库设置
   - Pages -> Source选择main分支
   - 点击Save

3. 等待部署完成（通常1-2分钟）

## 常见问题

### Q: bundle install超时怎么办？
A: 使用 `gem install jekyll jekyll-lunr-search jekyll-spark` 单独安装插件

### Q: 如何修改字体？
A: 在 `_config.yml` 的 `fonts` 部分修改font_urls

### Q: 如何添加评论功能？
A: 在 `_config.yml` 中取消disqus的注释并填入你的Disqus ID

### Q: 如何修改网站图标？
A: 替换 `assets/logos/logo.svg` 和相关的PNG文件

## 测试命令

```bash
# 预览
bundle exec jekyll serve

# 生成静态文件
bundle exec jekyll build

# 检查配置
bundle exec jekyll doctor

# 验证Markdown语法
bundle exec jekyll doctor
```

## 注意事项

1. 现有的文章保留不变
2. 所有配置文件都已更新
3. 搜索功能已集成
4. 404页面已优化
5. 所有文章使用Markdown编写

祝写作愉快! 🚀