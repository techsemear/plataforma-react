import {LogoSemear} from '../../components/Logo'

import {NavbarItems} from './NavbarItems'
import {LoginButton} from '../../components/Button'

const backgroundClasses = {
  default: 'bg-default',
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  dark: 'bg-dark',
  other: 'bg-other',
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
    label: 'Jornada do Jovem',
    linkTo: '#jornada-jovem',
  },
  {
    label: 'Jornada do Mentor',
    linkTo: '#jornada-mentor',
  },
]

export default function Navbar({
  bgColor = 'default'
  }
  ) {
  return (
    <header className="site-header site-header--menu-right landing-1-menu site-header--absolute site-header--sticky">
      <nav  className="navbar site-navbar">
        <div className="container-fluid">
          <LogoSemear />
          <NavbarItems items={menuItems} />
          <LoginButton> Login </LoginButton>
          {/* mobile menu trigger */}
          <div className="mobile-menu-trigger">
            <span />
            <NavbarItems items={menuItems} />
          </div>
          {/*/.Mobile Menu Hamburger Ends*/}
        </div>
      </nav>
    </header>
  )
}
