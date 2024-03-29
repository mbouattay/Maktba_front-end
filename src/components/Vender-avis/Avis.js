import React, { useEffect,useState  } from 'react'
import "./Avis.css"
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Sort} from "iconsax-react";
import Rating from "@mui/material/Rating";
import Filterbar from '../filterbar/Filterbar';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { avisLib } from '../../Store/Service/AllAvisBylib';
import Pagination from "@mui/material/Pagination";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
const Avis = (props) => {
  
const avis = useSelector((state)=>state.Allavislib.avislib)
const dispatch=useDispatch()
useEffect(()=>{
      dispatch(avisLib(props?.id))
},[])
const items =8;
const [current,setCurrent]=useState(1)
const NbPage=Math.ceil(avis.length/items);
const startIndex=(current -1)*items;
const endIndex=startIndex+items;
const DataPerPage=avis.slice(startIndex,endIndex)
function handlePagination (event,page) {
  setCurrent(page)
}
  return (
    <TabPanel value={props.value} index={1} >

<br/>
<Filterbar icon={ <Sort size="22" color="#222222"/> } nom="Trier par"/>
<br/><br/>

 <table>
<tr>

<th>Produit</th>
<th>Score</th>
<th>Client</th>
<th>Date</th>
<th>Commentaire</th>


</tr>

{avis.map((obj,index) => (
<tr>

<td className='tdwidth2-aviss'> <div className="row-int01">
            <img src={"http://127.0.0.1:8080/uploads/"+obj.produitlabrairie?.imagelibrairies?.[0]?.name_Image} className="img1-int" />
              <div style={{marginTop:"3%"}}><p className='txt01-int'>{obj.produitlabrairie?.titre}</p></div>
              </div>
            </td>
<td className='tdwidth02-aviss'>
<p className='txt02-int'><Rating name="read-only" value={obj.nbstart} readOnly
                defaultValue={2}
                size="small"
                className="stars"
              /></p>
              </td>
<td className='tdwidth10-aviss'>
    <div className='tdwidth3-aviss'>
    <div> <img src={"http://127.0.0.1:8080/uploads/"+obj?.client?.user?.avatar} alt="maktba"  className="img-aviss"/></div>
<div><p className='txt0014-aviss'>{obj.client?.user?.fullname}</p></div>
    </div>

</td>
<td className='tdwidth10-aviss'>{obj.createdAt}</td>
<td className='tdwidth10-aviss'><div><p className='comm-aviss'>{obj.commenter}</p></div></td>


</tr>
))}


</table>
<br/><br/>
<div className='page-listev'>  
</div>
<Pagination
                  count={NbPage}
                  shape="rounded"
                  className="pagination-shop"
                  page={current}
                  onChange={handlePagination}
                />
  </TabPanel>
  )
}

export default Avis
