import React from "react"
import Image from "next/dist/client/image"


import {Heading} from '../../components/Heading'
import {SlideShow} from '../../components/SlideShow'


import plataformaLogo from '../../assets/image/logo-semear.png'
import facebookLogo from '../../assets/image/facebook-logo2.png'
import googleLogo from '../../assets/image/google.png'
import imageLogin1 from '../../assets/image/loginImage1.png'
import imageLogin2 from '../../assets/image/loginImage2.png'
import imageLogin3 from '../../assets/image/loginImage3.png'

const content = [
  {
    image: imageLogin1,
  },
  {
    image: imageLogin2,
  },
  {
    image: imageLogin3,
  }
]



export default function LoginPage(){
  return (
    <main>
    <div className="box">
      <div className="inner-box">
        <div className="forms-wrap">
          <form action="index.html" autoComplete="off" className="sign-in-form">
            <div className="plataforma-logo">
              <Image
                src = {plataformaLogo}
                width={550}
                height={550}
              />
            </div>
            <div className="heading">
              <Heading level="h2">Bem-vindo</Heading>
              <Heading level= "h6">Ainda não se registrou?  
              <a href="/signUp" className="toggle"> Entre aqui</a> 
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
                      <Image 
                      src={googleLogo} 
                      alt="GOOGLE" 
                      />
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
        </div>
        <div className="slider">
          <SlideShow
           duration={500}
           transitionDuration	={500}
           contentInfo={content}
          />
          <Heading className="slider-text" level="h3" ftColor = "default" horizontalPosition="center" >Faça parte dessa jornada !</Heading>
        </div>
        </div>
      </div>
    </main>
  )
}