import SwipeMenu from "./components/SwipeMenu";
import { Icon } from "@iconify/react";
function App() {
  return (
    <main className="w-[100dvw] h-[100dvh] grid place-items-center">
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
    </main>
  );
}

export default App;
