import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {Heading} from '../../components/Heading'
import {Carousel} from '../../components/Carousel'
import {Button} from '../../components/Button'

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
  },
]

export default function LoginPage() {
  return (
    <main className="login-main">
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <form
              action="index.html"
              autoComplete="off"
              className="sign-in-form"
            >
              <div className="plataforma-logo">
                <Image src={plataformaLogo} alt="logo" layout="responsive" />
              </div>
              <div className="actual-form">
                <div className="heading">
                  <Heading level="h2" horizontalPosition="center">
                    Bem-vindo
                  </Heading>
                  <Heading level="h6">
                    Ainda não se registrou?
                    <a href="/signup" className="toggle">
                      {' Entre aqui'}
                    </a>
                  </Heading>
                </div>
                <div className="actual-form">
                  <div className="input-wrap">
                    <input
                      type="text"
                      placeholder="Usuário"
                      minLength={4}
                      className="inputFieldLogin"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="input-wrap">
                    <input
                      type="password"
                      placeholder="Senha"
                      minLength={6}
                      className="inputFieldLogin"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <Button
                    size="compact"
                    bgColor="secondary"
                    class="signInBtn w-100"
                    type="submit"
                  >
                    Entrar
                  </Button>
                  <div className="sign-with">
                    <Heading
                      level="h6"
                      ftColor="quartenary"
                      horizontalPosition="center"
                      className="login-with"
                    >
                      Entre com
                    </Heading>
                    <div className="sign-with-btn">
                      <Button
                        size="compact"
                        bgColor="minimal"
                        href="#"
                        class="btn-face"
                      >
                        <Image
                          src={facebookLogo}
                          alt="FACEBOOK"
                          className="iconLogin"
                          width={18}
                          height={18}
                        />
                        Facebook
                      </Button>
                      <Button
                        size="compact"
                        bgColor="minimal"
                        href="#"
                        class="btn-google"
                      >
                        <Image
                          src={googleLogo}
                          alt="GOOGLE"
                          className="iconLogin"
                          width={18}
                          height={18}
                        />
                        Google
                      </Button>
                    </div>
                  </div>
                  <p className="text">
                    Esqueceu sua senha?
                    <a href="#"> Obtenha ajuda</a>
                  </p>
                </div>
              </div>
            </form>
          </div>
          <div className="slider">
            <Carousel
              duration={500}
              transitionDuration={500}
              contentInfo={content}
            />
            <Heading
              className="slider-text"
              level="h3"
              ftColor="default"
              horizontalPosition="center"
            >
              Faça parte dessa jornada!
            </Heading>
          </div>
        </div>
      </div>
    </main>
  )
}
