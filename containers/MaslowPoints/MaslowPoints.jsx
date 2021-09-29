import React, {Fragment} from 'react'
import Image from 'next/image'

import {Heading} from '../../components/Heading'
import {Section} from '../../components/Section'
import {CardItems} from '../../components/Card'
import {Wave} from '../../components/Wave'

import maslowPiramid from '../../assets/image/triangulo-blue.png'

const contentText = {
  title:
    'Seguimos um conceito científico aqui no Instituto chamado "Pirâmide de Maslow"',
  subtitle:
    'Abraham Maslow, o pai da Psicologia Humanista, é o autor do livro A Teoria da Motivação Humana, no qual ele discorre sobre os princípios da motivação e hierarquiza as necessidades humanas em forma de pirâmide.',
}

const listText = [
  {
    level: '1° Nível',
    subtitle: 'Desafios de Base',
    text: 'Alimentação, Moradia, Pertencimento, Atividade Física, Descanso, Gestão de Rotina',
    color: 'bg-secondBlue',
  },
  {
    level: '2° Nível',
    subtitle: 'Desafios Psicológicos',
    text: 'Autoestima, Expedição de Carreira, Sonhar Grande, Capital Cultural, Autoliderança',
    color: 'bg-mint',
  },
  {
    level: '3° Nível',
    subtitle: 'Desafios de Autorrealização',
    text: 'Fit Carreira vs Fit Time, Expectativas de Carreira, Feedbacks, Ciclos de Carreira, Régua do Mercado',
    color: 'bg-grey1',
  },
]

export default function MaslowPoints() {
  return (
    <Fragment>
      <Section bgColor="primary">
        <div className="content-area-l7-2">
          <div className="row content-area-l7-2-heading align-items-center justify-content-lg-start justify-content-center">
            <div className="col-lg-8 col-md-7">
              <Heading level="h4" horizontalPosition="center" ftColor="primary">
                {contentText.title}
              </Heading>
              <br />
              <Heading level="h6" horizontalPosition="center" ftColor="primary">
                {contentText.subtitle}
              </Heading>
            </div>
          </div>
          <div className="row align-items-center justify-content-lg-start justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-10 order-lg-1 order-1">
              <CardItems contentInfo={listText} />
            </div>
            <div
              className="col-xxl-5 col-xl-5 col-lg-6 col-md-10 order-lg-1 order-0"
              data-aos="fade-up"
              data-aos-delay={500}
              data-aos-duration={1000}
            >
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
