import { JSX } from 'react/jsx-runtime';

declare function SwipeMenu({ className, mainClassName, asideClassName, children, aside, maxWidth, }: SwipMenuProps): JSX.Element;
export default SwipeMenu;

export declare interface SwipMenuProps {
    className?: string;
    mainClassName?: string;
    asideClassName?: string;
    children?: React.ReactNode;
    aside?: React.ReactNode;
    maxWidth?: string;
}

export { }
