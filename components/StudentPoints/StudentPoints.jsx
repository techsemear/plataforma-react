import React from 'react'
import Image from 'next/image'

import {ItemsSection} from '../ItemsSection'
import {Section} from '../Section'

import studentImage from '../../assets/image/footer.png'
import globeImage from '../../assets/image/landing-1/h1-content-2-globe.png'

const journey = 'Jornada do Jovem'

export default function StudentPoints({itemsText}) {
  return (
    <Section bgColor="primary">
      <div className="content-area-2-l1" id="jornada-jovem">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <ItemsSection
              itemsText={itemsText}
              kindColor='primary'
              title="O que posso descobrir nessa jornada?"
            >
              {journey}
            </ItemsSection>

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
