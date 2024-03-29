import React from 'react'
import {ShoppingCart,Lovely,SearchNormal,Profile2User,FavoriteChart,Shop} from 'iconsax-react';
import { Grid } from '@mui/material'
const Cart = () => {
  return (
    <Grid item>
    <div className='col3-hom' >
 
   <div>  <div > <p className='txt5-home'>Pourquoi nous choisir?</p>    </div></div>
   <div>  <div > <p className='txt5home'>Les clients ont besoin d’un service de livraison rapide,fiable et sûr. Et ainsi nous fournissons un service dequalité, des livraisons précises et rapides.</p>    </div></div>
 <div>
 
 <div className='row3-hom'>
 
   <div>
         <div className='col4-hom'>
       <div><ShoppingCart size="32" color="#E9B949" variant="Bold"/></div>
       <div><p className='txtcarda-home0'>Achats</p></div>
       <div><p className='txtcarda-home1'>Livraison rapide et fiable pour vos achats en ligne ou en magasin, pour vous faire économiser du temps</p></div>
       </div>
   </div>
 
   <div>
         <div className='col4-hom'>
       <div><Lovely size="32" color="#E9B949" variant="Bold"/></div>
       <div><p className='txtcarda-home0'>Dons</p></div>
       <div><p className='txtcarda-home1'>Livraison précise et rapide pour vos dons caritatifs, pour une contribution optimale</p></div>
       </div>
   </div>
   
   <div>
         <div className='col4-hom'>
       <div><SearchNormal size="32" color="#E9B949" variant="Bold"/></div>
       <div><p className='txtcarda-home0'>Visibilité</p></div>
       <div><p className='txtcarda-home1'>Améliorez la visibilité de votre entreprise avec notre service de livraison fiable et rapide</p></div>
       </div>
   </div>
       
   </div>
   
   
   </div>
 
   <div>
 
 <div className='row3-hom'>
 
   <div>
         <div className='col4-hom'>
       <div><Profile2User size="32" color="#E9B949" variant="Bold"/></div>
       <div><p className='txtcarda-home0'>Collaboration</p></div>
       <div><p className='txtcarda-home1'> Nous collaborons avec d'autres entreprises pour répondre aux besoins de livraison de leurs clients</p></div>
       </div>
   </div>
 
   <div>
         <div className='col4-hom'>
       <div><Shop size="32" color="#E9B949" variant="Bold"/></div>
       <div><p className='txtcarda-home0'>Appartenance</p></div>
       <div><p className='txtcarda-home1'>Rejoignez notre communauté d'utilisateurs satisfaits pour un service de livraison personnalisé et fiable</p></div>
       </div>
   </div>
   
   <div>
         <div className='col4-hom'>
       <div><FavoriteChart size="32" color="#E9B949" variant="Bold"/></div>
       <div><p className='txtcarda-home0'>Optimisation</p></div>
       <div><p className='txtcarda-home1'>Livraison précise et rapide avec des options flexibles pour répondre à vos besoins</p></div>
       </div>
   </div>
       
   </div>
   
   
   </div>
 
   </div>
    </Grid>
  )
}

export default Cart
