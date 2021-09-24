import Image from 'next/image'

import {Heading} from '../Heading'
const heightLogo = 55
const widthLogo = heightLogo * 2

export default function LogoImage({
  logo,
  height = heightLogo,
  width = widthLogo,
  level,
  children,
  hover = false,
}) {
  const classHover = 'resize-image'
  const classBrand = 'single-brand'
  const classLogo = logo.class ? logo.class : classBrand
  return (
    <div
      className={hover ? [classLogo, classHover].join(' ') : classLogo}
      data-aos="fade-right"
      data-aos-duration={500}
      data-aos-once="true"
    >
      <Heading level={level}>
        <a
          className="reference"
          href={logo.link}
          target= {logo.samePage ? logo.samePage : "_blank"}
          rel="noreferrer"
        >
          <Image
            src={logo.image}
            alt="logo"
            objectFit="contain"
            width={width}
            height={height}
          />
        </a>
        {children}
      </Heading>
    </div>
  )
}
