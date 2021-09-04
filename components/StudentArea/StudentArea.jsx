import Image from 'next/image'
import {Testimonial} from '../Testimonial'
import {ItemsSection} from '../ItemsSection'
import studentImage from '../../assets/image/footer.png'
import globeImage from '../../assets/image/landing-1/h1-content-2-globe.png'
import imageProfile1 from '../../assets/image/landing-1/team-image.png'
import imageProfile2 from '../../assets/image/landing-1/team-image-2.png'
import imageProfile3 from '../../assets/image/landing-1/team-image-3.png'

const title = 'Quem já venceu essa jornada'
const journey = 'Jornada do Jovem'
const personas = [
  {
    name: 'Alan Farmer',
    subtitle: 'You made it so simple.',
    text: 'My new site is so much faster and easier to work with than my old site.',
    profession: 'Digital Marketer',
    imageProfile: imageProfile1,
  },
  {
    name: 'Alan Farmer',
    subtitle: 'Better than all the rest.',
    text: 'Simply the best. I’d recommend this product to beginners and advanced users.',
    profession: 'Digital Marketer',
    imageProfile: imageProfile2,
  },
  {
    name: 'Alan Farmer',
    subtitle: 'Must have service',
    text: ' for all, who want to be successful Product Designer or Interaction Designer.',
    profession: 'Digital Marketer',
    imageProfile: imageProfile3,
  },
]
const itemsText = [
  {
    index: '1',
    text: 'Converse com mentores que tiveram sucesso na escolha de suas carreiras;',
  },
  {
    index: '2',
    text: 'Conheça programas para encontrar oportunidades em organizações parceiras;',
  },
  {
    index: '3',
    text: 'Encontre jovens que passaram pela mesma vivência e hoje são um destaques no mercado;',
  },
]

export default function studentArea() {
  return (
    <div className="jovem-area">
      <div className="content-area-2-l1">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <ItemsSection itemsText={itemsText}> {journey} </ItemsSection>
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
                  <Image className="w-100 spin" src= { globeImage } alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonial personas={personas}> {title} </Testimonial>
    </div>
  )
}
