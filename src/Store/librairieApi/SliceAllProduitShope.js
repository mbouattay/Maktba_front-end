import {createSlice} from "@reduxjs/toolkit";
import { getAllProduitlibrairie } from "../Service/AllProduitShope";

export const AllProduitShope=createSlice({
  name:"AllProduitShope",
  initialState:{
    produitShope:[{}],
    status:null
  },
  reducers: {},
  extraReducers:{
    [getAllProduitlibrairie.fulfilled]:(state,{payload})=>{
        state.produitShope=payload.produit
       state.status="success"
    },
   [getAllProduitlibrairie.pending]:(state)=>{
    state.status="loading"
   },
   [getAllProduitlibrairie.rejected]:(state)=>{
    state.status="failed"
   }

  }  

})

export default AllProduitShope.reducer;