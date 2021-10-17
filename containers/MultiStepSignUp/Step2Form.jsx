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
      <Heading level="h6">Nível de Escolaridade:</Heading>

      <Select
        defaultValue={fields.schooling}
        name="schooling"
        onChange={handleSelectChange}
        options={escolaridade}
        placeholder="Qual seu nível de escolaridade?"
        required
      ></Select>

      <Heading
        level="h6"
        horizontalPosition="start"
        ftColor="default"
        className={styles.subtitle}
      >
        Classificação:
      </Heading>

      <Select
        defaultValue={fields.classes}
        name="classes"
        onChange={handleSelectChange}
        options={classes}
        placeholder="Como você se classifica em nossa plataforma:"
        required
      ></Select>

      <Heading
        level="h6"
        horizontalPosition="start"
        ftColor="default"
        className={styles.subtitle}
      >
        Digite seu cpf:
      </Heading>

      <input
        value={fields.phone}
        type="number"
        name="phone"
        placeholder="Qual seu Whatsapp:(examplo: 1198382788)"
        onChange={handleChange}
      />

      <input
        type="date"
        name="birthday"
        placeholder="Qual sua data de aniversário:"
        value={fields.birthday}
        onChange={handleChange}
      />

      <input
        type="number"
        name="cpf"
        placeholder="Você poderia nos informar seu CPF ? (examplo: 12345678910)"
        value={fields.cpf}
        onChange={handleChange}
      />
    </Fragment>
  )
}

export default Step2Form