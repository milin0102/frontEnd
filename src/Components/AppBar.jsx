import { useNavigate } from "react-router-dom"
export default function AppBar({name}){
    const navigate = useNavigate()
    return <div className="flex shadow h-14 justify-between">
       <div className="flex flex-col justify-center ml-4 h-full p-2">
        <h1 className="font-sans font-semibold underline shadow-indigo-500/40 transition-all">Rewardyy</h1>
        </div>
       <div className="flex justify-between">
        <div className="flex flex-col justify-center h-full mr-4 p-2">Hola!!</div>
        <div className="flex flex-col justify-center mr-4">
            <div className="flex flex-col">
                <button className=" w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true"
                onClick={function(){
                    navigate("/signin")
                }}>LogOut</button>
            </div>  
         </div>
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
        <div className="flex flex-col justify-center h-full text-xl">{name[0]}</div>
        </div>
       </div>
    </div>
}