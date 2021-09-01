// Global Styles
import '../assets/css/bootstrap.css'
import '../assets/fonts/icon-font/css/style.css'
import '../assets/fonts/typography-font/typo.css'
import '../assets/fonts/fontawesome-5/css/all.css'
//import '../assets/css/aos.min.css'
import React, { useEffect } from "react";
import Image from 'next/image';

import AOS from 'aos';

// Components
import '../components/Navbar/Navbar.css'
import '../components/Hero/Hero.css'
import '../components/Presentation/Presentation.css'
import '../components/InstitutionalVideo/InstitutionalVideo.css';
import '../components/ContributorsList/ContributorsList.css';

function MyApp({Component, pageProps}) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
