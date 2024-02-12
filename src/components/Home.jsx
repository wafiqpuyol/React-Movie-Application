import Sidebar from "../templates/Sidebar"
import TopNav from "../templates/TopNav"


const Home = () => {
    document.title = "Patata Movie | Home"
    return (
        <>
            <Sidebar/>
            <div className="w-[80%] h-full border-l-2 border-zinc-400">
                <TopNav/>    
            </div>
        </>
    )
}

export default Home