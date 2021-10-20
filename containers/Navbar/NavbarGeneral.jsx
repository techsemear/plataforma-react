import {HeaderNavigation} from '../../components/HeaderNavigation'

import userIcon from '../../assets/image/landing-1/user-icon.png'

const menuItems = [
  {
    label: 'Perfil',
    linkTo: '/',
    image: userIcon,
  },
  {
    label: 'Mais',
    children: [
      {
        label: 'Ajuda',
        linkTo: '/',
      },
      {
        label: 'Sair',
        linkTo: '/',
      },
    ]
  }
]

export default function NavbarGeneral() {
  return <HeaderNavigation contentInfo={menuItems} bgColor="dark" />
}
