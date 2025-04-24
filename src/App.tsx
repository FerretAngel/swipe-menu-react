import SwipeMenu from "swipe-menu-react";
import { Icon } from "@iconify/react";
function App() {
  return (
    <main className="w-[100dvw] h-[100dvh] flex flex-col gap-1 justify-center items-center">
      {new Array(4).fill(0).map((_, index) => (
        <SwipeMenu
          key={index}
          className="w-md max-w-full gap-1 p-1"
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
            A simple description to test the swipe menu.
          </button>
        </SwipeMenu>
      ))}
    </main>
  );
}

export default App;
