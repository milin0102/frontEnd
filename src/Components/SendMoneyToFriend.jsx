import Heading from "./Heading";
import SubHeading from "./SubHeading";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { userRoutes , accountRoutes ,backEndUrls} from "../constants"
import {useDispatch} from 'react-redux'
import { updateBalance  ,decrementBalance} from "../features/balance/balanceSlice";

const backEndUrl = (process.env.NODE_ENV === 'production') ? backEndUrls.production : backEndUrls.development; //to intialize process env , set node:true in eslint.cjs file




export default function SendMoneyToFriend(){
    const [searchParam] = useSearchParams()
    const dispatch = useDispatch()
    let amount=0;
    return <div>
        <div className="flex bg-slate-200 h-screen w-screen justify-center">
            <div className="flex flex-col justify-center">
                <div className="flex flex-col justify-center rounded-xl bg-white w-80 text-center p-2 h-max px-4 shadow-lg">
                    <Heading label={"Send Money"}></Heading>
                    <SubHeading label={"Send money to a friend"}></SubHeading>
                    <div className="flex">
                    <div className="flex flex-col justify-center">
                        <div className="rounded-full h-12 w-12 bg-green-200 justify-center mt-1 mr-2">
                            <div className="flex flex-col justify-center text-xl text-black h-full">{searchParam.get("name")[0]}</div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                            <div className="text-bold text-lg">{searchParam.get("name")}</div>
                    </div>
                    </div>
                    <div className="text-black ml-2 mt-2">{"Amount (in Rs)"}</div>
                    <div className="flex my-7">
                        <input type="text" placeholder="Amount" className="w-full h-8 border border-slate-200 rounded-lg" 
                        onChange={(e)=>{
                            amount = e.target.value
                        }}></input>
                    </div>
                    <div className="flex">
                    <button className="justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full bg-green-500 text-white"
                     onClick={()=>{
                        //dispatch(decrementBalance({amount,to:searchParam.get("to") , from: searchParam.get("from")}))
                        initateTransfer({amount ,to:searchParam.get("to"),from:searchParam.get("from")})
                     }}>
                        Initiate Transfer
                    </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

function initateTransfer({amount , to , from}){
    let moneyTransferUrl = backEndUrl+ accountRoutes.module + accountRoutes.endpoint.Transfer
    axios.post(moneyTransferUrl,{amount , to , from}).then((response)=>{
        console.log(response)
        if(response.data.status){
            alert("Money send succesfully")
            location.reload("/")
        }
    }).catch((e)=>{
        console.log("Error while transaction: +" + e);
        alert(e.response.data.message)
        throw e;
    })
}