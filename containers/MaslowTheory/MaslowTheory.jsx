import React from 'react'
import Image from 'next/image'

import {Heading} from '../../components/Heading'
import {Section} from '../../components/Section'

import maslowPyramid from '../../assets/image/triangle.png'

const content = {
  title:
    "Seguimos um conceito científico aqui no Instituto chamado 'Pirâmide de Maslow'",
  text: 'Abraham Maslow, o pai da Psicologia Humanista, é o autor do livro A Teoria da Motivação Humana, no qual ele discorre sobre os princípios da motivação e hierarquiza as necessidades humanas em forma de pirâmide.',
}

export default function MaslowTheory() {
  return (
    <Section>
      <div className="content-area-l9-1">
        <div className="container">
          <div className="row content-area-l9-1-items justify-content-center">
            <div
              className="col-xxl-3 col-lg-4 col-md-6"
              data-aos="fade-right"
              data-aos-delay={500}
              data-aos-duration={1000}
            >
              <div className="content">
                <Heading level="h4">{content.title}</Heading>
              </div>
            </div>
            <div
              className="offset-xxl-1 col-xxl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={500}
              data-aos-duration={1000}
            >
              <div className="content">
                <p>{content.text}</p>
              </div>
            </div>
            <div
              className="offset-xxl-1 col-xxl-4 col-lg-4 col-md-6"
              data-aos="fade-left"
              data-aos-delay={500}
              data-aos-duration={1000}
            >
              <div className="content-area-l9-1-image overflow-hidden image-hover-style-01">
                <div className="w-100">
                  <Image src={maslowPyramid} alt="image" objectFit="contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
