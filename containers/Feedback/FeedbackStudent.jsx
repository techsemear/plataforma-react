import { Feedback } from '.'

import imageProfile1 from '../../assets/image/landing-1/mentor1.png'
import imageProfile2 from '../../assets/image/landing-1/mentor2.png'
import imageProfile3 from '../../assets/image/landing-1/mentor3.png'

const personas = [
  {
    id: '1',
    name: ' Camila Cintra',
    age: '33',
    pronoun: 'Ela/Dela',
    description:
      'Há tempos eu vinha sentindo vontade de contribuir com o crescimento de outras pessoas e colocar minha vivência a serviço disso. Conforme vou crescendo, percebo que recebi muito da vida e que às vezes uma palavra, um gesto ou uma dica, pode transformar a vida de alguém, assim como a minha foi também transformada.',
    profession: 'Researcher & Brand Strategist',
    company: 'Float',
    college: 'Universidade de São Paulo',
    course: 'Ciências Sociais',
    imageProfile: imageProfile1,
    linkedin: 'https://www.linkedin.com/in/camila-cintra-0064348a/',
    email: 'example@gmail.com',
    whatsapp: '(12) 345678910',
    invitedDate: Date.parse('2021-11-22T14:48:00'),
    isConfirmed: false,
    isRejected: false,
    isExperired: false,
    isAnswered: false,
    acceptedDate: new Date(),
    rejectedDate: new Date(),
    project: 'Programa de Carreira',
  },
  {
    id: '2',
    name: ' Giovanni Luigi',
    age: '28',
    pronoun: 'Ele/Dele',
    description:
      'Eu encontrei muitas histórias parecidas com a minha, o que me fez refletir muito sobre propósito, acho incrível o efeito que os jovens têm sobre a gente. Assim como compartilhamos experiência e conhecimentos, eles fornecem energia e esperança!',
    profession: 'Digital Data Marketing Specialist',
    company: 'Publicis Brasil',
    college: 'Universidade de São Paulo',
    course: 'Publicidade',
    imageProfile: imageProfile2,
    linkedin: 'https://www.linkedin.com/in/giovanni-luigi-mkt/',
    email: 'example@gmail.com',
    whatsapp: '(12) 345678910',
    invitedDate: Date.parse('2021-11-23T14:48:00'),
    isConfirmed: false,
    isRejected: false,
    isExperired: false,
    isAnswered: false,
    acceptedDate: new Date(),
    rejectedDate: new Date(),
    project: 'PlantYou',
  },
  {
    id: '3',
    name: ' Lucas Carvalho',
    age: '32',
    pronoun: 'Ele/Dele',
    description:
      'A oportunidade de dividir anseios, dúvidas, perspectivas de carreira e ensinamentos com jovens tão atentos é, sem dúvida, excepcional e um exercício de aprendizado. Tenho um carinho especial pela mentoria que me possibilitou conhecer um jovem inteligente, cheio de sonhos e que tem uma trajetória muito parecida com a que eu tive.',
    profession: 'Advogado Júnior',
    company: 'Demarest Advogados',
    college: 'Universidade de São Paulo',
    course: 'Direito',
    imageProfile: imageProfile3,
    linkedin: 'https://www.linkedin.com/in/lucas-vieira-carvalho-62a8aa18b/',
    email: 'example@gmail.com',
    whatsapp: '(12) 345678910',
    invitedDate: Date.parse('2021-11-22T14:48:00'),
    isConfirmed: false,
    isRejected: false,
    isExperired: false,
    isAnswered: false,
    acceptedDate: new Date(),
    rejectedDate: new Date(),
    project: 'Pontapé Empreendedor',
  },
]

export default function FeedbackStudent() {
    return (
        <Feedback personas={personas} />
    )
}
