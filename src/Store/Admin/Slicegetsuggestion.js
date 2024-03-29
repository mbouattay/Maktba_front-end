import {createSlice} from "@reduxjs/toolkit";
import { getsuggestion } from "../Service/getsuggestion";
export const Slicegetsuggestion=createSlice({
  name:"Slicegetsuggestion",
  initialState:{
    suggestion:[{}],
    status:null
  },
  reducers: {},
  extraReducers:{
    [getsuggestion.fulfilled]:(state,{payload})=>{
        state.suggestion=payload.suggestionProduit
        state.status="success"
    },
   [getsuggestion.pending]:(state)=>{
    state.status="loading"
   },
   [getsuggestion.rejected]:(state)=>{
    state.status="failed"
   }
  }  
})

export default Slicegetsuggestion.reducer;