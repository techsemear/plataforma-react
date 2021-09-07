import {Fragment} from 'react'

import {Logo} from '../../components/Logo'

import {NavbarItems} from './NavbarItems'

const menuItems = [
  {
    label: 'Quem Somos',
    linkTo: '#',
  },
  {
    label: 'Nosso Objetivo',
    linkTo: '#',
  },
  {
    label: 'Contato',
    linkTo: '#',
  },
  {
    label: 'Conheça',
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
