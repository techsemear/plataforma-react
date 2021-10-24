import React, {Fragment} from 'react'
import Select from 'react-select'

import {Heading} from '../../components/Heading'

import styles from './MultiStepSignUp.module.css'

const escolaridade = [
  {value: 'Fundamental - Incompleto', label: 'Fundamental - Incompleto'},
  {value: 'Fundamental - Completo', label: 'Fundamental - Completo'},
  {value: 'Médio - Incompleto', label: 'Médio - Incompleto'},
  {value: 'Médio - Completo', label: 'Médio - Completo'},
  {value: 'Superior - Cursando', label: 'Superior - Cursando'},
  {value: 'Superior - Completo', label: 'Superior - Completo'},
  {value: 'Pós-graduação - Incompleto', label: 'Pós-graduação - Incompleto'},
  {value: 'Pós-graduação - Completo', label: 'Pós-graduação - Completo'},
  {value: 'Mestrado - Incompleto', label: 'Mestrado - Incompleto'},
  {value: 'Mestrado - Completo', label: 'Mestrado - Completo'},
  {value: 'Doutorado - Incompleto', label: 'Doutorado - Incompleto'},
  {value: 'Doutorado - Completo', label: 'Doutorado - Completo'},
]

const classes = [
  {value: 'Sou um Jovem', label: 'Sou um Jovem'},
  {value: 'Sou um Mentor', label: 'Sou um Mentor'},
]

const Step2Form = ({handleChange, handleSelectChange, fields}) => {
  return (
    <Fragment>

<label 
        className={styles.subtitle}
        htmlFor=""
      >
        Classificação:
      </label>
      <Select
        defaultValue={fields.classes}
        name="classes"
        onChange={handleSelectChange}
        options={classes}
        placeholder="Como você se classifica em nossa plataforma:"
        required
        className="select-input"
      ></Select>

      <label htmlFor="">CPF</label>
      <input
        type="number"
        name="cpf"
        placeholder="Você poderia nos informar seu CPF ? (examplo: 12345678910)"
        value={fields.cpf}
        onChange={handleChange}
      />
      
      <label htmlFor="">Nível de Escolaridade</label>
      <Select
        defaultValue={fields.schooling}
        name="schooling"
        onChange={handleSelectChange}
        options={escolaridade}
        placeholder="Qual seu nível de escolaridade?"
        required
      ></Select>

      <label
        htmlFor=""
        className={styles.subtitle}
      >
        Whatsapp
      </label>

      <input
        value={fields.phone}
        type="number"
        name="phone"
        placeholder="Qual seu Whatsapp:(examplo: 1198382788)"
        onChange={handleChange}
      />
      <label htmlFor="">Data de Nascimento</label>
      <input
        type="date"
        name="birthday"
        placeholder="Qual sua data de nascimento ?"
        value={fields.birthday}
        onChange={handleChange}
      />

    </Fragment>
  )
}

export default Step2Form
