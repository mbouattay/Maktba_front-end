import React from 'react'
import './Successful_password.css'
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material'

const Successful_password = (props) => {

  return (
    <div>
      <div className='group3-pass' >
        <Grid container direction="column" spacing={3}  >
          <Grid item   >
            <Grid container justifyContent="center" alignItems="center">         <i class='bi bi-check-circle' style={{fontSize:"120px",WebkitMaskSize: "10px"}}></i>
            </Grid>
          </Grid >
          <Grid item  >
            <Grid container alignItems="center" >
              <p className='email-pass3'>La réinitialisation du mot de passe a réussi</p>
            </Grid ></Grid >
          <Grid item>
            <div className='espas3'>
              <Link to="/login">   <button className='bntn1-s' >
                <div className='bnt-pass3'>Continuer à se connecter</div></button>
              </Link>
            </div>
          </Grid>
        </Grid >
      </div>

    </div>

  )
}

export default Successful_password
