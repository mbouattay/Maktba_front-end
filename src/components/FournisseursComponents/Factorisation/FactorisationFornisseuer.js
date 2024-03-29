import React from 'react'
import Cardbecome from "../../../components/card-become/card-become";
import './FactorisationFornisseuer.css'
import {TickCircle} from "iconsax-react";
const FactorisationFornisseuer = () => {
    const data=[
        {Factorisation:"2023",Plan:"Gold",Date:"20/08/2023",Montant:"1000 dt"},
        {Factorisation:"2023",Plan:"Gold",Date:"20/08/2023",Montant:"1000 dt"},
        {Factorisation:"2023",Plan:"Silver",Date:"20/08/2023",Montant:"1000 dt"},
        {Factorisation:"2023",Plan:"Silver",Date:"20/08/2023",Montant:"1000 dt"},
        {Factorisation:"2023",Plan:"Silver",Date:"20/08/2023",Montant:"1000 dt"},
        {Factorisation:"2023",Plan:"Silver",Date:"20/08/2023",Montant:"1000 dt"},
        {Factorisation:"2023",Plan:"Gold",Date:"20/08/2023",Montant:"1024 dt"},
        {Factorisation:"2023",Plan:"Silver",Date:"20/08/2023",Montant:"1000 dt"},
 
    ]
    return (
        <div className='Factorisation-Fornisseuer'>

        <div><p className='txt1-FactrFornisseuerc'>Factorisation</p></div>
         <div style={{marginLeft:"-5%"}}>
         <Cardbecome width="348px"height= "auto"/>
         </div>
         <div><p className='txt2-FactrFornisseuerc'> * Contactez-nous si vous souhaitez modifier votre Pack</p></div>
         <br/>
         <div><p className='txt1-FactrFornisseuerc'>Historique</p></div>
         <div className='box1-FactrFornisseuerc'>
         <table>
  <tr>
  
  <th>Factorisation</th>
  <th>Plan</th>
  <th>Date</th>
  <th>Montant</th>
  
  </tr>
  
  {data.map((obj,index) => (
  
  <tr  >
  
  <td className='tdwidth1-FactrFornisseuerc'>
  <div className='row212-FactrFornisseuerc'>
          <div><p className='txt147-FactrFornisseuerc'>{obj.Factorisation}</p></div>
  <div className='bnt101-FactrFornisseuerc'><div className='tickbnt101-FactrFornisseuerc'><TickCircle size="12" color="#FF8A65"/></div><p className='txtbnt101-FactrFornisseuerc'>Payé</p></div></div>
     </td>
  <td className='tdwidth1-FactrFornisseuerc'> 
  
        <p className='txt147-FactrFornisseuerc'>{obj.Plan}</p>
          
                </td>
  <td className='tdwidth1-FactrFornisseuerc'><p >{obj.Date}</p></td>
  
  <td className='tdwidth1-FactrFornisseuerc'><p >{obj.Montant}</p></td>
  
  
  
  </tr>
  
  ))}
  </table>
         </div>
      </div>
  )
}

export default FactorisationFornisseuer
