import React, { useEffect, useState } from "react";
import './DetailLivr.css'
import {ArrowCircleLeft,Call,Sms,Location} from "iconsax-react";
import { useNavigate, useParams } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { toast } from "react-toastify";
import { Detailcomonde } from "../../../Store/Service/Detailcomonde";
import { useDispatch, useSelector } from "react-redux";
import { LivreCommande } from "../../../Store/Service/AccepterCommandeDetail";
import { findCommandeBylibrairie } from "../../../Store/Service/findCommandeBylibrairie";

const DetailLivr= (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const DetailcomondeClient = useSelector(
        (state) => state.Detailcomonde.Detailcomonde
      );
      const idcomonde = useParams(":id");
      const [ref, setref] = useState();
      const [open, setopen] = useState(true);
    const navigat=()=>{
        navigate(`/Vender/Liste_de_livraisons`)
        navigate(0)
    }
    const Livrer=()=>{
        LivreCommande(idcomonde.id).then((response)=>{
           if(response.success==true){
            toast.success("commande Livrer",{autoClose: 1000})
            dispatch(findCommandeBylibrairie(props?.user.id));
            setref(true)
           }
        })
        setopen(false);
        setref(false)
    
      }

    useEffect(() => {
        dispatch(Detailcomonde(idcomonde.id));
      }, [ref]);
      console.log(DetailcomondeClient[0])

  return (
    <div className='Detailcomnder'>
       <div className='rowbox-dc'  style={{cursor:"pointer"}} onClick={navigat} ><ArrowCircleLeft size="25" color="#9E9E9E"/>
    <div><p className='txtbox-dc'>Retourner</p></div>
    </div>
   <div className='row12-dl'>
   <div >
        <p className='txt1-dc'>Détails de livraison</p>
    </div>
    {
      DetailcomondeClient?.[0]?.Date_préparée===null?
      <div>
      <button className='bnt-dl' onClick={Livrer}>Marquer comme livré</button>
  </div>
  :""
    }
   
    </div>
    <div className='row1-dc'>
<div className='col1-dc'>
<div className='box1-dc'>
    <div className='border-dc'> </div>
    <div className='colbox1-dc'>
    <div><p className='txtbox1-ddc'> {DetailcomondeClient[0].id}</p></div>
    <div>
        <ul className='ul-dc'>
            <li><p className='txtli-dc'>Montant Totale: <span className='txtspanli-dc'> {DetailcomondeClient[0].total_ttc.toFixed(2)}</span></p></li>
            <br/>
            <li>Nbr d’article(s): <span className='txtspanli-dc'> {DetailcomondeClient[0]?.produitlabrairies?.length}</span></li>
        </ul>
    </div>
    </div>
 
</div>
<div className="box2-dc">
            <div>
              <p className="txtbox2-dc">Détails de contact</p>
            </div>
            <div className="minirow-dc">
              <Avatar
                src={
                  "http://127.0.0.1:8080/uploads/" +
                  DetailcomondeClient[0]?.user?.avatar
                }
                className="img-dc"
              />
              <div>
                <p className="txt1box3-dc">
                  {DetailcomondeClient[0]?.user?.fullname}
                </p>
              </div>
            </div>
            <div className="minirow-dc">
              <Call size="24" color="#9E9E9E" variant="Bold" />
              <div>
                <p className="txt1box2-dc">
                  (+216) {DetailcomondeClient[0]?.user?.telephone}
                </p>
              </div>
            </div>
            <div className="minirow-dc">
              <Sms size="24" color="#9E9E9E" variant="Bold" />
              <div>
                <p className="txt1box3-dc">
                  {DetailcomondeClient[0]?.user?.email}
                </p>
              </div>
            </div>
            <div className="minirow-dc">
              <Location size="24" color="#9E9E9E" variant="Bold" />
              <div>
                <p className="txt1box3-dc">
            
                  {
                    DetailcomondeClient[0]?.user?.client?.adresses[0]
                      ?.Code_postal
                  }
                  {DetailcomondeClient[0]?.user?.client?.adresses[0]?.Adresse},
                  {DetailcomondeClient[0]?.user?.client?.adresses[0]?.Ville}
                </p>
              </div>
            </div>
          </div>
<div className='box3-dc'>
<div><p className='txtbox2-dc'>Calendrier</p></div>
<div className='minirow-dc'><div className='cirl3-dc'></div><div><p className='txt3box3-dc'>Demande reçu : </p></div>
<div><p className='txt4box3-dc'>{DetailcomondeClient?.[0]?.createdAt}</p></div>
</div>
<div className='minirow-dc'><div className='cirl2-dc'></div><div><p className='txt3box3-dc'>Demande acceptée : </p></div>
<div><p className='txt4box3-dc'>{DetailcomondeClient?.[0]?.data_acceptation}</p></div>
</div>
{DetailcomondeClient?.[0]?.Date_préparée!=null?
<>
<div className='minirow-dc'><div className='cirl-dc'></div><div><p className='txt3box3-dc'>Demande préparée : </p></div>
  <div><p className='txt4box3-dc'>{DetailcomondeClient?.[0]?.Date_préparée}</p></div>
  </div>
  <div className='line-dl'></div></>
  :""
}


</div>
</div>
<div className='col05-dc'>
<div className='box4-dc'>
<div><p  className='txtbox1-ddc'>Liste des articles</p></div>
<div className='rowbox4-dc'>
<div><p className='txtbox4-dc'>Article</p></div>
<div><p className='txtbox4-dc'>Qté</p></div>
<div><p className='txtbox4-dc'>Totale HT</p></div>
</div>
<div className="scroll-div2">
            <table className="tab-prd">
              {DetailcomondeClient[0]?.produitlabrairies.map((obj, index) => (
                <tr>
                  <td className="widthtd-dc">
                    <div className="row2box4-dc">
                      <img
                        src={
                          "http://127.0.0.1:8080/uploads/" +
                          obj.imagelibrairies[0].name_Image
                        }
                        className="imgbox4-dc"
                      />
                      <div className="colbox4-dc">
                        <div>
                          {" "}
                          <p className="txt3box4-dc">{obj.titre}</p>
                        </div>
                        <div>
                          {" "}
                          <p className="txt4box4-dc">{obj.prix}dt</p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="widthtd1-dc">
                    <p className="txttab-dc">{obj.produit_c_Detail.Qte}</p>
                  </td>
                  <td>
                    <p className="txttab-dc">
                      {(obj.prix * obj.produit_c_Detail.Qte).toFixed(2)}
                    </p>
                  </td>
                </tr>
              ))}
            </table>
            </div>
</div>



</div>

    </div>
    </div>
  )
}

export default DetailLivr
