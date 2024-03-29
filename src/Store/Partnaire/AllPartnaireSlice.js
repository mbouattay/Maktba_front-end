import {createSlice} from "@reduxjs/toolkit";
import { getAllPartanire } from "../Service/Allpartnaire";
export const Allpartnaire=createSlice({
  name:"Allpartnaire",
  initialState:{
    partnaire:[{}],
    status:null
    
  },
  reducers: {},
  extraReducers:{
    [getAllPartanire.fulfilled]:(state,{payload})=>{
        state.partnaire=payload.partainer
       state.status="success"
    },
   [getAllPartanire.pending]:(state)=>{
    state.status="loading"
   },
   [getAllPartanire.rejected]:(state)=>{
    state.status="failed"
   }

  }  

})

export default Allpartnaire.reducer;