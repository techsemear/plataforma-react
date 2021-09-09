import React, { Component } from "react";
import { render } from "react-dom";
import MailchimpSubscribe from 'react-mailchimp-subscribe';


const CustomForm = ({ status, message, onValidated }) => {
    let email, name;
    const submit = () =>
      email &&
      name &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
        NAME: name.value
      });
  
    return (
    <div className= "contact-form-l1">
      <div className = "form-group"
        style={{
          borderRadius: 2,
          padding: 10,
        }}
      >
        {status === "sending" && <div style={{ color: "blue" }}>Enviando...</div>}
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            style={{ color: "green" }}
            dangerouslySetInnerHTML={{ __html: "Email Cadastrado com Sucesso !" }}
          />
        )}

        <label>Nome:</label>
         <input 
            className="form-control "
            ref={node => (name = node)}
            type="text"
            placeholder="Nome"
         />
        <label>Indique seu melhor email:</label>
        <input
          className="form-control "
          style={{ fontSize: "1em", padding: 10 }}
          ref={node => (email = node)}
          type="email"
          placeholder="Digite seu melhor email"
        />
        <br />
        <button className  = "submitButton" onClick={submit}>
          <a className = "submitButtonText">Inscreva-se</a>
        </button>
      </div>
      </div>
    );
  };

  export default CustomForm;