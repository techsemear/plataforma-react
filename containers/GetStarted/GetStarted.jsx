import Image from 'next/image'
import { Fragment } from 'react'

import {LeadForm} from '../../components/LeadForm'
import {Heading} from '../../components/Heading'
import { Section } from '../../components/Section'
import { Wave } from '../../components/Wave'

import waveImage from '../../assets/image/wave-color.png'
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
      <div className="newsletter-area-l-12 bg-mirage">
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
                    Ao logar, você acessa seu <a>perfil pessoal</a> ou você pode
                    acessar agora e completar as informações necessárias
                  </Heading>
                  <Heading
                    level="h2"
                    ftColor="primary"
                    horizontalPosition="center"
                  >
                    Comece sua jornada aqui com a gente!
                  </Heading>
                </div>
                <div className="btn-area d-flex justify-content-center">
                  <a href="#" className="btn">
                    Quero Preencher Agora!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="newsletter-area-l-image-group position-relative">
          <div className="image-2 ">
            <Image className="w-100 spin" src={blurImage} alt="image" />
          </div>
          <div className="image-3 ">
            <Image className="w-100" src={rocket} alt="image" />
          </div>
        </div>
      </div>
    </Fragment>
  )
}
