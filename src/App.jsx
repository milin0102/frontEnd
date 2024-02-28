import {BrowserRouter ,Routes , Route , useNavigate} from 'react-router-dom'
import Signup from './Pages/Signup'
import Signin from './Pages/Signin'
import Dashboard from './Pages/Dashboard'
import SendMoney from './Pages/SendMoney'


function App() {
  return (
   <div>
      <Routes>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path="/" element={<Dashboard/>}></Route>
          <Route path="/send" element={<SendMoney/>}></Route>
      </Routes>
   </div>
  )
}

// function AppBar(){
//   const navigate = useNavigate()
//   return (
//     <div >
//       <button 
//       onClick={function(){
//         navigate( "/signup")}}>Sign Up</button>
//       <button onClick={function(){
//         navigate( "/signin")}}>Sign In</button>
//     </div>
//   )
// }

export default App
