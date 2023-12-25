### leetCode练习

##### 配置git hooks
1、`husky`（操作git钩子的工具）
```
npm install husky -D
```
2、使用（添加husky文件夹）
```
npm set-script prepare "husky install"
npm run prepare // 在这之后会生成一个husky文件夹
```
3、`commitlint`（commit 信息校验工具，不符合则报错）  
作用：通过钩子函数，判断提交的信息是否符合规范，不规范就不让提交
```
npm i @commitlint/cli @commitlint/config-conventional -D
```
4、执行以下命令，在husky文件夹下自动生成 `commit-msg` 文件
```
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```
5、`commitizen`（基于 Node.js 的 git commit 命令行工具，生成标准化的 message）
```
npm install commitizen -D
// 安装 commitizen，如此一来可以快速使用 cz 或 git cz 命令进行启动。
```
6、`cz-git`  
作用：指定提交文字规范，一款工程性更强，高度自定义，标准输出格式的 commitizen 适配器。
```
npm install cz-git -D
```
```
// package.json
"config": {
  "commitizen": {
    "path": "node_modules/cz-git"
  }
}
```
7、在项目根目录新建`commitlint.config.js`
```
MAC可以使用以下命令创建文件
echo >commitlint.config.js
```
```
// commitlint.config.js
module.exports = {
  extends: ["@commitlint/config-conventional"], // 检测规则
  rules: {},
  prompt: {
    messages: {
      type: "选择你要提交的类型 :",
      scope: "选择一个提交范围（可选）:",
      customScope: "请输入自定义的提交范围 :",
      subject: "填写简短精炼的变更描述 :\n",
      body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      footerPrefixsSelect: "选择关联issue前缀（可选）:",
      customFooterPrefixs: "输入自定义issue前缀 :",
      footer: "列举关联issue (可选) 例如: #31, #I3244 :\n",
      confirmCommit: "是否提交或修改commit ?",
    },
    types: [
      { value: "feat: 特性", name: "特性: 🚀 新增功能", emoji: "🚀" },
      { value: "fix: 修复", name: "修复: 🧩 修复缺陷", emoji: "🧩" },
      { value: "docs: 文档", name: "文档: 📚 文档变更", emoji: "📚" },
      {
        value: "style: 格式",
        name: "格式: 🎨 代码格式（不影响功能，例如空格、分号等格式修正）",
        emoji: "🎨",
      },
      {
        value: "refactor: 重构",
        name: "重构: ♻️  代码重构（不包括 bug 修复、功能新增）",
        emoji: "♻️",
      },
      { value: "perf: 性能", name: "性能: ⚡️ 性能优化", emoji: "⚡️" },
      {
        value: "test: 测试",
        name: "测试: ✅ 添加疏漏测试或已有测试改动",
        emoji: "✅",
      },
      {
        value: "chore: 构建",
        name: "构建: 📦️ 构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）",
        emoji: "📦️",
      },
      {
        value: "ci: 集成",
        name: "集成: 🎡 修改 CI 配置、脚本",
        emoji: "🎡",
      },
      { value: "revert: 回退", name: "回退: ⏪️ 回滚 commit", emoji: "⏪️" },
      { value: "build: 打包", name: "打包: 🔨 项目打包发布", emoji: "🔨" },
    ],
    useEmoji: true,
  },
};
```
8、配置启动命令
```
npm set-script commit "git status && git add -A && git-cz"
或者手动配置
// package.json
"scripts": {
  "commit": "git status && git add -A && git-cz"
}
```
9、启动命令
```
npm run commit
```
10、查看`Commit Message`的标准格式  
Commit Message 标准格式包括三个部分：Header，Body，Footer。其中Header是必需项，Body和Footer可以省略
```
Header：<type>(<scope>): <subject>
// 空一行
<body>
// 空一行
<footer>
```