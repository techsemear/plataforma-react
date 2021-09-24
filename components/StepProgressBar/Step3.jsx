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
        <Heading level = "h2" horizontalPosition = "center" ftColor = "quinary" className="fs-title">Suas Infos 🧡</Heading>
            <Heading level = "h5" horizontalPosition = "center" ftColor = "quinary" className="fs-subtitle">Passo 3</Heading>
                <input 
                    type="text" 
                    name="fname" 
                    placeholder="First Name" 
                    value={props.fname} 
                    onChange={props.handleChange} 
                />
                <input 
                    type="text" 
                    name="lname" 
                    placeholder="Last Name" 
                    value={props.lname} 
                    onChange={props.handleChange} 
                />
    </fieldset>
)}

  
export default Step3;