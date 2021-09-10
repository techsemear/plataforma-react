import Image from 'next/image'
import {Testimonial} from '../Testimonial'
import {ItemsSection} from '../../components/ItemsSection'
import {StudentJourney} from '../../components/StudentJourney'
import {StudentPoints} from '../../components/StudentPoints'
import studentImage from '../../assets/image/footer.png'
import globeImage from '../../assets/image/landing-1/h1-content-2-globe.png'
import imageProfile1 from '../../assets/image/landing-1/team-image.png'
import imageProfile2 from '../../assets/image/landing-1/team-image-2.png'
import imageProfile3 from '../../assets/image/landing-1/team-image-3.png'
import {Section} from '../../components/Section'

const title = 'Quem já venceu essa jornada'
const journey = 'Jornada do Jovem'
const themeDark = true
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
    text: 'Converse com mentores que tiveram sucesso na escolha de suas carreiras',
  },
  {
    index: '2',
    text: 'Conheça programas para encontrar oportunidades em organizações parceiras',
  },
  {
    index: '3',
    text: 'Encontre jovens que passaram pela mesma vivência e hoje são um destaques no mercado',
  },
]

export default function studentArea() {
  return (
    <div className="jovem-area">
      <div style={{height: 150, overflow: 'hidden'}}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{height: '100%', width: '100%'}}
        >
          <path
            d="M0.00,49.98 C145.31,125.81 392.49,104.11 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style={{stroke: 'none', fill: '#11115d'}}
          />
        </svg>
      </div>

      <StudentJourney />
      <StudentPoints />
      <Section bgColor="primary" id="studentTestimonial">
        <Testimonial personas={personas} dark={themeDark}>
          {' '}
          {title}{' '}
        </Testimonial>
      </Section>
    </div>
  )
}
