import React, { useEffect, useState } from "react";
import "./page.css";
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import { RefreshSquare, AddCircle, ExportCurve } from "iconsax-react";
import Box from "@mui/material/Box";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Modal from "@mui/material/Modal";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { changePassword } from './../../../Store/Service/changePassword';
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getIdentiteClientt } from "../../../Store/Service/identiteClient";
import { modifierIdentiteClient } from "../../../Store/Service/ModifieIdentite";
import { AddAdrClient } from "../../../Store/Service/AdrClient/AddAdrClient";
import Avatar from '@mui/material/Avatar';
import { DeletAdrClient } from "../../../Store/Service/AdrClient/DeletAdrClient";
import { UpdateAdr } from "../../../Store/Service/AdrClient/UpdateAdrClient";

const Page = (props) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "#FFFFFF",
    width: "544px",
    height: "356px",
    boxShadow:
      "2px 5px 15px rgba(26, 31, 39, 0.02), 10px 15px 40px rgba(26, 31, 39, 0.03)",
    borderRadius: "8px",

    p: 4,
  };
  const [fullname,setfullname]=useState()
  const [IdAdrr,setIdAdrr]=useState("")
const [email,setemail]=useState()
const [telephone,settelephone]=useState()
const [Date_de_naissance,setDate_de_naissance]=useState()
const [avatar,setavatar]=useState()
const [refreshpage,setrefreshpage]=useState()
const [addresse, setAddresse] = useState({ nom: "", addr: "",Ville:"",codepostal:"",clientId:"" });
const [Gouvernorat,setGouvernorat] = useState("");
const Gouvernora=[{nome:"Ariana"},{nome:"Béja"},{nome:"Ben Arous"},{nome:"Bizerte"},{nome:"Gabès"},{nome:"Gafsa"},{nome:"Jendouba"},{nome:"Kairouan"},{nome:"Kairouan"},{nome:"Kasserine"},{nome:"Kébili"},{nome:"Le Kef"},{nome:"Mahdia"},{nome:"La Manouba"},{nome:"Médenine"},{nome:"Monastir"},{nome:"Nabeul"},{nome:"Sfax"},{nome:"Sidi Bouzid"},{nome:"Siliana"},{nome:"Sousse"},{nome:"Tataouine"},{nome:"Tozeur"},{nome:"Tozeur"},{nome:"Tunis"},{nome:"Zaghouan"}]
  const [open, setOpen] = useState(false);
  const [titre, settitre] = useState("");
  const [open1, setOpen1] = useState(true);
  const [newPassword,setnewPassword]=useState()
  const [actuelPassword,setactuelPassword]=useState()
  const [inputDisable,setinputDisable]=useState(true)
  const [sizeimg,setSizeimg]=useState(false)

  const handleClose = () => setOpen(false);
const[openchangePassword,setopenchangePassword]=useState(false)
const [opencoll, setopencoll] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleOpenChanegPassword=()=>{
    setopenchangePassword(true)
  }
  const handleCloseChanegPassword=()=>{
    setopenchangePassword(false)
  }
 const changestyle=()=>{
setAddresse({ nom:"" , addr:"", Ville:"",codepostal:"" ,clientId:""})
setGouvernorat("")

  settitre("Ajout d'une nouvelle adresse")
  setopencoll(true)
 }
 const changestyle2=()=>{
  setopencoll(false)
 }

const handleinfo=()=>{
  setOpen1(false)
  setfullname(clientData.fullname);
  setemail(clientData.email);
  settelephone(clientData.telephone);
  setDate_de_naissance(clientData.Date_de_naissance)
  setavatar(clientData.avatar)

  setinputDisable(false)
}
const passwordchange=()=>{
  if(newPassword!==undefined && actuelPassword!==undefined){
    const data={
      newPassword : newPassword ,
      ActuelPassword :actuelPassword
    }
    changePassword(data,props.user.id).then((response)=>{
        if(response.success===true){
            toast.success(" Mot de passe changer",{autoClose: 1000})
        }else{
            toast.error("verifie votre actuel password",{autoClose: 1000})
        }
    })
  }else{
    toast.error(" Mot de passe actuel ou Nouveau mot de passe vide",{autoClose: 1000})
  }
    
    setopenchangePassword(false)
    
}
const dispatch=useDispatch()
const clientData = useSelector(
  (state) => state.IdentiteClient.identiteClient
);

