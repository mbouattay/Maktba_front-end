import {createSlice} from "@reduxjs/toolkit";
import { AllListProduitLibe } from "../Service/AllistProduitLib";
export const AlllistProduitLib=createSlice({
  name:"AlllistProduitLib",
  initialState:{
    listProduit:[{}],
    status:null
    
  },
  reducers: {},
  extraReducers:{
    [AllListProduitLibe.fulfilled]:(state,{payload})=>{
        state.listProduit=payload.produit
        state.status="success"
    },
   [AllListProduitLibe.pending]:(state)=>{
    state.status="loading"
   },
   [AllListProduitLibe.rejected]:(state)=>{
    state.status="failed"
   }
  }  

})

export default AlllistProduitLib.reducer;