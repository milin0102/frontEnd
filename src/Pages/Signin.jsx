import { useState } from "react";
import BottomWarning from "../Components/BottomWarning";
import Button from "../Components/Button";
import Heading from "../Components/Heading";
import InputBox from "../Components/InputBox";
import SubHeading from "../Components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { userRoutes , accountRoutes , backEndUrls} from "../constants";
const backEndUrl = (process.env.NODE_ENV === 'production') ? backEndUrls.production : backEndUrls.development; //to intialize process env , set node:true in eslint.cjs file
export default function Signin(){
    const [username,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();
    return <div className="flex bg-slate-500 h-screen justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-xl bg-white p-2 h-max px-4">
                <Heading label={"Sign In"}></Heading>
                <SubHeading label={"Enter your credentials to access your account"}></SubHeading>
                <InputBox onChange={(e)=>{
                    setUserName(e.target.value);
                }} label={"username"} placeholder={"joe@123"}></InputBox>
                <InputBox onChange={(e)=>{
                    setPassword( e.target.value);
                }} label={"Password"} placeholder={""}></InputBox>
                <Button onClick={async function(){
                    let request = {
                        username:username, 
                        password:password
                    }
                     let loginURL = backEndUrl+userRoutes.module+userRoutes.endpoint.Login
                     await axios.post(loginURL,request).then((response)=>{
                        console.log("Hello: " + response.data.success)
                        if(response.data.success){
                            alert("Yes i am in: "+response.data.message)
                            localStorage.setItem("token",response.data.data.token)
                            localStorage.setItem("username",response.data.data.username)
                            navigate("/")
                        }else{
                            alert(response.data.message)
                        }
                    }).catch((e)=>{
                        console.log("Hell:: " + e.response.data.message);
                        alert(e.response.data.message)
                        throw e;
                    })
                    
                }} text={"Sign In"}></Button>
                <BottomWarning text={"Don't have an account?"} linkText={"Sign Up"} link={"/signup"}></BottomWarning>
            </div>
        </div>
    </div>

}
