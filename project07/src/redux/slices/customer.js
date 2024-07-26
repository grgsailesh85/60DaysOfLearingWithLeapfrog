import { createSlice } from "@reduxjs/toolkit"

const customerSlice = createSlice({
    name : 'customer',
    initialState : [],
    reducers : {
        createCustomer : (state, action)=>{
           return [
                ...state,
                action.payload
           ]
        }
    }
})

export const { createCustomer } = customerSlice.actions
export default customerSlice.reducer