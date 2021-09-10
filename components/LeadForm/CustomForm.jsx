// Enviando...
// Email Cadastrado com Sucesso !
// Email Cadastrado com Sucesso !
import {Fragment} from 'react'

export function CustomForm({status, message, onValidated}) {
  let email, name

  const submit = () =>
    email &&
    name &&
    email.value.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value,
    })

  function createMarkup(message) {
    return {__html: message}
  }

  return (
    <div className="contact-form-l1">
      <div
        className="form-group"
        style={{
          borderRadius: 2,
          padding: 10,
        }}
      >
        {status !== 'success' && (
          <Fragment>
            {status === 'error' && (
              <div
                className="alert error-message"
                role="alert"
                dangerouslySetInnerHTML={createMarkup(message)}
              />
            )}

            <label>Nome:</label>

            <input
              className="form-control"
              ref={(node) => (name = node)}
              type="text"
              placeholder="Nome"
            />

            <label>Indique seu melhor email:</label>

            <input
              className="form-control"
              style={{fontSize: '1em', padding: 10}}
              ref={(node) => (email = node)}
              type="email"
              placeholder="Digite seu melhor email"
            />
          </Fragment>
        )}

        <button
          className={`btn w-100 submitButton ${
            status === 'success' ? 'submitButton--success' : ''
          }`}
          onClick={submit}
        >
          {status === 'sending' && 'Enviando...'}
          {status !== 'success' && status !== 'sending'
            ? 'Inscreva-se'
            : message}
        </button>
      </div>
    </div>
  )
}
