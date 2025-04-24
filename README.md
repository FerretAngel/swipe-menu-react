# SwipeMenu React

[中文文档](./README.zh-CN.md)

A simple React swipe menu component that supports touch screens and mouse operations.

## Installation

```bash
npm install swipe-menu-react
# or
yarn add swipe-menu-react
# or
pnpm add swipe-menu-react
```
### ⚠ In tailwind.config.ts (v3)
```js
import type { Config } from "tailwindcss";
export default {
  content: [
    ...
    "./node_modules/swipe-menu-react/dist/**/*.{js,ts,jsx,tsx}", // ⚠ Add this line
  ],
  ...
} satisfies Config;
```
### ⚠ In index.css (v4)
```js
@import "tailwindcss";
@source '../node_modules/swipe-menu-react/dist/**/*.{js,ts,jsx,tsx}'; // ⚠ Add this line
```

## Features

- Display menu by swiping on touch devices
- Display menu by mouse hover on PC devices
- Customizable styles
- Built-in Tailwind CSS, no additional configuration needed

## Example Usage

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

### SwipeMenu Component

| Property | Type | Default | Description |
|------|------|-------|------|
| children | React.ReactNode | - | Main content |
| aside | React.ReactNode | - | Side content shown when swiped |
| maxWidth | string | '18rem' | Maximum width of side content |
| className | string | - | Additional class name for the root element |
| mainClassName | string | - | Additional class name for the main content area |
| asideClassName | string | - | Additional class name for the side content area |

## License

MIT
