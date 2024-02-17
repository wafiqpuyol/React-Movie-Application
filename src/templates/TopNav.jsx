import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {apiInstance} from '../utils/index'

const TopNav = () => {
    const [inputVal ,setInputVal] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    const getSearchResult =async()=> {
        const {data} = (await apiInstance.get(`search/multi?query=${inputVal}`));
        setSearchResult(data.results);
        console.log(data);
    }

    useEffect(()=> {
        if(inputVal.length <= 0) {
            setSearchResult(null)
            return ;
        }
        getSearchResult();
    }, [inputVal])

    return (
        <div className='h-[10vh] py-3'>
            <div className="relative flex items-center text-white font-semibold ml-44 bg-zinc-900/50 px-4 rounded-xl w-[50%]">
                <img src="src/assets/search-line.svg" alt="" className="w-8"/>
                <input type="text" placeholder="search anything" value={inputVal} 
                className="w-full py-3 px-8 text-lg bg-transparent outline-none border-0 rounded-lg"
                onChange={(e)=> setInputVal(e.target.value)}/>
                {inputVal.length > 0 && <img src="src/assets/close-circle-fill.svg" alt="" className="w-5 mr-2" onClick={()=> setInputVal("")}/>}
            </div>

           {searchResult && searchResult.length > 0  && <div className="bg-white max-h-[50vh] rounded-lg overflow-y-auto absolute top-[10%] right-[19%] w-[40%]">
               {searchResult.map(t => 
                <div className="flex items-center justify-center bg-red-100 px-16 py-6 my-2" key={t.id}>
                <Link className=" w-full flex items-center gap-9">
                    <img src={t?.poster_path || t?.profile_path ? `https://image.tmdb.org/t/p/w500${t?.poster_path || t?.profile_path }` : "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"} alt="" className="w-12 h-15 rounded-lg"/>
                    <span>{t?.name || t?.original_title}</span>
                </Link>
                <span className="bg-green-400 px-4 py-[0.1rem] rounded-lg font-bold">{t?.media_type}</span>
            </div>) }
            </div>}
        </div>
    )
}

export default TopNav