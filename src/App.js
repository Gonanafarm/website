import logo from "./logo.svg";
import TeamCard from "./components/team-card";
import About from "./components/about";
import Header from "./components/header";
import YouTube from "react-youtube";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

function App() {
  const opts = {
    // width:"100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className="nk-wrap">
      <Header />
      <main className="nk-pages">
        <div
          style={{ margin: "auto", borderRadius: 10, overflow: "hidden" }}
          className="col-11 col-md-5 "
        >
          <LiteYouTubeEmbed id="nLKJfBTq5gg" title="About Gonana" />
        </div>

        <About />

        <section className="section bg-light section-document" id="documents">
          <div className="container">
            <div className="section-head text-center wide-auto">
              <h2
                className="title animated"
                data-animate="fadeInUp"
                data-delay=".1"
              >
                Documentation
              </h2>
            </div>

            <div className="nk-block nk-block-document">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div
                    className="card card-lg animated"
                    data-animate="fadeInUp"
                    data-delay=".3"
                  >
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <div className="nk-block-img px-4 pb-4 pb-md-0">
                          <img src="/images/gonana/app.png" alt="doc" />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="nk-block-text">
                          <h4 className="title title-md">
                            Read the documentation
                          </h4>
                          <p>
                            Gonana is a well structured DApp that gives the
                            farmer access to a wallet on signup. The default
                            wallet is deployed on the Moonbeam protocol. The
                            wallet helps the farmer to have full access and
                            control of the marketplace where they can list their
                            products for the entire Gonana ecosystem. The
                            marketplace gives farmers a complete social media
                            experience where they can chat with customers, other
                            farmers and possible investors that will like to
                            collaborate with them on production or other future
                            business engagements. Also this gives the farmers a
                            multimedia option to upload images of their products
                            and under the images, interested clients can comment
                            on the individual products the farmers uploaded.
                          </p>
                          <p>
                            Gona is an integral component of the marketplace and
                            the DEX, which contributes to the expansion and
                            efficiency of our ecosystem. Farmers have the option
                            of receiving payment in Gona, participating in
                            staking, lending, borrowing, and engaging in other
                            Defi-related activities. The total supply of Gona
                            tokens is permanently capped at 1 billion. This
                            means that no minting will be possible through the
                            smart contract, and the total supply will remain
                            constant. Therefore, token burning won't be
                            necessary in the future.
                          </p>
                          <a href="#" className="btn btn-primary">Read More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-roadmap bg-white" id="roadmap">
          <div className="container">
            {/* Section Head @s */}
            <div className="section-head text-center wide-auto">
              <h6
                className="title title-xs title-light animated"
                data-animate="fadeInUp"
                data-delay=".1"
              >
                The roadmap to success
              </h6>
              <h2
                className="title title-lg title-dark animated"
                data-animate="fadeInUp"
                data-delay=".2"
              >
                What are our major goals?
              </h2>
              <p className="animated" data-animate="fadeInUp" data-delay=".3">
                Our market strategy will prioritise blockchain technology
                rollout to utilities based on their transformation. View our
                roadmap to see how exactly we are making that happen.{" "}
              </p>
            </div>
            {/* .section-head @e */}
            {/* Block @s */}
            <div className="nk-block nk-block-roadmap">
              <div className="row justify-content-center">
                <div className="col-xl-10">
                  <div className="roadmap-wrap">
                    <div className="roadmap-line" />
                    <div
                      className="roadmap animated"
                      data-animate="fadeInUp"
                      data-delay=".4"
                    >
                      <div className="roadmap-year">2022</div>
                    </div>
                    <div
                      className="roadmap roadmap-right roadmap-finished animated"
                      data-animate="fadeInUp"
                      data-delay=".5"
                    >
                      <div className="roadmap-step">
                        <div className="roadmap-head">
                          <span className="roadmap-time">Q2 2022</span>
                          <span className="roadmap-title">
                            Concept development
                          </span>
                        </div>

                        <ul className="list list-dot">
                          <li>
                            Concept development, website and other documents for
                            the Gonana project
                          </li>
                          <li>Core team formation and community building</li>
                          <li>Redesign of website goes live</li>
                          <li>DAO and other concept development</li>
                          <li>
                            Marketplace/DEX Development and deployment on
                            moonbeam
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      className="roadmap roadmap-left roadmap-finished animated"
                      data-animate="fadeInUp"
                      data-delay=".6"
                    >
                      <div className="roadmap-step">
                        <div className="roadmap-head">
                          <span className="roadmap-time">Q3 2022</span>
                          <span className="roadmap-title">
                            Core Development
                          </span>
                        </div>
                        <ul className="list list-dot">
                          <li>
                            Development of Swap, stake, farm and other pools
                          </li>
                          <li>
                            Bridge with Acala, Near, Evmos, Solana, Celo,
                            Algorand, and XDC
                          </li>
                          <li>
                            Development and deployment of Lending, saving and
                            borrowing functions on the DEX
                          </li>
                          <li>Auditing of all written codes</li>
                          <li>Listing of Gona on exchanges/DEXs</li>
                        </ul>
                      </div>
                    </div>
                    <div
                      className="roadmap animated"
                      data-animate="fadeInUp"
                      data-delay=".4"
                    >
                      <div className="roadmap-year">2022</div>
                    </div>
                    <div
                      className="roadmap roadmap-right animated"
                      data-animate="fadeInUp"
                      data-delay=".5"
                    >
                      <div className="roadmap-step">
                        <div className="roadmap-head">
                          <span className="roadmap-time">Q4 2022</span>
                          <span className="roadmap-title">
                            Collaborations Begin
                          </span>
                        </div>
                        <ul className="list list-dot">
                          <li>
                            {" "}
                            Collaboration and partnerships with Blockchain and
                            non-blockchain actors
                          </li>
                          <li>Onboarding farmers and other users</li>
                          <li>
                            Partnership with farmers associations and
                            cooperative
                          </li>
                          <li>
                            Onboarding of supply chain (logistics companies)
                            partners
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      className="roadmap roadmap-left animated"
                      data-animate="fadeInUp"
                      data-delay=".6"
                    >
                      <div className="roadmap-step">
                        <div className="roadmap-head">
                          <span className="roadmap-time">Q1 2023</span>
                          {/*<span className="roadmap-title">Beta App User Testing</span>*/}
                        </div>
                        <ul className="list list-dot">
                          <li>
                            Community involvement programs and DAO
                            implementation
                          </li>
                          <li>
                            Global partnership and collaborations with other
                            farmers associations
                          </li>
                          <li>
                            More partnerships with supply chain companies and
                            other associations
                          </li>
                          <li>
                            Registrations in Europe, UAE and other African
                            countries
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* .col */}
              </div>
            </div>
            {/* Block @e */}
          </div>
        </section>
        {/* // */}
        <section className="section section-team bg-light" id="team">
          <div className="container">
            {/* Block @s */}
            <div className="nk-block nk-block-team-featured team-featured">
              <div className="row align-items-center">
                <div className="col-lg-5 mb-4 mb-lg-0">
                  <div
                    className="team-featured-photo tc-light animated"
                    data-animate="fadeInUp"
                    data-delay=".1"
                  >
                    <img src="/images/core/boss.jpeg" alt="team" />

                    <h5 className="team-featured-info">
                      Stephen Sunday<span>Chief Executive Officer</span>
                    </h5>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="team-featured-cont">
                    <h6
                      className="title title-xs title-light animated"
                      data-animate="fadeInUp"
                      data-delay=".2"
                    >
                      behind the idea
                    </h6>
                    <h2
                      className="title title-lg title-dark animated"
                      data-animate="fadeInUp"
                      data-delay=".3"
                    >
                      The Founder
                    </h2>
                    <p
                      className="animated"
                      data-animate="fadeInUp"
                      data-delay=".4"
                    >
                      He is a blockchain enthusiast who is running a tech
                      consulting firm (Kusuconsult), a community builder, a
                      content developer, and a blockchain developer with some
                      knowledge of JavaScript and React. He works with reputable
                      blockchain projects like Algorand and EVM. His love for
                      educating people about blockchain technology and its
                      applications led him to set up various blockchain
                      communities across Nigeria.
                    </p>
                    <p
                      className="animated"
                      data-animate="fadeInUp"
                      data-delay=".4"
                    >
                      He has been working with startups/hubs for years now and
                      he co-founded Univote (a blockchain based voting
                      application that hosted the first blockchain elections in
                      Africa at the University of Jos) and also Jaysources, a
                      DApp deployed on the Algorand.
                    </p>
                    <p>Social media handle</p>
                    <ul className="team-soc d-flex">
                      <li>
                        <a
                          href={
                            "https://www.linkedin.com/in/stephensundaykusu/"
                          }
                        >
                          <em
                            className="fab fa-linkedin-in"
                            style={{ fontSize: 24 }}
                          />
                        </a>
                      </li>
                      <li>
                        <a href={"https://twitter.com/steviekusu"}>
                          <em
                            className="fab fa-twitter"
                            style={{ fontSize: 24, marginLeft: 24 }}
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* .row */}
            </div>
            {/* Block @e */}
          </div>
        </section>
        <section
          className="section section-team bg-light pt-0"
          id="team-members"
        >
          <div className="container">
            <div className="section-head text-center wide-auto">
              <h2
                className="title title-lg title-dark animated"
                data-animate="fadeInUp"
                data-delay=".1"
              >
                Core Team
              </h2>
            </div>

            <div className="nk-block nk-block-team-list">
              <div className="row">
                <div className="col-12 col-md-4">
                  <TeamCard
                    image="/images/core/eno.jpg"
                    description={`Eno Peters is a product manager, copywriter, and content creator with over 5 years of experience, working with tech companies and bringing quality solutions to help startups move from the ground up.`}
                    position={"Co-Founder"}
                    name="Eno Peters"
                    twitter="https://twitter.com/enogift6?t=HtzmyGRgIe5g8Cufcw-aqw&s=09"
                    linkedln={
                      "https://www.linkedin.com/in/eno-peters-1104b7153"
                    }
                  />
                </div>

                {/* .col */}

                <div className=" col-12 col-md-4">
                  <TeamCard
                    image="/images/core/kizito-image.jpg"
                    description={` Kizito Horlong is an optimistic and passionate
                  software developer with over 4 years of experience
                  building effective tech solutions for the web, backend
                  systems, blockchain, and data science.`}
                    position={"Co-founder"}
                    name="Kizito Horlong"
                    twitter={
                      "https://twitter.com/KizitoNaanma?t=Nga16puLyPfBDwa-ehNX0g&s=09"
                    }
                    linkedln={"https://www.linkedin.com/in/kizito-horlong"}
                  />
                </div>
                {/* .col */}

                <div className="col-12 col-md-4 ">
                  <TeamCard
                    image="/images/core/dusu.JPG"
                    description={`He is  a legal practitioner with 10 years experience in legal practice, a fintech law enthusiast with special interest in the Blockchain technology.`}
                    position={"Co-founder"}
                    name="Dusu Thomas Shut"
                    twitter={"#"}
                    linkedln={"#"}
                  />
                </div>

                <div className="col-12 col-md-4 ">
                  <TeamCard
                    image="/images/core/joshua.jpg"
                    description={`Joshua Nwafor is a young, passionate developer and trainer at KusuConsult focused on building outstanding tech solutions using the most efficient and effective methods and tools possible.`}
                    position={"Chief Technical Officer"}
                    name=" Joshua Nwafor"
                    twitter={"https://twitter.com/10xJoshua"}
                    linkedln={
                      "https://www.linkedin.com/in/joshua-nwafor-62189b156/"
                    }
                  />
                </div>
              </div>
            </div>

            {/* Block @r */}
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="nk-footer bg-theme-grad">
        <section
          className="section no-pdy overflow-hidden section-contact bg-transparent"
          id="contact"
        >
          <div className="container">
            {/* Block @s */}
            <div
              className="nk-block block-contact animated"
              data-animate="fadeInUp"
              data-delay=".9"
            >
              <div className="row justify-content-center g-0">
                <div className="col-lg-6">
                  <div className="contact-wrap split split-left split-lg-left bg-white">
                    <h5 className="title title-md">Contact Us</h5>
                    <form
                      className="nk-form-submit"
                      action="form/contact.php"
                      method="post"
                    >
                      <div className="field-item">
                        <input
                          name="contact-name"
                          type="text"
                          className="input-line required"
                        />
                        <label className="field-label field-label-line">
                          Your Name
                        </label>
                      </div>
                      <div className="field-item">
                        <input
                          name="contact-email"
                          type="email"
                          className="input-line required email"
                        />
                        <label className="field-label field-label-line">
                          Your Email
                        </label>
                      </div>
                      <div className="field-item">
                        <textarea
                          name="contact-message"
                          className="input-line input-textarea required"
                          defaultValue={""}
                        />
                        <label className="field-label field-label-line">
                          Your Message
                        </label>
                      </div>
                      <input
                        type="text"
                        className="d-none"
                        name="form-anti-honeypot"
                        defaultValue
                      />
                      <div className="row">
                        <div className="col-sm-4">
                          <button type="submit" className="btn btn-grad">
                            Submit
                          </button>
                        </div>
                        <div className="col-sm-8">
                          <div className="form-results" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {/* .col */}
                <div className="col-lg-4">
                  <div className="contact-wrap split split-right split-lg-right bg-genitian bg-theme tc-light">
                    <div className="d-flex flex-column justify-content-between h-100">
                      <ul className="contact-list">
                        <li>
                          <em
                            className="contact-icon fas fa-building"
                            style={{ color: "#045D29" }}
                          />
                          <div className="contact-text">
                            <span>www.gonana.farm </span>
                          </div>
                        </li>
                        <li>
                          <em
                            className="contact-icon fab fa-twitter"
                            style={{ color: "#045D29" }}
                          />
                          <div className="contact-text">
                            <a href={"https://twitter.com/Gonanafarm"}>
                              <span>Gonanafarm</span>
                            </a>
                          </div>
                        </li>
                        <li>
                          <em
                            className="contact-icon fas fa-envelope"
                            style={{ color: "#045D29" }}
                          />
                          <div className="contact-text">
                            <a href={"contact@gonana.farm"}>
                              <span>contact@gonana.farm</span>
                            </a>
                          </div>
                        </li>
                        <li>
                          <em
                            className="contact-icon fas fa-paper-plane"
                            style={{ color: "#045D29" }}
                          />
                          <div className="contact-text">
                            <a href="https://t.me/Gonanafarm">
                              {" "}
                              <span>Join us on Telegram</span>
                            </a>
                          </div>
                        </li>
                      </ul>
                      <div className="contact-social">
                        <h6>Be a part of our community!</h6>
                      </div>
                    </div>
                  </div>
                </div>
                {/* .col */}
              </div>
              {/* .row */}
            </div>
            {/* .block @e */}
          </div>
          <div className="nk-ovm ovm-top ovm-h-60 bg-light" />
          {/* .nk-ovm */}
        </section>
        {/* // */}
        <section className="section section-footer tc-light bg-transparent">
          <div className="container">
            {/* Block @s */}
            <div className="nk-block block-footer mgb-m30">
              <div className="row">
                <div className="col-lg-2 col-sm-4">
                  <div
                    className="wgs wgs-menu animated"
                    data-animate="fadeInUp"
                    data-delay=".2"
                  >
                    <h6 className="wgs-title">Company</h6>
                    <div className="wgs-body">
                      <ul className="wgs-links">
                        <li>
                          <a href="#">About Us</a>
                        </li>
                        <li>
                          <a href="#">Meet Our Team</a>
                        </li>
                        <li>
                          <a href="#">Advisors</a>
                        </li>
                        <li>
                          <a href="#">Contact Us</a>
                        </li>
                        <li>
                          <a href="#">Insights</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* .col */}
                <div className="col-lg-2 col-sm-4">
                  <div
                    className="wgs wgs-menu animated"
                    data-animate="fadeInUp"
                    data-delay=".3"
                  >
                    <h6 className="wgs-title">Legal</h6>
                    <div className="wgs-body">
                      <ul className="wgs-links">
                        <li>
                          <a href="#">Terms &amp; Conditions</a>
                        </li>
                        <li>
                          <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="#">Terms of Sales</a>
                        </li>
                        <li>
                          <a href="#">Whitepaper</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* .col */}
                <div className="col-lg-2 col-sm-4">
                  <div
                    className="wgs wgs-menu animated"
                    data-animate="fadeInUp"
                    data-delay=".4"
                  >
                    <h6 className="wgs-title">Quick Links</h6>
                    <div className="wgs-body">
                      <ul className="wgs-links">
                        <li>
                          <a href="#">Ecosystems</a>
                        </li>
                        <li>
                          <a href="#">Tokens</a>
                        </li>
                        <li>
                          <a href="#">Roadmaps</a>
                        </li>
                        <li>
                          <a href="#">Faqs</a>
                        </li>
                        <li>
                          <a href="#">Login</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* .col */}
                <div className="col-lg-6 order-lg-first">
                  <div
                    className="wgs wgs-text animated"
                    data-animate="fadeInUp"
                    data-delay=".1"
                  >
                    <div className="wgs-body">
                      <a href="./" className="wgs-logo">
                        <img
                          src="/assets/logos/logo.png"
                          srcSet="/assets/logos/logo.png 2x"
                          alt="logo"
                        />
                      </a>
                      <p>Copyright © 2022 Gonana </p>
                    </div>
                  </div>
                </div>
                {/* .col */}
              </div>
              {/* .row */}
            </div>
            {/* .block @e */}
          </div>
        </section>
        <div className="nk-ovm shape-b" />
      </footer>
    </div>
  );
}

export default App;
