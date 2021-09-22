import React, {Fragment} from 'react'
import Image from 'next/image'

import {Heading} from '../../components/Heading'
import {Section} from '../../components/Section'
import {CardSequence} from '../../components/CardPersona'

import {Wave} from '../../components/Wave'

const content = {
  title:
    'Uau que oportunidade incrível! Mas como funciona para fazer parte de tudo isso ?',
  subtitle:
    'Pode ficar tranquilo(a) que nós te explicamos o passo a passo de como vai funcionar esse processo.',
}
const contentCards = [
  {
    title: 'ENTENDA',
    text: 'como descobrir seus desafios',
  },
  {
    title: 'ENCONTRE',
    text: 'o(a) seu mentor(a) ideal',
  },
  {
    title: 'AGENDE',
    text: 'para o dia e horário ideal',
  },
  {
    title: 'REALIZE',
    text: 'a sua sessão de mentoria!',
  },
]

export default function MaslowFeatures() {
  return (
    <Fragment>
      <Wave
        className="wave"
        direction="center"
        color="#11115d"
        bgColor="#fff"
      />
      <Section>
        <div className="service-area-l4-1">
          <div className="container">
            <div className="row">
              <div
                className="offset-xxl-1 col-xxl-5 offset-xl-1 col-xl-6 col-lg-8"
                data-aos="fade-up"
                data-aos-delay={500}
                data-aos-duration={1000}
              >
                <div className="service-l4-head-content section__heading-2">
                  <Heading level="h2"> {content.title}</Heading>
                  <Heading level="h6" ftColor="secondary">
                    {content.subtitle}
                  </Heading>
                </div>
              </div>
            </div>
            <CardSequence contentInfo={contentCards} />
          </div>
        </div>
      </Section>
    </Fragment>
  )
}
