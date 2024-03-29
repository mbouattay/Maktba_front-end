import {createSlice} from "@reduxjs/toolkit";
import { findCommandeBylibrairie } from "../Service/findCommandeBylibrairie";
export const SlicefindCommandeBylibrairie=createSlice({
  name:"SlicefindCommandeBylibrairie",
  initialState:{
    commandeslibrairie:[],
    status:null
  },
  reducers: {},
  extraReducers:{
    [findCommandeBylibrairie.fulfilled]:(state,{payload})=>{
        state.commandeslibrairie=payload.commandes;
       state.status="success"
    },
   [findCommandeBylibrairie.pending]:(state)=>{
    state.status="loading"
   },
   [findCommandeBylibrairie.rejected]:(state)=>{
    state.status="failed"
   }

  }  

})

export default SlicefindCommandeBylibrairie.reducer;