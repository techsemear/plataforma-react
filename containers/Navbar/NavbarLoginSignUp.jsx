import {HeaderNavigation} from '../../components/HeaderNavigation'

import userIcon from '../../assets/image/landing-1/user-icon.png'

const menuItems = [
  {
    label: 'Página Inicial',
    linkTo: '/',
  }
]

export default function NavbarLoginSignUp() {
  return <HeaderNavigation contentInfo={menuItems} bgColor="other" />
}

