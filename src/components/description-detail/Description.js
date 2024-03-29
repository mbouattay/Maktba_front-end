import React, { useEffect, useState } from "react";
import {
  MinusCirlce,
  AddCircle,
  Bag,
  ArchiveAdd,
  Shop,
  Flag,
} from "iconsax-react";

import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";
import { OutlinedInput } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { add } from "../../Store/panier/panierSlice";
import { AjouteProduitFavorie } from "../../Store/Service/AjouteProduitFavorie";
import { AjouteSignale } from "../../Store/Service/AjouteSignale";
import {TickCircle,Trash,InfoCircle,CloseCircle} from "iconsax-react";

const Description = (props) => {
  const [fullname,setFullname]=useState()
  const [email,setemail]=useState()
  const [op,setop]=useState()
  const [message,setmessage]=useState()
  const [file,setfile]=useState()
  const [qnt, setqnt] = useState(1);
  const [open, setOpen] = React.useState(false);
  const [sizeimg,setSizeimg]=useState(false)
  const [img,setImage]=useState()
  const [imgsize,setImgsize]=useState()
  const [realimgsize,setRealimgsize]=useState()
  const [imgname,setImgmane]=useState()


  const handleOpen = () => setOpen(true);

  const handleClose = () => {setOpen(false);setImage(undefined);setFullname(undefined);setemail(undefined);setmessage(undefined)};

  const quantityplus = () => {
    if(qnt<props.qte)
    {
      setqnt(qnt + 1);
    }

  };

  const quantityminu = () => {
    if (qnt > 1) {
      setqnt(qnt - 1);
    }
  };

  const onImageChange = (e) => {
      if (e.target.files && e.target.files[0]) {
          setImage(URL.createObjectURL(e.target.files[0]));
          setfile(e.target.files[0])
          setSizeimg((e.target.files[0].size)>(1024*1024))
          const size=e.target.files[0].size/ (1024 * 1024) ;
          let g=(size.toString());
          setRealimgsize(size)
          setImgsize(g.slice(0,4));
          const name=e.target.files[0].name
          setImgmane(name.slice(0,11));
      }
    }
const sup=()=>{
  setImage(undefined)
}
  const style = {
    position: "absolute",
    top: "56%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "#FFFFFF",
    width: "500px",
    height: "600px",
    boxShadow:
      "2px 5px 15px rgba(26, 31, 39, 0.02), 10px 15px 40px rgba(26, 31, 39, 0.03)",
    borderRadius: "8px",
    p: 4,
  };
  const dispatch=useDispatch()


  const Addtopanier=(idprod,imgp,prix,titre,qte,idl,Allqte)=>{
      const idp=Number(idprod)
    dispatch(add({idp,imgp,prix,titre,qte,idl,Allqte}))
    toast.success("Vous avez ajouté un produit a votre panier ",{autoClose: 1000})
  }
  const Sauvegarder=()=>{
    if(props.user.auth){
      const data={
        clientId:props.user.id,
        produitlabrairieId:props.idp
      }
      AjouteProduitFavorie(data).then((response)=>{

        if(response.success==true){
          toast.success("Votre Article a bien été sauvegardé",{autoClose: 1000})
        }
        if(response.message===" produit est deja dans la liste de produit favorie")
        {
          toast.error(response.message,{autoClose: 1000})
        }
      })
    }else{
      toast.warning("Veuillez vous connecter pour pouvoir sauvegardé un Article",{autoClose: 1000})
    }
    
  }
  const Signaler=()=>{

if(!sizeimg)
{
  if( fullname!==undefined && fullname?.length!==0 &&email?.length!==0  &&message?.length!==0 &&email!==undefined &&message!==undefined && img!==undefined)

  {
 
    if(props.user.auth){
      const formData = new FormData();
      formData.append('fullnameUser', fullname);
      formData.append('email', email);
      formData.append("message",message)
      formData.append('image', file);
      formData.append("produitlabrairieId",props.idp)

      AjouteSignale(formData).then((response)=>{
     
        if(response.success==true){
          
          toast.success("Votre Signaler bien recu",{autoClose: 1000})
          setOpen(false)
          setImage(undefined)
          setFullname(undefined)
          setemail(undefined)
          setmessage(undefined)
        }
       
      })
    }else{
      toast.warning("Veuillez vous connecter pour pouvoir Signaler un Article",{autoClose: 1000})
    }
  }else{
    toast.error("remplir votre chomp Svp !!",{autoClose: 1000})

  }
  
}else{
  toast.error("Taill Image !!!",{autoClose: 1000})
}

  }
  console.log(props?.prix_en_Solde)
    return (
    <div className="col-detail">
      <div>
        {" "}
        <p className="txt3-detail">{props.titre}</p>
        <div className="row610-detail">
        <Rating
              name="read-only"
              value={props.maxAvis===undefined?0:props.maxAvis}
              readOnly
              defaultValue={0}
              size="small"
              className="stars1"
            />
          <p className="txt12-detail">({props.totalAvis===undefined?0:props.totalAvis})</p>
        </div>
        <br />
        <p className="txt4-detail">{props?.prix_en_Solde!==null && props?.prix_en_Solde!==0?props?.prix_en_Solde:props.prix} DT</p>
      </div>
      
        {props?.description?.length!=0 && props?.description!==undefined?
        <div>
              <p className="txt5-detail">Description:</p>
        <p className="txt6-detail">
         {props.description}
        </p>
      </div>
      :""
        }
    

      <div className="row2-detail">
        <div className="bord-detail">
          <div className="bnt-gnt">
            <MinusCirlce
              onClick={quantityminu}
              size="23"
              color="#222222"
              variant="Bold"
            />
          </div>
          <div className="qunt">{qnt}</div>
          <div className="bnt-gnt">
            <AddCircle
              onClick={quantityplus}
              size="23"
              color="#222222"
              variant="Bold"
            />
          </div>
        </div>
        <button className="bnt1-detail" onClick={()=>Addtopanier(props.idp,props.imgp,props?.prix_en_Solde!==null && props?.prix_en_Solde!==0?props?.prix_en_Solde:props.prix,props.titre,qnt,props.idl,props.qte)}>
          <div className="bag-detail">
            <Bag size="22" color="#FFFFFF" />
          </div>

          <div className="txt77-detail">Ajouter au panier</div>
        </button>
        <button className="bnt2-detail"onClick={Sauvegarder}>
          <div className="ArchiveAdd-detail" >
            <ArchiveAdd size="23" color="#222222" />
          </div>
          <div className="txt8-detail">Sauvegarder</div>
        </button>
      </div>
      <div>
        <p className="txt9-detail">Information du vendeur:</p>
        <br />
        <div className="row3-detail">
          <img src={"http://127.0.0.1:8080/uploads/"+props.imgl} className="img-detail2" />
          <div className="col3-deatil">
            <p className="txt10-detail">{props.noml}</p>
            <Link to={`/librairieProfile/${props.idl}`}>
              <button className="bnt5-detail">
                <div className="row6-detail">
                  <div className="iconshop-detail">
                    <Shop size="22" color="#222222" />
                  </div>
                  <div>
                    <p className="txt11-detail">Visiter le magasin </p>
                  </div>
                </div>
              </button>
            </Link>
          </div>
        </div>
        <div>
          <br />
          <br />
          <br />
          <p className="txt10-detail">Partagez ceci : </p>
          <br />
        </div>
        <div className="row6-detail">
          <div className="fa fa-facebook icc"></div>
          <div className="fa fa-instagram icc"></div>
          <div className="fa fa-linkedin icc"></div>
          <div class="fa fa-pinterest icc"></div>
        </div>
        <div className="row6-detail">
          <p className="txt12-detail">Un problème avec ce produit ? </p>
          <div className="flag-detail">
            <Flag size="22" color="#222222" variant="Bold" />
          </div>
          <p className="txt13-detail" onClick={handleOpen}>
            Signaler
          </p>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="flex-end">
                {" "}
                <div>
                  {" "}
                  <i class="fa fa-close" onClick={handleClose}></i>
                </div>
              </div>

              <p className="txtmodal-detail">Signaler cet article</p>
              <br />

              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <div className="col3-deatil">
                  <OutlinedInput
                    className="input-deat"
                    placeholder="Votre nom et prénom"
                    onChange={(e)=>{setFullname(e.target.value)}}
                  />
                  <OutlinedInput
                    className="input-deat"
                    placeholder="Votre e-mail"
                    onChange={(e)=>{setemail(e.target.value)}}
                  />
                  <OutlinedInput
                    className="inpu-conn2-modal"
                    placeholder="Message"
                    multiline
                    rows={3}
                    maxRows={50}
                    onChange={(e)=>{setmessage(e.target.value)}}
                  /> 
                  {img !==undefined?
                   sizeimg===false?
                    <div className="globalboxuplod-descriptiondeatil">
                    <div className="rowuplod01-descriptiondeatil">
                  <div className="rol01-descriptiondeatil"> 
                  <div><TickCircle size="25" color="#57AE5B" variant="Bold" onClick={sup}/></div>
                  <div><img src={img} className="mguplod-descriptiondeatil" style={{marginTop:"-30%"}}/></div>
                  <div><p className="txtuplod02-descriptiondeatil">{imgname}</p></div>
                  </div>
                  
                  <div className="rol01-descriptiondeatil"> 
                  <div><p className="txtuplod03-descriptiondeatil">{imgsize}Mo</p></div>
                  <div><Trash size="25" color="#222" style={{cursor:"pointer"}} onClick={sup}/></div>
                  </div>
                  
                  </div>
                  
                   </div>
                  :
                  <div className="globalboxuplod-descriptiondeatil">
                  <div className="rowuplod01-descriptiondeatil">
               <div className="rol01-descriptiondeatil"> 
               <div><InfoCircle size="15" color="#D64545" variant="Bold" style={{marginTop:"40%"}} /></div>
               <div><img src={img} className="mguplod-descriptiondeatil"style={{marginTop:"-20%"}}/></div>
               <div><p className="txtuplod02-descriptiondeatil"style={{color:"#D64545"}}>{imgname}</p></div>
               </div>
               
               <div className="rol01-descriptiondeatil"> 
               <div><p className="txtuplod03-descriptiondeatil"style={{color:"#D64545"}}>Réessayer</p></div>
               <div><CloseCircle size="18" color="#222" style={{cursor:"pointer",marginTop:"20%"}} onClick={sup}/></div>
               </div>
               
                </div>
                
                 </div>
                  :
                  <div onClick={()=>{setop(true)}}>

                  <label htmlFor="file-input" className="labelup">
                  <div className="downlo-modal">    
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCUlEQVR4nO2WywqCQBSGv2wTtJNatImWLmodFPUE3agk2gkp5Pu/QAwcw6SmmUGnFv7wgzCe83kuotCq1R9qAKyBK5ABKXABlkDYBDCQ5Hcg/2B1tpJ7a4NuNMCqd3XB5xbQwqpyK02AvcwulWtde3VtD5usTOeFCXRcMzSXbf+qbQPgVAdU2xfJO/ktUQIMxYkhPAI6VWgPOBsmSCrLElrAz8J6VuoKdYUHSAtMZzUsgcpQ5Mw0T4RFtcqj0lwLFfMeWeQ5YbhM71zIJTZDVt03+IaU7Rt8VIGzH4CnKrALxB7BcflT2XeAu4BjYb0okBYcDRfOFJxKzmldPwXVB/CmvAX70kHspAegq6wprKfiuQAAAABJRU5ErkJggg=="
                      alt="ico"
                      className="iconuplod-des"
                    />
                    <div><p className="tele"> Télécharger un fichier</p></div>   
                  </div>
                  </label>
                  <input type="file" className="uplod" id="file-input"  onChange={onImageChange}/>

                  </div>

                  } 
                  
              
                  <div className="row-detail">
                    <button className="bnt-modala1" onClick={handleClose}>
                      <p className="txt-modalbnt1">Annuler</p>
                    </button>
                    <button className="bnt-modala2" onClick={Signaler}>
                      <p className="txt-modalbnt2" >Envoyer</p>
                    </button>
                  </div>
                </div>
              </Typography>
            </Box>
          </Modal>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Description;





