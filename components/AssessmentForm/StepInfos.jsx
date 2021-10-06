import React from 'react'
import Image from 'next/image'

import {Heading} from '../Heading'
import AreasList from '././AreasList'
import CoursesList from '././CoursesList'
import UniversitiesList from '././UniversitiesList'

import {MultiSelectInput} from '../MultiSelectInput'

import plataformaLogo from '../../assets/image/logo-semear.png'

const macroArea = [
  {area:'Administração '},
  {area:'Artes: Visuais ou Digitais '},
  {area:'Comunicação'},
  {area:'Consultoria'},
  {area:'Direito'},
  {area:'Educação'},
  {area:'Empreendedorismo'},
  {area:'Engenharia '},
  {area:'Finanças'},
  {area:'Gestão '},
  {area:'Marketing'},
  {area:'Química'},
  {area:'Saúde'},
  {area:'Tecnologia'},
  {area:'Vendas'},
  {area:'Não Encontrei Minha Área'},
]


const StepInfos = (props) => {
  if (props.currentStep !== 1) {
    return null
  }

  return (
    <fieldset>
      <div className="plataforma-logo2">
        <Image src={plataformaLogo} />
      </div>
      <Heading
        level="h4"
        horizontalPosition="center"
        ftColor="quinary"
        className="fs-title"
      >
        Infos Profissionais 📋
      </Heading>
      

      <Heading level="h6" className="label-picture">
        Nível de Escolaridade:
      </Heading>
      
      <input
        list="datalist0"
        name="school"
        placeholder=" Qual seu nível de escolaridade ?"
        value={props.school}
        onChange={props.handleChange}
        required
      />
      <datalist id="datalist0">
        <option value="Fundamental - Incompleto" />
        <option value="Fundamental - Completo" />
        <option value="Médio - Incompleto" />
        <option value="Médio - Completo" />
        <option value="Superior - Cursando" />
        <option value="Superior - Completo" />
        <option value="Pós-graduação - Incompleto" />
        <option value="Pós-graduação - Completo" />
        <option value="Mestrado - Incompleto" />
        <option value="Mestrado - Completo" />
        <option value="Doutorado - Incompleto" />
        <option value="Doutorado - Completo" />
      </datalist>

      <Heading level="h6" className="label-picture">
        Faculdade:
      </Heading>
      
      <input
        type="list"
        list="datalist6"
        name="faculdade"
        placeholder=" Qual sua instituição de ensino?"
        onChange={props.handleChange}
        required
      />
      <datalist id="datalist6">
        {UniversitiesList.map((item, index) => (
          <option 
            value={item.faculdade} 
            key={index} 
          />
        ))}
      </datalist>

      <Heading level="h6" className="label-picture">
        Curso:
      </Heading>
      

      <input
        type="list"
        list="datalist4"
        name="courses"
        placeholder=" Qual seu curso?"
        onChange={props.handleChange}
        required
      />
      <datalist id="datalist4">
        {CoursesList.map((item, index) => (
          <option value={item.curso} key={index} />
        ))}
      </datalist>

      <Heading level="h6" className="label-picture">
        Área de Atuação:
      </Heading>
      
      <input
        type="list"
        list="datalist5"
        name="areas"
        placeholder=" Qual sua principal area de atuação?"
        onChange={props.handleChange}
        required
      />
      <datalist id="datalist5"  multiple>
        {macroArea.map((item, index) => (
          <option value={item.area} key={index} />
        ))}
      </datalist>

      <Heading level="h6" className="label-picture">
        Subáreas de Atuação:
      </Heading>
      
      <div className="multiSelectInput">
        <MultiSelectInput/>
      </div>

      <Heading level="h6" className="label-picture">
        Site Pessoal:
      </Heading>
      
      <input
        type="url"
        name="site"
        placeholder=" Você tem algum site pessoal ? (ex.: Linkedin ou Portfólio)"
        value={props.site}
        onChange={props.handleChange}
        required
      />
      

      <Heading level="h6" className="label-picture">
        Gostaria de Adicionar uma Imagem ao seu perfil ?
      </Heading>
      <input type="file" accept="image/*" />

    </fieldset>
  )
}

export default StepInfos

