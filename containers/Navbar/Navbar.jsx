import {Logo} from '../../components/Logo'

import {NavbarItems} from './NavbarItems'

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
    linkTo: '#',
  },
  {
    label: 'Jornada do Mentor',
    linkTo: '#',
  },
  {
    label: 'Tenho Interesse',
    linkTo: '#',
  },
]

export default function Navbar() {
  return (
    <header className="site-header site-header--menu-right landing-1-menu site-header--absolute site-header--sticky">
      <nav className="navbar site-navbar">
        <div className="container-fluid">
          <Logo />

          <NavbarItems items={menuItems} />

          {/* mobile menu trigger */}
          <div className="mobile-menu-trigger">
            <span />
          </div>
          {/*/.Mobile Menu Hamburger Ends*/}
        </div>
      </nav>
    </header>
  )
}
