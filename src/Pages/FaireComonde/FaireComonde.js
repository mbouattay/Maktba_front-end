import React, { useEffect, useState } from "react";
import "./FaireComonde.css";
import { useNavigate } from "react-router-dom";
import {  OutlinedInput } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {  TickCircle} from "iconsax-react";
import Select from "@mui/material/Select";
import { Grid } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useDispatch, useSelector } from "react-redux";
import { getIdentiteClientt } from "../../Store/Service/identiteClient";
import { AjouteCommande } from "../../Store/Service/AjouteCommande";
import { toast } from "react-toastify";
import { AddAdrClient } from "../../Store/Service/AdrClient/AddAdrClient";
import { addPoint } from "../../Store/Service/addPoint";
const FaireComonde = (props) => {
  const navigate = useNavigate();
  const [addresse, setAddresse] = useState({nom: "", addr: "",Ville:"",codepostal:"",clientId:"" });

  const [Gouvernorat, setGouvernorat] = useState("");
  const [Point, setPoint] = useState(50);
  const Gouvernora = [
    { nome: "Ariana" },
    { nome: "Béja" },
    { nome: "Ben Arous" },
    { nome: "Bizerte" },
    { nome: "Gabès" },
    { nome: "Gafsa" },
    { nome: "Jendouba" },
    { nome: "Kairouan" },
    { nome: "Kairouan" },
    { nome: "Kasserine" },
    { nome: "Kébili" },
    { nome: "Le Kef" },
    { nome: "Mahdia" },
    { nome: "La Manouba" },
    { nome: "Médenine" },
    { nome: "Monastir" },
    { nome: "Nabeul" },
    { nome: "Sfax" },
    { nome: "Sidi Bouzid" },
    { nome: "Siliana" },
    { nome: "Sousse" },
    { nome: "Tataouine" },
    { nome: "Tozeur" },
    { nome: "Tozeur" },
    { nome: "Tunis" },
    { nome: "Zaghouan" },
  ];
  const [opencoll, setopencoll] = React.useState(false);
  const [check, setCheck] = useState(false);
  const [login, setlogin] = useState(false);
  const [open2, setopen2] = useState(false);
  const [open3, setopen3] = useState(false);
  const [open4, setopen4] = useState(false);
  const [ModeLiv,setModeLiv] = useState();
  const [ModePay,setModePay] = useState();
  const [idA,setidA] = useState();
  const [OpenFormAdr,setOpenFormAdr] = useState(false);
  const [refreshpage,setrefreshpage]=useState()
  const [step2, setstep2] = useState(false);
  const [step3, setstep3] = useState(false);
  const handleChangeGouvernorat = (event) => {
    setGouvernorat(event.target.value);
  };

  const handleInputChange = (field) => {
    return (e) => {
      setAddresse((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };
  };

  const Ajoutadr=()=>{
    let data = {
      Nom_de_adresse: addresse.nom,
      Adresse: addresse.addr,
      Gouvernorat: Gouvernorat,
      Ville: addresse.Ville,
      Code_postal: addresse.codepostal,
      clientId: props.user.id,
    }
  
    if(Gouvernorat.length!==0 && addresse.addr.length!==0 && addresse.Ville.length!==0&& addresse.codepostal.length!==0 ){
      AddAdrClient(data).then((response)=>{
        if(response.success===true){
            toast.success("votre Adresse  Ajoute  avec success",{autoClose: 1000})
            setrefreshpage(true)
        }
      })
      setOpenFormAdr(false)
      setrefreshpage(false)
      setstep2(true)
  }
  else{ toast.error("remplir votre champ  svp !",{autoClose: 1000})}
  }
  const checkedboxfilter = (event) => {
    setCheck(event.target.checked);
  };

  const calulerPoint=()=>{
    if(totalHT>=20 && totalHT<=100){
      setPoint(50)
    }
    if(totalHT>100 && totalHT<=300){
      setPoint(80)
    }
    if(totalHT>300){
      setPoint(150)
    }
  }


  const panier=useSelector(state=> state.Panier.panier)

  const commande = useSelector((state) => state.Commande.commande);
  const [totalHT, settotalHT] = React.useState(0);
  const [play, setplay] = React.useState(true);

  const calculTotalHT = () => {
    let total = 0;
    commande?.map((obj) => {
      total += obj.prix;
    });
    settotalHT(total*1.07);
  };
  React.useEffect(() => {
    valide();
    calculTotalHT();
    calulerPoint();

  }, [commande||refreshpage]);
  const clientData = useSelector(
    (state) => state.IdentiteClient.identiteClient
  );
  const dispatch=useDispatch()
  useEffect(()=>{
        dispatch(getIdentiteClientt(props.user.id));
  },[refreshpage])

  const valide=()=>{
    if(commande.length!=0)
    {
      let arry=[]
      let qt=true
      for(let i=0;i<panier?.length;i++)
      {
        
      if(panier[i].Allqte<panier[i].qte)
      {
        arry.push(panier[i].titre+"  les Qnt en stoke :"+panier[i].Allqte)
        qt=false
     
      }
      }
      if(qt)
      {
      setplay(true)

      }else{
      setplay(false)

      }
  
    }
    else{
      toast.error("ne pas des produit dans votre card !!",{autoClose: 1000})
    }
    
    }

  const addresses=clientData?.client?.adresses
  const passeCommande = () => {
  if(ModePay!==undefined)
  {
    const commandes = [];
    const groupedCommande = commande.reduce((acc, item) => {
      const { idlib, prix, qte, produitlabrairieId } = item;
      if (!acc[idlib]) {
        acc[idlib] = { produits: [], total_ttc: 0 };
      }
      acc[idlib].produits.push({ produitlabrairieId, Qte: qte });
      acc[idlib].total_ttc += (prix*1.07);
      return acc;
    }, {});
    
    for (const idlib in groupedCommande) {
      const { produits, total_ttc } = groupedCommande[idlib];
      commandes.push({ produits, total_ttc,Adresse:idA,Mode_liv:ModeLiv,Mode_pay:ModePay, userId: props.user.id, labrairieId: Number(idlib) });
    }

    const data ={
      "commande":commandes
    }
 
    if(props.user.auth){
      dispatch(AjouteCommande(data)).then((response)=>{
        if(response.payload.success===true){
          toast.success("commande a été passée avec succès",{autoClose: 1000})

        
          addPoint(props.user.id,{point:Point}).then((response)=>{
            console.log(response)
          })
          navigate("/Shop");
        }
      })
    }else{
      toast.error(" login pour passe une commande ",{autoClose: 1000})
    }
  }
  else{
    toast.error("choisir un étails de paiement !!!",{autoClose: 1000})
  }
  };
const vrifmode=()=>{
  if(ModeLiv===undefined)
  {
    toast.error("choisir un Mode de livraison !!!",{autoClose: 1000})
  }
  else{
    setstep3(true)
  }
}
React.useEffect(() => {
  valide();
}, []);
  return (
    <div className="Fc">
      <div>
      {
        play?  <p className="txt1-Fc">faire une commande</p>
        :
        <p className="txt1-Fc" style={{color:"red"}}>Error  Limite des quantité des Commonde dépassée!!</p>
      }
      </div>
      <div className="row0-Fc">
        <div className="col0-Fc">
          <div className="blox-Fc">
            <div className="bloxrow-Fc">
              <div className="circule-Fc">
                <p>1</p>
              </div>
              <div className="txtwidth-Fc">
                <p className="txt2-Fc">Informations Personelles</p>
              </div>
              <div className={props.user.auth && play===true?"tick-Fc":"tick-Fc-none"}>
               <p  className="ticktxt-Fc"><TickCircle size="22" color="#57AE5B" variant="Bold"/></p>
              </div>
            </div>
            <div className={props.user.auth ?"sousblox-Fc-none":"sousblox-Fc"}>
              <div className="row-Fc">
                <button
                  className="bnt0-Fc"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Déjà client? Connexion
                </button>
                <button
                  className="bnt1-Fc"
                  onClick={() => {
                    navigate("/Signup");
                  }}
                >
                  Nouveau client? Créez un compte
                </button>
              </div>
            </div>
          </div>

          <div className="blox-Fc">
            <div className="bloxrow-Fc" onClick={()=>setopen2(true)}>
              <div className="circule-Fc">
                <p>2</p>
              </div>
              <div  className="txtwidth-Fc">
                <p className="txt2-Fc">Adresses</p>
              </div>
              <div className={idA!=undefined?"tick-Fc":"tick-Fc-none"}>
               <p  className="ticktxt-Fc"><TickCircle size="22" color="#57AE5B" variant="Bold"/></p>
              </div>
            </div>
            {props.user.auth && play===true?
            <div className="sousblox2-Fc">
            <div className="txtwidth-Fc">
              <p className="txt3-Fc">Mes adresses:</p>
            </div>

            {addresses?.map((obj, index) => (
              <div className="rowmini-Fc">
                <input type="Radio" className="radio-Fc" name="r0" value={obj.id} onClick={()=>{setidA(obj.id);setOpenFormAdr(false)}}/>
                <div className="colini-Fc">
                  <div>
                    <p className="txt4-Fc">{obj.Nom_de_adresse}</p>
                  </div>
                  <div>
                    <p className="txt5-Fc">{obj.Adresse},{obj.Gouvernorat},{obj.Ville},{obj.Code_postal}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="rowmini-Fc">
              <input type="Radio" className="radio-Fc" name="r0"   onClick={()=>{setOpenFormAdr((true));setidA(undefined)}} />
              <div>
                <p className="txt4-Fc">Autre</p>
              </div>
            </div>

            <div className={OpenFormAdr?"sousblox3-Fc":"sousblox3-Fc-none"}>
              <br />
              <div className="colini-Fc">
                <div>
                  <p className="txt5-Fc">Nom de l’adresse</p>
                </div>
                <OutlinedInput
                  placeholder="Société"
                  className="input-Fc"
                  onChange={handleInputChange("nom")} value={addresse.nom}
                />
              </div>
              <div className="colini-Fc">
                <div>
                  <p className="txt5-Fc">Adresse *</p>
                </div>
                <OutlinedInput
                  className="input-Fc"
                  onChange={handleInputChange("addr")}
                  value={addresse.addr}
                />
              </div>

              <div className="colini-Fc">
                <div>
                  <p className="txt5-Fc">Gouvernorat</p>
                </div>
                <Select
                  value={Gouvernorat}
                  onChange={handleChangeGouvernorat}
                  className="txt-select-page"
                  placeholder="Tunis"
                  style={{
                    width: "460px",
                    height: " 48px",
                    borderRadius: "8px",
                  }}
                >
                  <MenuItem value="Tunis">
                    <em className="txt-select-page">Tunis</em>
                  </MenuItem>

                  {Gouvernora?.map((obj, key) => (
                    <MenuItem value={obj.nome} className="txt-select-page">
                      {obj.nome}
                    </MenuItem>
                  ))}
                </Select>
                <div></div>
              </div>

              <div className="colini-Fc">
                <div>
                  <p className="txt5-Fc">Ville</p>
                </div>
                <OutlinedInput
                  className="input-Fc"
                  onChange={handleInputChange("Ville")}
                  value={addresse.Ville}
                />
              </div>

              <div className="colini-Fc">
                <div>
                  <p className="txt5-Fc">Code postal*</p>
                </div>
                <OutlinedInput
                  className="input-Fc"
                  onChange={handleInputChange("codepostal")}
                  value={addresse.codepostal}
                />
              </div>
              <div>
                <Grid item container spacing={1}>
                  <Checkbox
                    style={{ color: " #62B0E8" }}
                    onChange={checkedboxfilter}
                  />
                  <span>
                    <p className="Souviens-Fc">
                      Utiliser aussi cette adresse pour la facturation
                    </p>
                  </span>
                </Grid>
                
              <div className="endflex-Fc">
                <button className="bntendflex-Fc" onClick={Ajoutadr}>Continuer</button>
              </div>
              </div>
          
             
              </div>
         
            </div>
            :
            <>
            </> 
            }
          </div>

          <div className="blox-Fc">
            <div className="bloxrow-Fc">
            
              <div className="circule-Fc"  >
                <p>3</p>
              </div>
              <div className="txtwidth-Fc">
                <p className="txt2-Fc">Mode de livraison</p>
              </div>

              <div className={ModeLiv!==undefined?"tick-Fc":"tick-Fc-none"}>
               <p  className="ticktxt-Fc"><TickCircle size="22" color="#57AE5B" variant="Bold"/></p>
              </div>
            </div>

            <div className={idA!=undefined?"colini-Fc":"colini-Fc-none"}>
              <div className="rowmini-Fc">
                <input type="Radio" className="radio-Fc" name="r1"  value={"Fly Delivery - Mahdia"} onChange={(e)=>setModeLiv(e.target.value)}/>
                <div className="colini-Fc">
                  <div>
                    <p className="txt4-Fc">Fly Delivery - Mahdia</p>
                  </div>
                  <div>
                    <p className="txt5-Fc">Gratuit</p>
                  </div>
                </div>
              </div>
              <div className="rowmini-Fc">
                <input type="Radio" className="radio-Fc" name="r1"  value={"Aramex - Toute la Tunisie"}  onChange={(e)=>setModeLiv(e.target.value)} />
                <div className="colini-Fc">
                  <div>
                    <p className="txt4-Fc">Aramex - Toute la Tunisie </p>
                  </div>
                  <div>
                    <p className="txt5-Fc">
                      7.50 DT (Livraison gratuite à partir de 300 DT d'achat)
                    </p>
                  </div>
                </div>
              </div>
              <div className="rowmini-Fc">
                <input type="Radio" className="radio-Fc" name="r1" value={"Retrait en magasine"} onChange={(e)=>setModeLiv(e.target.value)} />
                <div className="colini-Fc">
                  <div>
                    <p className="txt4-Fc">Retrait en magasine </p>
                  </div>
                  <div>
                    <p className="txt5-Fc">
                      7.50 DT (Livraison gratuite à partir de 300 DT d'achat)
                    </p>
                  </div>
                </div>
              </div>
              <div className="endflex-Fc">
                <button className="bntendflex-Fc" onClick={vrifmode}>Continuer</button>
              </div>
            </div>
          </div>

          <div className="blox-Fc">
            <div className="bloxrow-Fc"  onClick={()=>setopen4(true)}>
              <div className="circule-Fc4">
                <p>4</p>
              </div>
              <div className="txtwidth-Fc">
                <p className="txt2-Fc">Détails de paiement</p>
              </div>
              <div className={ModePay!==undefined?"tick-Fc":"tick-Fc-none"}>
               <p  className="ticktxt-Fc"><TickCircle size="22" color="#57AE5B" variant="Bold"/></p>
              </div>
            </div>
             
            <div className={step3?"colini-Fc":"colini-Fc-none"}>
              <div className="rowmini-Fc">
                <input type="Radio" className="radio-Fc" name="r2" value={"Paiement par carte bancaire à la livraison"} onChange={(e)=>setModePay(e.target.value)} />

                <div>
                  <p className="txt7-Fc">
                    Paiement par carte bancaire à la livraison{" "}
                    <span className="txt8-Fc"> (Sans disponible)</span>{" "}
                  </p>
                </div>
              </div>
              <div className="rowmini-Fc">
                <input type="Radio" className="radio-Fc" name="r2" value={"Paiement par carte bancaire"} onChange={(e)=>setModePay(e.target.value)} />

                <div>
                  <p className="txt7-Fc">
                    Paiement par carte bancaire{" "}
                    <span className="txt8-Fc"> (Sans disponible)</span>
                  </p>
                </div>
              </div>
              <div className="rowmini-Fc">
                <input type="Radio" className="radio-Fc" name="r2" value={"Payer comptant à la livraison"} onChange={(e)=>setModePay(e.target.value)}/>

                <div>
                  <p className="txt7-Fc">Payer comptant à la livraison</p>
                </div>
              </div>
              <div className="endflex-Fc">
                <button className="bntendflex-Fc" onClick={passeCommande}>Finalisez votre commande</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col20-Fc">
          <div>
            <p className="txt10-Fc">Liste des articles</p>
          </div>
          {panier.map((e)=>(
            <div className="row214-Fc">
            <div>
              <p>{e.qte}x</p>
            </div>
            <div>
              <img src={"http://127.0.0.1:8080/uploads/"+e.imgp} style={{ width: "40px", height: "40px" }}/>
            </div>
            <div>
              <p className="txt214-Fc">{e.titre}</p>
            </div>
          </div>
          ))}
          <div>
            <p className="txt10-Fc">Récapitulatif</p>
          </div>

          <div className="row200-Fc">
            <div className="col200-Fc">
              <div>
                {" "}
                <p className="txt101-Fc">Totale HT</p>
              </div>
              <div>
                {" "}
                <p className="txt101-Fc">Frais de port</p>
              </div>
              <div>
                {" "}
                <p className="txt101-Fc">Remise</p>
              </div>
              <div>
                {" "}
                <p className="txt101-Fc">Tax</p>
              </div>
            </div>

            <div className="col202-Fc">
              <div>
                {" "}
                <p className="txt101-Fc">{totalHT.toFixed(2)} dt</p>
              </div>
              <div>
                {" "}
                <p className="txt101-Fc">7.50 dt</p>
              </div>
              <div>
                {" "}
                <p className="txt101-Fc">{0} dt</p>
              </div>
              <div>
                {" "}
                <p className="txt101-Fc"> 7%</p>
              </div>
            </div>
          </div>

          <div className="">
            <p className="txt10-Fc">Code de réduction</p>
            <div className="inpute_icon">
              <OutlinedInput
                placeholder="Entrer votre code"
                className="code-Fc"
              />
              <button className="btn_inputFc">
                <ArrowForwardIosIcon
                  style={{
                    width: "15px",
                    height: "15px",
                    color: "4B4B4B",
                    marginTop: "1px",
                    marginLeft: "-5px",
                  }}
                />
              </button>
            </div>
          </div>

          <div className="row200-Fc">
            <div className="col200-Fc">
              <div>
                {" "}
                <p className="txt10-Fc">Totale HT</p>
              </div>
            </div>

            <div className="col202-Fc">
              <div>
              
                <p className="txt101-Fc">{totalHT.toFixed(2)} dt</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaireComonde;
