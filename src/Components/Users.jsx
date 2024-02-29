import { useEffect, useState} from "react"
import Button from "./Button"
import axios from 'axios'
import { useNavigate} from "react-router-dom"
import { userRoutes , accountRoutes , backEndUrls } from "../constants"
const backEndUrl = (process.env.NODE_ENV === 'production') ? backEndUrls.production : backEndUrls.development; //to intialize process env , set node:true in eslint.cjs file
export default function Users({currentUser}){
    const [users , setUsers] = useState([])
    const [filters , setFilters] = useState("")

    useEffect(()=>{
        let filterUserUrl = backEndUrl+userRoutes.module+userRoutes.endpoint.Bulk;
         axios.get(`${filterUserUrl}?filter=`+filters)
        .then((users)=>{
            setUsers(users.data.data)
        })
    },[filters])
    return <>
        <div className="flex text-lg mt-6 ml-2">Users</div>
        <div className="my-2">
            <input type="text" placeholder="Search Users...." className="w-full px-2 py-1 border rounded border-slate-200" onChange={function (e){
                setFilters(e.target.value);
            }}></input>
        </div>
        <div>
            {users.map((user) => {
                if(user.userName!=currentUser.userName){
                   return <User currentUser = {currentUser} user={user}  key={user.userId} />
                }
            })}
        </div>
    </>
}

function User({currentUser,user}){
    const navigate = useNavigate()
    return <div className="flex justify-between">
       <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful mr-4">
            <Button onClick={()=>{
                navigate("/send?to="+user.userId+"&name="+user.firstName+"&from="+currentUser._id)
            }} text={"Send Money"} />
        </div>
    </div>
}