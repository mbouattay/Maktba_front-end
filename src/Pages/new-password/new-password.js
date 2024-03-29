import React from 'react'
import './new-password.css'
import Imge from "../../assets/image1.png"
import {Grid} from '@mui/material'
import Verifyemail from '../../components/verify email/verify-email'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/footer/Footer'


const Password = () => {

  return (
    <>
    
      <div className='password'>
       <div className='passww' >
        <Grid item  >
          <img className='im' src={Imge} alt="icon" />
        </Grid >
        <Grid item>
        <Verifyemail />
        </Grid>
        </div>
    </div>

    </>
   
  )
}

export default Password
