import Image from 'next/image'
import { Fragment } from 'react'

import {LeadForm} from '../../components/LeadForm'
import {Heading} from '../../components/Heading'
import { Section } from '../../components/Section'
import { Wave } from '../../components/Wave'

import waveImage from '../../assets/image/wave-color.png'
import rocket from '../../assets/image/landing-1/h1-cta-rocket-image.png'


export default function GetStarted() {
  return (
    <Fragment>
      <Wave
        className="wave-section-getStarted"
        direction="up"
        color="#fff"
        bgColor="#212529"
        height="80"
      ></Wave>
      <Section className="section-getStarted" bgColor="dark" fullWidth>
        <Image
          src={waveImage}
          className="wave-coloring"
          max-height={20}
          margin={-50}
        />

        <div className="newsletter-area-l-12 position-relative overflow-hidden">
          <div
            className="container"
            data-aos="fade-down"
            data-aos-duration={800}
            data-aos-once="true"
          >
            <div className="row justify-content-center">
              <div className="contact-area-l-image-group">
                <div className="image-3 ">
                  <Image className="w-100" src={rocket} alt="image" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-8 col-md-10">
                <div className="text-center">
                  <Heading
                    level="h5"
                    ftColor="primary"
                    horizontalPosition="center"
                  >
                    Você pode acessar o seu <a>perfil pessoal</a> ao logar e preencher as informações necessárias!
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
      </Section>
    </Fragment>
  )
}
