import {createSlice} from "@reduxjs/toolkit";
import { getOneProdCataloge } from "../Service/OneProdCataloge";



export const OneprodCataloge=createSlice({
  name:"OneprodCataloge",
  initialState:{
    Oneprod:[],
    status:null
  },
  reducers: {},
  extraReducers:{
    [getOneProdCataloge.fulfilled]:(state,{payload})=>{
        state.Oneprod=payload.produits
        state.status="success"
    },
   [getOneProdCataloge.pending]:(state)=>{
    state.status="loading"
   },
   [getOneProdCataloge.rejected]:(state)=>{
    state.status="failed"
   }
  }  
})

export default OneprodCataloge.reducer;