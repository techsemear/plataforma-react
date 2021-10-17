import React, {Fragment} from 'react'

const Step1Form = ({handleChange, fields}) => {
  return (
    <Fragment>
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
    </Fragment>
  )
}

export default Step1Form
