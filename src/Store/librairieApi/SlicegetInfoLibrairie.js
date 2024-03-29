import {createSlice} from "@reduxjs/toolkit";
import { getinfolibrairie } from "../Service/librairieInfo";

export const infoLibrairie=createSlice({
  name:"infoLibrairie",
  initialState:{
    info:[{}],
    status:null
    
  },
  reducers: {},
  extraReducers:{
  [getinfolibrairie.fulfilled]:(state,{payload})=>{
    state.info=payload.profile
    state.status="success"
  },
  [getinfolibrairie.pending]:(state)=>{
    state.status="loading"
  },
  [getinfolibrairie.rejected]:(state)=>{
    state.status="failed"
  }

  }  

})

export default infoLibrairie.reducer;