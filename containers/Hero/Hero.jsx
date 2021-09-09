import {Fragment} from 'react'
import Image from 'next/image'

import {Button} from '../../components/Button'
import {Wave} from '../../components/Wave'
import {Heading} from '../../components/Heading'

import headerImage from '../../assets/image/personagens/header.png'
import headerBackgroundImage from '../../assets/image/background-header.png'

const content = {
  title: 'As conexões que mudarão o seu futuro!',
  subtitle: 'Conecte-se a nova era de aprendizado !',
  text: 'A plataforma desenvolvida para mentores e jovens universitários protagonistas que juntos buscam aprimorar suas habilidades profissionais e alcançar seus sonhos.',
}

export default function Hero() {
  return (
    <Fragment>
      <div
        className="hero-area-l1  position-relative background-property"
        style={{background: {headerBackgroundImage}}}
      >
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div
              className="col-xxl-5 col-xl-6 col-lg-6 col-md-10 order-lg-1 order-1"
              data-aos="fade-right"
              data-aos-delay={500}
              data-aos-duration={1000}
            >
              <div className="content">
                <Heading ftColor="tertiary"> {content.title} </Heading>
                <Heading level="p" ftColor="primary" ftColor="primary">
                  {content.text}
                </Heading>
                <Heading level="h6" ftColor="primary">
                  <strong> {content.subtitle} </strong>
                </Heading>
                <Button>Inscreva-se</Button>
              </div>
            </div>

            <div
              className="offset-xxl-2 col-xxl-5 offset-xl-1 col-xl-5 col-lg-6 col-md-8 order-lg-1 order-0"
              data-aos="fade-left"
              data-aos-delay={700}
              data-aos-duration={1000}
            >
              <div className="hero-image-group-l1">
                <div className="image-1">
                  <Image src={headerImage} alt="logo" objectFit="contain" />
                </div>
                <div className="image-2">
                  <img
                    className="horizontal-move"
                    src="https://plataformasemear.netlify.app/image/landing-1/chat-icon.svg"
                    alt="image"
                  />
                </div>
                <div className="image-3">
                  <img
                    className="vertical-move"
                    src="https://plataformasemear.netlify.app/image/landing-1/icon-3d-heart.svg"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Wave direction="up" />
    </Fragment>
  )
}
