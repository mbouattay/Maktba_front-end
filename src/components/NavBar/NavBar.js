import React from 'react'
import './navbar.css'
import Imge from "../../assets/logo.png"
import { Link } from 'react-router-dom';
import { ShoppingCart,ArrowDown2, ProfileCircle } from 'iconsax-react';
import Menuicon from '../menu-icon/minu';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
function NavBar(props) {
  const clientData = useSelector(
    (state) => state.IdentiteClient.identiteClient
  );
  const nbprod=useSelector(state=> state.Panier.nbprod)
  return (

      <header className="header">
        <div className="logo">
          <Link to="/home"> <img src={Imge} alt="logo" /></Link>
          <div className='icon-menu'>
            <Menuicon   />
            </div>

          </div>
        <div className='groupli'>
          <ul className="main-nav">
           <a href="/home"> <li>Accueil</li></a>
           <a href="/Shop"> <li>Shop </li></a>
            <a href="/AboutUs"><li>À propos</li></a>
           <a href="/BecomePartner"> <li>Devenir partenaire</li></a>
          <a href="/Contact">  <li>Contact</li></a>
          </ul>
        </div>
        <div className='group032'>
          <div className="cartchop">

          <span>
            <a href="/cart" className='iconcolor'>
              <ShoppingCart
                size="32"
                color="#FFFFFF"
                variant="Bold"
              /><p className='patch'><p className='patch-txt'>+{nbprod}</p></p>
            </a>
          </span>
          </div>
         <div>
         <Link to="/login" className={props.user.auth?"butto-NAV-link-none":"butto-NAV-link"} > <button className='butto-NAV' ><p className='conx'>Connexion</p></button></Link>
          <Link to={props.user.role==="client"?"/Profile":props.user.role==="labrairie"?"/Vender/TableauDuBord":props.user.role==="Admin"?"/Admin":""} >
          <div className={props.user.auth?"section_user":"section_user-none"}>
                  <p className='username'> {clientData?.fullname===undefined?props.user?.fullname:clientData?.fullname}</p>
                  <Avatar  style={{ height: "26px", width: "26px" }}  src={clientData?.avatar!==undefined?"http://127.0.0.1:8080/uploads/"+clientData?.avatar:"http://127.0.0.1:8080/uploads/"+props.user.avatar} className="avrt-pagenave" />
          </div>
          </Link>
          </div>
    
        </div>

      </header>
      




    
  )
}

export default NavBar
