#!/bin/bash

# 赛博朋克博客快速启动脚本

echo "🚀 启动赛博朋克主题博客..."
echo ""

# 检查是否安装了jekyll
if ! command -v jekyll &> /dev/null; then
    echo "❌ Jekyll未安装，正在安装..."
    gem install jekyll bundler
fi

# 检查是否安装了必需的插件
echo "📦 检查依赖..."
if ! gem list | grep -q "jekyll-lunr-search"; then
    echo "❌ jekyll-lunr-search未安装，正在安装..."
    gem install jekyll-lunr-search
fi

if ! gem list | grep -q "jekyll-spark"; then
    echo "❌ jekyll-spark未安装，正在安装..."
    gem install jekyll-spark
fi

# 安装其他依赖
echo "📦 安装项目依赖..."
bundle install

# 启动Jekyll服务器
echo "✨ 启动开发服务器..."
echo "🌐 访问: http://localhost:4000"
echo "🔍 搜索: http://localhost:4000/search"
echo "⏹️  按 Ctrl+C 停止服务器"
echo ""

bundle exec jekyll serve --host 0.0.0.0 --port 4000