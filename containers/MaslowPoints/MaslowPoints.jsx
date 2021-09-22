import React, { Fragment } from 'react'
import Image from 'next/image'

import {Heading} from '../../components/Heading'
import {Section} from '../../components/Section'

import maslowPiramid from '../../assets/image/triangulo-blue.png'



export default function MaslowPoints() {
  return (
    <Fragment>
    <Section bgColor="primary">
    <div className="content-area-l7-2">
    <div className="row content-area-l7-2-heading align-items-center justify-content-lg-start justify-content-center">
      <div className="col-lg-9 col-md-7">
        <div className="section__heading-3">
          <Heading level="h4" horizontalPosition="center" ftColor="primary">Seguimos um conceito científico aqui no Instituto chamado 'Pirâmide de Maslow'</Heading>
          <Heading level ="h6" horizontalPosition="center" ftColor="primary">Abraham Maslow, o pai da Psicologia Humanista, é o autor do livro A Teoria da Motivação Humana, no qual ele discorre sobre os princípios da motivação e hierarquiza as necessidades humanas em forma de pirâmide.</Heading>
        </div>
      </div>
    </div>
    <div className="row align-items-center justify-content-lg-start justify-content-center">
      <div className="col-xl-4 col-lg-6 col-md-10 order-lg-1 order-1">
       <div className="content-l7-2-content-box">
          <div className="item d-flex flex-wrap " data-aos="fade-up" data-aos-delay={500} data-aos-duration={1000}>
          <div className="feature-box-l2 h-100">
              <div className="d-flex">
                <div className="color-box bg-dark" />
                <div className="content-box">
                  <Heading level ="h4" ftColor="primary">3° Nível</Heading>
                  <Heading level ="h6" ftColor="primary">Desafios de Autorrealização</Heading>
                </div>
              </div>
            </div>
            <div className="feature-box-l2 h-100">
              <div className="d-flex">
                <div className="color-box bg-mint" />
                <div className="content-box">
                  <Heading level ="h4" ftColor="primary">2° Nível</Heading>
                  <Heading level ="h6" ftColor="primary">Desafios Psicológicos</Heading>
                </div>
              </div>
            </div>
            <div className="feature-box-l2 h-100">
              <div className="d-flex">
                <div className="color-box bg-secondBlue" />
                <div className="content-box">
                  <Heading level ="h4" ftColor="primary">1° Nível</Heading>
                  <Heading level ="h6" ftColor="primary">Desafios de Base</Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-10 order-lg-1 order-0" data-aos="fade-up" data-aos-delay={500} data-aos-duration={1000}>
        <div className="content-2-l7-image overflow-hidden image-hover-style-01">
          <Image 
            className="w-100" 
            src={maslowPiramid} 
            alt="image"
            width={450}
            height={400} 
            margin-top={200}
          />
        </div>
      </div>
    </div> 
    </div>
  </Section>
  </Fragment>
  )
}
