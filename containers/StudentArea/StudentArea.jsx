import Image from 'next/image'
import {Testimonial} from '../Testimonial'
import {ItemsSection} from '../../components/ItemsSection'
import {StudentJourney} from '../../components/StudentJourney'
import {StudentPoints} from '../../components/StudentPoints'
import studentImage from '../../assets/image/footer.png'
import globeImage from '../../assets/image/landing-1/h1-content-2-globe.png'
import imageProfile1 from '../../assets/image/landing-1/student1.png'
import imageProfile2 from '../../assets/image/landing-1/student2.png'
import imageProfile3 from '../../assets/image/landing-1/student3.png'
import {Section} from '../../components/Section'

const title = 'Quem já venceu essa jornada'
const journey = 'Jornada do Jovem'
const themeDark = true
const personas = [
  {
    name: ' Pedro Masetti',
    subtitle: 'You made it so simple.',
    text: '"A oportunidade de poder me conectar através das mentorias com pessoas já ambientadas no mercado de trabalho vêm trazendo diversos benefícios, e principalmente, auxiliando no meu autoconhecimento"',
    profession: 'Engenharia Ambiental',
    imageProfile: imageProfile1,
    linkedin: "https://www.linkedin.com/in/pedro-masetti-3535321a9/",

  },
  {
    name: ' Mariana Ferraz',
    subtitle: 'Better than all the rest.',
    text: '"Na primeira mentoria eu não sabia quem eu era, definir meus sonhos ou para onde eu estava indo. Ter a oportunidade de ser mentorada no primeiro semestre da minha (tão sonhada) faculdade fez total diferença. Hoje, sinto que me conheço mais, sei como e o que estou fazendo para alcançar meus sonhos."',
    profession: 'Engenharia de Produção',
    imageProfile: imageProfile2,
    linkedin:"https://www.linkedin.com/in/mariana-ferraz-991181215/",
  },
  {
    name: ' Kerolen Rodrigues',
    subtitle: 'Super indico a mentoria do semear',
    text: '"A troca de experiências é enriquecedora e muito motivadora para continuar estudando e focada nos objetivos futuros. Conheci muitas áreas na tecnologia que me fizeram ter uma visão mais abrangente da área que estou estudando. Super indico a mentoria do Semear"',
    profession: 'Tecnologia da Informação',
    imageProfile: imageProfile3,
    linkedin:"https://www.linkedin.com/in/kerolen-rodrigues-326809181/",
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
