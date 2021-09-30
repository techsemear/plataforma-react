import React, { Fragment } from 'react'
import Image from 'next/image'

import {Section} from '../../components/Section'
import {Heading} from '../../components/Heading'
import {VideoColumn} from '../../components/Video'


import Cover from '../../assets/image/l6/l6-hero-img.png'
import Shape7 from '../../assets/image/l6/shape-7.svg'

const content = {
  title: 'Don’t believe me. Listen what’s my students are saying',
}
const challengeContent = [
  {
    title: 'Alimentação',
    subtitle: 'Desafio 1',
    coverImage: Cover,
    youtubeID: 'HR1BaFO0R1I',
  },
  {
    title: 'Moradia',
    subtitle: 'Desafio 2',
    coverImage: Cover,
    youtubeID: 'HR1BaFO0R1I',
  },
  {
    title: 'Atividade Física',
    subtitle: 'Desafio 3',
    coverImage: Cover,
    youtubeID: 'HR1BaFO0R1I',
  },
]

export default function ChallengeVideos() {
  return (
    <Section>
      <div className="testimonial-area-l-12">
        <div className="container position-relative">
          <div className="testimonial-area-l12-shape">
            <Image src={Shape7} alt="shapes" />
          </div>
          <div className="row">
            <div className="col-xxl-7 col-xl-8 col-lg-9 col-md-12">
              <div className="section-heading-6">
                <Heading>{content.title}</Heading>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-4 col-lg-3 col-md-12 mb-2">
              <div className="l-12-slider-arrow-1 text-end">
                <i className="prev9  icon icon-tail-left slick-arrow" />
                <i className="next9 icon icon-tail-right slick-arrow slick-active" />
              </div>
            </div>
          </div>
          <div className="row testimonial-items-l-12">
            <div className="col-12">
              <div className="testimonial-slider-l-12 slick-initialized slick-slider">
                <div className="slick-list draggable flex">
                  {challengeContent.map((item, index) => (
                    <VideoColumn contentInfo={item} key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}