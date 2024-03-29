import {createSlice} from "@reduxjs/toolkit";
import { Signupuser } from "../Service/SignupService";

export const SignupSlice=createSlice({
  name:"Signup",
  initialState:{
    user:'',
    isLogin:false
  },
  reducers: {},
  extraReducers:{
    [Signupuser.pending]:(state,action)=>{
      state.isLogin=false
    },
    [Signupuser.fulfilled]:(state,{payload:{user}})=>{
      state.isLogin=true
      state.user=user;

    },
    [Signupuser.rejected]:(state,action)=>{
      state.isLogin=false
    },
  }  

})

export default SignupSlice.reducer;