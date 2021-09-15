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
  resize = false,
}) {
  return (
    <div
      className={resize ? "single-brand resize-image" : "single-brand"}
      data-aos="fade-right"
      data-aos-duration={500}
      data-aos-once="true"
    >
      <Heading level={level}>
        <a href={logo.link} target="_blank">
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
