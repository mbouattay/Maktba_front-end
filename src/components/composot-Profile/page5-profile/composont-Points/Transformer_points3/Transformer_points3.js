import React from 'react'
import './Transformer_points3.css'
import { ArrowCircleLeft} from "iconsax-react";
import { useSelector } from 'react-redux';
const Transformer_points3 = (props) => {
  const bondAchate = useSelector((state)=> state.addBondachateSlice.bondachate)

  return (
    <div className='Tf1'>
    <div className='row-Tf1' onClick={()=>{props.onRetourner()}}>
    <ArrowCircleLeft
     size="22"
     color="#222"
    />
      <div><p>Retourner</p></div>
    </div>
    <div><p className='txt-Tf1'>Transformer mes points</p></div>
   <div className='prag-Tf3'>
    <p>
     Vous avez transféré <span className='txth-Tf3'>{props.point}pts</span> ({bondAchate.solde} dinars),avec  <span className='txth-Tf3'>{props.partnaire}</span>.
     Votre code est le <span className='txth-Tf3'>{bondAchate.code}</span>.
     Il sera enregistré dans votre espace "mes points".
     Une fois validé, ce code ne fonctionnera plus.
    </p>
   </div>
 

    
    
    
        </div>
  )
}

export default Transformer_points3
