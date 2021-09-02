import {useState, Fragment} from 'react'

export default function Navbar() {
  const [isLogged, setIsLogged] = useState(false)

  const handleLogout = (event) => {
    event.preventDefault()

    setIsLogged(false)
  }

  const handleLogin = (event) => {
    event.preventDefault()

    setIsLogged(true)
  }

  return (
    <header className="site-header site-header--menu-right landing-1-menu site-header--absolute site-header--sticky">
      <div className="container-fluid">
        <nav className="navbar site-navbar">
          {/* Brand Logo*/}
          <div className="brand-logo">
            <a href="#">
              {/* light version logo (logo must be black)*/}
              <img
                src="image/logo/logo-black.png"
                alt=""
                className="light-version-logo"
              />
              {/* Dark version logo (logo must be White)*/}
              <img
                src="image/logo/logo-white.png"
                alt=""
                className="dark-version-logo"
              />
            </a>
          </div>
          <div className="menu-block-wrapper">
            <div className="menu-overlay" />
            <nav className="menu-block" id="append-menu-header">
              <div className="mobile-menu-head">
                <div className="go-back">
                  <i className="fa fa-angle-left" />
                </div>
                <div className="current-menu-title" />
                <div className="mobile-menu-close">×</div>
              </div>
              <ul className="site-menu-main">
                {!isLogged ? (
                  <Fragment>
                    <li className="nav-item nav-item-has-children has-megamenu">
                      <a href="#" className="nav-link-item drop-trigger">
                        Landings <i className="fas fa-angle-down" />
                      </a>
                      <div
                        className="sub-menu megamenu  megadropdown-center  d-lg-flex align-items-center"
                        id="submenu-100"
                      >
                        <div className="col-lg-4 d-none d-lg-block">
                          <div className="mega-menu-image">
                            <img
                              className="w-100"
                              src="./image/landing-2/people-3.png"
                              alt="image"
                            />
                          </div>
                        </div>
                        <ul className="col-lg-8 col-12 row-lg list-unstyled py-lg-7">
                          <li className="col-lg-3">
                            <div className="single-dropdown-block">
                              <a
                                href="index.html"
                                className="mega-drop-menu-item sub-menu--item"
                              >
                                Saas Service
                              </a>
                              <a
                                href="index-2.html"
                                className="mega-drop-menu-item sub-menu--item"
                              >
                                Job Directory
                              </a>
                              <a
                                href="index-3.html"
                                className="mega-drop-menu-item sub-menu--item"
                              >
                                Startup Agency
                              </a>
                              <a
                                href="index-4.html"
                                className="mega-drop-menu-item sub-menu--item"
                              >
                                Industry
                              </a>
                              <a
                                href="index-5.html"
                                className="mega-drop-menu-item sub-menu--item"
                              >
                                Furniture Shop
                              </a>
                            </div>
                          </li>
                          <li className="col-lg-3">
                            <div className="single-dropdown-block">
                              <a
                                href="index-6.html"
                                className="mega-drop-menu-item sub-menu--item"
                              >
                                Software
                              </a>
                              <a
                                href="index-7.html"
                                className="mega-drop-menu-item sub-menu--item"
                              >
                                Real Estate
                              </a>
                              <a
                                href="index-8.html"
                                className="mega-drop-menu-item sub-menu--item"
                              >
                                Finance Service
                              </a>
                              <a
                                href="index-9.html"
                                className="mega-drop-menu-item sub-menu--item"
                              >
                                Mental Healt=""h
                              </a>
                              <a
                                href="index-10.html"
                                className="mega-drop-menu-item sub-menu--item"
                              >
                                Saas Applications
                              </a>
                            </div>
                          </li>
                          <li className="col-lg-3">
                            <div className="single-dropdown-block">
                              <a
                                href="index-11.html"
                                className="mega-drop-menu-item sub-menu--item"
                              >
                                Software 2.0
                              </a>
                              <a
                                href="index-12.html"
                                className="mega-drop-menu-item sub-menu--item"
                              >
                                Course
                              </a>
                              <a
                                href="index-13.html"
                                className="mega-drop-menu-item sub-menu--item"
                              >
                                App
                              </a>
                              <a
                                href="index-14.html"
                                className="mega-drop-menu-item sub-menu--item"
                              >
                                Saas Subscription
                              </a>
                              <a
                                href="index-15.html"
                                className="mega-drop-menu-item sub-menu--item"
                              >
                                Digital Service
                              </a>
                            </div>
                          </li>
                          <li className="col-lg-3">
                            <div className="single-dropdown-block">
                              <a
                                href="index-16.html"
                                className="mega-drop-menu-item sub-menu--item"
                              >
                                Mobile App
                              </a>
                              <a
                                href="index-17.html"
                                className="mega-drop-menu-item sub-menu--item"
                              >
                                Desktop App
                              </a>
                              <a
                                href="index-18.html"
                                className="mega-drop-menu-item sub-menu--item"
                              >
                                Web Applications
                              </a>
                              <a
                                href="index-19.html"
                                className="mega-drop-menu-item sub-menu--item"
                              >
                                eBook
                              </a>
                              <a
                                href="index-20.html"
                                className="mega-drop-menu-item sub-menu--item"
                              >
                                Social App
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item nav-item-has-children">
                      <a href="#" className="nav-link-item drop-trigger">
                        Pages <i className="fas fa-angle-down" />
                      </a>
                      <ul className="sub-menu" id="submenu-9">
                        <li className="sub-menu--item">
                          <a href="about-us.html">About Us</a>
                        </li>
                        <li className="sub-menu--item nav-item-has-children">
                          <a
                            href="#"
                            data-menu-get="h3"
                            className="drop-trigger"
                          >
                            Contact Us
                            <i className="fas fa-angle-down" />
                          </a>
                          <ul className="sub-menu" id="submenu-101">
                            <li className="sub-menu--item">
                              <a href="contact-1.html">Contact 01</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="contact-2.html">Contact 02</a>
                            </li>
                          </ul>
                        </li>
                        <li className="sub-menu--item nav-item-has-children">
                          <a
                            href="#"
                            data-menu-get="h3"
                            className="drop-trigger"
                          >
                            Blog
                            <i className="fas fa-angle-down" />
                          </a>
                          <ul className="sub-menu" id="submenu-10">
                            <li className="sub-menu--item">
                              <a href="blog-category.html">Blog Category</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="blog-regular.html">Blog Regular</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="blog-details.html">Blog Details</a>
                            </li>
                          </ul>
                        </li>
                        <li className="sub-menu--item nav-item-has-children">
                          <a
                            href="#"
                            data-menu-get="h3"
                            className="drop-trigger"
                          >
                            Portfolios
                            <i className="fas fa-angle-down" />
                          </a>
                          <ul className="sub-menu" id="submenu-13">
                            <li className="sub-menu--item">
                              <a href="portfolio-1.html">Portfolio Grid</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="portfolio-2.html">Portfolio Metro</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="portfolio-3.html">Portfolio Minimal</a>
                            </li>
                          </ul>
                        </li>
                        <li className="sub-menu--item nav-item-has-children">
                          <a
                            href="#"
                            data-menu-get="h3"
                            className="drop-trigger"
                          >
                            Portfolio Details
                            <i className="fas fa-angle-down" />
                          </a>
                          <ul className="sub-menu" id="submenu-130">
                            <li className="sub-menu--item">
                              <a href="portfolio-details-1.html">
                                Portfolio Details 01
                              </a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="portfolio-details-2.html">
                                Portfolio Details 02
                              </a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="portfolio-details-3.html">
                                Portfolio Details 03
                              </a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="portfolio-details-4.html">
                                Portfolio Details 04
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="sub-menu--item nav-item-has-children">
                          <a
                            href="#"
                            data-menu-get="h3"
                            className="drop-trigger"
                          >
                            Services
                            <i className="fas fa-angle-down" />
                          </a>
                          <ul className="sub-menu" id="submenu-11">
                            <li className="sub-menu--item">
                              <a href="service-1.html">Service</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="service-details.html">Service Details</a>
                            </li>
                          </ul>
                        </li>
                        <li className="sub-menu--item nav-item-has-children">
                          <a
                            href="#"
                            data-menu-get="h3"
                            className="drop-trigger"
                          >
                            Career
                            <i className="fas fa-angle-down" />
                          </a>
                          <ul className="sub-menu" id="submenu-111">
                            <li className="sub-menu--item">
                              <a href="career.html">Career</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="career-details.html">Career Details</a>
                            </li>
                          </ul>
                        </li>
                        <li className="sub-menu--item nav-item-has-children">
                          <a
                            href="#"
                            data-menu-get="h3"
                            className="drop-trigger"
                          >
                            Testimonials
                            <i className="fas fa-angle-down" />
                          </a>
                          <ul className="sub-menu" id="submenu-112">
                            <li className="sub-menu--item">
                              <a href="testimonial-1.html">Testimonial 01</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="testimonial-2.html">Testimonial 02</a>
                            </li>
                          </ul>
                        </li>
                        <li className="sub-menu--item nav-item-has-children">
                          <a
                            href="#"
                            data-menu-get="h3"
                            className="drop-trigger"
                          >
                            Pricing
                            <i className="fas fa-angle-down" />
                          </a>
                          <ul className="sub-menu" id="submenu-12">
                            <li className="sub-menu--item">
                              <a href="pricing-1.html">Pricing 01</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="pricing-2.html">Pricing 02</a>
                            </li>
                          </ul>
                        </li>
                        <li className="sub-menu--item nav-item-has-children">
                          <a
                            href="#"
                            data-menu-get="h3"
                            className="drop-trigger"
                          >
                            Account
                            <i className="fas fa-angle-down" />
                          </a>
                          <ul className="sub-menu" id="submenu-14">
                            <li className="sub-menu--item">
                              <a href="sign-in-1.html">Sign In 01</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="sign-in-2.html">Sign In 02</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="sign-in-3.html">Sign In 03</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="sign-up-1.html">Sig Up 01</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="sign-up-2.html">Sign Up 02</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="sign-up-3.html">Sig Up 03</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="reset-pass-1.html">Reset Password 01</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="reset-pass-2.html">Reset Password 02</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="reset-pass-3.html">Reset Password 03</a>
                            </li>
                          </ul>
                        </li>
                        <li className="sub-menu--item nav-item-has-children">
                          <a
                            href="#"
                            data-menu-get="h3"
                            className="drop-trigger"
                          >
                            Utility
                            <i className="fas fa-angle-down" />
                          </a>
                          <ul className="sub-menu" id="submenu-15">
                            <li className="sub-menu--item">
                              <a href="faq.html">FAQ</a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="terms-conditions.html">
                                Terms &amp; Conditions
                              </a>
                            </li>
                            <li className="sub-menu--item">
                              <a href="404.html">404 Error</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="blog-regular.html" className="nav-link-item">
                        Blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://finestdevs.com/product-support/"
                        className="nav-link-item"
                      >
                        Support
                      </a>
                    </li>

                    <li onClick={handleLogin} className="nav-item">
                      <a
                        href="https://finestdevs.com/product-support/"
                        className="nav-link-item"
                      >
                        Login
                      </a>
                    </li>
                  </Fragment>
                ) : (
                  <Fragment>
                    <li className="nav-item">
                      <a
                        href="https://finestdevs.com/product-support/"
                        className="nav-link-item"
                      >
                        Bem Vindo Vinna
                      </a>
                    </li>

                    <li onClick={handleLogout} className="nav-item">
                      <a
                        href="https://finestdevs.com/product-support/"
                        className="nav-link-item"
                      >
                        Logout
                      </a>
                    </li>
                  </Fragment>
                )}
              </ul>
            </nav>
          </div>
          <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
            <a
              target="_blank"
              className="btn btn log-in-btn btn-style-02 focus-reset"
              href="https://finestdevs.com/shade/"
            >
              Get started
            </a>
          </div>
          {/* mobile menu trigger */}
          <div className="mobile-menu-trigger">
            <span />
          </div>
          {/*/.Mobile Menu Hamburger Ends*/}
        </nav>
      </div>
    </header>
  )
}
