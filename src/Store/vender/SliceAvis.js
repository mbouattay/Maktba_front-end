import {createSlice} from "@reduxjs/toolkit";
import { avisLib } from "../Service/AllAvisBylib";

export const Allavislib=createSlice({
  name:"Allavislib",
  initialState:{
    avislib:[{}],
    status:null
    
  },
  reducers: {},
  extraReducers:{
    [avisLib.fulfilled]:(state,{payload})=>{
        state.avislib=payload.avis
        state.status="success"
    },
   [avisLib.pending]:(state)=>{
    state.status="loading"
   },
   [avisLib.rejected]:(state)=>{
    state.status="failed"
   }
  }  

})

export default Allavislib.reducer;