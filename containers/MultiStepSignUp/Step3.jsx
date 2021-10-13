<<<<<<< HEAD
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
        <Image src = {plataformaLogo} alt ="Logo Plataforma Semear"/>
      </div>  
        <Heading level = "h4" horizontalPosition = "center" ftColor = "quinary" className="fs-title">Suas Infos 🧡</Heading>
            <Heading level = "h6" horizontalPosition = "center" ftColor = "quinary" className="fs-subtitle">Passo 3</Heading>

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
                <input
                    list="datalist3" 
                    name="level" 
                    placeholder="Qual sua Orientação Sexual ?"
                    required
                />
                <datalist id="datalist3">
                    <option value="Heterossexual"/>
                    <option value="Homossexual"/>
                    <option value="Bissexual"/>
                    <option value="Assexual"/>
                    <option value="Pansexual"/>
                    <option value="Prefiro Não Identificar"/>
                </datalist>
                
                <Heading level="h6"> Você se identifica como PCD ? </Heading>
                <div>
                <div>
                  <input type="radio" id="huey" name="drone" defaultValue="huey" defaultChecked />
                  <label htmlFor="huey" className="label"> Sim</label>
                </div>
                <div>
                  <input type="radio" id="dewey" name="drone" defaultValue="dewey" />
                  <label htmlFor="dewey" className="label">Não</label>
                </div>
              </div>
    </fieldset>
    
)}

  
export default Step3;
||||||| parent of a613e23 (♻️ Refactor MultistepForm)
=======
import React from 'react'
import Image from 'next/image'

import {Heading} from '../../components/Heading'

import plataformaLogo from '../../assets/image/logo-semear.png'

const Step3 = () => {
  return (
    <fieldset>
      <div className="plataforma-logo2">
        <Image src={plataformaLogo} alt="" />
      </div>

      <Heading
        level="h2"
        horizontalPosition="center"
        ftColor="quinary"
        className="fs-title"
      >
        Suas Infos 🧡
      </Heading>

      <Heading
        level="h5"
        horizontalPosition="center"
        ftColor="quinary"
        className="fs-subtitle"
      >
        Passo 3
      </Heading>

      <input
        type="text"
        name="fname"
        placeholder="First Name"
        value=""
        onChange={() => {}}
      />

      <input
        type="text"
        name="lname"
        placeholder="Last Name"
        value=""
        onChange={() => {}}
      />
    </fieldset>
  )
}

export default Step3
>>>>>>> a613e23 (♻️ Refactor MultistepForm)
