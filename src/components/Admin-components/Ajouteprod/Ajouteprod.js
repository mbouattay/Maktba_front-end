import React, { useEffect, useState } from "react";
import './Ajouteprod.css'
import { OutlinedInput } from "@mui/material";
import {
    Box,
    Import,
    TickCircle,
    Trash,
    InfoCircle,
    CloseCircle,
  } from "iconsax-react";

  import Select from "@mui/material/Select";
  import { toast } from "react-toastify";
  import MenuItem from "@mui/material/MenuItem";
import { getAllGategorie } from "../../../Store/Service/getAllGategorie";
import { useDispatch,useSelector } from "react-redux";
import { addProdCataloge } from "../../../Store/Service/addProdCataloge";
import { sousGategorie } from "../../../Store/Service/sousGategorie";
  const Ajouteprod = (props) => {
    const dispatch = useDispatch();

    const data = [
      { nom: "Visible (Tout le monde peut le voir)",value:"visible" },
      { nom: "Invisible (Afficher uniquement pour les administrateurs)" ,value:"invisible" },
    ];
    const [img, setImage] = useState( );
    const [imgsize, setImgsize] = useState();
    const [realimgsize, setRealimgsize] = useState();
    const [imgname, setImgmane] = useState();
    const [prodimg, setprodimg] = useState();
    const [sizeimg, setsizeimg] = useState();
    const [Visible, setVisible] = useState("");
    const [produit, setproduit] = useState(
        {
              titre: "",
              categorieId: "",
              description: "",
            }
      );
      const [categorieId, setcategorieId] = useState("");
      const [souscategorieId, setsouscategorieId] = useState("");
      const handleSelectChange = (event) => {
        setcategorieId(event.target.value);
        dispatch(sousGategorie(event.target.value));
      };
    
    
      const handleSelectChangesous = (event) => {
        setsouscategorieId(event.target.value);
      };
      const categorie = useSelector((state) => state.AllCategorie.Gategorie);
      const souscategorie = useSelector((state) => state.Onecategorie.categorie);

      const handleChange = (event) => {
        const newValue = event.target.value;
        setVisible(prevValue => (prevValue === newValue ? null : newValue));

      };

      const handleInputChange = (field) => {
        return (e) => {
          setproduit((prev) => ({
            ...prev,
            [field]: e.target.value,
          }));
        };
      };
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          setprodimg(event.target.files[0]);
          setImage(URL.createObjectURL(event.target.files[0]));
          const size = event.target.files[0].size;
          let g = size.toString();
          setRealimgsize(size);
          setImgsize(g.slice(0, 4));
          const name = event.target.files[0].name;
          setImgmane(name.slice(0, 11));
          setsizeimg(realimgsize > 1024 * 1024);
        }
      };
    

  const Addproduit =()=>{
    
    const data = new FormData();
    data.append("titre", produit.titre);
    data.append("description", produit.description);
    data.append("etat", Visible);
    data.append("AdminId", props?.user?.id);
    data.append("categorieId",categorieId);
    data.append("SouscategorieId",souscategorieId);
    data.append("image", prodimg);
    addProdCataloge(data).then((response) => {

      if (response.success === true) {
        toast.success("votre produit a ete Ajoute avec success", {
          autoClose: 1000,
        });
        setproduit({  titre: "",
        categorieId: "",
        Souscatégorie: "",
        description: "",});
        setImage(undefined);
      }
    });




  }
  useEffect(() => {
    dispatch(getAllGategorie());
  }, []);

  return (
    <div className="rowglob">
       <div>
    <p className="txt-int">Ajouter un produit</p>
  </div>


  <div className="box-ajout">
      
 

    <div className="col-ajout">
      <div className="cube-ajout">
        <div className="contbox-ajout">
          <Box size="25" color="#222222" variant="Bold" />
        </div>
      </div>
      <div>
        <p className="txt-ajout">Détails du produit</p>
      </div>
      <div>
        <p className="txt1-ajout">
          Ces informations aideront les clients à trouver votre produit
          parmi d'autres.
        </p>
      </div>
    </div>

    <div className="col2-ajout">

         <div className="downlod-ajout">
          
         {img === undefined ? (
           <label htmlFor="file-input" className="down-ajoutmin">
             <div className="downlod2-ajout">
               <Import size="30" color="#222222" variant="Outline" />
             </div>
             <p className="txt3-ajout">Télécharger un ou plusieurs photos</p>
           </label>
         ) : realimgsize > 1024 * 1024 ? (
           <div className="globalboxuplod-ajout">
             <div className="rowuplod01-ajout">
               <div className="rol01-ajout">
                 <div>
                   <InfoCircle
                     size="15"
                     color="#D64545"
                     variant="Bold"
                     style={{ marginTop: "30%" }}
                   />
                 </div>
                 <div>
                   <img src={img} className="mguplod-ajout" />
                 </div>
                 <div>
                   <p
                     className="txtuplod02-ajoute"
                     style={{ color: "#D64545" }}
                   >
                     {imgname}
                   </p>
                 </div>
               </div>

               <div className="rol01-ajout">
                 <div>
                   <p
                     className="txtuplod03-ajoute"
                     style={{ color: "#D64545" }}
                   >
                     Réessayer
                   </p>
                 </div>
                 <div>
                   <CloseCircle
                     size="18"
                     color="#222"
                     style={{ cursor: "pointer", marginTop: "20%" }}
                     onClick={() => {
                       setImage(undefined);
                       setprodimg(undefined);
                     }}
                   />
                 </div>
               </div>
             </div>
           </div>
         ) : (
           <div className="globalboxuplod-ajout">
             <div className="rowuplod01-ajout">
               <div className="rol01-ajout">
                 <div>
                   <TickCircle
                     size="15"
                     color="#57AE5B"
                     variant="Bold"
                     style={{ marginTop: "30%" }}
                     onClick={() => {
                       setImage(undefined);
                       setprodimg(undefined);
                     }}
                   />
                 </div>
                 <div>
                   <img src={img} className="mguplod-ajout" />
                 </div>
                 <div>
                   <p className="txtuplod02-ajoute">
                     {imgname
                       ? imgname
                       : produit?.imagelibrairies[0]?.name_Image}
                   </p>
                 </div>
               </div>

               <div className="rol01-ajout">
                 <div>
                   <p className="txtuplod03-ajoute">
                     {imgsize ? imgsize : "0.1"}Mo
                   </p>
                 </div>
                 <div>
                   <Trash
                     size="15"
                     color="#222"
                     style={{ cursor: "pointer" }}
                     onClick={() => {
                       setImage(undefined);
                       setprodimg(undefined);
                     }}
                   />
                 </div>
               </div>
             </div>
           </div>
         )}
       </div>
         <div className="col3-ajout">
         <div>
           <p className="txt4-ajout">Nom de produit</p>
         </div>
         <OutlinedInput
           placeholder="Nome"
           onChange={handleInputChange("titre")}
           value={produit.titre}
         />
       </div>
   
 
 
      <input
        type="file"
        className="uplod"
        id="file-input"
        accept=".jpg,.png"
        onChange={onImageChange}
      />

    
<div className="col3-ajout">
            <div>
              <p className="txt4-ajout">Catégorie</p>
            </div>
            <Select
              className="txt-select"
              defaultValue={0}
              style={{ width: "500px", height: " 48px", borderRadius: "8px" }}
              onChange={handleSelectChange}
            >
              <MenuItem  value={0}>
                <em className="txt-select-ajout">choisir une catégorie </em>
              </MenuItem>
              {categorie.map((obj) => (
                <MenuItem value={obj.id} className="txt-select">
                  {obj.name}
                </MenuItem>
              ))}
            
            </Select>
          </div>
    
          <div className="col3-ajout">
            <div>
              <p className="txt4-ajout">Sous-catégorie</p>
            </div>
            <Select
              className="txt-select"
              defaultValue={0}
              style={{ width: "500px", height: " 48px", borderRadius: "8px" }}
              onChange={handleSelectChangesous}
            >
              <MenuItem  value={0}>
                <em className="txt-select-ajout">choisir un Sous-catégorie </em>
              </MenuItem>
              {souscategorie?.map((obj) => (
                <MenuItem value={obj.id} className="txt-select">
                  {obj.name}
                </MenuItem>
              ))}
            
            </Select>
          </div>

          <div className="col3-ajout">
            <div>
              <p className="txt4-ajout">Description</p>
            </div>

          <OutlinedInput className='inpu-con2' placeholder="Parlez-nous de ce article" onChange={handleInputChange("description")}
           value={produit.description} multiline rows={5} maxRows={80}  /> 
          </div>
          <div className="col3-ajout">
        <div>
          <p className="txt4-ajout">Status</p>
        </div>


   {data.map((obj, index) => (
           <div style={{display:"flex"}}>
           <input type="Radio" className="radio-Tf1" name="r0"     checked={Visible === obj.value} value={obj.value} onChange={handleChange} />
          <div> <p className="txt2-mody">{obj.nom}</p></div>
           </div>
       
                
        ))}


      </div>
       
       
       
   



      <div className="rowbnt-ajout">
        <button className="bnt01-ajout" >
          <p className="txtbnt01-ajout">Annuler</p>
        </button>
  
          <button className="bnt02-ajout" onClick={Addproduit}>
            <p className="txtbnt02-ajout">Ajoute</p>
          </button>
    
      
   
      </div>
    </div>
  </div>
</div>
  )
}

export default Ajouteprod


