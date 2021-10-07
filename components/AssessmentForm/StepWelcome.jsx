import React from 'react'
import Image from 'next/image'

import {Heading} from '../Heading'
import {Button} from '../Button'

import welcomeImage from '../../assets/image/personagens/header.png'

const StepWelcome = (props) => {
  if (props.currentStep !== props.stepStatus) {
    return null
  }

  const content = {
    title: 'Você chegou!!!',
    subtitle: 'Falta pouco para encontrarmos um mentor que combina com você...',
  }

  return (
    <fieldset>
      <div className="hero-area-l-12 position-relative z-index-1 overflow-hidden mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xl-7 col-lg-7 col-md-8 col-sm-12 order-lg-1 order-1"
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="content position-text">
                <Heading level="h1" ftColor="quinary" className="fs-title">
                  {content.title}
                </Heading>
                <Heading level="h5" ftColor="secondary">
                  {content.subtitle}
                </Heading>
                <Heading level="h6" ftColor="quinary">
                  Agora você passará pela fase que chamamos de{' '}
                  <strong>Roda da Trilha </strong>, em que aqui te ajudaremos a
                  mapear os seus principais desafios!
                  <br />
                  Depois, nossa <strong>Calculadora de Matches</strong>{' '}
                  encontrará o mentor mais qualificado para trabalhar em
                  soluções junto com você.
                </Heading>
                <div className="readMore">
                  <a
                    className="reference"
                    href="https://www.isemear.org.br"
                    target="_blank"
                  >
                    Saiba mais sobre a Calculadora de Matches
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-5 col-lg-5 col-md-8 order-lg-1 order-0"
              data-aos="fade-left"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="hero-video-l12 position-relative">
                <Image src={welcomeImage} alt="gif" layout="responsive" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </fieldset>
  )
}

export default StepWelcome
