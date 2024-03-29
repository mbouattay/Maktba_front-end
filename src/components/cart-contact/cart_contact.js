import React from 'react'
import { Location, ArrowRight2, Call, Sms } from 'iconsax-react';
import { Grid } from '@mui/material'
import './cart_contact.css'
import Cart from './cart_c/Cart';
const Cart_contact = () => {
  const data = [
    {
      icon: <Location className='local' size="32" color="#222222" variant="Bold" />, name: 'Adresse', addr: '122 Rue de Makthar, Monastir',
      ero: 'Emplacement'
    },
    {
      icon: <Call size="32" className='local' color="#222222" variant="Bold" />, name: 'Téléphone', addr: '(+216)20 222 222',
      ero: 'Appelez-nous'
    },
    {
      icon: <Sms className='local' size="32" color="#222222" variant="Bold" />, name: 'E-mail', addr: 'Contact@maktba.com',
      ero: 'Entrer en contact'
    },
  ];


  return (
    <>
      <Grid item >
        <div className='ex'>

      {data.map((obj) => (
        
                <Cart icon={obj.icon} name={obj.name}  addr={obj.addr} ero={obj.ero}/>
          ))}
  
    
        </div>
      </Grid>
    </>
  )
}

export default Cart_contact
