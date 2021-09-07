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
                src="https://www.isemear.org.br/wp-content/uploads/2019/12/site200b.png"
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
                      <a href="#QuemSomos" className="nav-link-item drop-trigger">
                        Quem Somos <i className="fas fa-angle-down" />
                      </a>
                    </li>
                    <li className="nav-item nav-item-has-children">
                      <a href="#" className="nav-link-item drop-trigger">
                        Nosso Objetivo <i className="fas fa-angle-down" />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="blog-regular.html" className="nav-link-item">
                        Contato
                      </a>
                    </li>
                    <li onClick={handleLogin} className="nav-item">
                      <a
                        href="https://finestdevs.com/product-support/"
                        className="nav-link-item">
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
