import React from 'react'
import Image from 'next/image'

import {Heading} from '../Heading'
import AreasList from '././AreasList'
import CoursesList from '././CoursesList'
import UniversitiesList from '././UniversitiesList'

import {MultiSelectInput} from '../MultiSelectInput'

import plataformaLogo from '../../assets/image/logo-semear.png'

const macroArea = [
  {area: 'Administração '},
  {area: 'Artes: Visuais ou Digitais '},
  {area: 'Comunicação'},
  {area: 'Consultoria'},
  {area: 'Direito'},
  {area: 'Educação'},
  {area: 'Empreendedorismo'},
  {area: 'Engenharia '},
  {area: 'Finanças'},
  {area: 'Gestão '},
  {area: 'Marketing'},
  {area: 'Química'},
  {area: 'Saúde'},
  {area: 'Tecnologia'},
  {area: 'Vendas'},
  {area: 'Não Encontrei Minha Área'},
]

const StepInfos = (props) => {
  if (props.currentStep !== props.stepStatus) {
    return null
  }

  return (
    <fieldset>
      <div className="plataforma-logo2 mt-2">
        <Image src={plataformaLogo} width={150} height={150} />
      </div>
      <Heading
        level="h4"
        horizontalPosition="center"
        ftColor="quinary"
        className="fs-title"
      >
        Infos Acadêmicas e Profissionais 📋
      </Heading>
      <div className="row justify-content-center mt-2">
        <div className="col-xl-12 col-lg-10 col-md-10 col-sm-12 order-lg-1 order-1">
        </div>
      </div>

      <div className="row justify-content-center mt-2">
        <div className="col-xl-6 col-lg-10 col-md-10 col-sm-12 order-lg-1 order-1">
          <Heading level="h6" className="label-picture">
            Faculdade:
          </Heading>

          <input
            type="list"
            list="datalist6"
            name="faculdade"
            placeholder="Qual sua instituição de ensino?"
            onChange={props.handleChange}
            required
          />
          <datalist id="datalist6">
            {UniversitiesList.map((item, index) => (
              <option value={item.faculdade} key={index} />
            ))}
          </datalist>
        </div>
        <div className="col-xl-6 col-lg-10 col-md-10 col-sm-12 order-lg-1 order-1">
          <Heading level="h6" className="label-picture">
            Curso:
          </Heading>
          <input
            type="list"
            list="datalist4"
            name="courses"
            placeholder="Qual seu curso?"
            onChange={props.handleChange}
            required
          />
          <datalist id="datalist4">
            {CoursesList.map((item, index) => (
              <option value={item.curso} key={index} />
            ))}
          </datalist>
        </div>
      </div>

      <div className="row justify-content-center mt-2">
        <div className="col-xl-6 col-lg-10 col-md-10 col-sm-12 order-lg-1 order-1">
          <Heading level="h6" className="label-picture">
            Área de Interesse:
          </Heading>

          <input
            type="list"
            list="datalist5"
            name="areas"
            placeholder="Qual sua principal area de interesse de forma macro?"
            onChange={props.handleChange}
            required
          />
          <datalist id="datalist5" multiple>
            {macroArea.map((item, index) => (
              <option value={item.area} key={index} />
            ))}
          </datalist>
        </div>
        <div className="col-xl-6 col-lg-10 col-md-10 col-sm-12 order-lg-1 order-1">
          <Heading level="h6" className="label-picture">
            Subáreas de Interesse:
          </Heading>

          <div className="multiSelectInput">
            <MultiSelectInput />
          </div>
        </div>
      </div>

      <div className="row justify-content-center mt-2">
        <div className="col-xl-6 col-lg-10 col-md-10 col-sm-12 order-lg-1 order-1">
          <Heading level="h6" className="label-picture">
            Site Pessoal:
          </Heading>

          <input
            type="url"
            name="site"
            placeholder="Você tem algum site pessoal? (ex.: Linkedin ou Portfólio)"
            value={props.site}
            onChange={props.handleChange}
            required
          />
        </div>
        <div className="col-xl-6 col-lg-10 col-md-10 col-sm-12 order-lg-1 order-1">
          <Heading level="h6" className="label-picture">
            Gostaria de Adicionar uma Imagem ao seu perfil?
          </Heading>
          <input type="file" accept="image/*" />
        </div>
      </div>
    </fieldset>
  )
}

export default StepInfos
