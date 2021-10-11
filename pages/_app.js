import React, {useEffect, Component} from 'react'
import Script from 'next/script'
//import AOS from 'aos'


// Global Styles
import '../assets/css/bootstrap.css'
import '../assets/css/isemear.css'
//import '../assets/css/aos.min.css'

// Global Font Styles
import '../assets/fonts/Caveat/index.css'
import '../assets/fonts/Poppins/style.css'
import '../assets/fonts/fontawesome-5/css/all.css'
import '../assets/fonts/icon-font/css/style.css'
import '../assets/fonts/typography-font/typo.css'

// Components
import '../components/LeadForm/LeadForm.css'
import '../components/Heading/Heading.css'
import '../components/ItemsSection/ItemsSection.css'
import '../components/PersonaTestimonial/PersonaTestimonial.css'
import '../components/Section/Section.css'
import '../components/StudentJourney/StudentJourney.css'
import '../components/Video/Video.css'
import '../components/Card/Card.css'
import '../components/Logo/Logo.css'
import '../components/Underline/Underline.css'
import '../components/Button/Button.css'
import '../components/SlideShow/SlideShow.css'
import '../components/StepProgressBar/StepProgressBar.css'
import '../components/MultiStepForm/MultiStepForm.css'

// Containers
// Home
import '../containers/About/About.css'
import '../containers/Hero/Hero.css'
import '../containers/MentorArea/MentorArea.css'
import '../components/Navbar/Navbar.css'
import '../containers/Partners/Partners.css'
import '../containers/Presentation/Presentation.css'
import '../containers/StudentArea/StudentArea.css'
import '../containers/Subscribe/Subscribe.css'
import '../containers/Testimonial/Testimonial.css'
import '../containers/LoginPage/LoginPage.css'
import '../containers/SignUpPage/SignUpPage.css'

//Login
//import '../containers/LoginPage/LoginPage.css'

//Onboarding
import '../containers/IntroOnboarding/IntroOnboarding.css'
import '../containers/Challenges/Challenges.css'
import '../containers/MaslowPoints/MaslowPoints.css'
import '../containers/StepsMentoring/StepsMentoring.css'
import '../containers/GetStarted/GetStarted.css'


function MyApp({Component, pageProps}) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-LLXGD8R3Z3`}
      />
      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LLXGD8R3Z3');
        `}
      </Script>
      <Script>
        {`(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:2575267,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </Script>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
