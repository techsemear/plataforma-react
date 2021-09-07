import Image from 'next/image'

export default function PersonaTestimonial({
  subtitle,
  text,
  name,
  profession,
  imageProfile,
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
          src={imageProfile}
          alt="image-profile"
          objectFit="contain"
        />
        <div className={ dark ? "testimonial-text-white" : "testimonial-text-dark"}>
          <p>
            “<span>{subtitle}</span> {text}”
          </p>
          <h5>{name}</h5>
          <small>{profession}</small>
        </div>
      </div>
    </div>
  )
}
