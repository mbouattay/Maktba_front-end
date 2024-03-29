import {createSlice} from "@reduxjs/toolkit";
import { getAlluser } from "../Service/getAlluser";
export const SlicegetAlluser=createSlice({
  name:"SlicegetAlluser",
  initialState:{
    users:[{}],
    status:null
  },
  reducers: {},
  extraReducers:{
    [getAlluser.fulfilled]:(state,{payload})=>{
        state.users=payload.users
        state.status="success"
    },
   [getAlluser.pending]:(state)=>{
    state.status="loading"
   },
   [getAlluser.rejected]:(state)=>{
    state.status="failed"
   }
  }  
})

export default SlicegetAlluser.reducer;