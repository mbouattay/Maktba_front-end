import React, { useState,useEffect } from "react";
import'./Fournisseurs.css'
import logo from "../../assets/logo10.png";
import img from "../../assets/Ellipse 503.png";
import {
  Chart2,
  Element4,
  Shop,
  Box,
  TruckFast,
  ShoppingCart,
  Graph,
  Receipt1,
  LogoutCurve,
} from "iconsax-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { Globalvariable } from "../../Store/Service/Globalvariable";
const Fournisseurs = () => {
  const linkarray = [
    {
      linkname: "Tableau du bord",
      icon: <Chart2 size="32" color="#7E7E7E" variant="Bulk" />,
      linkto :"/Fournisseurs"
    },
    {
      linkname: "Catégories",
      icon: <Element4 size="32" color="#7E7E7E" variant="Bulk" />,
      linkto :"/Fornisseuer/categorie"
    },
    {
      linkname: "Inventaire",
      icon: <Shop size="32" color="#7E7E7E" variant="Bulk" />,
      linkto :"/Fornisseuer/Inventaire"
    },
    {
      linkname: "Liste de commandes",
      icon: <Box size="32" color="#7E7E7E" variant="Bulk" />,
      linkto :"/Fornisseuer/Liste_de_commandes"
    },
    {
      linkname: "Liste de livraisons",
      icon: <TruckFast size="32" color="#7E7E7E" variant="Bulk" />,
      linkto :"/Fornisseuer/Liste_de_livraisons"
    },
    {
      linkname: "Approvisionner",
      icon: <ShoppingCart size="32" color="#7E7E7E" variant="Bulk" />,
      linkto :"/Fornisseuer/Approvisionner"
    },
    {
      linkname: "Gestion de points",
      icon: <Graph size="32" color="#7E7E7E" variant="Bulk" />,
      linkto :"/Fornisseuer/Gestion_de_points"
    },
    {
      linkname: "Factorisation",
      icon: <Receipt1 size="32" color="#7E7E7E" variant="Bulk" />,
      linkto :"/Fornisseuer/Factorisation"
    },
 
    {
      linkname: "Profile",
      icon: <img src={img} alt="profil" className="profil" />,
      linkto :"/Fornisseuer/Profile"
    },
  ];
  const dispatch=useDispatch()
  const Globalvariablee=useSelector(state=> state.Globalvariable.Global1)
  const [linkStyle, setLinkStyle] = useState(false);
  const [linkId, setLinkId] = useState(Globalvariablee.length!==undefined?0:Globalvariablee);
  const handleChangeStyleLink = (id,link) => {
    setLinkStyle(true);
    dispatch(Globalvariable(id))
      setLinkId(id);
     console.log(link)
  };
 
  return (
    <div className="Fournisseurs">
      <div className="sidebar-Fournisseurs">
    <img src={logo} alt="maktba" className="logoside-Fournisseurs" />
        <div className="linksidebar-Fournisseurs">
          {linkarray.map((e, key) => (
            <Link to={e.linkto}> 
                    <div   onClick={() => handleChangeStyleLink(key,e.linkto)}
              className={
                linkId === key && linkStyle
                  ? "link"
                  : key === 0 && !linkStyle
                  ? "link"
                  : "linknone-Fournisseurs"
              }
            >
            <div>      {e.icon}  </div>
         <div>     <p className="txt0214-Fournisseurs ">{e.linkname}</p>  </div>
            </div>
            </Link>
           
          ))}
        </div>
      
        <div className="deconnecterbox-Fournisseurs">
          <LogoutCurve
            size="22"
            color="#E66A6A"
            variant="Bulk"
            className="iconOut-Fournisseurs"
          />
          <p className="outText-Fournisseurs">Se déconnecter</p>
        </div>
      </div>
      <Outlet/>
      
    </div>
  )
}

export default Fournisseurs
