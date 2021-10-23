import Image from 'next/image'

import styles from './SocialMedia.module.css'

import Instagram from '../../assets/image/Social Icons/1.png'
import Facebook from '../../assets/image/Social Icons/2.png'
import YouTube from '../../assets/image/Social Icons/3.png'
import Linkedin from '../../assets/image/Social Icons/4.png'



export default function SocialMedias() {
  return (
    <div className="brand-logo">
      <a href=''>
        <Image
          src={Instagram}
          alt="Instagram Logo"
          objectFit="contain"
          className="light-version-logo"
        />
      </a>
      <a href=''>
        <Image
          src={Facebook}
          alt="Instagram Logo"
          objectFit="contain"
          className="light-version-logo"
        />
      </a>
      <a href=''>
        <Image
          src={Linkedin}
          alt="Instagram Logo"
          objectFit="contain"
          className="light-version-logo"
        />
      </a>
      <a href=''>
        <Image
          src={YouTube}
          alt="Instagram Logo"
          objectFit="contain"
          className="light-version-logo"
        />
      </a>
    </div>
  )
}
