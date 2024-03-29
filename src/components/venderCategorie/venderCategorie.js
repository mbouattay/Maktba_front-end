import React, { useState } from "react";
import logo from "../../assets/logo10.png";
import img from "../../assets/Ellipse 503.png"
import { Chart2,Element4,Shop,Box,TruckFast,ShoppingCart,Graph,Receipt1,LogoutCurve} from "iconsax-react";
import "./venderCategorie.css"
const VenderCategorie = () => {
  const linkarray=[
    {
      linkname: "Tableau du bord",
      icon: <Chart2 size="32" color="#7E7E7E" variant="Bulk" />,
    },
    {
  
      linkname: "Catégories",
      icon: <Element4 size="32" color="#7E7E7E" variant="Bulk"/>,
    },
    {
    
      linkname: "Inventaire",
      icon: <Shop size="32" color="#7E7E7E" variant="Bulk"/>,
    },
    {
    
      linkname: "Liste de commandes",
      icon: <Box size="32" color="#7E7E7E" variant="Bulk"/>,
    },
    {
      
      linkname: "Liste de livraisons",
      icon:<TruckFast size="32" color="#7E7E7E" variant="Bulk"/> ,
    },
    {
   
      linkname: "Approvisionner",
      icon: <ShoppingCart size="32" color="#7E7E7E" variant="Bulk"/>,
    },
    {
      linkname: "Gestion de points",
      icon: <Graph size="32" color="#7E7E7E" variant="Bulk"/>,
    },
    {
      linkname: "Factorisation",
      icon: <Receipt1 size="32" color="#7E7E7E" variant="Bulk"/>,
    },
    
  ];
  const [linkStyle,setLinkStyle]=useState(false) 
  const [linkId,setLinkId]=useState(0) 
  const handleChangeStyleLink=(id)=>{
    setLinkStyle(true)
    setLinkId(id)
  }
  
  return (
    <div className="categoriePage">

      <div className="side-bar">
        <img src={logo} alt="maktba"  className="logo-side"/>
        <div className="link-side-bar">
            {linkarray.map((e,key)=>(
                <div onClick={()=>handleChangeStyleLink(key)} className={linkId===key && linkStyle ?"link":key===0 && !linkStyle?"link":"linknone"}>
                        {e.icon}
                        <p>{e.linkname}</p>
                </div>
            ))}
        </div>
        <div className="profile-container1">
             <img src={img} alt="profil" className="profil"/>
             <p className="titreProfile">Profile</p>       
        </div>
        <div className="deconnecter-box">
            <LogoutCurve size="22" color="#E66A6A" variant="Bulk" className="iconOut"/>  
            <p className="outText">Se déconnecter</p>     
        </div>
      </div>
      <div className="pages-container1">
            <div className="header-page-categorie"> 
                <h1 className="title-page-categorie">Catégories</h1>
                <button className="btn-suggestion">Faire une suggestion</button>
            </div>     
      </div>
    </div>
  );
};
export default VenderCategorie;
