import Image from 'next/image'

import styles from './Logo.module.css'

export default function Logo({
  children,
  logoSource,
  logoHref,
  height,
  width,
  hover = false,
  target,
}) {
  const classHover = hover ? styles.resizeImage : ''

  return (
    <div className={`${styles.logoImage} ${classHover}`}>
      <a href={logoHref} target={target} rel="noreferrer">
        <Image
          src={logoSource}
          alt="logo"
          objectFit="contain"
          width={width}
          height={height}
        />
      </a>
      {children}
    </div>
  )
}
