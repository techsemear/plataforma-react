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
        <Image src = {plataformaLogo} alt ="Logo Plataforma Semear"/>
      </div>  
        <Heading level = "h4" horizontalPosition = "center" ftColor = "quinary" className="fs-title">Identificação e Contato</Heading>
        <Heading level = "h6" horizontalPosition = "center" ftColor = "quinary" className="fs-subtitle">Passo 2</Heading>
        
            
            <Heading level = "h6" horizontalPosition = "start" ftColor = "default" className="fs-subtitle">Classificação:</Heading>
            <input list="class" name="level" placeholder="Como você classifica em nossa plataforma ?" required />
            <datalist id="class">
              <option value="Sou um Jovem">
              </option><option value="Sou um Mentor">
              </option></datalist>

            <Heading level = "h6" horizontalPosition = "start" ftColor = "default" className="fs-subtitle">Digite seu cpf:</Heading>
            <input
                value = "cpf"
                type="number" 
                name="cpf" 
                placeholder="Você poderia nos informar seu CPF ? (examplo: 12345678910)" 
                defaultvalue={props.cpf} 
                onChange={props.handleChange}
                required
            />

            <Heading level = "h6" horizontalPosition = "start" ftColor = "default" className="fs-subtitle">Digite sua data de Nascimento:</Heading>
            <input 
                type="date" 
                name="birthday" 
                placeholder="Qual sua data de aniversário:" 
                value={props.date} 
                onChange={props.handleChange}  
                required 
            />
            
            <Heading level = "h6" horizontalPosition = "start" ftColor = "default" className="fs-subtitle">Digite seu whatsapp:</Heading>
            <input 
                type="number" 
                name="whatsapp" 
                placeholder="Qual seu Whatsapp:(examplo: 1198382788)"
                value={props.phone} 
                onChange={props.handleChange}  
                required
            />
            
            <div>

          <Heading level = "h6" horizontalPosition = "start" ftColor = "default" className="fs-subtitle">Nível de Escolaridade:</Heading>
          <input 
            list="datalist0" 
            name="school" 
            placeholder="Qual seu nível de escolaridade" 
            defaultValue={props.school} 
            onChange={props.handleChange}
            required 
          />

          <datalist id="datalist0">
              <option value="Fundamental - Incompleto">
              </option><option value="Fundamental - Completo">
              </option><option value="Médio - Incompleto">
              </option><option value="Médio - Completo">
              </option><option value="Superior - Cursando">
              </option><option value="Superior - Completo">
              </option><option value="Pós-graduação - Incompleto">
              </option><option value="Pós-graduação - Completo">
              </option><option value="Mestrado - Incompleto">
              </option><option value="Mestrado - Completo">
              </option><option value="Doutorado - Incompleto">
              </option><option value="Doutorado - Completo">
              </option>
          </datalist>
</div>

    </fieldset>
  )}

  
export default Step2;