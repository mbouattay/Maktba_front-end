import React, { useEffect,useState } from "react";
import './cardlisteprod.css'
import {Visiblein} from '../../../Store/Service/Visiblein'
import {Eye,EyeSlash} from "iconsax-react";
import { getAllProduitCataloge } from "../../../Store/Service/allProduitCataloge";
import { useDispatch } from "react-redux";

const Cardlisteprod = (props) => {

  const [state, setState] = useState(true)
  const [vs, setvs] = useState(props.Visibetat)
  const dispatch = useDispatch();
  const updateVisible = (id,vis) => {
 

   let data={
      "etat":vis
    }
 
    Visiblein(id,data).then((res) => {
      dispatch(getAllProduitCataloge())
    });
  };
  return (
    <div className='prod-lst'>
      {props?.Role=="admin" ?
      vs!=="invisible"?
        <div className='Eye' onClick={()=>{setState(false);updateVisible(props.id,"invisible");setvs("invisible")}}>
        <Eye size="22" color="#05400A"  variant="Bold"/>
        </div>
       :
       <div className='Eye2' onClick={()=>{setState(true);updateVisible(props.id,"visible");setvs("visible")}}>
       <EyeSlash size="22" color="#610404"  variant="Bold"/>
       </div>
      :
      ""
      }
    
      {props?.Role=="admin"?
         <img src={"http://127.0.0.1:8080/uploads/"+props.img} className='img-lst2' onClick={props.toggleDrawer('right', true,props.id)} />
      :
      <img src={"http://127.0.0.1:8080/uploads/"+props.img} className='img-lst' />
      }
      <div>
        <p className='txt-lst'>#{props.id}</p>
        </div>
        <div>
        <p className='txt-lst2'>{props.titre}</p>
        </div>
    </div>
  )
}

export default Cardlisteprod
