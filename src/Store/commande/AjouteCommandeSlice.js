import {createSlice} from "@reduxjs/toolkit";
import { AjouteCommande } from "../Service/AjouteCommande";

export const AjouteCommandeSlice=createSlice({
  name:"AjouteCommandeSlice",
  initialState:{
    status:null
  },
  reducers: {},
  extraReducers:{
    [AjouteCommande.fulfilled]:(state)=>{
       state.status="success"
    },
   [AjouteCommande.pending]:(state)=>{
    state.status="loading"
   },
   [AjouteCommande.rejected]:(state)=>{
    state.status="failed"
   }

  }  

})

export default AjouteCommandeSlice.reducer;