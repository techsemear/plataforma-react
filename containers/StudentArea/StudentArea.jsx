import {Testimonial} from '../Testimonial'
import {StudentJourney} from '../../components/StudentJourney'
import {StudentPoints} from '../../components/StudentPoints'

import imageProfile1 from '../../assets/image/landing-1/student1.png'
import imageProfile2 from '../../assets/image/landing-1/student2.png'
import imageProfile3 from '../../assets/image/landing-1/student4.jpg'
import {Section} from '../../components/Section'

const title = 'Quem já venceu essa jornada'
const personas = [
  {
    name: ' Pedro Masetti',
    text: '"A oportunidade de poder me conectar através das mentorias com pessoas já ambientadas no mercado de trabalho vêm trazendo diversos benefícios, e principalmente, auxiliando no meu autoconhecimento"',
    profession: 'Engenharia Ambiental',
    imageProfile: imageProfile1,
    linkedin: 'https://www.linkedin.com/in/pedro-masetti-3535321a9/',
  },
  {
    name: ' Mariana Ferraz',
    text: '"Na primeira mentoria eu não sabia quem eu era, definir meus sonhos ou para onde eu estava indo. Ter a oportunidade de ser mentorada no primeiro semestre da minha (tão sonhada) faculdade fez total diferença. Hoje, sinto que me conheço mais, sei como e o que estou fazendo para alcançar meus sonhos."',
    profession: 'Engenharia de Produção',
    imageProfile: imageProfile2,
    linkedin: 'https://www.linkedin.com/in/mariana-ferraz-991181215/',
  },
  {
    name: ' Jéssica Gonsalves',
    text: '"Ser mentoranda me permitiu tomar consciência do meu próprio protagonismo e em como consigo pontencializá-lo na minha jornada. Mais do que isso, me permitiu construir em conjunto com a minha mentora, um processo sistêmico de reflexão, concepção e tomada de decisões."',
    profession: 'Engenharia Elétrica',
    imageProfile: imageProfile3,
    linkedin: 'https://www.linkedin.com/in/gonsalvesjessica/',
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
        <Testimonial personas={personas}>{title}</Testimonial>
      </Section>
    </div>
  )
}
