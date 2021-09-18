import Image from 'next/image'

import {ItemsSection} from '../../components/ItemsSection'
import {Section} from '../../components/Section'

import studentsImage from '../../assets/image/loginImage2.png'

const content = {
  title: 'Como realizar a mentoria?',
  journey: 'Passo a Passo',
}

const itemsText = [
  {
    text: 'Descubra quais são os seus maiores desafios',
  },
  {
    text: 'Encontre seu mentor ideal com um clique',
  },
  {
    text: 'Agende um horário e realize a mentoria!',
  },
]

export default function StepsMentoring() {
  return (
      <div className="mentor-area" id="jornada-mentor">
        <div className="content-area-2-l1">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <ItemsSection itemsText={itemsText} title={content.title}>
                {content.journey}
              </ItemsSection>
              <div className="offset-xxl-1 col-xxl-5 col-xl-6 col-lg-6 col-md-10">
                <div
                  className="content-2-l1-image-group"
                  data-aos="fade-up"
                  data-aos-delay={800}
                  data-aos-duration={1000}
                >
                  <div className="image-1">
                    <Image src={studentsImage} alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  )
}
