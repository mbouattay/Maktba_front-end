import React, { useState } from 'react'
import "./signup.css"
import Imge from "../../assets/image1.png"
import { Grid } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import { Facebook } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { OutlinedInput, IconButton } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { Eye, EyeSlash } from 'iconsax-react';
import { toast } from 'react-toastify';
import Spinier from '../../components/spinier/Spinier'
import { Signupuser } from "../../Store/Service/SignupService";
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/footer/Footer';

const Signup = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(true);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({ email: "", password: "", confpass: "", fullname: "" });
  const handleInputChange = (field) => {
    return (e) => {
      setUser((prev) => ({
        ...prev,
        [field]: e.target.value
      }));
    };
  };

  const onSubmit = async () => {
    if (user.email.length !== 0 && user.password.length !== 0 && user.fullname.length !== 0) {
      let reg = /^[a-z-A-Z0-9-_.]+@[a-z-A-Z0-9-_]{2,}[.][a-z-A-Z]{2,3}$/
      let result = ((reg.exec(user.email) != null));
      if (result === true) {
        if (user.password === user.confpass) {
          let data = {
            email: user.email,
            password: user.password,
            fullname: user.fullname
          }     

          dispatch(Signupuser(data))
            .then(response => {          
              if (response.payload.success) {
                toast.success("Vérifiez votre email maintenant svp pour l'activation de votre  compte",{autoClose: 1000});
                setLoading(false)
           

              } else {
                console.log(response.payload)
                toast.error("email exist deja!!",{autoClose: 1000}); setLoading(false) 
              
              }

            })
            .catch(error => {
              console.error(error);

            });
        }
        else {
          toast.error("confirmation password  !!",{autoClose: 1000})
          setLoading(false)
        }
      } else {
        toast.error("validation de Email",{autoClose: 1000})
        setLoading(false)
      }
    }
    else {

      return toast.error("champ vide !!",{autoClose: 1000})

    }
  }

  return (
    <>

      {loading ? <Spinier /> :


        <div className='signup'>

          <Grid item >
            <img className='img' src={Imge} alt="icon" />
          </Grid >

          <Grid item  >
            <div className='espa-signup' >  <br />
              <Grid
                container direction="column" spacing={2.8}
              >
                <Grid item >
                  <h1 className='Sinscrire'>S'inscrire</h1>
                </Grid >
                <Grid item >
                  <p className='content' >Continue avec</p>
                </Grid>
                <Grid item >
                  <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start"
                  >
                    <Grid item xs={4.7}>
                      <button className="btn default"><div className='icong'><i className="fab fa-google fa-1x" ></i></div><p className="textgml">Gmail</p></button>
                    </Grid>
                    <div className='esp'></div>
                    <Grid item>
                      <button className="btn default"><div className='iconf'><Facebook style={{ width: "20px", height: "20px" }} /></div> <div className='textfbk'>Facebook</div></button>
                    </Grid>

                  </Grid>
                </Grid>
                <Grid item>
                  <p className='adr'>Ou avec votre adresse e-mail</p>
                </Grid>

                <Grid item>
                  <OutlinedInput className='input-signup' placeholder="Nom et Prénom" onChange={handleInputChange("fullname")}

                    value={user.fullname} />
                </Grid>
                <Grid item>
                  <OutlinedInput className='input-signup' placeholder="Email" onChange={handleInputChange("email")}
                    value={user.email} />
                </Grid>
                <Grid item>
                  <OutlinedInput className='input-signup'
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton style={{ color: "#222222" }}
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <EyeSlash size="28.5" color="#222222" /> : <Eye size="28.5" color="#222222" />}
                        </IconButton>
                      </InputAdornment>
                    }
                    placeholder="Password" onChange={handleInputChange("password")}
                    value={user.password}
                  />
                </Grid>
                <Grid item>
                  <OutlinedInput className='input-signup' placeholder="Confirmer mot de passe" type="password" onChange={handleInputChange("confpass")}
                    value={user.confpass} />
                </Grid>

                <Grid item>
                  <Checkbox style={{ color: " #E9B949", }} /><span className='text3'>j'ai lu et j'accepte les<span className='text2'>  Politique de confidentialité.</span></span>
                </Grid>

                <Grid item>
                  <button className='bntnSin' onClick={onSubmit}>
                    <div className='textbntnSin'>S’inscrire</div></button>
                </Grid>
                <Grid item>
                  <div>Avez vous déjà un compte!  <Link to="/login" className="textc-up">Connexion</Link></div>
                </Grid>
              </Grid >
            </div>
          </Grid >
        </div>

      }


    </>


  )
}

export default Signup
