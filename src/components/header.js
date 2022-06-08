import Lottie from "lottie-react";
import blockchainLottie from "../lottie/farmer.json";
export default function Header() {
  return (
    <header
      className="nk-header page-header is-transparent is-sticky is-shrink"
      id="header"
    >
      {/* Header @s */}
      <div className="header-main">
        <div className="header-container container">
          <div className="header-wrap">
            {/* Logo @s */}
            <div
              className="header-logo logo animated"
              data-animate="fadeInDown"
              data-delay=".6"
            >
              <a href="./" className="logo-link">
                <img
                  className="logo-dark"
                  src="/assets/logos/logo2.png"
                  srcSet="/assets/logos/logo2.png 2x"
                  alt="logos"
                />
                <img
                  className="logo-light"
                  src="/assets/logos/logo.png"
                  srcSet="/assets/logos/logo.png 2x"
                  alt="logo"
                />
              </a>
            </div>
            {/* Menu Toogle @s */}
            <div className="header-nav-toggle">
              <a
                href="#"
                className="navbar-toggle"
                data-menu-toggle="header-menu"
              >
                <div className="toggle-line">
                  <span />
                </div>
              </a>
            </div>
            {/* Menu @s */}
            <div
              className="header-navbar animated"
              data-animate="fadeInDown"
              data-delay=".75"
            >
              <nav className="header-menu" id="header-menu">
                <ul className="menu">
                  <li className="menu-item">
                    <a className="menu-link nav-link" href="#header">
                      Home
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="menu-link nav-link" href="#about">
                      About
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="menu-link nav-link" href="#features">
                      Features
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="menu-link nav-link" href="#tokensale">
                      Token Sale
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="menu-link nav-link" href="#roadmap">
                      Roadmap
                    </a>
                  </li>
                  {/*<li className="menu-item has-sub">*/}
                  {/*    <a className="menu-link nav-link menu-toggle" href="#">More</a>*/}
                  {/*    <ul className="menu-sub menu-drop">*/}
                  {/*        <li className="menu-item"><a className="menu-link nav-link" href="#team">Team</a></li>*/}
                  {/*        <li className="menu-item"><a className="menu-link nav-link" href="#faq">Faq</a></li>*/}
                  {/*    </ul>*/}
                  {/*</li>*/}
                  <li className="menu-item">
                    <a className="menu-link nav-link" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
                {/*<ul className="menu-btns">*/}
                {/*    <li><a href="#" data-bs-toggle="modal" data-bs-target="#login-popup" className="btn btn-md btn-auto btn-grad no-change"><span>Login</span></a></li>*/}
                {/*</ul>*/}
              </nav>
            </div>
            {/* .header-navbar @e */}
          </div>
        </div>
      </div>
      {/* .header-main @e */}
      {/* Banner @s */}
      <div className="header-banner bg-theme-grad">
        <div className="nk-banner">
          <div className="banner banner-fs banner-single banner-gap-b2">
            <div className="banner-wrap">
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-lg-5 order-lg-last">
                    <div
                      className="banner-gfx banner-gfx-re-s1 animated"
                      data-animate="fadeInUp"
                      data-delay=".9"
                    >
                      {/*<img src="/images/header/gfx-a.png" alt="header" />*/}
                      <Lottie
                        animationData={blockchainLottie}
                        loop={true}
                        autoplay={true}
                        // isStopped={this.state.isStopped}
                        // isPaused={this.state.isPaused}
                      />
                    </div>
                  </div>
                  {/* .col */}
                  <div className="col-lg-7 col-sm-10 text-center text-lg-start">
                    <div className="banner-caption cpn tc-light">
                      <div className="cpn-head">
                        <h1
                          className="title animated"
                          data-animate="fadeInUp"
                          data-delay={1}
                        >
                          Gonana Marketplace
                        </h1>
                      </div>
                      <div className="cpn-text">
                        <p
                          className="animated"
                          data-animate="fadeInUp"
                          data-delay="1.1"
                        >
                          Gonana is a unique and easy-to-use marketplace for
                          farmers worldwide, its innovative technology stack
                          enables seamless interaction for local and
                          international farmers to connect and conduct business
                          transparently by leveraging the power of Blockchain
                          technology.
                        </p>
                      </div>
                      <div className="cpn-action">
                        <div
                          className="cpn-btns animated"
                          data-animate="fadeInUp"
                          data-delay="1.2"
                        >
                          <a
                            className="btn btn-grad"
                            href="https://docs.google.com/forms/d/e/1FAIpQLSe0jlgOxR_8v7OCJcWoNqU45RXLmgwsnCRxYcnAqMvQr87U5w/viewform?usp=sf_link"
                          >
                            Join Testers
                          </a>
                        </div>
                        <ul
                          className="cpn-links animated"
                          data-animate="fadeInUp"
                          data-delay="1.3"
                        >
                          <li>
                            <a className="link" href="#">
                              <em className="link-icon far fa-lightbulb" />
                              <span>How to Buy</span>
                            </a>
                          </li>
                          <li>
                            <a className="link" href="#documents">
                              <em className="link-icon fas fa-file-alt" />
                              <span>Lite Paper</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* .col */}
                </div>
                {/* .row */}
              </div>
            </div>
          </div>
        </div>
        {/* .nk-banner */}
        <div className="nk-ovm mask-a shape-a" />
        {/* Place Particle Js */}
        <div id="particles-bg" className="particles-container particles-bg" />
      </div>
      {/* .header-banner @e */}
    </header>
  );
}
