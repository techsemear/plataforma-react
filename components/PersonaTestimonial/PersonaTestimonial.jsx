import Image from 'next/image'

export default function PersonaTestimonial({
  persona,
  dark = false,
}) {
  return (
    <div
      className="col-lg-4 col-md-6 col-sm-11 col-xs-12"
      data-aos="fade-right"
      data-aos-delay={500}
      data-aos-duration={1000}
    >
      <div className="content h-100 text-center">
        <Image
          src={persona.imageProfile}
          alt="image-profile"
          objectFit="contain"
        />
          <p>
            “<span>{persona.subtitle}</span> {persona.text}”
          </p>
          <Heading level="h5" ftColor={dark ? 'primary' : 'default'}>{persona.name}</Heading>
          <small>{persona.profession}</small>
      </div>
    </div>
  )
}
