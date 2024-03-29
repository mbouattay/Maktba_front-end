import React from 'react'
import './Cart.css'
import { Location, ArrowRight2, Call, Sms } from 'iconsax-react';
import { Grid } from '@mui/material'
const Cart = (props) => {
  return (
    <div>
       <Grid item  >

<div className='box'>
  <div className='contun_box'>
    <br />
    <Grid item > <p className='icon-cart'>{props.icon}</p> </Grid>
    <Grid item  >
      <p className='adr_con'>{props.name}</p>
    </Grid>
    <Grid item >
      <p className='txt3'>{props.addr}</p>
    </Grid>
    <Grid item >
      <p className='txt4'>{props.ero}</p><p className='arrow'><ArrowRight2 size="18" color="#7C5E10" variant="TwoTone" /></p>
    </Grid>
  </div>
</div>
</Grid>

    </div>
  )
}

export default Cart