useEffect(() => {
  dispatch(getIdentiteClientt(props.user.id));
},[refreshpage]);
const addresses=clientData?.client?.adresses

const changeIdentite=()=>{

   const data= new FormData() ; 
   data.append("Date_de_naissance",Date_de_naissance)
   data.append("image",avatar)
   data.append("telephone",telephone)
   data.append("fullname",fullname)
   data.append("email",email)
  
   if(sizeimg)
   {
     {toast.error("taill image !!! ",{autoClose: 1000})}
   }else{
    modifierIdentiteClient(props.user.id,data).then((response)=>{
     
      if(response.success===true){
          toast.success("votre identite  modifier avec success",{autoClose: 1000})
          setrefreshpage(true)
      }
    })
   }

    setrefreshpage(false) 
    setOpen1(true);  setinputDisable(true)
}
const handleInputChange = (field) => {
  return (e) => {
    setAddresse((prev) => ({
      ...prev,
      [field]: e.target.value
    }));
  };
};
const handleChangeGouvernorat = (event) => {
  setGouvernorat(event.target.value);
};

const Ajoutadr=()=>{
  let data = {
    Nom_de_adresse: addresse.nom,
    Adresse: addresse.addr,
    Gouvernorat: Gouvernorat,
    Ville: addresse.Ville,
    Code_postal: addresse.codepostal,
    clientId: props.user.id,
  }
  if(Gouvernorat.length!==0 &&addresse.nom.length!==0 && addresse.addr.length!==0 && addresse.Ville.length!==0&& addresse.codepostal.length!==0 ){
    AddAdrClient(data).then((response)=>{
      if(response.success===true){
          toast.success("votre Adresse  Ajoute  avec success",{autoClose: 1000})
          setrefreshpage(true)
      }
    })
    setopencoll(false)
    setrefreshpage(false)
}
else{ toast.error("remplir votre champ svp !!!",{autoClose: 1000})}
}
const DeletAdr=()=>{

DeletAdrClient(IdAdrr,props.user.id).then((response)=>{
  if(response.success===true){
      toast.success("votre Adresse  Suppr avec success",{autoClose: 1000})
      setrefreshpage(true)
  }
})
setrefreshpage(false)
setOpen(false)
}
const updateadr=()=>{


  let data = {
    Nom_de_adresse: addresse.nom,
    Adresse: addresse.addr,
    Gouvernorat: Gouvernorat,
    Ville: addresse.Ville,
    Code_postal: addresse.codepostal,
    clientId: props.user.id,
  }
    UpdateAdr(IdAdrr,props.user.id,data).then((response)=>{
      if(response.success===true){
          toast.success("Votre Adresse a été mise à jour avec succès ",{autoClose: 1000})
          setrefreshpage(true)
      }
    })
    setopencoll(false)
    setrefreshpage(false)

}

