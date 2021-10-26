import {Testimonial} from '../Testimonial'
import StudentJourney from './StudentJourney'
import StudentPoints from './StudentPoints'
import {Section} from '../../components/Section'
import {Wave} from '../../components/Wave'
import {Heading} from '../../components/Heading'

import imageProfile1 from '../../assets/image/landing-1/student1.png'
import imageProfile2 from '../../assets/image/landing-1/student2.png'
import imageProfile3 from '../../assets/image/landing-1/student4.jpg'

const content = {
  title: 'Quem já venceu essa jornada',
}
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
const itemsText = [
  {
    text: 'Converse com mentores que tiveram sucesso na escolha de suas carreiras',
  },
  {
    text: 'Conheça programas para encontrar oportunidades em organizações parceiras',
  },
  {
    text: 'Encontre jovens que passaram pela mesma vivência e hoje são destaques no mercado',
  },
]
export default function studentArea() {
  return (
    <div className="jovem-area">
      <div style={{height: 150, overflow: 'hidden'}}>
        <Wave />
      </div>

      <StudentJourney />
      <StudentPoints itemsText={itemsText} />
      <Section bgColor="primary" id="testemunho-jovem">
        <Testimonial personas={personas}>
          <Heading horizontalPosition="center" ftColor="primary">
            {content.title}
          </Heading>
        </Testimonial>
      </Section>
    </div>
  )
}
