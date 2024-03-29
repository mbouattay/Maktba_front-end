import {createSlice} from "@reduxjs/toolkit";
import { getAllProduitCataloge } from "../Service/allProduitCataloge";


export const AllprodCataloge=createSlice({
  name:"AllprodCataloge",
  initialState:{
    produCataloge:[],
    status:null
  },
  reducers: {},
  extraReducers:{
    [getAllProduitCataloge.fulfilled]:(state,{payload})=>{
        state.produCataloge=payload.produits
        state.status="success"
    },
   [getAllProduitCataloge.pending]:(state)=>{
    state.status="loading"
   },
   [getAllProduitCataloge.rejected]:(state)=>{
    state.status="failed"
   }
  }  

})

export default AllprodCataloge.reducer;