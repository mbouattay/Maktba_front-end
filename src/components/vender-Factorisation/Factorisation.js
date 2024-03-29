import React from 'react'
import './Factorisation.css'
import Cardbecome from "../../components/card-become/card-become";
import {TickCircle} from "iconsax-react";
const Factorisation = () => {
    const data=[
        {Factorisation:"2023",Plan:"Gold",Date:"20/08/2023",Montant:"1000 dt"},
        {Factorisation:"2023",Plan:"Gold",Date:"20/08/2023",Montant:"1000 dt"},
        {Factorisation:"2023",Plan:"Silver",Date:"20/08/2023",Montant:"1000 dt"},

    ]
  return (
    <div className='Factorisation'>

      <div><p className='txt1-Factr'>Factorisation</p></div>
       <div style={{marginLeft:"-5%"}}>
       <Cardbecome width="348px"height= "auto"/>
       </div>
       <div><p className='txt2-Factr'> * Contactez-nous si vous souhaitez modifier votre Pack</p></div>
       <br/>
       <div><p className='txt1-Factr'>Historique</p></div>
       <div className='box1-Factr'>
       <table>
<tr>

<th>Factorisation</th>
<th>Plan</th>
<th>Date</th>
<th>Montant</th>

</tr>

{data.map((obj,index) => (

<tr  >

<td className='tdwidth1-Factr'>
<div className='row212-Factr'>
        <div><p className='txt147-Factr'>{obj.Factorisation}</p></div>
<div className='bnt101-Factr'><div className='tickbnt101-Factr'><TickCircle size="12" color="#FF8A65"/></div><p className='txtbnt101-Factr'>Payé</p></div></div>
   </td>
<td className='tdwidth1-Factr'> 

      <p className='txt147-Factr'>{obj.Plan}</p>
        
              </td>
<td className='tdwidth1-Factr'><p >{obj.Date}</p></td>

<td className='tdwidth1-Factr'><p >{obj.Montant}</p></td>



</tr>

))}
</table>
       </div>
    </div>
  )
}

export default Factorisation
