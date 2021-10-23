import Image from 'next/image'
import {Fragment} from 'react'

import styles from './GetStarted.module.css'

import {Heading} from '../../components/Heading'
import {Wave} from '../../components/Wave'
import {Button} from '../../components/Button'

import blurImage from '../../assets/image/landing-1/h1-cta-blur-shape-2.png'
import rocket from '../../assets/image/landing-1/h1-cta-rocket-image.png'

export default function GetStarted() {
  return (
    <Fragment>
      <Wave
        className="wave introWave"
        direction="up"
        color="#1D263A"
        bgColor="#1D263A"
      />
      <div className={`${styles.newsletterArea} bg-mirage`}>
        <div className="position-relative overflow-hidden">
          <div
            className="container"
            data-aos="fade-down"
            data-aos-duration={800}
            data-aos-once="true"
          >
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8 col-md-10">
                <div className="text-center">
                  <Heading
                    level="h5"
                    ftColor="primary"
                    horizontalPosition="center"
                  >
                    Você pode preencher a Roda da Trilha ao acessar seu
                    <a>perfil pessoal</a> ou através do botão abaixo
                  </Heading>
                  <Heading
                    level="h2"
                    ftColor="primary"
                    horizontalPosition="center"
                  >
                    Comece sua jornada aqui com a gente!
                  </Heading>
                  <Button
                    size="large"
                    href="/assessment"
                    class={styles.centerButton}
                    hoverScale="true"
                  >
                    Quero Preencher Agora!
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.newsletterAreaImage} position-relative`}>
          <div className={styles.image1}>
            <Image className="w-100 spin" src={blurImage} alt="image" />
          </div>
          <div className={styles.image2}>
            <Image className="w-100" src={rocket} alt="image" />
          </div>
        </div>
      </div>
    </Fragment>
  )
}
