import {createSlice} from "@reduxjs/toolkit";
import { getAllcommandeByclient } from "../Service/getAllcommandebyClient";
export const AllcommandeByclient=createSlice({
  name:"AllcommandeByclient",
  initialState:{
    commandesClient:[],
    status:null
  },
  reducers: {},
  extraReducers:{
    [getAllcommandeByclient.fulfilled]:(state,{payload})=>{
        state.commandesClient=payload.commandes;
       state.status="success"
    },
   [getAllcommandeByclient.pending]:(state)=>{
    state.status="loading"
   },
   [getAllcommandeByclient.rejected]:(state)=>{
    state.status="failed"
   }

  }  

})

export default AllcommandeByclient.reducer;