# SwipeMenu React

[English](./README.md)

一个简单的React侧滑菜单组件，支持移动端侧滑菜单和PC端hover弹出菜单。
[在线体验](https://ferretangel.github.io/swipe-menu-react/)

## 安装

```bash
npm install swipe-menu-react
# 或
yarn add swipe-menu-react
# 或
pnpm add swipe-menu-react
```


### ⚠在tailwind.config.ts中 (v3)
```js
import type { Config } from "tailwindcss";
export default {
  content: [
    ...
    "./node_modules/swipe-menu-react/dist/**/*.{js,ts,jsx,tsx}", // ⚠添加这一行
  ],
  ...
} satisfies Config;
```
### ⚠在index.css中 (v4)
```js
@import "tailwindcss";
@source '../node_modules/swipe-menu-react/dist/**/*.{js,ts,jsx,tsx}'; // ⚠添加这一行
```

## 特性

- 触屏设备上通过滑动显示菜单
- PC设备上通过鼠标悬停显示菜单
- 可自定义样式
- 内置Tailwind CSS，无需额外配置

## 示例用法

```tsx
import { SwipeMenu } from 'swipe-menu-react';
import { Icon } from "@iconify/react";

function App() {
  return (
    <SwipeMenu
      className="w-md gap-1 p-1"
      asideClassName="flex items-center gap-1"
      maxWidth="6rem"
      aside={
        <>
          <button className="text-blue-500 text-2xl">
            <Icon icon="lucide:edit" />
          </button>
          <button className="text-red-500 text-2xl">
            <Icon icon="lucide:trash-2" />
          </button>
        </>
      }>
      <button className="truncate w-full h-full text-start">
        A Simple Description to test the swipe menu
      </button>
    </SwipeMenu>
  );
}
```

## API

### SwipeMenu 组件

| 属性 | 类型 | 默认值 | 说明 |
|------|------|-------|------|
| children | React.ReactNode | - | 主要内容 |
| aside | React.ReactNode | - | 滑动显示的侧边内容 |
| maxWidth | string | '18rem' | 侧边内容最大宽度 |
| className | string | - | 组件根元素的额外类名 |
| mainClassName | string | - | 主内容区域的额外类名 |
| asideClassName | string | - | 侧边内容区域的额外类名 |

## 许可证

MIT 