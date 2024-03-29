import React, { useState }  from 'react'
import './verify-email.css'
import {  Grid, OutlinedInput} from '@mui/material'
import axios from "axios"
import { toast } from 'react-toastify';
import { Path, Base_url } from '../../config/Config'

const Verify_email = () => {
  const [email,setemail] = useState("");
  
  const chang=async ()=>{

    if(email.length!==0)
    {
      let reg = /^[a-z-A-Z0-9-_.]+@[a-z-A-Z0-9-_]{2,}[.][a-z-A-Z]{2,3}$/
      let result = ((reg.exec(email)!=null));
      if(result===true){     
       let data ={
        email:email
       }
       
         axios.post(Base_url+ Path.forgotPasswordapi,data).then(res=>{

            toast.success("Vérifiez votre email maintenant svp pour réinitialiser votre mot de passe",{autoClose: 1000});
        })
        .catch(error => {
          toast.error("your email is not existed !!!",{autoClose: 1000})
        });
      }
      else{
        toast.error("validation de Email !!",{autoClose: 1000})
      }
    }else{
      toast.error("remplir Champ vide SVP !!",{autoClose: 1000})
    }
    
  } 
  const handlemail=(e)=>{
    setemail(e.target.value);
  }
  return (
        <div className='group1' >
        <Grid container direction="column" spacing={3}  >
        <Grid item md={10}> <p className='recupere'> Récupérer le mot de passe</p></Grid ><br/>
        <Grid item >  <p className='email-pass'>Votre adresse e-mail </p></Grid >
        <Grid item>
        <OutlinedInput className='inpt-pass' placeholder="Email"onChange={handlemail} value={email}   />           
            </Grid>
            <Grid item>
            <button className='bntn1'onClick={chang} >
                <div className='bnt-pass'>Envoyer à votre e-mail</div></button>
            </Grid>
       </Grid >
        </div>
        
        
       
  
  )
}

export default Verify_email
