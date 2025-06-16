import { ModeToggle } from "./components/mode-toggle"

function App() {
  return (
    <div className="w-full h-screen bg-zinc-100 dark:bg-zinc-900">
      <div className="flex flex-col justify-end p-4">
        <div className="header flex justify-between">
          <p className="text-2xl font-bold text-lime-500">shadcn-tailwind-theme-switcher</p>
          <ModeToggle />
        </div>
        <div className="content flex flex-col gap-4">
          <h1 className="mt-10 text-3xl font-bold text-lime-900 dark:text-lime-500">Hello world!</h1>
          <div className="menu">首页</div>
          <div className="color">颜色</div>
          <div className="w-[139px] h-[77px] bg-[#165DFF]"></div>
          <div className="w-32 h-32 bg-blue-500 dark:bg-green-500"></div>
          <div className="red p-1">红色</div>
        </div>
        
      </div>  
    </div>
  )
}

export default App
