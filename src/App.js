import "./App.css";
import React, { lazy, Suspense, useEffect, useRef, useState } from "react";

import { BrowserRouter as Router, Route, Routes,   Navigate, useLocation } from 'react-router-dom';

import Toast from "./components/toast/Toast";
import Spinier from "./components/spinier/Spinier";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/footer/Footer";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import Clients from "./components/Admin-components/Liste d’utilisateurs/Clients/Clients";
import Fournisseursadmin from "./components/Admin-components/Liste d’utilisateurs/Fournisseurs/Fournisseursadmin";
import Vendeursadmin from "./components/Admin-components/Liste d’utilisateurs/Vendeurs/Vendeursadmin";
import Partenairesadmin from "./components/Admin-components/Liste d’utilisateurs/Partenaires/Partenairesadmin ";


const Listpro = lazy(() =>
  import("./components/Admin-components/listeprod/listpro")
);


const Modify = lazy(() =>
  import("./components/Admin-components/Modify-prod/Modify-prod")
);


const Ajouteprod = lazy(() =>
  import("./components/Admin-components/Ajouteprod/Ajouteprod")
);


const AdminPartners = lazy(() =>
  import("./components/Admin-components/AdminPartners/AdminPartners")
);


const Admin = lazy(() =>
  import("./Pages/Admin/Admin")
);
const Gestion_points = lazy(() =>
  import("./components/Gestion de points-vender/Gestion_points")
);
const FaireComonde = lazy(() =>
  import("./Pages/FaireComonde/FaireComonde")
);

const FornisseuerProfile = lazy(() =>
  import("./components/FournisseursComponents/profile-Fornisseuer/FornisseuerProfile")
);
const FactorisationFornisseuer = lazy(() =>
  import("./components/FournisseursComponents/Factorisation/FactorisationFornisseuer")
);
const DetailcomnderFornisseuer = lazy(() =>
  import("./components/FournisseursComponents/Listecommandes/composentliste/DetailcomnderFornisseuer")
);
const ListecommandesFornisseuer = lazy(() =>
  import("./components/FournisseursComponents/Listecommandes/ListecommandesFornisseuer")
);
const ListelivraisonsFornisseuer = lazy(() =>
  import("./components/FournisseursComponents/Liste de livraisons/ListelivraisonsFornisseuer")
);
const DetailLivrFornisseuer = lazy(() =>
  import("./components/FournisseursComponents/Liste de livraisons/composentliste/DetailLivrFornisseuer")
);

const Fournisseurs = lazy(() =>
  import("./Pages/Fournisseurs/Fournisseurs")
);

