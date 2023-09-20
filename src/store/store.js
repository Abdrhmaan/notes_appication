
import { configureStore } from "@reduxjs/toolkit";
import CreateSlice from "./api/CreateSlice";


export const store =  configureStore({
    reducer : {
        name : CreateSlice,
      
    }
})