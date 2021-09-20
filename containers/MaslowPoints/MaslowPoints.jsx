import React, { Fragment } from 'react'
import Image from 'next/image'


import {Heading} from '../../components/Heading'
import {Section} from '../../components/Section'
import {MaslowFeatures} from '../../components/MaslowFeatures'

import maslowPiramid from '../../assets/image/maslow.png'



export default function MaslowPoints() {
  return (
    <Fragment>
    <Section bgColor="primary">
    <div className="content-area-l7-2">
    <div className="container">
    <div className="row content-area-l7-2-heading align-items-center justify-content-lg-start justify-content-center">
      <div className="col-lg-6 col-md-7">
        <div className="section__heading-3">
          <Heading level="h4" horizontalPosition="center" ftColor="primary">O mais legal é que ela revolucionou a maneira que enxergamos nossas dificuldades...</Heading>
        </div>
      </div>
    </div>
    <div className="row align-items-center justify-content-lg-start justify-content-center">
      <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-10 order-lg-1 order-1">
        <div className="content-l7-2-content-box">
          <Heading level="h6" ftColor="primary">Ela categoriza as principais necessidades humanas em um gráfico de pirâmide! Segue com a gente:</Heading>
          <div className="item d-flex flex-wrap " data-aos="fade-up" data-aos-delay={500} data-aos-duration={1000}>
            <div className="item-icon">
              <span>3°</span>
            </div>
            <div className="item-content">
              <Heading level = "h4" ftColor="primary">Nível</Heading>
              <p>Desafio da Autorrealização</p>
            </div>
          </div>
          <div className="item d-flex flex-wrap" data-aos="fade-up" data-aos-delay={500} data-aos-duration={1000}>
            <div className="item-icon">
              <span>2°</span>
            </div>
            <div className="item-content">
              <Heading level = "h4" ftColor="primary">Nível</Heading>
              <p>Desafios Psicológicos</p>
            </div>
          </div>
          <div className="item d-flex flex-wrap" data-aos="fade-up" data-aos-delay={500} data-aos-duration={1000}>
            <div className="item-icon">
              <span>1°</span>
            </div>
            <div className="item-content">
              <Heading level = "h4" ftColor="primary">Nível</Heading>
              <p>Desafios de Base</p>
            </div>
          </div>
        </div>
      </div>
      <div className="offset-xxl-1 col-xxl-6 col-xl-6 col-lg-6 col-md-10 order-lg-1 order-0" data-aos="fade-up" data-aos-delay={500} data-aos-duration={1000}>
        <div className="content-2-l7-image overflow-hidden image-hover-style-01">
          <Image className="w-100" src={maslowPiramid} alt="image" />
        </div>
      </div>
    </div>
    </div>
    </div>    
  </Section>
  <MaslowFeatures/>
  </Fragment>
  )
}
