import React from 'react'
import './FornisseuerProfile.css'
import {Profile,Edit,ProfileCircle,Shop } from "iconsax-react";
import {  OutlinedInput } from "@mui/material";
import Select from '@mui/material/Select';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
const FornisseuerProfile = () => {
  return (

    <div className='fp'>
      <div><p className='txt1-fp'>Profile</p></div>
      <div className='box1-fp'>

        <div className='box1row-fp'>
        <div className='col1-fp'>
<div className='pbox-fp'><Profile  size="21" color="#222222" variant="Bold" style={{marginTop:"25%"}}/></div>
<div><p  className='txt2-fp'>Détails personnels</p></div>
<div><p className='txt3-fp'>Entrez vos coordonnées et avec les bonnes informations.</p></div>
</div>

<div className='col3-dv'>
    <div className='blo-dv'>
    <button className='butt-fp'><Edit size="24" color="#222222" variant="Bold"style={{marginTop:"5%",marginLeft:"5.5%"}}/><div><p className='txtbnt-fp'>Modifier</p></div></button>

    </div>
<div>
    <div><p className='txt4-fp'>Photo de profile</p></div>

    <div className='col4-fp'>
    <div className='box3-fp'>
   <div className='circle-fp'><ProfileCircle size="46" color="#515151" variant="Bold"style={{marginTop:"30%",marginLeft:"30%"}}/> </div>
    </div>
    <div className="col20-fp">
            <div className="txt-fp">Nom et Prénom</div>
            <OutlinedInput className="input-fp" />
          </div>
          <div className="col20-fp">
            <div className="txt-fp">Numéro de téléphone</div>
            <OutlinedInput className="input-fp" />
          </div>
          <div className="col20-fp">
            <div className="txt-fp">Email</div>
            <OutlinedInput className="input-fp" />
          </div>
          <div className="col20-fp">
          <div className="txt-fp">Date de naissance</div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker className="input-fp"  />
            </LocalizationProvider>
          </div>
          <div className="col20-fp">
          <div className="txt-fp">Genre</div>
          <Select className='txt-select' defaultValue="Par pertinence" style={{ width: "500px", height: " 48px", borderRadius: "8px" }} >
                    <MenuItem value="Par pertinence">
                        <em className='txt-select-fp'>Male</em>
                    </MenuItem>
                  
                    <MenuItem value={1} className='txt-select-fp'>Femelle</MenuItem>
                    <ListSubheader></ListSubheader>
                 
                </Select>
          </div>
    </div>

</div>


</div>


        </div>



        
<div className='lin-fp'></div>



<div className='box1row-fp'>
        <div className='col1-fp'>
<div className='pbox-fp'><Shop  size="21" color="#222222" variant="Bold" style={{marginTop:"25%"}}/></div>
<div><p  className='txt2-fp'>Détails personnels</p></div>
<div><p className='txt3-fp'>Entrez vos coordonnées et avec les bonnes informations.</p></div>
</div>

<div className='col3-dv'>
<div className='blo-dv'>
    <button className='butt-fp'><Edit size="24" color="#222222" variant="Bold"style={{marginTop:"5%",marginLeft:"5.5%"}}/><div><p className='txtbnt-fp'>Modifier</p></div></button>

    </div><div>
    <div><p className='txt4-fp'>Votre logo</p></div>

    <div className='col4-fp'>
    <div className='box3-fp'>
   <div className='circle-fp'><Shop size="46" color="#515151" variant="Bold"style={{marginTop:"30%",marginLeft:"30%"}}/> </div>
    </div>
    <div className="col20-fp">
            <div className="txt-fp">Nom de votre établissement</div>
            <OutlinedInput className="input-fp" />
          </div>
          <div className="col20-fp">
            <div className="txt-fp">Adresse</div>
            <OutlinedInput className="input-fp" />
          </div>
          <div className="col20-fp">
            <div className="txt-fp">Téléphone</div>
            <OutlinedInput className="input-fp" />
          </div>
          <div className="col20-fp">
            <div className="txt-fp">Mail</div>
            <OutlinedInput className="input-fp" />
          </div>
          <div className="col20-fp">
            <div className="txt-fp">Lien de page Facebook</div>
            <OutlinedInput className="input-fp" />
          </div>
          <div className="col20-fp">
            <div className="txt-fp">Lien de page Instagram</div>
            <OutlinedInput className="input-fp" />
          </div>
       
    </div>

</div>


</div>


        </div>

      </div>
    </div>

  )
}

export default FornisseuerProfile
