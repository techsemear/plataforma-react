import React, {Fragment} from 'react'

const Step1Form = ({handleChange, fields}) => {
  return (
    <Fragment>
      <label htmlFor="">
        Nome Completo
      </label>
      <input
        type="text"
        name="name"
        placeholder="Digite seu nome completo:"
        value={fields.name}
        onChange={handleChange}
      />
      
      <label htmlFor="">
        Email
      </label>
      <input
        type="text"
        name="email"
        placeholder="exemplo: janedoe@email.com"
        value={fields.email}
        onChange={handleChange}
      />

      <label htmlFor="">
        Nome de Usuário
      </label>
      <input
        type="text"
        name="username"
        placeholder="exemplo: janeDoe"
        value={fields.username}
        onChange={handleChange}
      />

      <label htmlFor="">
        Senha
      </label>
      <input
        type="password"
        name="password"
        placeholder="Crie sua senha:"
        value={fields.password}
        onChange={handleChange}
      />

      <label htmlFor="">
       Confirmação de Senha
      </label>
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
