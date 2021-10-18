import Link from 'next/link'
import Image from 'next/image'

import {NavbarItems} from './HeaderItems'

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

export default function HeaderNavigation({
  children,
  contentInfo = [],
  bgColor = 'primary',
  navItemsPosition = 'end',
}) {
  return (
    <header
      className={`site-header site-header--menu-right landing-1-menu site-header--absolute site-header--sticky ${bgClasses[bgColor]}`}
    >
      <nav className="navbar site-navbar">
        <div className="container-fluid">
          <div className="brandLogo">
            <Link href="#">
              <Image
                src={semearLogo}
                alt="Instituto Semear"
                objectFit="contain"
              />
            </Link>
          </div>
          <div className={positionClasses[navItemsPosition]}>
            <NavbarItems items={contentInfo} />
          </div>
          {/* mobile menu trigger */}
          <div className="mobile-menu-trigger">
            <span />
            <NavbarItems items={contentInfo} />
          </div>
        </div>
        {children}
      </nav>
    </header>
  )
}
