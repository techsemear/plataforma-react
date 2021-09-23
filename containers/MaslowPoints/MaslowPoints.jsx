import React, { Fragment } from 'react'
import Image from 'next/image'

import {Heading} from '../../components/Heading'
import {Section} from '../../components/Section'

import maslowPiramid from '../../assets/image/triangulo-blue.png'


const contentText = {
  title: 'Seguimos um conceito científico aqui no Instituto chamado "Pirâmide de Maslow"',
  subtitle: 'Abraham Maslow, o pai da Psicologia Humanista, é o autor do livro A Teoria da Motivação Humana, no qual ele discorre sobre os princípios da motivação e hierarquiza as necessidades humanas em forma de pirâmide.',
}


const listText = {
  title: [
    '1° Nível',
    '2° Nível',
    '3° Nível',
  ],
  subtitle: [
    'Desafios de Base',
    'Desafios Psicológicos',
    'Desafios de Autorrealização',
  ]
}

export default function MaslowPoints() {
  return (
    <Fragment>
    <Section bgColor="primary">
    <div className="content-area-l7-2">
    <div className="row content-area-l7-2-heading align-items-center justify-content-lg-start justify-content-center">
      <div className="col-lg-9 col-md-7">
        <div className="section__heading-3">
          <Heading level="h4" horizontalPosition="center" ftColor="primary">
            {contentText.title}
          </Heading>
          <br/>
          <Heading level="h6" horizontalPosition="center" ftColor="primary">
            {contentText.subtitle}
          </Heading>
        </div>
      </div>
    </div>
    <div className="row align-items-center justify-content-lg-start justify-content-center">
      <div className="col-xl-5 col-lg-6 col-md-10 order-lg-1 order-1">
        <div className="content-l7-2-content-box">
          <div className="item d-flex flex-wrap " data-aos="fade-up" data-aos-delay={500} data-aos-duration={1000}>
          <div className="feature-box-l2 h-100">
              <div className="d-flex">
                <div className="color-box bg-grey1" />
                <div className="content-box">
                  <Heading level ="h4" ftColor="primary">
                    {listText.title[2]}
                  </Heading>
                  <Heading level ="h6" ftColor="primary">
                    {listText.subtitle[2]}
                  </Heading>
                </div>
              </div>
            </div>
            <div className="feature-box-l2 h-100">
              <div className="d-flex">
                <div className="color-box bg-mint" />
                <div className="content-box">
                  <Heading level ="h4" ftColor="primary">
                    {listText.title[1]}
                  </Heading>
                  <Heading level ="h6" ftColor="primary">
                    {listText.subtitle[1]}
                  </Heading>
                </div>
              </div>
            </div>
            <div className="feature-box-l2 h-100">
              <div className="d-flex">
                <div className="color-box bg-secondBlue" />
                <div className="content-box">
                  <Heading level ="h4" ftColor="primary">
                    {listText.title[0]}
                  </Heading>
                  <Heading level ="h6" ftColor="primary">
                    {listText.subtitle[0]}
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-10 order-lg-1 order-0" data-aos="fade-up" data-aos-delay={500} data-aos-duration={1000}>
        <div className="content-2-l7-image overflow-hidden image-hover-style-01">
          <Image 
            className="w-100" 
            src={maslowPiramid} 
            alt="image"
            width={450}
            height={400}
            />
        </div>
      </div>
    </div> 
    </div>
  </Section>
  </Fragment>
  )
}
