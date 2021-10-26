import {HeaderNavigation} from '../../components/HeaderNavigation'
import { Button } from '../../components/Button'

import styles from './Navbar.module.css'

export default function NavbarMain() {
  return (
    <HeaderNavigation contentInfo={menuItems} navItemsPosition="center" size="large">
      <div className={styles.loginButton}>
        <Button size="compact" bgColor="secondary" href="/login" disabled>
          Login
        </Button>
      </div>
    </HeaderNavigation>
  )
}

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

