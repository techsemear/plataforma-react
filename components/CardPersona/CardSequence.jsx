import React, {Fragment} from 'react'
import Image from 'next/image'

import {Heading} from '../../components/Heading'

import arrowImage from '../../assets/image/landing-4/arrow-right1.png'

export default function CardSequence({contentInfo = []}) {
  return (
    <div className="row service-l4-card-items justify-content-center align-items-center">
      {contentInfo.map((item, index) => (
        <div
          className="col-lg-3 col-md-6"
          data-aos="fade-right"
          data-aos-delay={400}
          data-aos-duration={1000}
          key={`item-${index}`}
        >
          <div className="service-l4-card">
            <div className="content">
              <Heading level="h4" ftColor="quinary">
                {item.title}
              </Heading>
              <p>{item.text}</p>
            </div>
            <div className="number-icon-area d-flex justify-content-between flex-wrap">
              <div className="icon">
                <a href="#">
                  <Image src={arrowImage} alt="icon" />
                </a>
              </div>
              <div className="number">
                <Heading level="h1">
                  {item.index ? item.index : index + 1}
                </Heading>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
