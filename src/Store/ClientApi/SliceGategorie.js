import {createSlice} from "@reduxjs/toolkit";
import { getAllGategorie } from "../Service/getAllGategorie";
export const SliceGategorie=createSlice({
  name:"SliceGategorie",
  initialState:{
    Gategorie:[{}],
    status:null
  },
  reducers: {},
  extraReducers:{
    [getAllGategorie.fulfilled]:(state,{payload})=>{
        state.Gategorie=payload.categorie
        state.status="success"
    },
   [getAllGategorie.pending]:(state)=>{
    state.status="loading"
   },
   [getAllGategorie.rejected]:(state)=>{
    state.status="failed"
   }
  }  
})

export default SliceGategorie.reducer;