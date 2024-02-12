import { NavLink } from 'react-router-dom'
import {SidebarItems} from '../constant/index'

const Sidebar = () => {
  return (
    <div className="w-[20%] h-full p-8 text-white">
        <div className="text-3xl font-extrabold flex gap-2">
            <img src="/src/assets/tv.svg" className="w-7"/>
            <span>Patata Flix</span>
        </div>

        <nav className="mt-10">
          <h1 className="font-bold text-xl">New Feeds</h1>
          <div className='flex flex-col gap-5 mt-10 pl-2'>
            {SidebarItems.map((t)=> (
              <div key={t.id} className='flex gap-2 hover:bg-[#6556CD] duration-200 py-4 px-3 rounded-lg'>
                <img src={t.icon} alt="" className='w-5'/>
                <NavLink to={`/${t.text}`} className='text-zinc-300 font-medium text-[16px] w-full'>{t.text}</NavLink>
              </div>
            ))}
            
          </div>
        </nav>
    </div>
  )
}

export default Sidebar