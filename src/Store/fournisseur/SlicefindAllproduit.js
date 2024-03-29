import {createSlice} from "@reduxjs/toolkit";
import { findAllProduitFournisseur } from "../Service/findAllProduitFournisseur";

export const SliceAllproduitFournisseur=createSlice({
  name:"SliceAllproduitFournisseur",
  initialState:{
    produitFournisseur:[],
    status:null
  },
  reducers: {},
  extraReducers:{
    [findAllProduitFournisseur.fulfilled]:(state,{payload})=>{
        state.produitFournisseur=payload.produit;
       state.status="success"
    },
   [findAllProduitFournisseur.pending]:(state)=>{
    state.status="loading"
   },
   [findAllProduitFournisseur.rejected]:(state)=>{
    state.status="failed"
   }

  }  

})

export default SliceAllproduitFournisseur.reducer;