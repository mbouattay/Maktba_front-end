import './Card_become.css'
import React, { useEffect,useState } from 'react'
import { TickCircle } from 'iconsax-react';

const Card_become = (props) => {
  const [Silver, setSilver] = useState('card-becom2');
  const [Bronze, setBronze] = useState('card-becom');
  const [Gold, setGold] = useState('card-becom');

  const handleChange1 = (event,okk) => {
    if(event=='Bronze')
{document.getElementById("R1").checked = true;
  setBronze("card-becom2")
  setSilver("card-becom")
  setGold("card-becom")

}
if(event=='Gold')
{
  document.getElementById("R2").checked = true;
  setBronze("card-becom")
  setSilver("card-becom")
  setGold("card-becom2")

}
if(event=='Silver')
{
  document.getElementById("R3").checked = true;
  setBronze("card-becom")
  setSilver("card-becom2")
  setGold("card-becom")
}

  }

  useEffect(()=>{
    document.getElementById("R3").checked = true;
  },[])

  return (
    <div >

      <div className='cardt-bec' >

        <div className= {Bronze} onClick={()=>{handleChange1("Bronze");props.ondata('Bronze')}}style={{width:props?.width,height:props?.height}}>
          <div>

            <div >
              <div class="round">
                <input type="radio"  id="R1" name="R" value="R1" onChange={()=>{handleChange1("Bronze")}} />
                <label for="R1"></label>
              </div>
            </div>
            <div> <p className='txtcatdbecome1'>Bronze</p>  </div><div className='brr'></div>
            <div> <p className='ancatrdbec'>10dt /an</p>  </div><div className='brr'></div>
            <div> <p className='descriptioncatdbe1c'>Idéal pour ceux qui débutent avec Maktaba</p>  </div><br /><div className='brr'></div>
            <div className='colcatdbecome1'>

              <div>
                <div className='row4-car'>

                  <div>    <TickCircle size="15" color="#F7D070" /></div>
                  <div>  <p className='txtcatdbecome2'>Caisse en ligne</p></div>


                </div>
              </div>




              <div>
                <div className='row4-car'>

                  <div>    <TickCircle size="15" color="#F7D070" /></div>
                  <div>  <p className='txtcatdbecome2'>Livraison gratuit</p></div>


                </div>
              </div>
              <div>
                <div className='row4-car'>

                  <div>    <TickCircle size="15" color="#F7D070" /></div>
                  <div>  <p className='txtcatdbecome2'>Boutique personalisée</p></div>


                </div>
              </div>
              <div>
                <div className='row4-car'>

                  <div>    <TickCircle size="15" color="#F7D070" /></div>
                  <div>  <p className='txtcatdbecome2'>Assistance personnalisé</p></div>


                </div>
              </div>
              <div>
                <div className='row4-car'>

                  <div>    <TickCircle size="15" color="#ACACAC" /></div>
                  <div>  <p className='txtcatdbecome3'>Participation aux foires</p></div>


                </div>
              </div>
              <div>
                <div className='row4-car'>

                  <div>    <TickCircle size="15" color="#ACACAC" /></div>
                  <div>  <p className='txtcatdbecome3'>Achat groupé</p></div>


                </div>
              </div>
              <div>
                <div className='row4-car'>

                  <div>    <TickCircle size="15" color="#ACACAC" /></div>
                  <div>  <p className='txtcatdbecome3'>Conventions personnalisées</p></div>


                </div>
              </div>
            </div>

          </div>

        </div>

        <div className={Silver} onClick={()=>{handleChange1("Silver");props.ondata('Silver')}}style={{width:props.width,height:props.height}}>
          <div>

            <div >
              <div class="round">
                <input type="radio"  id="R3"name="R" onChange={()=>{handleChange1("Silver")}}  />
                <label for="R3"></label>
              </div>
            </div>
            <div> <p className='txtcatdbecome1'>Silver</p>  </div><div className='brr'></div>
            <div> <p className='ancatrdbec'>100dt /an</p>  </div><div className='brr'></div>
            <div> <p className='descriptioncatdbec'>Idéal pour ceux qui veulent des fonctionnalités avancées</p>  </div><br /><div className='brr'></div>
            <div className='colcatdbecome1'>

              <div>
                <div className='row4-car'>

                  <div>    <TickCircle size="15" color="#F7D070" /></div>
                  <div>  <p className='txtcatdbecome2'>Caisse en ligne</p></div>


                </div>
              </div>
              <div>
                <div className='row4-car'>

                  <div>    <TickCircle size="15" color="#F7D070" /></div>
                  <div>  <p className='txtcatdbecome2'>Livraison gratuit</p></div>


                </div>
              </div>
              <div>
                <div className='row4-car'>

                  <div>    <TickCircle size="15" color="#F7D070" /></div>
                  <div>  <p className='txtcatdbecome2'>Boutique personalisée</p></div>


                </div>
              </div>
              <div>
                <div className='row4-car'>

                  <div>    <TickCircle size="15" color="#F7D070" /></div>
                  <div>  <p className='txtcatdbecome2'>Assistance personnalisé</p></div>


                </div>
              </div>
              <div>
                <div className='row4-car'>

                  <div>    <TickCircle size="15" color="#F7D070" /></div>
                  <div>  <p className='txtcatdbecome2'>Participation aux foires</p></div>


                </div>
              </div>
              <div>
                <div className='row4-car'>

                  <div>    <TickCircle size="15" color="#F7D070" /></div>
                  <div>  <p className='txtcatdbecome2'>Achat groupé</p></div>


                </div>
              </div>
              <div>
                <div className='row4-car'>

                  <div>    <TickCircle size="15" color="#ACACAC" /></div>
                  <div>  <p className='txtcatdbecome3'>Conventions personnalisées</p></div>


                </div>
              </div>
            </div>

          </div>

        </div>


        <div className= {Gold} onClick={()=>{handleChange1("Gold");  props.ondata('Gold')}}style={{width:props.width,height:props.height}}>
          <div>

            <div>
              <div class="round">
                <input type="radio"  id="R2" name="R" value="R2" onChange={()=>{handleChange1("Gold")}}  />
                <label for="R2"></label>
              </div>
            </div>
            <div> <p className='txtcatdbecome1'>Gold</p>  </div><div className='brr'></div>
            <div> <p className='ancatrdbec'>1000dt /an</p>  </div><div className='brr'></div>
            <div> <p className='descriptioncatdbec'>Idéal pour ceux qui veulent des conventions personnalisées</p>  </div><br /><div className='brr'></div>
            <div className='colcatdbecome1'>

              <div>
                <div className='row4-car'>

                  <div>    <TickCircle size="15" color="#F7D070" /></div>
                  <div>  <p className='txtcatdbecome2'>Caisse en ligne</p></div>


                </div>
              </div>




              <div>
                <div className='row4-car'>

                  <div>    <TickCircle size="15" color="#F7D070" /></div>
                  <div>  <p className='txtcatdbecome2'>Livraison gratuit</p></div>


                </div>
              </div>
              <div>
                <div className='row4-car'>

                  <div>    <TickCircle size="15" color="#F7D070" /></div>
                  <div>  <p className='txtcatdbecome2'>Boutique personalisée</p></div>


                </div>
              </div>
              <div>
                <div className='row4-car'>

                  <div>    <TickCircle size="15" color="#F7D070" /></div>
                  <div>  <p className='txtcatdbecome2'>Assistance personnalisé</p></div>


                </div>
              </div>
              <div>
                <div className='row4-car'>

                  <div>    <TickCircle size="15" color="#F7D070" /></div>
                  <div>  <p className='txtcatdbecome2'>Participation aux foires</p></div>


                </div>
              </div>
              <div>
                <div className='row4-car'>

                  <div>    <TickCircle size="15" color="#F7D070" /></div>
                  <div>  <p className='txtcatdbecome2'>Achat groupé</p></div>


                </div>
              </div>
              <div>
                <div className='row4-car'>

                  <div>    <TickCircle size="15" color="#F7D070" /></div>
                  <div>  <p className='txtcatdbecome2'>Conventions personnalisées</p></div>


                </div>
              </div>
            </div>

          </div>

        </div>
      </div>




    </div>

  )
}

export default Card_become




