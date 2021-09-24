import React, {Fragment} from 'react'

import {Heading} from '../../components/Heading'
import {Section} from '../../components/Section'
import {CardSequence} from '../../components/CardPersona'

import {Wave} from '../../components/Wave'

const content = {
  title:
    'Como funciona para fazer parte de tudo isso?',
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
      className="col-xl-6 col-lg-7 col-md-8 col-sm-12 order-lg-1 order-1"
      data-aos="fade-right"
      data-aos-duration={800}
      data-aos-once="true"
    >
      <div className="content">
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
