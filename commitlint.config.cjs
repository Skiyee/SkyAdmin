/** @type {import('cz-git').UserConfig} */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  prompt: {
    messages: {
      type: '选择你要提交的类型 :',
      scope: '选择一个提交范围（可选）:',
      customScope: '请输入自定义的提交范围 :',
      subject: '填写简短精炼的变更描述 :\n',
      body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      footerPrefixesSelect: '选择关联issue前缀（可选）:',
      customFooterPrefix: '输入自定义issue前缀 :',
      footer: '列举关联issue (可选) 例如: #1 :\n',
      confirmCommit: '是否提交或修改commit ?',
    },
    types: [
      {
        value: 'chore',
        name: '🚀 chore: 构建/依赖/工具',
        emoji: '🚀',
      },
      {
        value: 'feat',
        name: '✨ Features: 新功能',
        emoji: '✨',
      },
      {
        value: 'fix',
        name: '🐞 Bug Fix: 缺陷修复',
        emoji: '🐞',
      },
      {
        value: 'revert',
        name: '⏪️ Revert: 代码回退',
        emoji: '⏪️',
      },
      {
        value: 'perf',
        name: '🌟 Perf: 性能优化',
        emoji: '🌟',
      },
      {
        value: 'refactor',
        name: '🔃 Refactor: 代码重构',
        emoji: '🔃',
      },
      {
        value: 'docs',
        name: '📝 Docs: 文档相关',
        emoji: '📝',
      },
      {
        value: 'style',
        name: '💄 Style: 代码格式',
        emoji: '💄',
      },
      {
        value: 'test',
        name: '✅ Test: 测试用例',
        emoji: '✅',
      },
      {
        value: 'build',
        name: '📦️ Build: 构建工具',
        emoji: '📦️',
      },
      {
        value: 'ci',
        name: '🎡 CI: 持续集成',
        emoji: '🎡',
      },
    ],
    useEmoji: true,
    scopes: [
      { value: 'build', name: 'build: 构建' },
      { value: 'modules', name: 'modules: 模块' },
      { value: 'process', name: 'process: 进程' },
      { value: 'views', name: 'views: 视图' },
      { value: 'pages', name: 'pages: 页面' },
    ],
    maxHeaderLength: 72,
  },
}
