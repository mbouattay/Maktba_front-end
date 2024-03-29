import {createSlice} from "@reduxjs/toolkit";
import { Globalvariable } from './../Service/Globalvariable';
import { Globalvariable2 } from './../Service/Globalvariable';

export const SliceGlobal=createSlice({
  name:"SliceGlobal",
  initialState:{
    Global1:[{}],
    Global2:[{}],
    status:null
  },
  reducers: {},
  extraReducers:{
    [Globalvariable.fulfilled]:(state,{payload})=>{
        state.Global1=payload
       state.status="success"
    },
    [Globalvariable2.fulfilled]:(state,{payload})=>{
      state.Global2=payload
     state.status="success"
  },
   [Globalvariable.pending]:(state)=>{
    state.status="loading"
   },
   [Globalvariable.rejected]:(state,{payload})=>{
    state.status="failed"
   }

  }  

})

export default SliceGlobal.reducer;