import React from 'react';
import Image from "next/image";

import {Heading} from '../Heading'

import plataformaLogo from '../../assets/image/logo-semear.png'

const Step4 = props => {
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <fieldset>
      <div className="plataforma-logo2">
        <Image src = {plataformaLogo}/>
      </div>  
        <Heading level = "h4" horizontalPosition = "center" ftColor = "quinary" className="fs-title">Infos Profissionais 📋</Heading>
            <Heading level = "h6" horizontalPosition = "center" ftColor = "quinary" className="fs-subtitle">Passo 4</Heading>
                <input 
                    type="url" 
                    name="site" 
                    placeholder="Você tem algum site pessoal ? (ex.: Linkedin ou Portfólio)" 
                    value={props.site} 
                    onChange={props.handleChange}
                    required 
                />
                <input 
                    list="datalist0" 
                    name="school" 
                    placeholder="Qual seu nível de escolaridade" 
                    value={props.school} 
                    onChange={props.handleChange}
                    required 
                />
                <datalist id="datalist0">
                    <option value="Fundamental - Incompleto"/>
                    <option value="Fundamental - Completo"/>
                    <option value="Médio - Incompleto"/>
                    <option value="Médio - Completo"/>
                    <option value="Superior - Cursando"/>
                    <option value="Superior - Completo"/>
                    <option value="Pós-graduação - Incompleto"/>
                    <option value="Pós-graduação - Completo"/>
                    <option value="Mestrado - Incompleto"/>
                    <option value="Mestrado - Completo"/>
                    <option value="Doutorado - Incompleto"/>
                    <option value="Doutorado - Completo"/>
                </datalist>

                <Heading level="h6">Gostaria de Adicionar uma Imagem ao seu perfil ?</Heading>
                <input type="file" accept="image/*"/>
                  
                
          

    </fieldset>
    
)}

  
export default Step4;