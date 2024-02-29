import { useEffect ,useState} from "react";
import AppBar from "../Components/AppBar";
import DisplayBalance from "../Components/DisplayBalance";
import Users from "../Components/Users";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { userRoutes , accountRoutes , backEndUrls} from "../constants";
const backEndUrl = (process.env.NODE_ENV === 'production') ? backEndUrls.production : backEndUrls.development; //to intialize process env , set node:true in eslint.cjs file

export default function Dashboard(){
    const [currentUser,setCurrentUser] = useState({})
    const [balance,setBalance]= useState(0)
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    useEffect(()=>{
        const username = localStorage.getItem("username")
        let userDetailsURL = backEndUrl+userRoutes.module+userRoutes.endpoint.UserDetails
        axios.post(userDetailsURL,{username},{
            headers:{
            authorization:"Bearer "+ token
        }}).then(async (resUser)=>{
            console.log(resUser.data.data)
            setCurrentUser(resUser.data.data)
            if(resUser.data.data._id){
                let payload = {
                    userId: resUser.data.data._id
                }
                console.log(payload)
                let accountBalanceURL = backEndUrl+accountRoutes.module+accountRoutes.endpoint.Balance
                await axios.post(accountBalanceURL,payload).then((userAccount)=>{
                    console.log(userAccount.data.data.balance);
                    setBalance(userAccount.data.data.balance)
                })  
            }
        }).catch((error)=>{
            console.log(error)
            throw error;
        })
    },[token])
    if(token){
        return <div>
        <AppBar name={localStorage.getItem("username")}></AppBar>
        <DisplayBalance balance={balance}></DisplayBalance>
        <Users currentUser = {currentUser}></Users> 
    </div>
    }else{
        return navigate("/signin")
    }
}
