const rootPath = require('path').dirname(__dirname);
const { getNavConfig } = require("./utils/handleNav");

// 需要排除的一些目录
const ignoreDirs = ["node_modules", "assets", "public", ".vuepress", "code", ".obsidian", "utils"];

// 显示子sub的内容
const showSubNavCtx = ['其他', '工具使用', 'Vue', '设计模式', '前端工程化','计算机网络']

module.exports = {
  // base: '/blog/',
  lang: 'zh-cn',
  title:'Code More Create',
  // 在使用 vuepress-vite 包的时候，你可以忽略这个字段，因为 Vite 是默认打包工具
  bundler: '@vuepress/bundler-vite',
  // Vite 打包工具的配置项
  bundlerConfig: {
    // 查看下方
  },
  themeConfig: {
    logo: 'logo.jpg',
    navbar: getNavConfig(rootPath, ignoreDirs, showSubNavCtx), // 自动生成导航栏配置
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    displayAllHeaders: true,
    lastUpdated: true, // string | boolean
    lastUpdatedText: '最后更新时间',
    contributorsText:'作者',
    smoothScroll: true, // 页面滚动效果
    repo: 'https://github.com/Merlin218',
    editLinkText:'更正错误',
    docsRepo: 'https://github.com/Merlin218/Merlin218.github.io',
    docsBranch: 'master',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',
  },
};