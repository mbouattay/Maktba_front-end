import {createSlice} from "@reduxjs/toolkit";
import { produitmieuxnotes } from "../Service/produitmieuxnotes";
export const Sliceproduitmieuxnotes=createSlice({
  name:"Sliceproduitmieuxnotes",
  initialState:{
    produit:[],
    status:null
  },
  reducers: {},
  extraReducers:{
    [produitmieuxnotes.fulfilled]:(state,{payload})=>{
        state.produit=payload.produit;
       state.status="success"
    },
   [produitmieuxnotes.pending]:(state)=>{
    state.status="loading"
   },
   [produitmieuxnotes.rejected]:(state)=>{
    state.status="failed"
   }

  }  

})

export default Sliceproduitmieuxnotes.reducer;