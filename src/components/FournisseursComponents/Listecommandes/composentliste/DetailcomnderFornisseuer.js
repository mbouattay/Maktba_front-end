import React from 'react'
import './DetailcomnderFornisseuer.css'
import {ArrowCircleLeft,Call,Sms,Location} from "iconsax-react";
import { useNavigate } from "react-router-dom";
import img1 from "../../../../assets/Ellipse 503.png"
import img2 from "../../../../assets/prod3.png"

const DetailcomnderFornisseuer = () => {
    const navigate = useNavigate();
    const [open, setopen] = React.useState(true);

    const navigat=()=>{
        navigate(`/Fornisseuer/Liste_de_commandes`)
    }
    const data=[{nom:"GOUACHE 9T METAL...",prix:"174 dt",Qté:'2',TotaleHT:"348.00 dt"},{nom:"GOUACHE 9T METAL...",prix:"174 dt",Qté:'2',TotaleHT:"348.00 dt"}]
  return (
    <div className='DetailcomnderFornisseuer'>
       <div className='rowbox-DCFornisseuerc'  style={{cursor:"pointer"}} onClick={navigat} ><ArrowCircleLeft size="25" color="#9E9E9E"/>
    <div><p className='txtbox-DCFornisseuerc'>Retourner</p></div>
    </div>
    <div>
        <p className='txt1-DCFornisseuerc'>Détails de commande</p>
    </div>
    <div className='row1-DCFornisseuerc'>
<div className='col1-DCFornisseuerc'>
<div className='box1-DCFornisseuerc'>
    <div className='border-DCFornisseuerc'> </div>
    <div className='colbox1-DCFornisseuerc'>
    <div><p className='txtbox1-ddc'>#103429</p></div>
    <div>
        <ul className='ul-DCFornisseuerc'>
            <li><p className='txtli-DCFornisseuerc'>Montant Totale:<span className='txtspanli-DCFornisseuerc'> 1371.00 dt</span></p></li>
            <br/>
            <li>Nbr d’article(s):<span className='txtspanli-DCFornisseuerc'> 7</span></li>
        </ul>
    </div>
    </div>
 
</div>
<div className='box2-DCFornisseuerc'>
<div><p className='txtbox2-DCFornisseuerc'>Détails de contact</p></div>
<div className='minirow-DCFornisseuerc'><img src={img1} className='img-DCFornisseuerc'/><div><p className='txt1box3-DCFornisseuerc'>122 Rue de bourguiba, mahdia</p></div></div>
<div className='minirow-DCFornisseuerc'><Call size="24" color="#9E9E9E" variant="Bold"/><div><p className='txt1box2-DCFornisseuerc'>Amine ben amine</p></div></div>
<div className='minirow-DCFornisseuerc'><Sms size="24" color="#9E9E9E" variant="Bold"/><div><p className='txt1box3-DCFornisseuerc'>(+216) 20 222 222</p></div></div>
<div className='minirow-DCFornisseuerc'><Location size="24" color="#9E9E9E" variant="Bold"/><div><p className='txt1box3-DCFornisseuerc'>amine.benamine@gmail.com</p></div></div>

</div>
<div className='box3-DCFornisseuerc'>
<div><p className='txtbox2-DCFornisseuerc'>Calendrier</p></div>
<div className='minirow-DCFornisseuerc'><div className='cirl-DCFornisseuerc'></div><div><p className='txt3box3-DCFornisseuerc'>Demande reçu : </p></div>
<div><p className='txt4box3-DCFornisseuerc'>20/03/2023</p></div>
</div>

</div>
</div>
<div className='col05-DCFornisseuerc'>
<div className='box4-DCFornisseuerc'>
<div><p  className='txtbox1-ddc'>Liste des articles</p></div>
<div className='rowbox4-DCFornisseuerc'>
<div><p className='txtbox4-DCFornisseuerc'>Article</p></div>
<div><p className='txtbox4-DCFornisseuerc'>Qté</p></div>
<div><p className='txtbox4-DCFornisseuerc'>Totale HT</p></div>
</div>
<table>

{data.map((obj,index) => (

<tr >
<td className='widthtd-DCFornisseuerc'><div className='row2box4-DCFornisseuerc'>
    <img src={img2} className='imgbox4-DCFornisseuerc'/>
<div className='colbox4-DCFornisseuerc'>  
 <div> <p className='txt3box4-DCFornisseuerc'>Article</p></div>
<div> <p className='txt4box4-DCFornisseuerc'>174 dt</p></div>
</div>   

    </div>
</td>
<td className='widthtd1-DCFornisseuerc'><p className='txttab-DCFornisseuerc'>{obj.Qté}</p></td>
<td><p className='txttab-DCFornisseuerc'>{obj.TotaleHT}</p></td>

</tr>

))}


</table>
</div>
{open?
    <div className='box5-DCFornisseuerc'>
<div className='row01box5-DCFornisseuerc'>
<div><p className='txtbox5-DCFornisseuerc'>Souhaitez-vous accepter cette commande ?</p></div>
<div className='rowbox5-DCFornisseuerc'><button className='bntbox5-DCFornisseuerc' onClick={()=>{setopen(false)}}>Rejeter</button><button className='bntbox6-DCFornisseuerc' onClick={()=>{setopen(false)}}>Accepter</button></div>

</div>

</div>
:<></>
}


</div>

    </div>
    </div>
  )
}

export default DetailcomnderFornisseuer
