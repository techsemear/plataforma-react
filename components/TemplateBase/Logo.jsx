import Image from 'next/image'

import semearLogo from '../../assets/image/semear/logo-light.png'

export default function Logo({to = '#'}) {
  return (
    <div className="brand-logo">
      <a href={to}>
        <Image
          src={semearLogo}
          alt="Instituto Semear"
          objectFit="contain"
          className="light-version-logo"
        />
      </a>
    </div>
  )
}
