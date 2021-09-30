import React, {Fragment} from 'react'
import Image from 'next/image'

import {Heading} from '../../components/Heading'
import {Section} from '../../components/Section'
import {CardItems} from '../../components/Card'
import {Wave} from '../../components/Wave'
import {Fade} from 'react-slideshow-image'
import {SixteenChallenges} from '../SixteenChallenges'

import maslowPiramid from '../../assets/image/triangulo-blue.png'

const contentText = {
  title:
    'Seguimos um conceito científico aqui no Instituto chamado "Pirâmide de Maslow"',
  subtitle:
    'Abraham Maslow, o pai da Psicologia Humanista, é o autor do livro A Teoria da Motivação Humana, no qual ele discorre sobre os princípios da motivação e hierarquiza as necessidades humanas em forma de pirâmide. Atualmente a nossa piramide se baseia em 16 desafios.',
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

const challengesInfo = [
  {
    title: [
      'Expectativa X Realidade',
      'Fit Carreira X Fit Time',
      'Lidar com Feedbacks',
      'Adaptação ao Mercado',
      'Imediatismo',
    ],
    color: 'bg-grey1',
  },
  {
    title: [
      'Expedição de Carreira',
      'Sonhar Grande',
      'Autoliderança',
      'Capital Cultural',
      'Autoestima',
    ],
    color: 'bg-mint',
  },
  {
    title: [
      'Moradia',
      'Descanso',
      'Pertencimento',
      'Atividade Física',
      'Alimentação',
      'Gestão de Rotina',
    ],
    color: 'bg-secondBlue',
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
          <Fade>
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
            <div className="row feature-16-items justify-content-center">
              {challengesInfo.map((challengeLevel) =>
                challengeLevel.title.map((item, index) => (
                  <Card
                    title={item}
                    boxColor={challengeLevel.color}
                    key={index}
                  />
                )),
              )}
            </div>
          </Fade>
        </div>
      </Section>
    </Fragment>
  )
}

function Card({title, boxColor}) {
  return (
    <div
      className="col-xl-3 col-lg-4 col-md-6 col-sm-6 aos-init aos-animate"
      data-aos="fade-up"
      data-aos-delay={500}
      data-aos-duration={1000}
    >
      <div className="feature-box-16 h-100">
        <div className="d-flex">
          <div
            className={[
              'color-box-16',
              boxColor ? boxColor : 'bg-secondBlue',
            ].join(' ')}
          />
          <div className="content-box-16">
            <Heading level="h6" ftColor="primary">
              {title}
            </Heading>
          </div>
        </div>
      </div>
    </div>
  )
}
