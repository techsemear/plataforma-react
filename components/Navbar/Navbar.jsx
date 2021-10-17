import {NavbarItems} from './NavbarItems'
import {LogoSemear} from '../../components/Logo'
import {Button} from '../../components/Button'

const backgroundClasses = {
  default: 'bg-default',
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  dark: 'bg-dark',
  other: 'bg-other',
}

export default function Navbar({
  contentInfo = [],
  bgColor = 'primary',
  btnInfo = {},
}) {
  return (
    <header
      className={`site-header site-header--menu-right landing-1-menu site-header--absolute site-header--sticky ${backgroundClasses[bgColor]}`}
    >
      <nav className="navbar site-navbar">
        <div className="container-fluid">
          <LogoSemear />
          <NavbarItems items={contentInfo} />
          {btnInfo.label && (
            <Button size="compact" bgColor="secondary" href="/login">
              {btnInfo.label}
            </Button>
          )}
          {/* mobile menu trigger */}
          <div className="mobile-menu-trigger">
            <span />
            <NavbarItems items={contentInfo} />
          </div>
        </div>
      </nav>
    </header>
  )
}
