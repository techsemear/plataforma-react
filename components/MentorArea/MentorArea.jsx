import Image from 'next/image'
import {Testimonial} from '../Testimonial'
import {ItemsSection} from '../ItemsSection'
import mentorImage from '../../assets/image/mentor1.png'
import imageProfile1 from '../../assets/image/landing-1/team-image.png'
import imageProfile2 from '../../assets/image/landing-1/team-image-2.png'
import imageProfile3 from '../../assets/image/landing-1/team-image-3.png'

const title = 'Mentores da Rede Semear';
const journey = 'Jornada do Mentor';
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
];
const itemsText = [
  {
    index: '1',
    text: 'Seja o responsável por agir para a melhoria de oportunidades educacionais no Brasil;',
  },
  {
    index: '2',
    text: 'Gere Mudanças ! Impacte a vida de diversos jovens que serão o futuro da nossa nação;',
  },
  {
    index: '3',
    text: 'O ISemear possui uma ampla rede de contatos, seja você também parte das conexões que geram o Futuro!',
  }
];

export default function MentorArea() {
  return (
    <div className="mentor-area">
      <div className="content-area-2-l1">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="offset-xxl-1 col-xxl-5 offset-xl-1 col-xl-5 col-lg-6 col-md-10">
              <div
                className="content-2-l1-image-group"
                data-aos="fade-up"
                data-aos-delay={800}
                data-aos-duration={1000}
              >
                <div className="image-1">
                  <Image src={mentorImage} alt="image" />
                </div>
              </div>
            </div>
            <ItemsSection itemsText={itemsText}> {journey} </ItemsSection>
          </div>
        </div>
      </div>
      <Testimonial personas={personas}> {title} </Testimonial>
    </div>
  )
}
