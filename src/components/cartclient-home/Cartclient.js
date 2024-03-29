import React, { useEffect, useState }  from 'react'
import Avatar from '@mui/material/Avatar';
import Rating from "@mui/material/Rating";
import Card from "../../components/card-produit/Card";
const Cartclient = (props) => {
    const [value4, setValue4] = useState(3);


  return (
    <div className='cartclient-home'>
    <div>
      <div className='colcart0-home'>  
      <div className='rowmini-home'> 
        <Avatar src={props.imgc}sx={{ width: 40, height: 40 }}  /> 
        <div>  
         <div className='colmini-home'>
         <div><p className='txtcart0-home'>{props.nomclinet}</p> </div>
       <div><Rating name="read-only" value={value4} readOnly /></div> 
        </div> </div>
      </div>
      <div>
         <p className='txtcart1-home'>{props.descriptionclient} </p>
        </div>
        <div>
        <button className='bntcart-home'>Découvrir le produit</button>
        </div>
      </div>
  

      </div>
      <div>  <Card   imgp={props.imgp} prix_en_Solde={null}  prix={props.prixprod}  nom={props.nomprod}   noml={props.noml}  id={props.idprod}   /></div>
       </div>
  )
}

export default Cartclient
