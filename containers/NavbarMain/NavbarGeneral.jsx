import Image from 'next/image'

import {Navbar} from '../../components/Navbar'

import userIcon from '../../assets/image/landing-1/user-icon.png'

const btnInfo = {
  label: 'Perfil',
  linkTo: '/login',
}

const menuItems = [
  {
    label: 'Perfil',
    linkTo: '/',
    image: userIcon,
  },
  {
    label: ' ',
    linkTo: '/',
  },
]

export default function NavbarGeneral() {
  return (
      <Navbar contentInfo={menuItems} bgColor={'bg-null'} />
  )
}
