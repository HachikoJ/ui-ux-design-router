# UI/UX Design Router

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
[![Showcase](https://img.shields.io/badge/Showcase-GitHub%20Pages-1f6feb)](https://hachikoj.github.io/ui-ux-design-router/)

一个面向 Codex 的 UI/UX 设计路由技能：先判断产品模式、用户任务和交互约束，再选择一条视觉方向，最后用浏览器检查和质量门禁验证结果。它把 `ui-ux-pro-max`、`awesome-design`、`DESIGN.md`、图标规则和视觉 QA 组织成一条可执行流程。

> 本项目是独立创作，不是任何上游项目的官方发行版，也不代表上游作者或组织。

## 项目入口

- GitHub 仓库：<https://github.com/HachikoJ/ui-ux-design-router>
- 在线案例：<https://hachikoj.github.io/ui-ux-design-router/>
- 引用与鸣谢：[`ACKNOWLEDGMENTS.md`](./ACKNOWLEDGMENTS.md)

## 能解决什么

- 在实现前明确产品、用户、设备优先级和 north-star action。
- 根据内容密度与使用场景选择 operational、devtool、editorial、brand、commerce、touch-first、creative 或 data-heavy 模式。
- 选择一个主视觉参考，最多配一个辅助参考，避免把多个品牌皮肤混在一起。
- 将参考转译为项目自己的 tokens、组件规则、交互状态和 Do/Don't 清单。
- 检查键盘、焦点、触控、响应式、加载、错误、恢复和 reduced-motion 状态。

## 安装

把技能目录复制到 Codex 的 skills 目录：

```bash
git clone https://github.com/HachikoJ/ui-ux-design-router.git /tmp/ui-ux-design-router
mkdir -p ~/.codex/skills
cp -R /tmp/ui-ux-design-router/ui-ux-design-router ~/.codex/skills/
```

然后在任务中使用：

```text
使用 $ui-ux-design-router，先给出 route decision，再实现并按 quality-gates.md 做浏览器检查。
```

## 目录结构

```text
ui-ux-design-router/   # 可安装的 Codex skill
showcase/              # 两个可直接打开的静态案例
ACKNOWLEDGMENTS.md     # 上游项目、研究来源与鸣谢
.github/workflows/      # GitHub Pages 部署工作流
```

## 案例

在线案例展示了同一套路由方法在两个不同产品表面的结果：

- **Aurora Field Notes**：brand / editorial，重点是叙事、信号和阅读节奏。
- **Vela A1**：commerce / object，重点是对象识别、产品细节、选择、评论和购买反馈。

案例只使用原创文案、CSS 图形和公开图片 URL，不复制上游项目的 logo、专有文案或精确布局。

## 许可证

本项目采用 [MIT License](./LICENSE)。上游项目的许可证和原始仓库地址请以 [`ACKNOWLEDGMENTS.md`](./ACKNOWLEDGMENTS.md) 记录为准；本项目不会把上游许可证误写成自己的许可证。

## 作者与联系方式

- 作者：**Wilson** · [@HachikoJ](https://github.com/HachikoJ)
- GitHub：<https://github.com/HachikoJ/ui-ux-design-router>
- 问题反馈：<https://github.com/HachikoJ/ui-ux-design-router/issues>
- 微信：`hostrow`（添加时请备注“UI/UX Design Router”）

欢迎通过 Issue 反馈路由判断、技能结构、案例交互或文档问题。请不要在 Issue 中公开 token、账号、客户资料或其他敏感信息。
