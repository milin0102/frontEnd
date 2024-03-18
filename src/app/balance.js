import { configureStore } from '@reduxjs/toolkit'
import balanceReducer from '../features/balance/balanceSlice'

export const balanceStore = configureStore({
    reducer : {
        balance : balanceReducer
    }
})
