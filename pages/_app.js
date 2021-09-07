// Global Styles
import '../assets/css/bootstrap.css'
import '../assets/fonts/icon-font/css/style.css'
import '../assets/fonts/typography-font/typo.css'
import '../assets/fonts/fontawesome-5/css/all.css'
import '../assets/fonts/Caveat/index.css'
import '../assets/fonts/Poppins/style.css'

//import '../assets/css/aos.min.css'
import React, {useEffect} from 'react'
import Image from 'next/image'

import AOS from 'aos'

// Components
import '../components/Navbar/Navbar.css'
import '../components/Hero/Hero.css'
import '../components/Presentation/Presentation.css'
import '../components/Institutional/Institutional.css'
import '../components/InstitutionalVideo/InstitutionalVideo.css'
import '../components/ContributorsList/ContributorsList.css'
import '../components/MentorArea/MentorArea.css'
import '../components/StudentArea/StudentArea.css'
import '../components/StudentJourney/StudentJourney.css'
import '../components/Testimonial/Testimonial.css'
import '../components/PersonaTestimonial/PersonaTestimonial.css'
import '../components/SignUp/SignUp.css'
import '../components/Institutional/Institutional.css'

function MyApp({Component, pageProps}) {
  return <Component {...pageProps} />
}

export default MyApp
