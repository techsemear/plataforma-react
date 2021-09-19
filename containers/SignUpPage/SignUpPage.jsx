import React from "react"
import Image from "next/dist/client/image"


import {Heading} from '../../components/Heading'

import plataformaLogo from '../../assets/image/logo-semear.png'
import facebookLogo from '../../assets/image/facebook-logo2.png'
import googleLogo from '../../assets/image/google.png'
import imageLogin1 from '../../assets/image/loginImage1.png'
import imageLogin2 from '../../assets/image/loginImage2.png'
import imageLogin3 from '../../assets/image/loginImage3.png'


export default function SignUpPage(){
  return (
    <div>
     <form id="msform">
      <ul id="progressbar">
        <li className="active">Infos da Conta</li>
        <li>Redes Sociais</li>
        <li>Suas Infos 🧡</li>
      </ul>
      <fieldset>
        <div className="plataforma-logo">
          <Image src = {plataformaLogo}/>
        </div>
        <Heading level = "h2" horizontalPosition = "center" ftColor = "quinary" className="fs-title">Crie sua Conta🌱</Heading>
        <Heading level = "h5" horizontalPosition = "center" ftColor = "quinary" className="fs-subtitle">Você está no: Passo 1</Heading>
        <input type="text" name="email" placeholder="Email" />
        <input type="password" name="pass" placeholder="Password" />
        <input type="password" name="cpass" placeholder="Confirm Password" />
        <input type="button" name="next" className="next action-button" defaultValue="Próximo" />
      </fieldset>
      <fieldset>
        <Heading level = "h2" horizontalPosition = "center" ftColor = "quinary" className="fs-title">Redes Sociais</Heading>
        <Heading level = "h5" horizontalPosition = "center" ftColor = "quinary" className="fs-subtitle">Você está no: Passo 2</Heading>
        <input type="text" name="twitter" placeholder="Twitter" />
        <input type="text" name="facebook" placeholder="Facebook" />
        <input type="text" name="gplus" placeholder="Google Plus" />
        <input type="button" name="previous" className="previous action-button" defaultValue="Previous" />
        <input type="button" name="next" className="next action-button" defaultValue="Next" />
      </fieldset>
      <fieldset>
        <Heading level = "h2" horizontalPosition = "center" ftColor = "quinary" className="fs-title">Suas Infos 🧡</Heading>
        <Heading level = "h5" horizontalPosition = "center" ftColor = "quinary" className="fs-subtitle">Você está no: Passo 3</Heading>
        <input type="text" name="fname" placeholder="First Name" />
        <input type="text" name="lname" placeholder="Last Name" />
        <input type="text" name="phone" placeholder="Phone" />
        <textarea name="address" placeholder="Address" defaultValue={""} />
        <input type="button" name="previous" className="previous action-button" defaultValue="Previous" />
        <input type="submit" name="submit" className="submit action-button" defaultValue="Submit" />
      </fieldset>
    </form>
  </div>
  )
}