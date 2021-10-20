import Link from 'next/link'
import Image from 'next/image'

import {HeaderItems} from './HeaderItems'

import semearLogo from '../../assets/image/semear/logo-light.png'

const bgClasses = {
  default: 'bg-default',
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  dark: 'bg-dark',
  other: 'bg-other',
}

const positionClasses = {
  start: 'navItemsStart',
  center: 'navItemsCenter',
  end: 'navItemsEnd',
}

const sizeNavbar = {
  default: 'sizeNavDefault',
  large: 'sizeNavLarge',
}

const logoSemear = {
  image: semearLogo,
  link: '#',
}

export default function HeaderNavigation({
  children,
  contentInfo = [],
  bgColor = 'primary',
  navItemsPosition = 'end',
  size = 'default',
}) {
  return (
    <header
      className={`site-header site-header--menu-right landing-1-menu site-header--absolute site-header--sticky ${bgClasses[bgColor]} ${sizeNavbar[size]}`}
    >
      <nav className={`navbar site-navbar`}>
        <div className="container-fluid">
          <div className="brandLogo">
            {
              <Link href="#">
                <a>
                  <Image src={semearLogo} alt="semearLogo" />
                </a>
              </Link>
            }
          </div>
          <div className={positionClasses[navItemsPosition]}>
            <HeaderItems items={contentInfo} />
          </div>
          {children}
          {/* mobile menu trigger */}
          <div className="mobile-menu-trigger">
            <span />
            <HeaderItems items={contentInfo} />
          </div>
        </div>
      </nav>
    </header>
  )
}
