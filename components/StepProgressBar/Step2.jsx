import React from 'react';
import Image from "next/image";

import {Heading} from '../../components/Heading'

import plataformaLogo from '../../assets/image/logo-semear.png'

const Step2 = props => {
  if (props.currentStep !== 2) {
    return null;
  }

  return (
    <fieldset>
      <div className="plataforma-logo2">
        <Image src = {plataformaLogo}/>
      </div>  
        <Heading level = "h4" horizontalPosition = "center" ftColor = "quinary" className="fs-title">Redes Sociais</Heading>
        <Heading level = "h6" horizontalPosition = "center" ftColor = "quinary" className="fs-subtitle">Passo 2</Heading>
            <input 
                type="number" 
                name="whatsapp" 
                placeholder="Qual seu Whatsapp:(examplo: 1198382788)"
                value={props.phone} 
                onChange={props.handleChange}  
                required
            />
            <input 
                type="date" 
                name="birthday" 
                placeholder="Qual sua data de aniversário:" 
                value={props.date} 
                onChange={props.handleChange}  
                required
            />
            <input 
                type="number" 
                name="cpf" 
                placeholder="Você poderia nos informar seu CPF ? (examplo: 12345678910)" 
                value={props.cpf} 
                onChange={props.handleChange}
                required  
            />
    </fieldset>
  )}

  
export default Step2;