const [image, setImage] = useState(null);
const onImageChange = (event) => {
  if (event.target.files && event.target.files[0]) {
    setavatar(event.target.files[0])
    setSizeimg((event.target.files[0].size)>(1024*1024))
    setImage(URL.createObjectURL(event.target.files[0]));
  }
};
 return (
    <div>
      <div className="carts2">
        <div className="col1-page1">
          <div className="txt1-carts2">Mon identité</div>
          <div>
            <div className="rowbnt-page">
            <label htmlFor="file-input" className="labelup">

              <div className="avatar-container">

                <Avatar  style={{ height: "150px", width: "150px" }}  src={image!==null?image:"http://127.0.0.1:8080/uploads/"+clientData?.avatar} className="avrt-page" />

                <div className="icon-container" >
                  <ExportCurve
                    size="22"
                    color="#101010"
                    style={{
                      paddingTop: "2px",
                      paddingLeft: "3px",
                      marginLeft: "2px",
                    }}
                  />
                 
                </div>
               
              </div>
              </label>
                      <input disabled={inputDisable} type="file" className="uplod" id="file-input"accept=".jpg,.png" onChange={onImageChange}/>
              <div className="col00-page1">
                <div>
                  <p className="txt0-profile3">Photo de profile</p>
                </div>
                <div>
                  <p className="txt1-profile3">300x300 et max 2 MB</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col2-profile">
            <div className="txt-profile3">Nom et Prénom</div>
            <input type="text" disabled={inputDisable} className="input-pro" defaultValue={clientData?.fullname} onChange={(e)=>{setfullname( e.target.value)}}/>
          </div>
          <div className="col2-profile">
            <div className="txt-profile3">Email</div>
            <input type="text" disabled={inputDisable} className="input-pro" defaultValue={clientData?.email} onChange={(e)=>{setemail( e.target.value)}}/>
          </div>
          <div className="col2-profile">
            <div className="txt-profile3">Numéro de téléphone</div>
            <input type="text" disabled={inputDisable} className="input-pro" defaultValue={clientData?.telephone} onChange={(e)=>{settelephone(e.target.value)}}/>
          </div>
          <div className="col2-profile">
            <div className="txt-profile3">Date de naissance</div>
         
              <input type="date" disabled={inputDisable} className="input-pro" defaultValue={clientData?.Date_de_naissance} onChange={(e)=>{setDate_de_naissance(e.target.value)}}/>

          </div>
          {open1?
          <div className="rowbnt-page0321" onClick={handleinfo}>
            <RefreshSquare size="22" color="#E9B949 " variant="Bold"/>
            <div>Changer mes informations</div>
          </div>
          :
          <div className="rowbnt-page03210">
          <button onClick={()=>{setOpen1(true);  setinputDisable(true)}} className="bnt3-page">
            <p className="txtbnt3-page">Annuler</p>
          </button>
          <button  className="bnt4-page">
            <p className="txtbnt4-page" onClick={changeIdentite}>Valider</p>
          </button>
        </div>
          }
          
      
        </div>
        
      </div>
      <div className="box2-page">
        <h2>Mon mot de passe</h2>
        <div onClick={handleOpenChanegPassword} className={openchangePassword?"rowbnt-page-none":"rowbnt-page"} >
          <RefreshSquare size="22" color="#E9B949 " variant="Bold"/>
          <div>Changer le mot de passe</div>
        </div>
        <div className={openchangePassword?"change-password-form":"change-password-form-none"}>
            <label className="label-inpute">Mot de passe actuel</label>
            <OutlinedInput
            className="input-password"
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            onChange={(e)=>setactuelPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
           <label className="label-inpute">Nouveau mot de passe</label>
            <OutlinedInput
            className="input-password"
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            onChange={(e)=>setnewPassword(e.target.value)}
           
          />
             <div className="minirow-page">
                <button onClick={handleCloseChanegPassword} className="bnt3-page">
                  <p className="txtbnt3-page">Annuler</p>
                </button>
                <button onClick={passwordchange} className="bnt4-page">
                  <p className="txtbnt4-page">Valider</p>
                </button>
              </div>
        </div>
      </div>
      <br />

   
    
            <div  >
            <div className="box3-page">
              <h2>Mes adresses</h2>
             
        

              <div className={addresses?.length!=0 ?"col-page012":"box-hed"}>
            
              {addresses?.map((obj) => (
          <>
            <div className="txt201-page">. {obj.Nom_de_adresse}</div>
            <div className="row-page032">
            <div>{obj.Adresse},</div>
          <div>{obj.Gouvernorat},</div>
          <div>{obj.Ville},</div>
          <div>{obj.Code_postal}</div>
            </div>
            <div className="row-page"> <div className="txt200-page"onClick={()=>{setAddresse({ nom:obj.Nom_de_adresse , addr: obj.Adresse, Ville:obj.Ville, codepostal: obj.Code_postal, clientId:obj.id });
             ;setGouvernorat(obj.Gouvernorat);setIdAdrr(obj.id); settitre("Modification de l’adresse"); setopencoll(true);console.log(obj)}}>Modifier</div> 
       <div className="txt200-page" onClick={()=>{setIdAdrr(obj.id);setOpen(true)}}>Supprimer</div></div>
   
         
          </>
      
      ))}
         <Modal
                  open={open}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  onClose={handleClose}
                >
                  <Box sx={style} >
               
                    <div className="colll-page">
                    <div className='flex-end'>    <div > <i class="fa fa-close" onClick={handleClose}></i></div></div>
                    <div><p className="txtt-pagemodal">Etes-vous sûr de vouloir supprimer cette adresse?</p></div>
                    <div><p className="txtt-pagemodal2">Cette modification n’impactera pas les
commandes passées ou en cours.</p></div><br/>
                     
             <div className="rowbnt02-page"><button className="bntmodal2-page" onClick={handleClose}>Annuler</button> <button className="bntmodal3-page" onClick={DeletAdr}>Supprimer</button></div>
                    </div>
                




                   
            
                  </Box>
                </Modal>
         </div>   
         <div onClick={changestyle}>
              <div className={opencoll ?"box-hed":"rowbnt-page"}>
                <AddCircle size="22" color="#E9B949" variant="Bold" />
                <div>Ajouter une nouvelle adresse</div>
              </div><br/>

              </div>

         <br/>
              




                </div>
            </div>
          
  <div className={opencoll ?"box-blok":"box-hed"}>
  <div className="typographyReponse-page">
            <hr className="line-page" />
            <br />
            <div className="col-page">
              <div>
                
                <p className="txt3-profile">{titre}</p>
              </div>
              <br />
              <div className="minicol-page">
                <div>
                  <p>Nom de l’adresse</p>
                </div>
                <OutlinedInput className="input-pro" onChange={handleInputChange("nom")} value={addresse.nom}/>
                <div></div>
              </div>
              <div className="minicol-page">
                <div>
                  <p>Adresse</p>
                </div>

                <OutlinedInput className="input-pro" onChange={handleInputChange("addr")} value={addresse.addr}/>
                <div></div>
              </div>
              <div className="minicol-page">
                <div>
                  <p>Gouvernorat</p>
                </div>
                 <Select value={Gouvernorat} onChange={handleChangeGouvernorat} className='txt-select-page'  placeholder="Tunis" style={{ width: "400px", height: " 48px", borderRadius: "8px" }} >
                    <MenuItem value="Tunis">
                        <em className='txt-select-page'>Tunis</em>
                    </MenuItem>
               
                        {Gouvernora.map((obj,key) => (
                          <MenuItem value={obj.nome}className='txt-select-page'>{obj.nome}</MenuItem>

                      ))}
                  
                 
                </Select>
                <div></div>
              </div>
              <div className="minicol-page">
                <div>
                  <p>Ville</p>
                </div>
                <OutlinedInput className="input-pro" onChange={handleInputChange("Ville")} value={addresse.Ville}/>
                <div></div>
              </div>
              <div className="minicol-page">
                <div>
                  <p>Code postal</p>
                </div>
                <OutlinedInput className="input-pro" onChange={handleInputChange("codepostal")} value={addresse.codepostal}/>
                <div></div>
              </div>

              <div className="minirow-page">
                <button className="bnt3-page" onClick={changestyle2}>
                  <p className="txtbnt3-page">Annuler</p>
                </button>
                {titre=="Modification de l’adresse"?
 <button className="bnt4-page" onClick={updateadr}>
 <p className="txtbnt4-page">Valider</p>
</button>:
 <button className="bnt4-page"onClick={Ajoutadr} >
 <p className="txtbnt4-page">Valider</p>
</button>
                }
               
              </div>
            </div>
          </div>

  </div>
    
    
    </div>
  );
};

export default Page;