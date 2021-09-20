import React, { Fragment } from 'react'
import Image from 'next/image'

import {Heading} from '../../components/Heading'
import {Section} from '../../components/Section'

import arrowImage from '../../assets/image/landing-4/arrow-right1.png'


import { Wave } from '../../components/Wave'

export default function MaslowFeatures() {
  return (
    <Fragment>
    <Wave className="wave" direction= "center" color = "#11115d" bgColor = "#fff"/>
    <Section>
    <div className="service-area-l4-1">
  <div className="container">
    <div className="row">
      <div className="offset-xxl-1 col-xxl-5 offset-xl-1 col-xl-6 col-lg-8" data-aos="fade-up" data-aos-delay={500} data-aos-duration={1000}>
        <div className="service-l4-head-content section__heading-2">
          <Heading level="h3">"Ual que oportunidade incrível! Mas como funciona para fazer parte de tudo isso ?"</Heading>
          <Heading level ="h6" ftColor="quartenary">Pode ficar tranquilo(a) que nós te explicamos o passo a passo de como vai funcionar esse processo.</Heading>
        </div>
      </div>
    </div>
    <div className="row service-l4-card-items justify-content-center align-items-center">
      <div className="col-lg-3 col-md-6" data-aos="fade-right" data-aos-delay={400} data-aos-duration={1000}>
        <div className="service-l4-card">
          <div className="content">
            <Heading level = "h4" ftColor="quinary">ENTENDA</Heading>
            <p>como descobrir <br/>seus desafios</p>
          </div>
          <div className="number-icon-area d-flex justify-content-between flex-wrap">
            <div className="icon">
              <a href="#"><Image src = {arrowImage} alt="icon" /></a>
            </div>
            <div className="number">
              <Heading level="h1">01</Heading>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={500} data-aos-duration={1000}>
        <div className="service-l4-card">
          <div className="content">
            <Heading level = "h4" ftColor="quinary">ENCONTRE</Heading>
            <p>o(a) seu mentor(a) ideal</p>
          </div>
          <div className="number-icon-area d-flex justify-content-between flex-wrap">
            <div className="icon">
              <a href="#"><Image src= {arrowImage} alt="icon" /></a>
            </div>
            <div className="number">
            <Heading level="h1">02</Heading>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6" data-aos="fade-left" data-aos-delay={600} data-aos-duration={1000}>
        <div className="service-l4-card">
          <div className="content">
            <Heading level = "h4" ftColor="quinary">AGENDE</Heading>
            <p>para o dia e horário ideal</p>
          </div>
          <div className="number-icon-area d-flex justify-content-between flex-wrap">
            <div className="icon">
              <a href="#"><Image src= {arrowImage} alt="icon" /></a>
            </div>
            <div className="number">
            <Heading level="h1">03</Heading>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6" data-aos="fade-left" data-aos-delay={600} data-aos-duration={1000}>
        <div className="service-l4-card">
          <div className="content">
            <Heading level = "h4" ftColor="quinary">REALIZE</Heading>
            <p>a sua sessão de mentoria!</p>
          </div>
          <div className="number-icon-area d-flex justify-content-between flex-wrap">
            <div className="icon">
              <a href="#"><Image src={arrowImage} alt="icon" /></a>
            </div>
            <div className="number">
            <Heading level="h1">04</Heading>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</Section>
</Fragment>
  )
}
