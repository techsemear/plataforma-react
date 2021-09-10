import Image from 'next/image'
import {Heading} from '../Heading'

import imageProfile1 from '../../assets/image/landing-1/team-image.png'
import imageProfile2 from '../../assets/image/landing-1/team-image-2.png'
import imageProfile3 from '../../assets/image/landing-1/team-image-3.png'
import {Underline} from '../Underline'

export default function CardPersona({personasProfile}) {
  return (
        <div className="row justify-content-center clients-l8-items">
          {personasProfile.map((persona, index) => (
            <div
              className="col-lg-4 col-md-6 col-sm-10"
              data-aos="fade-right"
              data-aos-delay={500}
              data-aos-duration={1000}
            >
              <div className="client-l8-card">
                <div className="image">
                  <Image src={persona.imageProfile} alt="image" />
                </div>
                <div className="content mt-2">
                  <Underline level="h5"> "{persona.subtitle}"</Underline>
                  <br />
                  <Heading level="h6">{persona.text}</Heading>
                </div>
                <div className="identity mt-4">
                  <Heading level="h6"><strong>{persona.name}</strong></Heading>
                  <small>{persona.profession}</small>
                </div>
              </div>
            </div>
          ))}
        </div>

  )
}
