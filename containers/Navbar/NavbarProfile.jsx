import {HeaderNavigation} from '../../components/HeaderNavigation'

export default function NavbarGeneral() {
return <HeaderNavigation contentInfo={menuItems} bgColor="other" navItemsPosition="center"/>
}

const menuItems = [
  {
    label: 'Início',
    linkTo: '/',
  },
  {
    label: 'Mentoria',
    linkTo: '/',
  },
  {
    label: 'Desafios',
    linkTo: '/',
  },
  {
    label: 'Opções',
    children: [
      {
        label: 'Perguntas Frequentes',
        linkTo: '/',
      },
      {
        label: 'Sair',
        linkTo: '/',
      },
      {
        label: 'Ajuda',
        linkTo: '/',
      },
    ],
  },
]