const DetailLivr = lazy(() =>
  import("./components/Liste-de-livraisons/composentliste/DetailLivr")
);
const Factorisation = lazy(() =>
  import("./components/vender-Factorisation/Factorisation")
);
const Approvisionner = lazy(() =>
  import("./components/vender-Approvisionner/Approvisionner")
);
const Listecommandes = lazy(() =>
  import("./components/Liste-commandes-vender/Listecommandes")
);
const Listeivraisons = lazy(() =>
  import("./components/Liste-de-livraisons/Listeivraisons")
);
const VenderProfile = lazy(() =>
  import("./components/profile-vender/VenderProfile")
);
const Detailcomnder = lazy(() =>
  import("./components/Liste-commandes-vender/composentliste/Detailcomnder")
);
const Categorie = lazy(() =>
  import("./components/VenderPage/categorie/categorie")
);
const Inventaire = lazy(() =>
  import("./components/vender-Inventaire/Inventaire")
);
const Points = lazy(() =>
  import("./components/composot-Profile/page5-profile/Points")
);
const TableauDuBord = lazy(() =>
  import("./components/VenderPage/TableauDuBord/TableauDuBord")
);
const Dachats = lazy(() =>
  import("./components/composot-Profile/page5-profile/Bon dachats/Dachats")
);
const Profile = lazy(() => import("./Pages/Profile/Profile"));
const Home = lazy(() => import("./Pages/home/Home"));
const Resetpassword = lazy(() => import("./Pages/new-password/Resetpassword"));
const Shop = lazy(() => import("./Pages/shop/shop"));
const Login = lazy(() => import("./Pages/login/Login"));
const Newpassword = lazy(() => import("./Pages/new-password/new-password"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const Signup = lazy(() => import("./Pages/signup/SignUp"));
const AboutUs = lazy(() => import("./Pages/About-Us/AboutUs"));
const Detailprod = lazy(() => import("./Pages/Detail-prod/Detail-prod"));
const BecomePartner = lazy(() =>
  import("./Pages/Become-a-Partner/Become_a_Partner")
);

const Protection = lazy(() => import("./Store/protection"));
const Cart = lazy(() => import("./Pages/Cart/Cart"));
const LibrairieProfile = lazy(() =>
  import("./Pages/librairieProfile/librairieProfile")
);
const Page1_profile = lazy(() =>
  import("./components/composot-Profile/page-profile/Page")
);
const Page2_profile = lazy(() =>
  import("./components/composot-Profile/page2-profile/Page2")
);
const Commandes = lazy(() =>
  import("./components/composot-Profile/page3-profile/Commandes")
);
const Avis = lazy(() =>
  import("./components/composot-Profile/page4-profile/Avis")
);
const Vender = lazy(() => import("./Pages/vender/vender"));
const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 1000, behavior: "auto" });
  }, [pathname]);
  return children;
};
function App() {
  const LoginServiceData = useSelector((state) => state.loginservice);
  const googleServiceData = useSelector((state) => state.Googleservice);
  const accessToken=  LoginServiceData.isLogin === true && googleServiceData.isLogin === false ? LoginServiceData.accessToken:googleServiceData.accessToken
  const refreshToken=  LoginServiceData.isLogin === true && googleServiceData.isLogin === false ? LoginServiceData.accessToken:googleServiceData.accessToken
  if(accessToken?.length!==0){
    var decoded = jwt_decode(accessToken);
  }
  const user = {
    id: decoded?.id,
    auth:
      LoginServiceData.isLogin === true && googleServiceData.isLogin === false
        ? LoginServiceData.isLogin
        : googleServiceData.isLogin,
    fullname:decoded?.fullname,
    role:decoded?.role,
    avatar:decoded?.avatar,
    etatCompte:decoded?.etatCompte,
  };
  return (

   

      <Router>
       <ScrollToTop >
   
         <NavBar user={user} />
         <Suspense fallback={<Spinier />}>
        
          <Routes>
       
            <Route path="/Login" element={ <Protection user={user}><Login user={user} /></Protection>} />
            <Route path="/Signup" element={<Protection user={user}><Signup /></Protection>} />
            <Route path="/New_password" element={<Protection user={user}><Newpassword /></Protection>} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/BecomePartner" element={<BecomePartner />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Detailproduit/:id" element={<Detailprod user={user}/>} />
            <Route path="/cart" element={<Cart user={user}/>} />
            <Route path="/librairieProfile/:id" element={<LibrairieProfile/>}/>
       
       
            <Route path="/Profile" element={<Protection user={user}><Profile user={user}/></Protection>}>
              <Route path="/Profile/Monidentite" element={<Page1_profile user={user}  />} />
              <Route path="/Profile/Favoris" element={<Protection user={user}><Page2_profile user={user}   /></Protection>} />
              <Route path="/Profile/Commandes" element={<Protection user={user}><Commandes user={user}   /></Protection>} />
              <Route path="/Profile/Avis" element={<Protection user={user}><Avis user={user} /></Protection>} />
              <Route path="/Profile/MesPoints" element={<Protection user={user}><Points user={user}  /></Protection>}>
                <Route
                  path="/Profile/MesPoints/Bondachats"
                  element={<Dachats />}
                />
                <Route
                  path="/Profile/MesPoints"
                  element={<Navigate to="/Profile/MesPoints/Bondachats" />}
                />
              </Route>
          
            </Route>
            <Route path="/" element={<Navigate to="/Home"/>} />
            <Route path="/Home" element={<Home />}  />

            <Route
              path="/reset-password/:id/:token"
              element={<Resetpassword />}
            />
            
            <Route path="/Vender" element={ <Protection user={user}><Vender /></Protection>}>
              <Route path="/Vender/TableauDuBord" element={<TableauDuBord user={user} />} />
              <Route path="/Vender/Liste_de_produits" element={ <Protection user={user}><Categorie user={user} /></Protection>} />
              <Route path="/Vender/Inventaire" element={<Protection user={user}><Inventaire user={user}/></Protection>} />
              <Route
                path="/Vender/Liste_de_commandes"
                element={<Protection user={user}><Listecommandes user={user}/></Protection>}
              />
              <Route
                path="/Vender/Details_de_commande/:id"
                element={<Protection user={user}><Detailcomnder  user={user}/></Protection>}
              />
              <Route
                path="/Vender/Details_de_livraison/:id"
                element={<Protection user={user}><DetailLivr  user={user} /></Protection>}
              />
              <Route path="/Vender/Profile" element={<Protection user={user}><VenderProfile user={user}/></Protection>} />
              <Route
                path="/Vender/Liste_de_Livraisons"
                element={<Protection user={user}><Listeivraisons user={user} /></Protection>}
              />
              <Route
                path="/Vender/Approvisionner"
                element={<Protection user={user}><Approvisionner user={user}/></Protection>}
              />
              <Route path="/Vender/Factorisation" element={<Protection user={user}><Factorisation /></Protection>} />
              <Route path="/Vender/Gestion_de_points" element={<Protection user={user}><Gestion_points /></Protection>} />

            </Route>



            <Route path="/Fornisseuer" element={<Fournisseurs />}>
            <Route path="/Fornisseuer/Liste_de_livraisons" element={<ListelivraisonsFornisseuer />} />
            <Route path="/Fornisseuer/Détails_de_livraison/:id" element={<DetailLivrFornisseuer />}             />
            <Route path="/Fornisseuer/Liste_de_commandes" element={<ListecommandesFornisseuer />}             />
            <Route path="/Fornisseuer/Détails_de_commandes/:id" element={<DetailcomnderFornisseuer />}             />
            <Route path="/Fornisseuer/Factorisation" element={<FactorisationFornisseuer />}             />
            <Route path="/Fornisseuer/Profile" element={<FornisseuerProfile />}/>
            </Route>
            
             <Route path="/Faire_une_commande" element={<FaireComonde user={user}/>}/>
         
         
             <Route path="/Admin" element={<Protection user={user}><Admin user={user}/></Protection>}>
             <Route path="/Admin/Liste_de_demande" element={<Protection user={user}><AdminPartners user={user}/></Protection>}/>
             <Route path="/Admin/Produits" element={<Protection user={user}><Listpro user={user}/></Protection>}/>
             <Route path="/Admin/Modifier_produit/:id" element={<Protection user={user}><Modify user={user}/></Protection>}/>
             <Route path="/Admin/Ajouter_un_produit" element={<Protection user={user}><Ajouteprod user={user}/></Protection>}/>
             <Route path="/Admin/ListeClients" element={<Protection user={user}><Clients user={user}/></Protection>}/>
             <Route path="/Admin/ListePartenaires" element={<Protection user={user}><Partenairesadmin  user={user}/></Protection>}/>
             <Route path="/Admin/ListeVendeurs" element={<Protection user={user}><Vendeursadmin user={user}/></Protection>}/>
             <Route path="/Admin/ListeFournisseurs" element={<Protection user={user}><Fournisseursadmin user={user}/></Protection>}/>

         
             </Route>

            <Route path="*" element={<> page not !!!</>} />
          </Routes>
        </Suspense>
        <Toast />
        <Footer />
        </ScrollToTop>

        </Router>



  );
}

export default App;
