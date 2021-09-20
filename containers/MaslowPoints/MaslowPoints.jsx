import React, { Fragment } from 'react'
import Image from 'next/image'


import {Heading} from '../../components/Heading'
import {Section} from '../../components/Section'
import {Wave} from '../../components/Wave'
import {MaslowFeatures} from '../../components/MaslowFeatures'

import maslowPiramid from '../../assets/image/triangulo-blue.png'



export default function MaslowPoints() {
  return (
    <Fragment>
    <Wave/>
    <Section bgColor="primary">
    <div className="content-area-l7-2">
    <div className="row content-area-l7-2-heading align-items-center justify-content-lg-start justify-content-center">
      <div className="col-lg-6 col-md-7">
        <div className="section__heading-3">
          <Heading level="h4" horizontalPosition="center" ftColor="primary">O mais legal é que ela revolucionou a maneira que enxergamos nossas dificuldades...</Heading>
        </div>
      </div>
    </div>
    <div className="row align-items-center justify-content-lg-start justify-content-center">
      <div className="col-xl-4 col-lg-6 col-md-10 order-lg-1 order-1">
        <div className="content-l7-2-content-box">
          <Heading level="h6" ftColor="primary">Ela categoriza as principais necessidades humanas em um gráfico de pirâmide! Segue com a gente:</Heading>
          <div className="item d-flex flex-wrap " data-aos="fade-up" data-aos-delay={500} data-aos-duration={1000}>
          <div className="feature-box-l2 h-100">
              <div className="d-flex">
                <div className="color-box bg-grey1" />
                <div className="content-box">
                  <Heading level ="h5" ftColor="primary">Desafio da Autorrealização</Heading>
                  <Heading level ="h6" ftColor="primary">Viver de Acordo ao seu Máximo Potencial</Heading>
                </div>
              </div>
            </div>
            <div className="feature-box-l2 h-100">
              <div className="d-flex">
                <div className="color-box bg-mint" />
                <div className="content-box">
                  <Heading level ="h5" ftColor="primary">Desafios Psicológicos</Heading>
                  <Heading level ="h6" ftColor="primary">Autoestima, Reconhecimento e Pertencimento Social</Heading>
                </div>
              </div>
            </div>
            <div className="feature-box-l2 h-100">
              <div className="d-flex">
                <div className="color-box bg-secondBlue" />
                <div className="content-box">
                  <Heading level ="h5" ftColor="primary">Desafios de Base</Heading>
                  <Heading level ="h6" ftColor="primary">Alimentação, Moradia, Saúde e Segurança</Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-10 order-lg-1 order-0" data-aos="fade-up" data-aos-delay={500} data-aos-duration={1000}>
        <div className="content-2-l7-image overflow-hidden image-hover-style-01">
          <Image className="w-100" src={maslowPiramid} alt="image" />
        </div>
      </div>
    </div> 
    </div>
  </Section>
  <MaslowFeatures/>
  </Fragment>
  )
}
