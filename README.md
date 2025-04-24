# SwipeMenu React

一个简单的React滑动菜单组件，支持触摸屏和鼠标操作。

## 安装

```bash
npm install swipe-menu-react
# 或
yarn add swipe-menu-react
# 或
pnpm add swipe-menu-react
```

## 特性

- 触摸设备上通过滑动显示菜单
- 桌面设备上通过悬停显示菜单
- 可自定义样式
- 内置Tailwind CSS，无需额外配置

## 用法

```jsx
import { SwipeMenu } from 'swipe-menu-react';
import 'swipe-menu-react/dist/index.css';

function App() {
  return (
    <ul>
      <SwipeMenu
        aside={
          <div className="swipe-menu-flex swipe-menu-h-full swipe-menu-w-[18rem] swipe-menu-items-center swipe-menu-justify-center swipe-menu-bg-red-500 swipe-menu-text-white">
            删除
          </div>
        }
      >
        <div className="swipe-menu-flex swipe-menu-h-20 swipe-menu-w-full swipe-menu-items-center swipe-menu-px-4 swipe-menu-bg-white">
          列表项内容
        </div>
      </SwipeMenu>
    </ul>
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
