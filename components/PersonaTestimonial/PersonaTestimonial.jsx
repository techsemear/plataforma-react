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
        <div
          className={dark ? 'testimonial-text-white' : 'testimonial-text-dark'}
        >
          <p>
            “<span>{persona.subtitle}</span> {persona.text}”
          </p>
          <h5>{persona.name}</h5>
          <small>{persona.profession}</small>
        </div>
      </div>
    </div>
  )
}
