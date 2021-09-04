import Image from 'next/image'
//import imageProfile from '../../assets/image/landing-1/team-image.png'

export default function PersonaTestimonial({
  subtitle,
  text,
  name,
  profession,
  imageProfile,
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
        <p>
          “<span>{subtitle}</span> {text}”
        </p>
        <h5>{name}</h5>
        <small>{profession}</small>
      </div>
    </div>
  )
}
