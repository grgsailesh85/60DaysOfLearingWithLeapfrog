import { configureStore } from "@reduxjs/toolkit"
import customerSlice  from "./slices/customer"
const store = configureStore({
    reducer : {
        customerSlice
    }
})

export default store 