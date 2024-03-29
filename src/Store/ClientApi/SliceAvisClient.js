import {createSlice} from "@reduxjs/toolkit";
import { getAllAvisClient } from "../Service/getAllAvisClient";
export const AvisClient=createSlice({
  name:"AvisClient",
  initialState:{
    AvisClient:[{}],
    status:null
  },
  reducers: {},
  extraReducers:{
    [getAllAvisClient.fulfilled]:(state,{payload})=>{
        state.AvisClient=payload.avis
        state.status="success"
    },
   [getAllAvisClient.pending]:(state)=>{
    state.status="loading"
   },
   [getAllAvisClient.rejected]:(state)=>{
    state.status="failed"
   }
  }  
})

export default AvisClient.reducer;