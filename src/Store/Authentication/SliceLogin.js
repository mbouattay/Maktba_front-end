import {createSlice} from "@reduxjs/toolkit";
import { Loginuser } from '../../Store/Service/LoginService'

export const userSlice=createSlice({
  name:"loginservice",
  initialState:{
    accessToken:"",
    refreshToken:"",
    isLogin:false
  },
  reducers: {},
  extraReducers:{
    [Loginuser.pending]:(state,)=>{
      state.isLogin=false;
    },
    [Loginuser.fulfilled]:(state,{payload:{accessToken,refreshToken}})=>{
    
      state.isLogin=true;
      state.accessToken=accessToken;
      state.refreshToken=refreshToken;
      
    },
    [Loginuser.rejected]:(state,action)=>{
      state.isLogin=false
      
    },
  }  

})

export default userSlice.reducer;