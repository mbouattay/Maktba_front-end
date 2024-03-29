import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom';
import Imge from "../../assets/logo.png"
import { Call,Location,Sms} from 'iconsax-react';

const Footer = () => {
  return (
    <div className='footer'>
    <section className="ft-main">
      <div className="ft-main-item">
        <div className="ft-logo"><Link to="#"><img src={Imge} alt="logoo"/></Link></div><div className='es'></div>
        <p className='text1'>
        Maktaba.tn est une plateforme de commerce 
        électronique innovante reliant les réseaux de
         librairies, 
        fournisseurs, écoles et espaces
         étudiants en Tunisie, 
        offrant une solution
         tout-en-un pour tous leurs besoins.
        </p><br/>
        <div className='iconn'>
        <Link to="#" ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAhklEQVR4nO3TsQ3CMBBA0RcxQSpqZqBniEzAVrTswAZMQZOWEuoU6BCtJZCCsA3CX7r6SXc2rS+vwxZHXHHDBSPWOeE94slscqHDCzQrfKgFnxNoh16BpgReKlQk09WCsxUzZ1UDnrCoAZ8+hc6FH3/89x9XWoOLFe3GpYq26lLF36265Z3ugcmLNVEqKJcAAAAASUVORK5CYII=" className='fa fa-facebook-f'/></Link>
        <Link to="#"><img className='fa fa-twitter' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWUlEQVR4nOXUMUscURQF4C+RVEmjhSAJimBlF2xESZNAVLBYRCxEbLWxsUkhEdMIKdKkSSBN0vgDtLBKCnsLLdxCm+gKNhFEgi5u3LAwA8sww7xhp0oO3GJ495xz5973Lv8KHhbMf4INHKOOGj7hWVvOMPrijw94GSjegwM0U+IX3uE79vAgJp3hGpMBBlsZ4u1RxRQqMekmOmhgHY8yxHvxJ8DgDufoj4nVRMIRZtGVMHgVIB7zB9qJaxmJNXzEDIYwEWjwNvnrj7EfSG4GxHLS4ATb0QzKMKgkDX6UWH0z2f8WxnFfkng1636/KcnkfZZB6+5P47AD8Vs8zTLoxlWH1X+Wg6UO2vQzKjIXC9FuKiLewIsQ8fZ5LOJ3gHg9WivBGMHXaGE1c6I1s9d5gmP4gl1cFGjLTtqDysIgNnGaI3qJbxgt0pI0szmsRI9vFfN4nrK+/wP8BZuBFXDRPn1vAAAAAElFTkSuQmCC"/></Link>
            <Link to="#" ><img  className="fa fa-instagram"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWUlEQVR4nO2WwU7CQBCGv7t4A05y5ih6EDH6Dkp8IJEnUOQhMCQ8iehD6E1NWz3IQTEb/yakobutmRoP/Mkkzc7MfpnJdLKw0T9QExgC98A7sCxoLnau3EZZ6DmQlIDlWQz0y0C/DKCpfRaBN40qzVoUavvQCHQEHGfOBj7wgxHYQU8yZ3MfONTmD+AK6AJbMvc9AhaB3MQH9iU+Arue3I5ifHfkyldpCm0BU1XgbAa05dsLVJ6rvATX3hT6ssb/Kp/TjSX4QP6pJ+ZWMYeW4FqB4XNbymn7r8FRFeCu/DNPzEQxPUvwtfxtDVLW/wzsKGZs/Tt1FNPSIMWyyQp03/p3Wmo5pPB1ctCnwB2/XpkLrceeBq6m73GBlRnnY39eG8uK7M4HvqwQfOEDN9QSa2gE1Amor+eKFdTddRqCrsIjo0rPikJT1fVccUPxVgKWKGdQpL0bUbW+AcdI0V4wAXsCAAAAAElFTkSuQmCC"/></Link>
            <Link to="#" ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4ElEQVR4nO2WvQ4BQRSFvxU6P4VG5wU0KioqiQ3eQu81VJ7DA+h0RFTeQLUrohSFiLArktlkTGOLmVk/e5JT3HPvzZfMTDGQ6h/VA3ZAqMk+4MYB+xqhkb044NCQ30pdOAJL4GwTfAKqIq8DN1vgtdLzbIEvQEPkAyCwecd3YJ/E4xoLT0R9kLIZsAVGQB8YAitdYEfkeVFvpNkmUFL2M8DcNDhSmVd1TIMdYCHyqZRXTINr0twVyIo8ZxrcUmYLUi8wCW4rs8UUzDcedajJnwv2k/r6uJrhT2g3DjjVb+kBRsV7Hz5Qag0AAAAASUVORK5CYII="  className='fa fa-linkedin-in'/></Link>
</div><br/>
      </div>
      <div className="ft-main-item d">
        <h2 className="ft-title">Liens Rapides</h2>
        <ul>
          <li><Link to="#">À propos</Link></li>
          <li><Link to="#">Shop</Link></li>
          <li><Link to="#">Devenir partenaire</Link></li>
        </ul>
      </div>
      <div className="ft-main-item d">
        <h2 className="ft-title">Nos Catégories</h2>
        <ul>
          <li><Link to="#">Scolaire</Link></li>
          <li><Link to="#">Para-scolaires</Link></li>
          <li><Link to="#">Outils informatiques</Link></li>
          <li><Link to="#">Divers</Link></li>
          <li><Link to="#">Jeux educatifs</Link></li>
        </ul>
      </div>
      <div className="ft-main-item ">
        <h2 className="ft-cont">Contact</h2>
       
        <ul>
        <div className="controle"> 
        <li><br/>
      
            <div className="grid-containerr">
  <div className="item7"> <span className="material-symbols-outlined"><Location size="28" color="#d9e3f0" variant="Bold"/></span>  </div>
  <div className="item8">
             122 Rue de Makthar
            </div>  
          </div>
          </li>
          <li><br/>
          <div className="grid-containerr">
  <div className="item7"> <span className="material-symbols-outlined"><Call size="28" color="#d9e3f0" variant="Bold"
/></span>  </div>
  <div className="item8">
  (+216) 20 222 222
            </div>  
          </div>
          
          </li><br/>
          <li>

          <div className="grid-containerr">
  <div className="item7"> <span className="material-symbols-outlined"><Sms size="28" color="#d9e3f0" variant="Bold"/></span>  </div>
  <div className="item8">
  contact@maktba.com
            </div>  
          </div>
          </li>

          </div>
        </ul>
      </div>
    </section>
    <hr className='line'/>
    <p className="Copyright" onClick={() => {    
  window.scrollTo({
    top: 10000,
    behavior: "smooth"
  });
}}>Copyright © 2023 Maktaba.tn</p>
  </div>
 

  )
}

export default Footer
