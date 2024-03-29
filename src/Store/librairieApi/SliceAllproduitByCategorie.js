import {createSlice} from "@reduxjs/toolkit";
import { getAllProduitByCategorie } from "../Service/AllproduitlibrairieByCategorie";
export const AllProduitlibrairieByCategorie=createSlice({
  name:"AllProduitlibrairieByCategorie",
  initialState:{
    produitlibBycategorie:[{}],
    status:null
    
  },
  reducers: {},
  extraReducers:{
    [getAllProduitByCategorie.fulfilled]:(state,{payload})=>{
        state.produitlibBycategorie=payload.produit
         state.status="success"
    },
   [getAllProduitByCategorie.pending]:(state)=>{
    state.status="loading"
   },
   [getAllProduitByCategorie.rejected]:(state)=>{
    state.status="failed"
   }

  }  

})

export default AllProduitlibrairieByCategorie.reducer;