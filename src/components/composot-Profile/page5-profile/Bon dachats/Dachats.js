import React from 'react'
import './Dachats.css'
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import logo2 from '../../../../assets/logo2.png'
const Dachats = () => {
  const [tabd, settab] = React.useState({ number: "", pts: "" ,date:""});
  const [open, setOpen] = React.useState(false);
  const handleOpen = (number,des,data) => {
    
    setOpen(true);
    settab(prevState => ({ ...prevState, number: number}));
    settab(prevState => ({ ...prevState, date: data}));
  }

  const handleClose = () => setOpen(false);


  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "#FFFFFF",
    width: "544px",
    height: "550px",
    boxShadow:
      "2px 5px 15px rgba(26, 31, 39, 0.02), 10px 15px 40px rgba(26, 31, 39, 0.03)",
    borderRadius: "8px",

    p: 4,
  };
    const tabdach=
    [
        { number:'25',des:"Ce code promo vous offre 25% de remise sur les produits scolaire",pts:"100",date:"Expire le 21 avril 2023"   }
    ,
    { number:'250',des:"Ce code promo vous offre 25% de remise sur les produits scolaire",pts:"300",date:"Expire le 21 avril 2023"   }
    ,{ number:'205',des:"Ce code promo vous offre 250% de remise sur les produits scolaire",pts:"200",date:"Expire le 21 avril 2023"   }
    ,{ number:'5',des:"Ce code promo vous offre 25% de remise sur les produits scolaire",pts:"500" ,date:"Expire le 21 avril 2023"  }
    ,{ number:'50',des:"Ce code promo vous offre 25% de remise sur les produits scolaire",pts:"400" ,date:"Expire le 21 avril 2023"  }
    
    ]
  return (
    <div className='Dachats'>
 

      {tabdach.map((obj) =>
     <div className='row-Dachats'>
<p className='txt1-Dachats'>{obj.number}%</p>
<p className='txt2-Dachats'>{obj.des}<br/>
<span className='date-Dachats'>{obj.date}</span>
</p>

<button className='bnt-Dachats' onClick={()=>{handleOpen(obj.number,obj.des,obj.date)}}><p className='bnttxt-Dachats' >{obj.pts} pts</p></button>
</div>
            )}

                <Modal
                  open={open}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  onClose={handleClose}
                >
                  <Box sx={style} >
               
                  <div className='flex-end'>    <div > <i class="fa fa-close" onClick={handleClose}></i></div></div>
                     <div> <img src={logo2} className='logo2-dachats'/></div>
                        <div className="col4-dachats">
                        <p className='txt7-Dachats'>Code promo Maktaba</p>
                        <p className='txt1-Dachats'>{tabd.number}%</p>
                        <p className='txt8-Dachats'>Ce code promo vous offre {tabd.number}% de remise sur les produits "scolaire"</p>
                       <div className='box-Dachats'><button className='bntmodal-Dachats'>Copier</button><p className='txtmodal2-Dachats'>maktaba{tabd.number}off </p></div>
                      
        
<ul style={{listStyleType:"disc"}}>
<h2 className='txtli-Dachats3'>Condition:</h2>
<div className='li-Dachats'>
<li className='txtli-Dachats'> <p className='txtli-Dachats1'>{tabd.date}</p></li>
  <li className='txtli-Dachats'>Appliqué uniquement sur tous les produits "scolaire"</li>
</div>


</ul>

                        </div>
                     
            
                  </Box>
                </Modal>

    </div>
  )
}

export default Dachats
