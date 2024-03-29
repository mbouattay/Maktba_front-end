import React from 'react'
import './Trifilter.css'
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import Select from '@mui/material/Select';
import { ArrangeVertical } from 'iconsax-react';

const Trifilter = (props) => {
    return (

        <div className='gr-shop2'>
            <div>  <p className='txt-shope-2'>{props.total} résultats affichés</p>    </div >
            <div>
            <div className='row-trifil'>

            <div>
            
            <div  className='roww-trifilter'>

            <div> <div className='arow-trifilter'><ArrangeVertical size="22" color="#222222"/></div></div>
            <div className='Tri-fl'>Trier</div>

            </div>


             </div>
             <div>
             <Select className='txt-select' defaultValue="Par pertinence" style={{ width: "145.5px", height: " 39px", borderRadius: "8px" }} >
                    <MenuItem value="Par pertinence">
                        <em className='txt-select'>Par pertinence</em>
                    </MenuItem>
                    <ListSubheader> </ListSubheader>
                    <MenuItem value={1} className='txt-select'>Meilleurs ventes</MenuItem>
                    <ListSubheader></ListSubheader>
                    <MenuItem value={2} className='txt-select'>Date de parution</MenuItem>
                    <ListSubheader></ListSubheader>
                    <MenuItem value={3} className='txt-select'>Du - cher au + cher</MenuItem>
                    <ListSubheader></ListSubheader>
                    <MenuItem value={4} className='txt-select'>Du + cher au - cher</MenuItem>
                    <ListSubheader></ListSubheader>
                    <MenuItem value={5} className='txt-select'>Alphabétique</MenuItem>
                </Select>
             </div>
              

                </div>
            </div >
            </div>


    )
}

export default Trifilter
