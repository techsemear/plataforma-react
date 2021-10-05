import Image from 'next/image'

import {Testimonial} from '../Testimonial'
import {ItemsSection} from '../../components/ItemsSection'
import {Section} from '../../components/Section'

import mentorImage from '../../assets/image/mentor1.png'
import imageProfile1 from '../../assets/image/landing-1/mentor1.png'
import imageProfile2 from '../../assets/image/landing-1/mentor2.png'
import imageProfile3 from '../../assets/image/landing-1/mentor3.png'

const content = {
  title: 'Mentores da Rede Semear',
  journey: 'Jornada do Mentor',
}

const personas = [
  {
    name: ' Camila Cintra',
    subtitle: 'You made it so simple.',
    text: '"Há tempos eu vinha sentindo vontade de contribuir com o crescimento de outras pessoas e colocar minha vivência a serviço disso. Conforme vou crescendo, percebo que recebi muito da vida e que às vezes uma palavra, um gesto ou uma dica, pode transformar a vida de alguém, assim como a minha foi também transformada."',
    profession: 'Researcher & Brand Strategist - Float',
    imageProfile: imageProfile1,
    linkedin: 'https://www.linkedin.com/in/camila-cintra-0064348a/',
  },
  {
    name: ' Giovanni Luigi',
    subtitle: 'Better than all the rest.',
    text: '"Eu encontrei muitas histórias parecidas com a minha, o que me fez refletir muito sobre propósito, acho incrível o efeito que os jovens têm sobre a gente. Assim como compartilhamos experiência e conhecimentos, eles fornecem energia e esperança!"',
    profession: 'Digital Data Marketing Specialist - Publicis Brasil',
    imageProfile: imageProfile2,
    linkedin: 'https://www.linkedin.com/in/giovanni-luigi-mkt/',
  },
  {
    name: ' Lucas Carvalho',
    subtitle: 'Must have service',
    text: '"A oportunidade de dividir anseios, dúvidas, perspectivas de carreira e ensinamentos com jovens tão atentos é, sem dúvida, excepcional e um exercício de aprendizado. Tenho um carinho especial pela mentoria que me possibilitou conhecer um jovem inteligente, cheio de sonhos e que tem uma trajetória muito parecida com a que eu tive."',
    profession: 'Advogado Júnior - Demarest Advogados',
    imageProfile: imageProfile3,
    linkedin: 'https://www.linkedin.com/in/lucas-vieira-carvalho-62a8aa18b/',
  },
]
const itemsText = [
  {
    index: '1',
    text: 'Seja o responsável por agir para a melhoria de oportunidades educacionais no Brasil',
  },
  {
    index: '2',
    text: 'Gere Mudanças ! Impacte a vida de jovens que serão o futuro da nossa nação',
  },
  {
    index: '3',
    text: 'O ISemear possui uma ampla rede de contatos, faça parte gerando futuro para os jovens',
  },
]

export default function MentorArea() {
  return (
    <div className="mentor-area" id="jornada-mentor">
      <div className="content-area-2-l1">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="offset-xxl-1 col-xxl-5 col-xl-6 col-lg-6 col-md-10">
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
            <ItemsSection itemsText={itemsText}>
              {content.journey}
            </ItemsSection>
          </div>
        </div>
      </div>
      <Section id="testemunho-mentor" bgColor="secondary">
        <Testimonial personas={personas}>{content.title}</Testimonial>
      </Section>
    </div>
  )
}
