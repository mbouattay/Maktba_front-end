import {createSlice} from "@reduxjs/toolkit";
import { sousGategorie } from "../Service/sousGategorie";
export const slicegetonesousGategorie=createSlice({
  name:"slicegetonesousGategorie",
  initialState:{
    categorie:[{}],
    status:null
  },
  reducers: {},
  extraReducers:{
    [sousGategorie.fulfilled]:(state,{payload})=>{
        state.categorie=payload.categorie
        state.status="success"
    },
   [sousGategorie.pending]:(state)=>{
    state.status="loading"
   },
   [sousGategorie.rejected]:(state)=>{
    state.status="failed"
   }
  }  
})

export default slicegetonesousGategorie.reducer;