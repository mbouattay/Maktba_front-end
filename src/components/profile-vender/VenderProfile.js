import React, { useEffect, useState } from "react";
import './VenderProfile.css'
import {Profile,Edit,Shop } from "iconsax-react";
import {  OutlinedInput } from "@mui/material";
import Select from '@mui/material/Select';
import { toast } from "react-toastify";
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from "react-redux";
import { getIdentiteClientt } from "../../Store/Service/identiteClient";
import {Trash,Export} from "iconsax-react";
import { getprofileVender } from "../../Store/Service/getfrofileVender";
import { modifierIdentiteClient } from "../../Store/Service/ModifieIdentite";
import { modifierIdentitevender } from "../../Store/Service/modifierIdentitevender";
const VenderProfile = (props) => {

const [open,setopen]=useState(true)
const [open2,setopen2]=useState(true)
const [ok,setok]=useState(false)
const [ok2,setok2]=useState(false)
const [image, setImage] = useState(null);
const [sizeimg,setSizeimg]=useState(false)
const [refreshpage,setrefreshpage]=useState()
const [image2, setImage2] = useState(null);
const [sizeimg2,setSizeimg2]=useState(false)


const handleInputChange = (field) => {
  return (e) => {
    setVender((prev) => ({
      ...prev,
      [field]: e.target.value
    }));
  };
};

const handleInputChange2 = (field) => {
  return (e) => {
    setVenderl((prev) => ({
      ...prev,
      [field]: e.target.value
    }));
  };
};
const dispatch=useDispatch()
const clientData = useSelector(
  (state) => state.IdentiteClient.identiteClient
);
const venderData = useSelector(
  (state) => state.profileVender.getprofileVender
);
useEffect(() => {
  dispatch(getIdentiteClientt(props.user?.id));
  dispatch(getprofileVender(props.user?.id));
},[refreshpage]);

const [vender, setVender] = useState({
  nom: clientData?.fullname || "",
  numero: clientData?.telephone || "",
  email: clientData?.email || "",
  date: clientData?.Date_de_naissance || "",
  genre: "Male"
});


useEffect(() => {
  if (clientData) {
    setVender((prevVender) => ({
      ...prevVender,
      nom: clientData.fullname || "",
      numero: clientData.telephone || "",
      email: clientData.email || "",
      date: clientData.Date_de_naissance || ""
    }));
  }
}, [clientData]);
const [venderl, setVenderl] = useState({
  nom: venderData?.nameLibrairie || "",
  addr: venderData?.adresse || "",
  email: venderData?.emailLib || "",
  insta: venderData?.instagram || "",
  fb: venderData?.facebook || "",
  telephone: venderData?.telephone || ""
});
useEffect(() => {
  if (venderData) {
    setVenderl((prevVenderl) => ({
      ...prevVenderl,
      nom: venderData.nameLibrairie || "",
      addr: venderData.adresse || "",
      email: venderData.emailLib || "",
      insta: venderData.instagram || "",
      fb: venderData.facebook || "",
      telephone: venderData.telephone || ""
    }));
  }
}, [venderData]);



const [avatar,setavatar]=useState()
const [avatar2,setavatar2]=useState()
const changeIdentite=()=>{
  if(ok==false)
  {
    const data= new FormData() ; 
    data.append("Date_de_naissance",vender.date)
    avatar!==undefined?data.append("image",avatar):data.append("image",clientData?.avatar)
    data.append("telephone",vender.numero)
    data.append("fullname",vender.nom)
    data.append("email",vender.email)
   
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

  }
  else{
    toast.error("modify image !!!",{autoClose: 1000})
  }
  
}
const changeIdentite2=()=>{
  if(ok2==false)
  {
    const dat= new FormData() ; 
    dat.append("adresse",venderl.addr)
    dat.append("nameLibrairie",venderl.nom)
    dat.append("ville","")
    dat.append("telephone",venderl.telephone)
    dat.append("facebook",venderl.fb)
    dat.append("instagram",venderl.insta)
    avatar2!==undefined?dat.append("image",avatar2):dat.append("image",venderData?.imageStore)
    dat.append("emailLib",venderl.email)

    if(sizeimg2)
    {
      {toast.error("taill image !!! ",{autoClose: 1000})}
    }
    else{
     modifierIdentitevender(props.user.id,dat).then((response)=>{
       if(response.success===true){
           toast.success("votre identite  modifier avec success",{autoClose: 1000})
           setrefreshpage(true)
       }
     })
    }
  
     setrefreshpage(false) 

  }
  else{
    toast.error("modify image !!!",{autoClose: 1000})
  }

}
const onImageChange = (event) => {
  if (event.target.files && event.target.files[0]) {
    setavatar(event.target.files[0])
    setSizeimg((event.target.files[0].size)>(1024*1024))
    setImage(URL.createObjectURL(event.target.files[0]));
    setopen(false);
    setok(true);
  }
};
const onImageChange2 = (event) => {
  if (event.target.files && event.target.files[0]) {
    setavatar2(event.target.files[0])
    setSizeimg2((event.target.files[0].size)>(1024*1024))
    setImage2(URL.createObjectURL(event.target.files[0]));
    setopen2(false);
    setok2(true);
  }
};


  return (

    <div className='vp'>
      <div><p className='txt1-vp'>Profile</p></div>
      <div className='box1-vp'>

        <div className='box1row-vp'>
        <div className='col1-vp'>
<div className='pbox-vp'><Profile  size="21" color="#222222" variant="Bold" style={{marginTop:"25%"}}/></div>
<div><p  className='txt2-vp'>Détails personnels</p></div>
<div><p className='txt3-vp'>Entrez vos coordonnées et avec les bonnes informations.</p></div>
</div>

<div className='col3-dv'>
    <div className='blo-dv' onClick={changeIdentite}>
    <button className='butt-vp'><Edit size="24" color="#222222" variant="Bold"style={{marginTop:"5%",marginLeft:"5.5%"}}/><div><p className='txtbnt-vp'>Modifier</p></div></button>
    </div>
<div>
    <div><p className='txt4-vp'>Photo de profile</p></div>

    <div className='col4-vp'>
    <div className='box3-vp'>
{open?
<>
<label htmlFor="file-input" className="labelup">
   <div className='circle-vp'>
   <Avatar  style={{ height: "150px", width: "150px" }}  src={image!==null?image:"http://127.0.0.1:8080/uploads/"+clientData?.avatar}  />
    </div>
    </label>
    <input type="file" className="uplod" id="file-input"accept=".jpg,.png" onChange={onImageChange}/>

</>:

<>
<div className='circle2-vp'>
    <Avatar  style={{ height: "48px", width: "48px" }}  src={image!==null?image:"http://127.0.0.1:8080/uploads/"+clientData?.avatar} className="avrt2-page" />
    <div><p className="txtavatar1-vp">300x300 - Max 2 MB</p></div>
    <div className="rowbntavatr-vp">
      <button className="bnt10-avatar-vp" onClick={()=>{setopen(true);  setok(false);}}><Export size="22" color="#222" variant="Bold" style={{marginTop:"3%"}}/><div className="txt102av-vp">Télécharger photo</div></button>
    <button className="bnt20-avatar-vp"  onClick={()=>{ setImage(null);setopen(true);setok(false) }}><Trash size="22" color="#FF8A65"variant="Bold" style={{marginTop:"3%"}}/><div className="txt103av-vp">Supprimer photo</div></button></div>
    </div>


</>
}

    </div>
    <div className="col20-vp">
            <div className="txt-vp">Nom et Prénom</div>
            <input  className="input-provp" onChange={handleInputChange("nom")} value={vender.nom===undefined?clientData.fullname:vender?.nom} />
          </div>
          <div className="col20-vp">
            <div className="txt-vp">Numéro de téléphone</div>
            <input  className="input-provp" onChange={handleInputChange("numero")} value={vender.nom===undefined?clientData.telephone:vender?.numero}/>
          </div>
          <div className="col20-vp">
            <div className="txt-vp">Email</div>
            <input  className="input-provp" onChange={handleInputChange("email")} value={vender.nom===undefined?clientData.email:vender?.email} />
          </div>
          <div className="col20-vp">
          <div className="txt-vp">Date de naissance</div>
          <input type="date" className="input-provp"onChange={handleInputChange("date")} value={vender.nom===undefined?clientData.Date_de_naissance:vender?.date}/>
          </div>
          <div className="col20-vp">
          <div className="txt-vp">Genre</div>
          <Select  onChange={handleInputChange("genre")} value={vender.genre}className='txt-select' style={{ width: "500px", height: " 48px", borderRadius: "8px" }} >
                    <MenuItem value="Male">
                        <em className='txt-select-vp'>Male</em>
                    </MenuItem>

                    <MenuItem value={"Femelle"} className='txt-select-vp'>Femelle</MenuItem>
                    <ListSubheader></ListSubheader>
                 
                </Select>
          </div>
    </div>

</div>


</div>


        </div>



        
<div className='lin-vp'></div>



<div className='box2row-vp'>
        <div className='col1-vp'>
<div className='pbox-vp'><Shop  size="21" color="#222222" variant="Bold" style={{marginTop:"25%"}}/></div>
<div><p  className='txt2-vp'>Détails de l’établissement</p></div>
<div><p className='txt3-vp'>Ces informations aideront les clients à mieux vous <br/> trouver parmi d'autres.</p></div>
</div>

<div className='col3-dv'>
<div className='blo-dv'onClick={changeIdentite2}>
    <button className='butt-vp'><Edit size="24" color="#222222" variant="Bold"style={{marginTop:"5%",marginLeft:"5.5%"}}/><div><p className='txtbnt-vp'>Modifier</p></div></button>

    </div><div>
    <div><p className='txt4-vp'>Votre logo</p></div>

    <div className='col4-vp'>
    <div className='box3-vp'>
{open2?
<>
<label htmlFor="file-input2" className="labelup">
   <div className='circle-vp'>
    {image2==null && venderData?.imageStore===null ?
<div className="boxgrprof-vp">    <Shop size="84" color="#515151" variant="Bold"style={{marginTop:"20%",marginLeft:"22%"}}/> 
</div>
:
<img  style={{ height: "150px", width: "150px",borderRadius:"50%" }}  src={image2!==null?image2:"http://127.0.0.1:8080/uploads/"+venderData?.imageStore} className="avrt-page" />

    }
    </div>
    </label>
    <input type="file" className="uplod" id="file-input2"accept=".jpg,.png" onChange={onImageChange2}/>

</>:

<>
<div className='circle2-vp'>
    <Avatar  style={{ height: "48px", width: "48px" }}  src={image2!==null?image2:"http://127.0.0.1:8080/uploads/"+clientData?.avatar} className="avrt2-page" />
    <div><p className="txtavatar1-vp">300x300 - Max 2 MB</p></div>
    <div className="rowbntavatr-vp">
      <button className="bnt10-avatar-vp" onClick={()=>{setopen2(true);setok2(false)}}><Export size="22" color="#222" variant="Bold" style={{marginTop:"3%"}}/><div className="txt102av-vp">Télécharger photo</div></button>
    <button className="bnt20-avatar-vp"  onClick={()=>{ setImage2(null);setopen2(true);setok2(false) }}><Trash size="22" color="#FF8A65"variant="Bold" style={{marginTop:"3%"}}/><div className="txt103av-vp">Supprimer photo</div></button></div>
    </div>


</>
}

    </div>
    <div className="col20-vp">
            <div className="txt-vp">Nom de votre établissement</div>
            <input className="input-provp" onChange={handleInputChange2("nom")} value={venderl.nom===undefined?venderData?.nameLibrairie:venderl.nom} />
          </div>
          <div className="col20-vp">
            <div className="txt-vp">Adresse</div>
            <input className="input-provp"onChange={handleInputChange2("addr")}  value={venderl?.nom===undefined?venderData?.adresse:venderl?.addr} />
          </div>
          <div className="col20-vp">
            <div className="txt-vp">Téléphone</div>
            <input className="input-provp" onChange={handleInputChange2("telephone")}  value={venderl?.nom===undefined?venderData?.nameLibrairie:venderl?.telephone}/>
          </div>
          <div className="col20-vp">
            <div className="txt-vp">Mail</div>
            <input className="input-provp"onChange={handleInputChange2("email")}  value={venderl?.nom===undefined?venderData?.emailLib:venderl?.email} />
          </div>
          <div className="col20-vp">
            <div className="txt-vp">Lien de page Facebook</div>
            <input className="input-provp" onChange={handleInputChange2("fb")}  value={venderl?.nom===undefined?venderData?.facebook:venderl?.fb}/>
          </div>
          <div className="col20-vp">
            <div className="txt-vp">Lien de page Instagram</div>
            <input className="input-provp"onChange={handleInputChange2("insta")}  value={venderl?.nom===undefined?venderData?.instagram:venderl?.insta}/>
          </div>
       
    </div>

</div>


</div>


        </div>

      </div>
    </div>

  )
}

export default VenderProfile
