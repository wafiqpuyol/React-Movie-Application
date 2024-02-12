// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/Error";
import Sidebar from "./templates/Sidebar";

const router =createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    errorElement:<Error/>
  },
])

function App() {
  return (
    <div className="w-screen h-screen flex bg-[#1F1E24]">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
