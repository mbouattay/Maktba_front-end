import {createSlice} from "@reduxjs/toolkit";
import { getIdentiteClientt } from "../Service/identiteClient";
export const IdentiteClient=createSlice({
  name:"IdentiteClient",
  initialState:{
    identiteClient:[{}],
    status:null
  },
  reducers: {},
  extraReducers:{
    [getIdentiteClientt.fulfilled]:(state,{payload})=>{
        state.identiteClient=payload.client
        state.status="success"
    },
   [getIdentiteClientt.pending]:(state)=>{
    state.status="loading"
   },
   [getIdentiteClientt.rejected]:(state)=>{
    state.status="failed"
   }
  }  
})

export default IdentiteClient.reducer;