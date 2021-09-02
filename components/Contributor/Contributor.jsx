import Image from 'next/image'

export default function Contributor({logo}) {
  const height = 60
  const width = 2 * height
  
  return (
    <div
      className="single-brand "
      data-aos="fade-right"
      data-aos-duration={500}
      data-aos-once="true"
    >
      <Image
        src={logo}
        alt="logo"
        objectFit="contain"
        width={width}
        height={height}
      />
    </div>
  )
}
