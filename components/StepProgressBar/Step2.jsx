import React from 'react';
import Image from "next/image";
import Select from 'react-select'

import {Heading} from '../../components/Heading'

import plataformaLogo from '../../assets/image/logo-semear.png'

const escolaridade = [
  {value: "Fundamental - Incompleto" , label: "Fundamental - Incompleto"},
  {value: "Fundamental - Completo" , label: "Fundamental - Completo"},
  {value: "Médio - Incompleto" , label: "Médio - Incompleto"},
  {value: "Médio - Completo" , label: "Médio - Completo"},
  {value: "Superior - Cursando" , label: "Superior - Cursando"},
  {value: "Superior - Completo"  , label: "Superior - Completo"},
  {value: "Pós-graduação - Incompleto" , label: "Pós-graduação - Incompleto"},
  {value: "Pós-graduação - Completo" , label: "Pós-graduação - Completo"},
  {value: "Mestrado - Incompleto" , label: "Mestrado - Incompleto"},
  {value: "Mestrado - Completo" , label: "Mestrado - Completo"},
  {value: "Doutorado - Incompleto" , label: "Doutorado - Incompleto"},
  {value: "Doutorado - Completo" , label: "Doutorado - Completo"},
]

const classes = [
  {value: "Sou um Jovem" , label: "Sou um Jovem" },
  {value: "Sou um Mentor" , label: "Sou um Mentor" },  
]

const Step2 = props => {
  if (props.currentStep !== 2) {
    return null;
  }

  return (
    <fieldset>
      <div className="plataforma-logo2">
        <Image src = {plataformaLogo}/>
      </div>  
        <Heading level = "h4" horizontalPosition = "center" ftColor = "quinary" className="fs-title">Identificação e Contato</Heading>
        <Heading level = "h6" horizontalPosition = "center" ftColor = "quinary" className="fs-subtitle">Passo 2</Heading>
        
        <Heading level="h6" className="label-picture">
            Nível de Escolaridade:
          </Heading>
          <Select
            className="select-escolaridade"
            options={escolaridade}
            name={escolaridade}
            placeholder="Qual seu nível de escolaridade?"
            onChange={props.handleChange}
            required
          >
          </Select>

            <Heading 
              level = "h6" 
              horizontalPosition = "start" 
              ftColor = "default" 
              className="fs-subtitle">
                Classificação:
              </Heading>

              <Select
                className="select-class"
                options={classes}
                placeholder="Como você se classifica em nossa plataforma:"
                onChange={props.handleChange}
                required
              >
            </Select>

            <Heading level = "h6" horizontalPosition = "start" ftColor = "default" className="fs-subtitle">Digite seu cpf:</Heading>
            <input
                value = "cpf"
                type="number" 
                name="whatsapp" 
                placeholder="Qual seu Whatsapp:(examplo: 1198382788)"
                value={props.phone} 
                onChange={props.handleChange}  
            />
            <input 
                type="date" 
                name="birthday" 
                placeholder="Qual sua data de aniversário:" 
                value={props.date} 
                onChange={props.handleChange}  
            />
            <input 
                type="number" 
                name="cpf" 
                placeholder="Você poderia nos informar seu CPF ? (examplo: 12345678910)" 
                value={props.cpf} 
                onChange={props.handleChange}  
            />
    </fieldset>
  )}

  
export default Step2;