import React, { useEffect, useState } from 'react'
import "./login.css"
import { Link,useNavigate} from 'react-router-dom';
import Imge from "../../assets/image1.png"
import { Grid } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import { Facebook } from '@material-ui/icons';
import { OutlinedInput, IconButton } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { Eye, EyeSlash } from 'iconsax-react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { Loginuser } from '../../Store/Service/LoginService'
import { useAtoms } from '../../Store/globalState/global';
import {LoginSocialGoogle,  LoginSocialFacebook} from 'reactjs-social-login';
import { GoogleService } from '../../Store/Service/GoogleService'
import jwt_decode from "jwt-decode";

const Login = (props) => {
  const dispatch = useDispatch();
const [globalState,snap]=useAtoms()
const [Provider,setProvider] = useState('');
const [profile, setProfile] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [user, setUser] = useState({ email: "", password: "" });
  const [check,setCheck] = useState(false);
  const nav=useNavigate()
  const handleInputChange = (field) => {
    return (e) => {
      setUser((prev) => ({
        ...prev,
        [field]: e.target.value
      }));
    };
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onsubmit = () => {
    globalState.loding=true
 if(check)
 {
  if (user.email.length !== 0 && user.password.length !== 0) {
    let reg =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (reg.test(user.email)) {
      let data = {
        email: user.email,
        password: user.password,
      }
      dispatch(Loginuser(data)).then(response => {
        try
        {
         
            var decoded = jwt_decode(response.payload.accessToken);
            const user = {
              role:decoded?.role,
     
            };
            if(user.role==="client")
            {
              nav("/shop")
            }
            else  if(user.role==="labrairie")
            {
              nav("/Vender/TableauDuBord")
            }
            else   if(user.role==="Admin")
            {
              nav("/Admin")
            }
         
          if (response.payload.message === 'password is not correct') {
            toast.error("le mot de passe n'est pas correct !!",{autoClose: 1000})
            globalState.loding=false
          }
          if (response.payload.message === "verifie your email") {
            toast.error("active votre compte Svp !!",{autoClose: 1000})
     
            globalState.loding=false
          }         
        }
        catch(error){
          toast.error(" your email is not excited or password is not correct !!",{autoClose: 1000})
          globalState.loding=false
        }

      })

   
    }
    else {
      toast.error("validation de Email !!",{autoClose: 1000})
      globalState.loding=false
    }

  }
  else {
    toast.error("remplir Champ vide SVP !!")
    globalState.loding=false
  }

 }
 else{
  toast.error("checked !!",{autoClose: 1000})

 }

 
  }
  const checkedboxfilter=(event)=>{
    setCheck(event.target.checked) 
   }


useEffect(()=>{
  AuthGmail()
},[profile])
  const AuthGmail=async ()=>{
    if(profile!=null)
    {
      let data = {
        email: profile.email,
        fullname: profile.name,
      }
    
      dispatch(GoogleService(data)).then(response => {
   
        var decoded = jwt_decode(response.payload?.accessToken);
        const user = {
          role:decoded?.role,
        };
        if(user.role==="client")
        {
          nav("/shop")
        }
       else if(user.role==="labrairie")
        {
          nav("/Vender/TableauDuBord")
        }
        else   if(user.role==="Admin")
        {
          nav("/Admin")
        }
      })
    }
console.log(user.role)


  }
  return (

    <>

    {
    <div className='login'>

      <Grid item >
        <img className='im' src={Imge} alt="icon" />
      </Grid >

      <Grid item  >

        <div className='espa'>
          <Grid container direction="column" spacing={3}     >

            <Grid item >
              <h1 className='Connexion'>Connexion</h1>
            </Grid >
            <Grid item >
              <p className='content' >Continue avec</p>
            </Grid>
            <Grid item >
              <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start"
              >
                <Grid item xs={4.7}>

                <LoginSocialGoogle
          client_id='337011466004-2tupsm9l5lq9k6pfujgvd83b1om684i6.apps.googleusercontent.com'
          scope="openid profile email"
          discoveryDocs="claims_supported"
          access_type="offline"
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
     
          }}
          onReject={err => {
            console.log(err);
          }}
        >
                   <button className="btn default" onClick={AuthGmail}><div className='icong'><i className="fab fa-google fa-1x" ></i></div><p className="textgml">Gmail</p></button>

        </LoginSocialGoogle>
                </Grid>
                <div className='esp'></div>
                <Grid item>      <LoginSocialFacebook
          appId={'242586168207087'}
          fieldsProfile={
            'id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender'
          }>
                  <button className="btn default"><div className='iconf'><Facebook style={{ width: "20px", height: "20px" }} /></div> <div className='textfbk'>Facebook</div></button>
                  </LoginSocialFacebook>
                </Grid>

              </Grid>
            </Grid>
            <Grid item className='ar'>
              <p className='adr'>Ou avec votre adresse e-mail</p>
            </Grid>

            <Grid item>
      
              <OutlinedInput className='input-login' placeholder="Email" onChange={handleInputChange("email")} value={user.email} />
            </Grid>
            <Grid item>

              <OutlinedInput className='input-login'

                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton style={{ color: "#222222" }}
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >

                      {showPassword ? <EyeSlash size="28.5" color="#222222" /> : <Eye size="28.5" color="#222222" />}
                    </IconButton>
                  </InputAdornment>
                }
                onChange={handleInputChange("password")}
                value={user.password}
                placeholder="Password"
              />
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row-reverse"
                justifyContent="flex-start"
                alignItems="baseline"
              >
                <Link to="/New_password" className='obli' >Mot de passe oublié  ?</Link>
              </Grid>
            </Grid>

            <Grid item container spacing={1}>
              <Checkbox style={{ color: " #E9B949", marginTop: "-4.2%" }}
               onChange={checkedboxfilter}
              /><span ><p className="Souviens">Souviens-toi de moi</p></span>
            </Grid>
            <Grid item>
              <button className='bntn1-log' onClick={onsubmit}>
                <div className='textbntConnexionn'>Connexion</div></button>
            </Grid>
            <Grid item>
              <p>Vous n'avez pas de compte !<Link to="/Signup" className="textc"> S'inscrire</Link></p>
            </Grid>
            <div />
          </Grid >
        </div>
      </Grid >



    </div>

}

</>


  )
}

export default Login