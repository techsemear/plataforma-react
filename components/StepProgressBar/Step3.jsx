import React from 'react';
import Image from "next/image";

import {Heading} from '../../components/Heading'

import plataformaLogo from '../../assets/image/logo-semear.png'

const Step3 = props => {
  if (props.currentStep !== 3) {
    return null;
  }

  return (
    <fieldset>
      <div className="plataforma-logo2">
        <Image src = {plataformaLogo}/>
      </div>  
        <Heading level = "h4" horizontalPosition = "center" ftColor = "quinary" className="fs-title">Suas Infos 🧡</Heading>
            <Heading level = "h6" horizontalPosition = "center" ftColor = "quinary" className="fs-subtitle">Passo 3</Heading>
                <input 
                    type="text" 
                    name="fname" 
                    placeholder="First Name" 
                    value={props.fname} 
                    onChange={props.handleChange}
                    required 
                />
                <input 
                    type="text" 
                    name="lname" 
                    placeholder="Last Name" 
                    value={props.lname} 
                    onChange={props.handleChange}
                    required 
                />
                <input
                    list="datalist" 
                    name="level" 
                    placeholder="Como você se autodeclara ?"
                    required
                />
                <datalist id="datalist">
                    <option value="Branco"/>
                    <option value="Preto"/>
                    <option value="Pardo"/>
                    <option value="Vermelho"/>
                    <option value="Amarelo"/>
                    <option value="Prefiro Não Identificar"/>
                </datalist>
                <input
                    list="datalist2" 
                    name="level" 
                    placeholder="Como você classifica seu gênero ?"
                    required
                />
                <datalist id="datalist2">
                    <option value="Homem Cisgênero"/>
                    <option value="Homem Transgênero"/>
                    <option value="Mulher Cisgênero"/>
                    <option value="Mulher Transgênero"/>
                    <option value="Não Binário"/>
                    <option value="Prefiro Não Identificar"/>
                </datalist>
    </fieldset>
    
)}

  
export default Step3;