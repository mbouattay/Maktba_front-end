import {createSlice} from "@reduxjs/toolkit";
import { getAllProduitBylibrairie } from "../Service/AllProduitBylibrairie";
export const AllProduitBylibrairie=createSlice({
  name:"AllProduitBylibrairie",
  initialState:{
    produitlib:[{}],
    status:null
    
  },
  reducers: {},
  extraReducers:{
    [getAllProduitBylibrairie.fulfilled]:(state,{payload})=>{
        state.produitlib=payload.produit
       state.status="success"
    },
   [getAllProduitBylibrairie.pending]:(state)=>{
    state.status="loading"
   },
   [getAllProduitBylibrairie.rejected]:(state)=>{
    state.status="failed"
   }

  }  

})

export default AllProduitBylibrairie.reducer;