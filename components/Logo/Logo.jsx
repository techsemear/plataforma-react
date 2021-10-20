import Image from 'next/image'

import styles from './Logo.module.css'

export default function Logo({
  children,
  logo,
  height,
  width,
  classAdd = '',
  hover = false,
  target,
}) {
  const classHover = hover ? styles.resizeImage : ''

  return (
    <div
      className={`${classHover} ${classAdd}`}
      data-aos="fade-right"
      data-aos-duration={500}
      data-aos-once="true"
    >
      <a href={logo.link} target={target} rel="noreferrer">
        <Image
          src={logo.image}
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
