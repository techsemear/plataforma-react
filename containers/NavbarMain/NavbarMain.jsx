import {Navbar} from '../../components/Navbar'

const menuItems = [
  {
    label: 'Missão',
    linkTo: '#missao',
  },
  {
    label: 'Quem Somos',
    linkTo: '#quem-somos',
  },
  {
    label: 'Parceiros',
    linkTo: '#parceiros',
  },
  {
    label: 'Jovem',
    linkTo: '#protagonismo-jovem',
    children: [
      {
        label: 'Protagonismo',
        linkTo: '#protagonismo-jovem',
      },
      {
        label: 'Jornada do Jovem',
        linkTo: '#jornada-jovem',
      },
      {
        label: 'Testemunhos',
        linkTo: '#testemunho-jovem',
      },
    ],
  },
  {
    label: 'Mentor',
    linkTo: '#jornada-mentor',
    children: [
      {
        label: 'Jornada do Mentor',
        linkTo: '#jornada-mentor',
      },
      {
        label: 'Testemunhos',
        linkTo: '#testemunho-mentor',
      },
    ],
  },
]

const btnInfo = {
  label: 'Login',
  linkTo: '/login'
}

export default function NavbarMain() {
  return (
    <Navbar contentInfo={menuItems} btnInfo={btnInfo} />
  )
}
