import React from 'react'
import './DetailLivrFornisseuer.css'
import {ArrowCircleLeft,Call,Sms,Location} from "iconsax-react";
import { useNavigate } from "react-router-dom";
import img1 from "../../../../assets/Ellipse 503.png"
import img2 from "../../../../assets/prod3.png"

const DetailLivrFornisseuer= () => {
    const navigate = useNavigate();
   

    const navigat=()=>{
        navigate(`/Fornisseuer/Liste_de_livraisons`)
    }
    const data=[{nom:"GOUACHE 9T METAL...",prix:"174 dt",Qté:'2',TotaleHT:"348.00 dt"},{nom:"GOUACHE 9T METAL...",prix:"174 dt",Qté:'2',TotaleHT:"348.00 dt"}]
  return (
    <div className='Detailcomnder-Fornisseuer'>
       <div className='rowbox-dcF'  style={{cursor:"pointer"}} onClick={navigat} ><ArrowCircleLeft size="25" color="#9E9E9E"/>
    <div><p className='txtbox-dcF'>Retourner</p></div>
    </div>
   <div className='row12-dcFo'>
   <div >
        <p className='txt1-dcF'>Détails de livraison</p>
    </div>
    <div>
        <button className='bnt-dcFo'>Marquer comme livré</button>
    </div>
    </div>
    <div className='row1-dcF'>
<div className='col1-dcF'>
<div className='box1-dcF'>
    <div className='border-dcF'> </div>
    <div className='colbox1-dcF'>
    <div><p className='txtbox1-dcFoo'>#103429</p></div>
    <div>
        <ul className='ul-dcF'>
            <li><p className='txtli-dcF'>Montant Totale:<span className='txtspanli-dcF'> 1371.00 dt</span></p></li>
            <br/>
            <li>Nbr d’article(s):<span className='txtspanli-dcF'> 7</span></li>
        </ul>
    </div>
    </div>
 
</div>
<div className='box2-dcF'>
<div><p className='txtbox2-dcF'>Détails de contact</p></div>
<div className='minirow-dcF'><img src={img1} className='img-dcF'/><div><p className='txt1box3-dcF'>122 Rue de bourguiba, mahdia</p></div></div>
<div className='minirow-dcF'><Call size="24" color="#9E9E9E" variant="Bold"/><div><p className='txt1box2-dcF'>Amine ben amine</p></div></div>
<div className='minirow-dcF'><Sms size="24" color="#9E9E9E" variant="Bold"/><div><p className='txt1box3-dcF'>(+216) 20 222 222</p></div></div>
<div className='minirow-dcF'><Location size="24" color="#9E9E9E" variant="Bold"/><div><p className='txt1box3-dcF'>amine.benamine@gmail.com</p></div></div>

</div>
<div className='box3-dcF'>
<div><p className='txtbox2-dcF'>Calendrier</p></div>
<div className='minirow-dcF'><div className='cirl3-dcF'></div><div><p className='txt3box3-dcF'>Demande reçu : </p></div>
<div><p className='txt4box3-dcF'>20/03/2023</p></div>
</div>
<div className='minirow-dcF'><div className='cirl2-dcF'></div><div><p className='txt3box3-dcF'>Demande reçu : </p></div>
<div><p className='txt4box3-dcF'>20/03/2023</p></div>
</div>
<div className='minirow-dcF'><div className='cirl-dcF'></div><div><p className='txt3box3-dcF'>Demande reçu : </p></div>
<div><p className='txt4box3-dcF'>20/03/2023</p></div>
</div>
<div className='line-dcFo'></div>
</div>
</div>
<div className='col05-dcF'>
<div className='box4-dcF'>
<div><p  className='txtbox1-dcFoo'>Liste des articles</p></div>
<div className='rowbox4-dcF'>
<div><p className='txtbox4-dcF'>Article</p></div>
<div><p className='txtbox4-dcF'>Qté</p></div>
<div><p className='txtbox4-dcF'>Totale HT</p></div>
</div>
<table>

{data.map((obj,index) => (

<tr >
<td className='widthtd-dcF'><div className='row2box4-dcF'>
    <img src={img2} className='imgbox4-dcF'/>
<div className='colbox4-dcF'>  
 <div> <p className='txt3box4-dcF'>Article</p></div>
<div> <p className='txt4box4-dcF'>174 dt</p></div>
</div>   

    </div>
</td>
<td className='widthtd1-dcF'><p className='txttab-dcF'>{obj.Qté}</p></td>
<td><p className='txttab-dcF'>{obj.TotaleHT}</p></td>

</tr>

))}


</table>
</div>



</div>

    </div>
    </div>
  )
}

export default DetailLivrFornisseuer
