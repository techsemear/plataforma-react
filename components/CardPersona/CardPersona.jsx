import Image from 'next/image'
import {Heading} from '../Heading'

import LinkedinLogo from '../../assets/image/landing-1/linkedin.png'
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
              key={index}
            >
              <div className="client-l8-card">
                <div className="image">
                  <Image src={persona.imageProfile} alt="image" />
                </div>
                <div className="content mt-2">
                  <p>{persona.text}</p>
                </div>
                <div className="identity mt-4">
                  <Heading level="h6">
                    <a href="">
                      <Image src ={LinkedinLogo} />
                    </a>
                    <strong className="namePersona">{persona.name}</strong>
                  </Heading>
                  <small>{persona.profession}</small>
                </div>
              </div>
            </div>
          ))}
        </div>

  )
}
