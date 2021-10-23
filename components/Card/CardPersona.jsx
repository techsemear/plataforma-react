import Image from 'next/image'

import {Logo} from '../Logo'

import linkedinImage from '../../assets/image/landing-1/linkedin-2.png'

const height = 24

export default function CardPersona({personasProfile}) {
  personasProfile.map((persona) => {
    persona.image = linkedinImage
    persona.link = persona.linkedin
  })

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
            <div className="content mt-2 cardText">
              <p>{persona.text}</p>
            </div>
            <div className="identity">
              <Logo logo={persona} width={height} height={height} level="h6">
                <strong className="namePersona">{persona.name}</strong>
              </Logo>
              <small>{persona.profession}</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
