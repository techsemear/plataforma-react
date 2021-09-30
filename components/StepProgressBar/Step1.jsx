import React from 'react';
import Image from "next/image";

import {Heading} from '..//Heading'

import plataformaLogo from '../../assets/image/logo-semear.png'


const Step1 = props => {
    if (props.currentStep !== 1) {
      return null;
    }
  
return (
    <fieldset>
      <div className="plataforma-logo2">
        <Image src = {plataformaLogo}/>
      </div>  
      <Heading level = "h4" horizontalPosition = "center" ftColor = "quinary" className="fs-title">Crie sua Conta🌱</Heading>
        <Heading level = "h6" horizontalPosition = "center" ftColor = "quinary" className="fs-subtitle">Passo 1</Heading>
           <input 
                type="text" 
                name="email" 
                placeholder="Digite seu melhor email:" 
                value={props.email}
                onChange={props.handleChange}
                required
            />
           <input 
                type="text" 
                name="username" 
                placeholder="Crie seu nome de usuário:" 
                value={props.username}
                onChange={props.handleChange}
                required
            />
           <input 
                type="password" 
                name="password" 
                placeholder="Crie sua senha:" 
                value={props.password}
                onChange={props.handleChange}
                required
            />
           <input 
                type="password" 
                name="cpassword" 
                placeholder="Confirme sua senha:"
                value={props.cpassword}
                onChange={props.handleChange} 
                required
            />
          <input 
            list="class" 
            name="level" 
            placeholder="Como você classifica em nossa plataforma ?" 
            required
          />
          <datalist id="class">
            <option value="Sou um Jovem"/>
            <option value="Sou um Mentor"/>
          </datalist>
    </fieldset>
    )
}

export default Step1;