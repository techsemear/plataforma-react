import React from 'react'
import {Fragment} from 'react'
import Image from 'next/image'

import {Heading} from '../../components/Heading'
import {Section} from '../../components/Section'
import {Wave} from '../../components/Wave'

const challengesInfo = [
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
      'Expectativa X Realidade',
      'Fit Carreira X Fit Time',
      'Lidar com Feedbacks',
      'Adaptação ao Mercado',
      'Imediatismo',
    ],
    color: 'bg-grey1',
  },
]

export default function SixteenChallenges() {
  return (
    <Fragment>
      <Wave className="wave sixteenChallenges" direction="up" bgColor="#fff" />
      <Section bgColor="default">
        <div className="row justify-content-lg-between justify-content-center align-items-center text-center text-lg-start">
          <Heading level="h3" ftColor="default">
            Os 16 Desafios
          </Heading>
          <Heading level="h5" ftColor="secondary">
            Conheça um pouco mais dos desafios que interferem no seu
            desenvolvimento
          </Heading>
        </div>
        <div className="row feature-16-items justify-content-center">
          {challengesInfo.map((challengeLevel) => (
            challengeLevel.title.map((item, index) => (
              <Card title={item} boxColor={challengeLevel.color} key={index} />
            ))
          ))}
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
            <Heading level="h6" ftColor="default">
              {title}
            </Heading>
          </div>
        </div>
      </div>
    </div>
  )
}
