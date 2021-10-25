import {Fragment} from 'react'
import Image from 'next/image'

import styles from './Hero.module.css'

import {Button} from '../../components/Button'
import {Wave} from '../../components/Wave'
import {Heading} from '../../components/Heading'

import headerImage from '../../assets/image/personagens/header.png'
import headerBackgroundImage from '../../assets/image/background-header.png'
import chatIcon from '../../assets/image/landing-1/chat-icon.svg'
import heartIcon from '../../assets/image/landing-1/icon-3d-heart.svg'

const content = {
  title: 'As conexões que mudarão o seu futuro!',
  subtitle: 'Conecte-se a nova era de aprendizado!',
  text: 'A plataforma desenvolvida para mentores e jovens universitários protagonistas que juntos buscam aprimorar suas habilidades profissionais e alcançar seus sonhos.',
}

export default function Hero() {
  return (
    <Fragment>
      <div
        className={`${styles.heroArea}  position-relative background-property`}
        style={{background: {headerBackgroundImage}}}
      >
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div
              className="col-xxl-5 col-xl-6 col-lg-6 col-md-11 order-lg-1 order-1"
              data-aos="fade-right"
              data-aos-delay={500}
              data-aos-duration={1000}
            >
              <div className={`${styles.content} ${styles.heroText}`}>
                <Heading ftColor="tertiary"> {content.title} </Heading>
                <p>{content.text}</p>
                <Heading level="h5" ftColor="primary">
                  <strong> {content.subtitle} </strong>
                </Heading>
                <div className={`${styles.heroButtonContent}`}>
                  <Button
                    href="#subscribe"
                    class={`w-100 ${styles.heroButton}`}
                  >
                    Inscreva-se
                  </Button>
                </div>
              </div>
            </div>

            <div
              className="offset-xxl-2 col-xxl-5 offset-xl-1 col-xl-5 col-lg-5 col-md-9 order-lg-1 order-0"
              data-aos="fade-left"
              data-aos-delay={700}
              data-aos-duration={1000}
            >
              <div className={styles.heroImageSection}>
                <div className={styles.image1}>
                  <Image src={headerImage} alt="logo" objectFit="contain" />
                </div>
                <div className={styles.image2}>
                  <Image
                    className="horizontal-move"
                    src={chatIcon}
                    alt="image"
                  />
                </div>
                <div className={styles.image3}>
                  <Image
                    className="vertical-move"
                    src={heartIcon}
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Wave direction="up" color="#11115d" bgColor="#fff" />
    </Fragment>
  )
}
