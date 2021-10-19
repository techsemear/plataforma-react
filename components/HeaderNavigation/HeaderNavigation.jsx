import {HeaderItems} from './HeaderItems'
import { Logo } from '../Logo'

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

const logoSemear = {
  image: semearLogo,
  link: '#',
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
            <Logo logo={logoSemear} />
          </div>
          <div className={positionClasses[navItemsPosition]}>
            <HeaderItems items={contentInfo} />
          </div>
          {/* mobile menu trigger */}
          <div className="mobile-menu-trigger">
            <span />
            <HeaderItems items={contentInfo} />
          </div>
        </div>
        {children}
      </nav>
    </header>
  )
}
