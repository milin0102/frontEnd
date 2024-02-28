import Heading from '../Components/Heading'
import SubHeading from '../Components/SubHeading'
import InputBox from '../Components/InputBox'
import Button from '../Components/Button'
import BottomWarning from '../Components/BottomWarning'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { userRoutes , accountRoutes , backEndUrls} from "../constants";
const backEndUrl = (process.env.NODE_ENV === 'production') ? backEndUrls.production : backEndUrls.development; //to intialize process env , set node:true in eslint.cjs file


export default function Signup(){
    const navigate = useNavigate();
    const[firstName , setFirstName] = useState("")
    const[lastName , setLastName] = useState("")
    const[userName , setUserName] = useState("")
    const[email , setEmail] = useState("")
    const[password , setPassword] = useState("")
    return <div className='flex bg-slate-300 h-screen justify-center'>
        <div className='flex flex-col justify-center'>
        <div className='rounded-xl bg-white w-80 text-center p-2 h-max px-4'>
        <Heading label = {"Sign Up"}></Heading>
        <SubHeading label = {"Enter your information to create an account"}></SubHeading>
        <InputBox label={"Enter your first name"} id= "firstName" placeholder={"First Name"} onChange={(e)=>handleChange(e)}></InputBox>
        <InputBox label={"Enter your last name"} placeholder={"Last Name"} onChange={function(e){
            setLastName(e.target.value)
        }}></InputBox>
        <InputBox label={"Enter Username"} placeholder={"UserName"} onChange={function(e){
            setUserName(e.target.value)
        }}></InputBox>
        <InputBox label={"Email"} placeholder={"Email"} onChange={function(e){
            setEmail(e.target.value)
        }}></InputBox>
        <InputBox label={"Password"} placeholder={"Password"} onChange={function(e){
            setPassword(e.target.value)
        }}></InputBox>
        <Button onClick={()=> submitDetails()} text={"Sign Up"}></Button>
        <BottomWarning text={"Already have an account?"} linkText={"Log In"} link={"/singin"}></BottomWarning>
        </div>
    </div>
    </div>

function handleChange(e){
    setFirstName(e.target.value)
}
async function submitDetails(){
    if (firstName == "" || lastName == ""|| userName == ""|| email==""|| password==""){
        alert('Please fill out all fields')
    }else if(!(/^[a-zA-Z0-9._]+$/).test(userName)){
        alert('Username can only contain letters, numbers and underscores');
    }else if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Please enter a valid email address')
      }else{
        let signUpUrl = backEndUrl+userRoutes.module+userRoutes.endpoint.SignUp
        let response = await axios.post(signUpUrl,{
        userName,firstName,lastName,password,email
    })
    if(response.status==200){
        console.log("User created successfully");
        alert("User created successfully");
        navigate("/signin")
    }else{
        alert(response.data.message)
        console.log(response.data.message);
    }
      }
}
    
}

