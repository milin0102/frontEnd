import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios";
import { accountRoutes ,backEndUrls} from "../../constants"

const backEndUrl = (process.env.NODE_ENV === 'production') ? backEndUrls.production : backEndUrls.development; //to intialize process env , set node:true in eslint.cjs file
const initialState= {
    value:0
}

// const updateBalance = createAsyncThunk('updateBalance',async function(req){
//     axios.post(moneyTransferUrl,{amount , to , from}).then((response)=>{
//         console.log(response)
//         if(response.data.status){
//         alert("Money send succesfully")
//         }else{
//             alert("Transaction failed!") 
//         }
//         return response.data
//       })

// })

const balanceSlice = createSlice({
    name:"balanceReducer",
    initialState,
    reducers : {
        updateBalance : (state , action)=>{
            state.value = action.payload.amount;
        },
        incrementBalance : (state , action)=>{
            state.value+= action.payload.amount
        },
        decrementBalance : (state , action)=>{
            let moneyTransferUrl = backEndUrl+ accountRoutes.module + accountRoutes.endpoint.Transfer
            let amount = action.payload.amount;
            let to = action.payload.to;
            let from = action.payload.from;
            axios.post(moneyTransferUrl,{amount , to , from}).then((response)=>{
            console.log(response)
            if(response.data.status){
            alert("Money send succesfully")
            state.value=state.value - action.payload.amount
            location.reload("/")
            }
            
        })
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(updateBalance,(state,action)=>{
         let currentValue = state.value;
         state.value = currentValue -action.payload.amount
        })
    }

})

export const { updateBalance , incrementBalance , decrementBalance} = balanceSlice.actions

export default balanceSlice.reducer