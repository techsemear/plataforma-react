import React from "react"
import Image from "next/dist/client/image"

import {Heading} from '../../components/Heading'

import plataformaLogo from '../../assets/image/logo-semear.png'
import facebookLogo from '../../assets/image/facebook-logo2.png'
import googleLogo from '../../assets/image/google.png'
import imageLogin1 from '../../assets/image/loginImage1.png'
import imageLogin2 from '../../assets/image/loginImage2.png'
import imageLogin3 from '../../assets/image/loginImage3.png'




export default function LoginPage(){
  return (
    <main>
    <div className="box">
      <div className="inner-box">
        <div className="forms-wrap">
          <form action="index.html" autoComplete="off" className="sign-in-form">
            <div className="plataforma-logo">
              <Image src = {plataformaLogo}/>
            </div>
            <div className="heading">
              <Heading level="h2">Bem-vindo</Heading>
              <Heading level= "h6">Ainda não se registrou?  
              <a href="#" className="toggle"> Entre aqui</a> 
              </Heading>
            </div>
            <div className="actual-form">
              <div className="input-wrap">
                <input type="text" minLength={4} className="input-field" autoComplete="off" required />
                <label>Usuário</label>
              </div>
              <div className="input-wrap">
                <input type="password" minLength={4} className="input-field" autoComplete="off" required />
                <label>Senha</label>
              </div>
              <input type="submit" defaultValue="Sign In" className="sign-btn" />
              <div className="sign-with">
                <Heading level="h6" ftColor = "quartenary" horizontalPosition="center" className="login-with">Login With</Heading>
                <div className="sign-with-btn">
                    <a href="#" className="btn-face">
                      <Image src={facebookLogo} alt="FACEBOOK" />
                      Facebook
                    </a>
                    <a href="#" className="btn-google">
                      <Image src={googleLogo} alt="GOOGLE" />
                      Google
                    </a>
                </div>
              </div>
              <p className="text">
                Esqueceu sua senha?
                <a href="#"> Obtenha ajuda</a>
              </p>
            </div>
          </form>
          <form action="index.html" autoComplete="off" className="sign-up-form">
            <div className="logo">
              <h4>FernandaMakiHirose</h4>
            </div>
            <div className="heading">
              <h2>Comece sua jornada</h2>
              <h6>Já tem uma conta?</h6>
              <a href="#" className="toggle">Entre aqui</a>
            </div>
            <div className="actual-form">
              <div className="input-wrap">
                <input type="text" minLength={4} className="input-field" autoComplete="off" required />
                <label>Nome</label>
              </div>
              <div className="input-wrap">
                <input type="email" className="input-field" autoComplete="off" required />
                <label>E-mail</label>
              </div>
              <div className="input-wrap">
                <input type="password" minLength={4} className="input-field" autoComplete="off" required />
                <label>Senha</label>
              </div>
              <input type="submit" defaultValue="Sign Up" className="sign-btn" />
              <p className="text">
                Após entrar, eu concordo com os
                <a href="#">Termos e Serviços</a> e com a
                <a href="#">Política de Privacidade</a>
              </p>
            </div>
          </form>
        </div>
        <div className="carousel">
          <div className="images-wrapper">
            <Image src={imageLogin1} className="loginImage-1 images lImg-1 show" alt="" />
            <Image src={imageLogin2} className="loginImage-2 images lImg-2" alt="" />
            <Image src={imageLogin3} className="loginImage-3 images lImg-3" alt="" />
          </div>
          <div className="text-slider">
            <div className="text-wrap">
              <div className="text-group">
                <h2>Cursos gratuitos</h2>
                <h2>Suporte ao vivo</h2>
                <h2>Aprenda em casa</h2>
              </div>
            </div>
            <div className="bullets">
              <span className="active" data-value={1} />
              <span data-value={2} />
              <span data-value={3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  
  )
}