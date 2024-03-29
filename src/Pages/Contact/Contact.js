import React,{lazy, useState } from 'react'
import { Grid } from '@mui/material'
import './Contact.css'
import { OutlinedInput } from '@mui/material';

import { Link } from 'react-router-dom';
import Con2 from "../../assets/con2.png"
import axios from "axios"
import { Path, Base_url } from '../../config/Config'
import { toast } from 'react-toastify';
import { useAtoms } from '../../Store/globalState/global';
import Spinier from '../../components/spinier/Spinier'
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/footer/Footer';
const Cartcontact = lazy(() => import('../../components/cart-contact/cart_contact')); 


const Contact = () => {
  const [globalState,snap]=useAtoms()
  const [user, setUser] = useState({ email: "", message: "" , name: "" , sujet: "" });
  const handleInputChange = (field) => {
    return (e) => {
      setUser((prev) => ({
        ...prev,
        [field]: e.target.value
      }));
    };
  };
const Submit=async ()=>{
  globalState.loding=true
if(user.email.length!==0 &&user.message.length!==0 &&user.name.length!==0 &&user.sujet.length!==0 )
{

  let reg =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (reg.test(user.email)) {
    let data = {
      email: user.email,
      message: user.message,
      name: user.name,
      sujet: user.sujet
    }
    
     await axios.post(Base_url+ Path.ContactApi,data).then(res=>{
   
      if(res.data.success===true )
      {
        toast.success("votre Contact a été envoyé avec succès ");
        user.email="" 
        user.message=""
        user.name=""
        user.sujet=""
        globalState.loding=false
      }
    }).catch(error => {
      console.error(error);
  
    });
  }
  else
  {
    toast.error("validation de Email !!")
    globalState.loding=false
  }

}
else{
  toast.error("remplir Champ vide SVP !!")
  globalState.loding=false
}
 
}
  return (

     <div>
  

      { snap.loding ? <Spinier /> :
      <><div className='contact'>

          <div className='grp1'>

            <p className='txt1'> Contactez-nous</p><br />


            <p className='txt2'>Entrez en contact avec notre équipe. Nous serions ravis de vous donner un coup de main </p>
            <div className='cart-conct'><Cartcontact /></div>
          </div>

        </div><div className='group2-con'>

            <Grid container spacing={5.5}>
              <Grid item>  <img src={Con2} className="imgcon" />
                <span><p className='txt6-con'>Suivez-nous sur:</p></span>


                <div className='icon-con2'>
                  <Link to="#"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAhklEQVR4nO3TsQ3CMBBA0RcxQSpqZqBniEzAVrTswAZMQZOWEuoU6BCtJZCCsA3CX7r6SXc2rS+vwxZHXHHDBSPWOeE94slscqHDCzQrfKgFnxNoh16BpgReKlQk09WCsxUzZ1UDnrCoAZ8+hc6FH3/89x9XWoOLFe3GpYq26lLF36265Z3ugcmLNVEqKJcAAAAASUVORK5CYII=" className='fa fa-facebook-f' /></Link>
                  <Link to="#"><img className='fa fa-twitter' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWUlEQVR4nOXUMUscURQF4C+RVEmjhSAJimBlF2xESZNAVLBYRCxEbLWxsUkhEdMIKdKkSSBN0vgDtLBKCnsLLdxCm+gKNhFEgi5u3LAwA8sww7xhp0oO3GJ495xz5973Lv8KHhbMf4INHKOOGj7hWVvOMPrijw94GSjegwM0U+IX3uE79vAgJp3hGpMBBlsZ4u1RxRQqMekmOmhgHY8yxHvxJ8DgDufoj4nVRMIRZtGVMHgVIB7zB9qJaxmJNXzEDIYwEWjwNvnrj7EfSG4GxHLS4ATb0QzKMKgkDX6UWH0z2f8WxnFfkng1636/KcnkfZZB6+5P47AD8Vs8zTLoxlWH1X+Wg6UO2vQzKjIXC9FuKiLewIsQ8fZ5LOJ3gHg9WivBGMHXaGE1c6I1s9d5gmP4gl1cFGjLTtqDysIgNnGaI3qJbxgt0pI0szmsRI9vFfN4nrK+/wP8BZuBFXDRPn1vAAAAAElFTkSuQmCC" /></Link>

                  <Link to="#"><img className="fa fa-instagram" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWUlEQVR4nO2WwU7CQBCGv7t4A05y5ih6EDH6Dkp8IJEnUOQhMCQ8iehD6E1NWz3IQTEb/yakobutmRoP/Mkkzc7MfpnJdLKw0T9QExgC98A7sCxoLnau3EZZ6DmQlIDlWQz0y0C/DKCpfRaBN40qzVoUavvQCHQEHGfOBj7wgxHYQU8yZ3MfONTmD+AK6AJbMvc9AhaB3MQH9iU+Arue3I5ifHfkyldpCm0BU1XgbAa05dsLVJ6rvATX3hT6ssb/Kp/TjSX4QP6pJ+ZWMYeW4FqB4XNbymn7r8FRFeCu/DNPzEQxPUvwtfxtDVLW/wzsKGZs/Tt1FNPSIMWyyQp03/p3Wmo5pPB1ctCnwB2/XpkLrceeBq6m73GBlRnnY39eG8uK7M4HvqwQfOEDN9QSa2gE1Amor+eKFdTddRqCrsIjo0rPikJT1fVccUPxVgKWKGdQpL0bUbW+AcdI0V4wAXsCAAAAAElFTkSuQmCC" /></Link>
                  <Link to="#"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4ElEQVR4nO2WvQ4BQRSFvxU6P4VG5wU0KioqiQ3eQu81VJ7DA+h0RFTeQLUrohSFiLArktlkTGOLmVk/e5JT3HPvzZfMTDGQ6h/VA3ZAqMk+4MYB+xqhkb044NCQ30pdOAJL4GwTfAKqIq8DN1vgtdLzbIEvQEPkAyCwecd3YJ/E4xoLT0R9kLIZsAVGQB8YAitdYEfkeVFvpNkmUFL2M8DcNDhSmVd1TIMdYCHyqZRXTINr0twVyIo8ZxrcUmYLUi8wCW4rs8UUzDcedajJnwv2k/r6uJrhT2g3DjjVb+kBRsV7Hz5Qag0AAAAASUVORK5CYII=" className='fa fa-linkedin-in' /></Link>
                </div>


              </Grid>
              <Grid item>
                <div className='group-con3'>
                  <Grid container direction="column" spacing={2.5}>

                    <Grid item> <p className='con-nous'>Contactez-nous</p> </Grid>
                    <Grid item><OutlinedInput className='inpu-con' placeholder="Votre nom" onChange={handleInputChange("name")} value={user.name} /> </Grid>
                    <Grid item><OutlinedInput className='inpu-con' placeholder="Email" onChange={handleInputChange("email")} value={user.email} /> </Grid>
                    <Grid item><OutlinedInput className='inpu-con' placeholder="Sujet" onChange={handleInputChange("sujet")} value={user.sujet} /> </Grid><br />
                    <Grid item><OutlinedInput className='inpu-con2' placeholder="Message" multiline rows={5} maxRows={80} onChange={handleInputChange("message")} value={user.message} /> </Grid>
                    <Grid item><button className='bnt-con2' onClick={Submit}>
                      <div className='textbnt-con2'>Envoyer</div></button>
                    </Grid>


                  </Grid>


                </div>
              </Grid>
            </Grid>
          </div><div></div></>
  }
     
      </div>

  )
}

export default Contact
