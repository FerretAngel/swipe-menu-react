import { cn } from "../../utils";
export interface SwipMenuProps {
  className?: string;
  mainClassName?: string;
  asideClassName?: string;
  children?: React.ReactNode;
  aside?: React.ReactNode;
  maxWidth?: string;
}

export default function SwipeMenu({
  className,
  mainClassName,
  asideClassName,
  children,
  aside,
  maxWidth = "18rem",
}: SwipMenuProps) {
  return (
    <li
      className={cn(
        "flex overflow-x-hidden [@media(pointer:coarse)]:overflow-x-auto scrollbar-none snap-x snap-mandatory",
        "group/item",
        className
      )}
      style={{
        scrollbarWidth: "none",
        // @ts-ignore
        "--max-width": maxWidth,
      }}>
      <main
        className={cn(
          "[@media(pointer:coarse)]:flex-none w-full h-full snap-center",
          "[@media(pointer:fine)]:flex-1 [@media(pointer:fine)]:max-w-[100%] [@media(pointer:fine)]:group-hover/item:max-w-[calc(100%-var(--max-width))] transition-all duration-200",
          mainClassName
        )}>
        {children}
      </main>
      <aside
        className={cn(
          "[@media(pointer:coarse)]:flex-none [@media(pointer:coarse)]:snap-end ",
          "[@media(pointer:fine)]:max-w-0 [@media(pointer:fine)]:overflow-hidden",
          "[@media(pointer:fine)]:group-hover/item:max-w-[var(--max-width)] transition-all duration-200",
          asideClassName
        )}>
        {aside}
      </aside>
    </li>
  );
}
