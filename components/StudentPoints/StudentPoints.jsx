import React from 'react'
import Image from 'next/image'

import {Section} from '../Section'
import {OrderedItems} from '../OrderedItems'
import { Heading } from '../Heading'
import { Underline } from '../Underline'

import studentImage from '../../assets/image/footer.png'
import globeImage from '../../assets/image/landing-1/h1-content-2-globe.png'

const content = {
  title : 'O que posso aprender nessa jornada?',
  subtitle : 'Jornada do Jovem',
}

export default function StudentPoints({itemsText}) {
  return (
    <Section bgColor="primary">
      <div className="content-area-2-l1" id="jornada-jovem">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div
              className="offset-xxl-1 col-xxl-4 col-xl-5 col-lg-6 col-md-10"
              data-aos="fade-up"
              data-aos-delay={500}
              data-aos-duration={1000}
            >
              <div>
                <Heading ftColor="primary">{content.title}</Heading>
                <Underline level="h4" ftColor="quartenary">
                  {content.subtitle}
                </Underline>
              </div>
              <OrderedItems itemsTextList={itemsText} boxColor="primary" textColor="primary" />
            </div>
            <div className="offset-xxl-1 col-xxl-5 offset-xl-1 col-xl-5 col-lg-6 col-md-10">
              <div
                className="content-2-l1-image-group"
                data-aos="fade-up"
                data-aos-delay={800}
                data-aos-duration={1000}
              >
                <div className="image-1">
                  <Image src={studentImage} alt="image" />
                </div>

                <div className="image-2">
                  <Image className="w-100 spin" src={globeImage} alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
