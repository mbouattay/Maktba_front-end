import {createSlice} from "@reduxjs/toolkit";
import { prodplusvendus } from "../Service/prodplusvendus";
export const Sliceprodplusvende=createSlice({
  name:"Sliceprodplusvende",
  initialState:{
    produit:[],
    status:null
  },
  reducers: {},
  extraReducers:{
    [prodplusvendus.fulfilled]:(state,{payload})=>{
        state.produit=payload.produit;
       state.status="success"
    },
   [prodplusvendus.pending]:(state)=>{
    state.status="loading"
   },
   [prodplusvendus.rejected]:(state)=>{
    state.status="failed"
   }

  }  

})

export default Sliceprodplusvende.reducer;