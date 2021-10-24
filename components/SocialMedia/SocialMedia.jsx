import Image from 'next/image'

import styles from './SocialMedia.module.css'


import Instagram from '../../assets/image/Social Icons/1.png'
import Facebook from '../../assets/image/Social Icons/2.png'
import YouTube from '../../assets/image/Social Icons/3.png'
import Linkedin from '../../assets/image/Social Icons/4.png'



export default function SocialMedia() {
  return (
    <div className=" ">
        <Image
          src={Instagram}
          alt="Instagram Logo"
          className= {`${styles.socialMediaLogo}`}
        />

        <Image
          src={Facebook}
          alt="Facebook Logo"
          className=  {`${styles.socialMediaLogo}`}
        />
        
        <Image
          src={Linkedin}
          alt="Linkedin Logo"
          className= {`${styles.socialMediaLogo}`}
        />

        <Image
          src={YouTube}
          alt="Youtube Logo"
          className= {`${styles.socialMediaLogo}`}
          />
    </div>
  )
}
