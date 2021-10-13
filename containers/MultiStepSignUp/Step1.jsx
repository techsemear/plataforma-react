<<<<<<< HEAD
import React from 'react'
import Image from 'next/image'

import {Heading} from '../../components/Heading'

import plataformaLogo from '../../assets/image/logo-semear.png'

const Step1 = ({handleChange, fields}) => {
  return (
    <fieldset>
      <div className="plataforma-logo2">
        <Image src={plataformaLogo} alt="" />
      </div>

      <Heading
        level="h3"
        horizontalPosition="center"
        ftColor="quinary"
        className="fs-title"
      >
        Crie sua Conta🌱
      </Heading>

      <Heading
        level="h6"
        horizontalPosition="center"
        ftColor="quinary"
        className="fs-subtitle"
      >
        Passo 1
      </Heading>

      <Heading level = "h6" horizontalPosition = "start" ftColor = "default" className="fs-subtitle">Digite seu Nome Completo:</Heading>
      <input
        type="text"
        name="name"
        placeholder="Digite seu nome completo:"
        value={fields.name}
        onChange={handleChange}
      />

      <Heading level = "h6" horizontalPosition = "start" ftColor = "default" className="fs-subtitle">Digite seu Email:</Heading>
      <input
        type="text"
        name="email"
        placeholder="Digite seu melhor email:"
        value={fields.email}
        onChange={handleChange}
      />

      <Heading level = "h6" horizontalPosition = "start" ftColor = "default" className="fs-subtitle">Digite seu Nome de Usuário:</Heading>
      <input
        type="text"
        name="username"
        placeholder="Crie seu nome de usuário:"
        value={fields.username}
        onChange={handleChange}
      />

      <Heading level = "h6" horizontalPosition = "start" ftColor = "default" className="fs-subtitle">Digite sua Senha:</Heading>
      <input
        type="password"
        name="password"
        placeholder="Crie sua senha:"
        value={fields.password}
        onChange={handleChange}
      />

      <Heading level = "h6" horizontalPosition = "start" ftColor = "default" className="fs-subtitle">Digite Novamente sua Senha:</Heading> 
      <input
        type="password"
        name="passwordConfirmation"
        placeholder="Confirme sua senha:"
        value={fields.passwordConfirmation}
        onChange={handleChange}
      />
    </fieldset>
  )
}

export default Step1
||||||| parent of a613e23 (♻️ Refactor MultistepForm)
=======
import React from 'react'
import Image from 'next/image'

import {Heading} from '../../components/Heading'

import plataformaLogo from '../../assets/image/logo-semear.png'

const Step1 = ({handleChange, fields}) => {
  return (
    <fieldset>
      <div className="plataforma-logo2">
        <Image src={plataformaLogo} alt="" />
      </div>

      <Heading
        level="h3"
        horizontalPosition="center"
        ftColor="quinary"
        className="fs-title"
      >
        Crie sua Conta🌱
      </Heading>

      <Heading
        level="h6"
        horizontalPosition="center"
        ftColor="quinary"
        className="fs-subtitle"
      >
        Passo 1
      </Heading>

      <input
        type="text"
        name="email"
        placeholder="Digite seu melhor email:"
        value={fields.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="name"
        placeholder="Digite seu nome completo:"
        value={fields.name}
        onChange={handleChange}
      />

      <input
        type="text"
        name="username"
        placeholder="Crie seu nome de usuário:"
        value={fields.username}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Crie sua senha:"
        value={fields.password}
        onChange={handleChange}
      />

      <input
        type="password"
        name="passwordConfirmation"
        placeholder="Confirme sua senha:"
        value={fields.passwordConfirmation}
        onChange={handleChange}
      />
    </fieldset>
  )
}

export default Step1
>>>>>>> a613e23 (♻️ Refactor MultistepForm)
