import { useState } from "react"
import { Link } from "react-router-dom"

const TopNav = () => {
    const [inputVal ,setInputVal] = useState('');
    return (
        <div className='h-[10vh] py-3'>
            <div className="relative flex items-center text-white font-semibold ml-44 bg-zinc-900/50 px-4 rounded-xl w-[50%]">
                <img src="src/assets/search-line.svg" alt="" className="w-8"/>
                <input type="text" placeholder="search anything" value={inputVal} 
                className="w-full py-3 px-8 text-lg bg-transparent outline-none border-0 rounded-lg"
                onChange={(e)=> setInputVal(e.target.value)}/>
                {inputVal.length > 0 && <img src="src/assets/close-circle-fill.svg" alt="" className="w-5 mr-2" onClick={()=> setInputVal("")}/>}
            </div>

            {/* <div className="bg-white max-h-[50vh] rounded-lg overflow-y-auto absolute top-[10%] right-[19%] w-[40%]">
                <div className="flex items-center justify-center bg-red-100 px-16 py-6 my-2">
                    <Link className=" w-full">Movies</Link>
                    <img src="src/assets/arrow-right-up-line.svg" alt="" className="w-4"/>
                </div>
                
                <div className="flex items-center justify-center bg-red-100 px-16 py-6">
                    <Link className=" w-full">Movies</Link>
                    <img src="src/assets/arrow-right-up-line.svg" alt="" className="w-4"/>
                </div>
            </div> */}
        </div>
    )
}

export default TopNav