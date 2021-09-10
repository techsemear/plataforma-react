import React, {useEffect, Component} from 'react'
import Image from 'next/image'
import Script from "next/script";

// Global Styles
import '../assets/css/bootstrap.css'
import '../assets/css/isemear.css'

// Global Font Styles
import '../assets/fonts/Caveat/index.css'
import '../assets/fonts/Poppins/style.css'
import '../assets/fonts/fontawesome-5/css/all.css'
import '../assets/fonts/icon-font/css/style.css'
import '../assets/fonts/typography-font/typo.css'
//import '../assets/css/aos.min.css'

// Components
import '../components/LeadForm/LeadForm.css'
import '../components/Heading/Heading.css'
import '../components/ItemsSection/ItemsSection.css'
import '../components/PersonaTestimonial/PersonaTestimonial.css'
import '../components/Section/Section.css'
import '../components/StudentJourney/StudentJourney.css'
import '../components/Video/Video.css'
import '../components/Underline/Underline.css'

// Containers
import '../containers/About/About.css'
import '../containers/Hero/Hero.css'
import '../containers/MentorArea/MentorArea.css'
import '../containers/Navbar/Navbar.css'
import '../containers/Partners/Partners.css'
import '../containers/Presentation/Presentation.css'
import '../containers/StudentArea/StudentArea.css'
import '../containers/Subscribe/Subscribe.css'
import '../containers/Testimonial/Testimonial.css'




function MyApp({Component, pageProps}) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=284396285`}
      />

      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-284396285');
        `}
      </Script>

      <Component {...pageProps} />
  </>
);
}

export default MyApp


