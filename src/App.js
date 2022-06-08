import logo from "./logo.svg";
import TeamCard from "./components/team-card";
import About from "./components/about";
import Header from "./components/header";

function App() {
  return (
    <div className="nk-wrap">
      <Header />
      <main className="nk-pages">
        <About />

        <section className="section section-problem bg-light" id="problem">
          <div className="container">
            <div className="section-head text-center wide-auto-sm">
              <h2
                className="title animated"
                data-animate="fadeInUp"
                data-delay=".1"
                style={{ color: "#015125" }}
              >
                Problem and Challenge
              </h2>
              <p className="animated" data-animate="fadeInUp" data-delay=".2">
                Farming is one of the oldest professions in human history. Since
                man can’t survive without food, Some individuals decided to take
                a profession called farming to produce food to reduce food
                shortage and rescue the situation. Gonana offers a wide range of
                solutions to tackle this problem and correct the notion of
                people about farming; also how farming can be a very good paying
                job for anyone around the world with the right solution like
                Gonana.
              </p>
            </div>
            {/* .section-head @e */}
            {/* Block @s */}
            <div className="nk-block nk-block-problems tc-light">
              <div className="row g-0 align-items-center">
                <div className="col-lg-6">
                  <div
                    className="feature boxed boxed-lg bg-theme no-mg split-lg-left split-left animated"
                    data-animate="fadeInUp"
                    data-delay=".3"
                  >
                    <h4 className="title title-md">Simple and Fast</h4>
                    <p style={{ color: "white" }}>
                      Gonana has implemented a straightforward and fast payment
                      system for settlement that is deployed on the blockchain
                      (Moonbeam protocol) with cross-chain capabilities on
                      Algorand, XDC, Evmos, Solana, Acala, Celo, and Near to
                      give the farmers an authentic blockchain experience with a
                      simple web3 design.{" "}
                    </p>
                  </div>
                </div>
                {/* .col */}
                <div className="col-lg-6">
                  <div
                    className="feature-group bg-theme-alt split-right split-lg animated"
                    data-animate="fadeInUp"
                    data-delay=".4"
                  >
                    <div className="feature boxed bg-white-10">
                      <div className="feature-text">
                        <h4 className="title title-md">Free</h4>
                        <p style={{ color: "white" }}>
                          Using the Gonana application for farmers to sell their
                          products will be completely free of any form of
                          charges. This is to help the farmers take as much
                          profit as possible as a reward for the hard work they
                          put on production. There will be no hidden charges due
                          to Gonana as a company or any other party.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="feature boxed bg-white-2">
                      <div className="feature-text">
                        <h4 className="title title-md">
                          Supply Chain (Logistics)
                        </h4>
                        <p style={{ color: "white" }}>
                          Gonana has partnered with some logistics companies to
                          make sure that every customer using the Gonana DApp
                          for agricultural purchases gets the best products from
                          these farmers. They will make sure that every farmer
                          gives products as displayed on the Marketplace to help
                          cut down any form of dishonesty or fraud in the
                          system. Also these logistics companies take full
                          responsibility for any damage or loss of produce that
                          are handled by them. The customer can be guaranteed
                          quality, safety and also on time delivery.
                        </p>
                      </div>
                    </div>
                    <div className="feature boxed bg-black-10">
                      <div className="feature-text">
                        <h4 className="title title-md">
                          Decentralized Exchange
                        </h4>
                        <p style={{ color: "white" }}>
                          We have implemented a payment system that is easy to
                          use and also an exchange that permits the farmers to
                          swap their token for another. This also means that
                          they can stake, swap, lend, and borrow while earning
                          some profit for their Defi activities. This is to help
                          the farmers have a holistic approach to Defi and Cefi.
                          Also, farmers get a multi-chain exchange where they
                          can use assets from other blockchain protocols like
                          Algorand, XDC, Evmos, Acala, Celo, Solana and Near.
                        </p>
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
        </section>

        <section className="bg-theme bg-pattern-dots" id="tokensale">
          <div className="section section-tokensale tc-light">
            <div className="container">
              {/* Section Head @s */}
              <div className="section-head text-center wide-auto">
                <h2
                  className="title animated"
                  data-animate="fadeInUp"
                  data-delay=".1"
                >
                  Gonana Tokens
                </h2>
                <p
                  className="animated"
                  data-animate="fadeInUp"
                  data-delay=".2"
                  style={{ color: "white" }}
                >
                  Gonana token (Gona) will be an integral part of the Gonana
                  marketplace to aid the growth and efficiency of the ecosystem.
                  Farmers will have the option to receive payment in Gona,
                  stake, participate in yield farming, lending and borrowing,
                  and other Defi activities. It will also be the native token of
                  the ecosystem.
                </p>
              </div>
              {/* .section-head @e */}
              {/* Block @s */}
              <div className="nk-block nk-block-token mgb-m30">
                <div className="row justify-content-center">
                  <div className="col-lg-8 text-center">
                    <div
                      className="token-info bg-theme animated"
                      data-animate="fadeInUp"
                      data-delay=".3"
                    >
                      <h4 className="title title-md mb-2 text-sm-center">
                         Token Metrics
                      </h4>
                      <table className="table table-s1 table-token">
                        <tbody>
                          <tr>
                            <td className="table-head">Token Name</td>
                            <td className="table-des">Gona</td>
                          </tr>
                          <tr>
                            <td className="table-head">Token type</td>
                            <td className="table-des">ERC20</td>
                          </tr>
                          <tr>
                            <td className="table-head">Total Token Supply</td>
                            <td className="table-des">1 Billion</td>
                          </tr>
                          <tr>
                            <td className="table-head">Hard cap</td>
                            <td className="table-des">$6,000,000</td>
                          </tr>
                          <tr>
                            <td className="table-head">Soft cap</td>
                            <td className="table-des">$4,000,000</td>
                          </tr>
                          <tr>
                            <td className="table-head">Pre Seed sale</td>
                            <td className="table-des">$700,000</td>
                          </tr>
                          <tr>
                            <td className="table-head">Seed sale</td>
                            <td className="table-des">$1,200,000</td>
                          </tr>
                          <tr>
                            <td className="table-head">Private sale</td>
                            <td className="table-des">$2,000,000</td>
                          </tr>
                          <tr>
                            <td className="table-head">
                              Initial Circulating Supply
                            </td>
                            <td className="table-des"> 400,000,000</td>
                          </tr>
                          <tr>
                            <td className="table-head">Maximum Supply</td>
                            <td className="table-des"> 1,000,000,000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-tokendes">
            <div className="container">
              {/* Block @s */}
              <div className="nk-block nk-block-alocation mgb-m30">
                <div className="row">
                  <div className="col-lg-6">
                    <div
                      className="token-alocate-item animated"
                      data-animate="fadeInUp"
                      data-delay=".1"
                    >
                      <div className="token-alocate--graph">
                        <div
                          style={{
                            fontSize: 18,
                            textAlign: "center",
                            paddingTop: 18,
                            paddingBottom: 18,
                          }}
                          className=""
                        >
                          Sales <br /> Proceeds
                        </div>
                      </div>

                      <table className="table table-s1 table-token">
                        <tbody>
                          <tr>
                            <td className="table-head">Development</td>
                            <td className="table-des">35%</td>
                          </tr>
                          <tr>
                            <td className="table-head">Marketing</td>
                            <td className="table-des">30%</td>
                          </tr>
                          <tr>
                            <td className="table-head">Exchange Listing</td>
                            <td className="table-des">12%</td>
                          </tr>
                          <tr>
                            <td className="table-head">Legal</td>
                            <td className="table-des">8%</td>
                          </tr>
                          <tr>
                            <td className="table-head">Product</td>
                            <td className="table-des">7%</td>
                          </tr>
                          <tr>
                            <td className="table-head">
                              Operation & Administration
                            </td>
                            <td className="table-des">8%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* .col */}
                  <div className="col-lg-6">
                    <div
                      className="token-alocate-item animated"
                      data-animate="fadeInUp"
                      data-delay=".2"
                    >
                      <div className="token-alocate--graph">
                        <div
                          style={{
                            fontSize: 18,
                            textAlign: "center",
                            paddingTop: 18,
                            paddingBottom: 18,
                          }}
                          className=""
                        >
                        
                          Token  <br /> Distribution
                        </div>
                      </div>

                      <div>
                        <table className="table table-s1 table-token">
                          <tbody>
                            <tr>
                              <td className="table-head">Pre-Seed</td>
                              <td className="table-des">7%</td>
                              <td className="table-des">70,000,000</td>
                            </tr>
                            <tr>
                              <td className="table-head">Seed round</td>
                              <td className="table-des">8%</td>
                              <td className="table-des">70,000,000</td>
                            </tr>
                            <tr>
                              <td className="table-head">Public</td>
                              <td className="table-des">10%</td>
                              <td className="table-des">100,000,000</td>
                            </tr>
                            <tr>
                              <td className="table-head">Marketing</td>
                              <td className="table-des">12%</td>
                              <td className="table-des">120,000,000</td>
                            </tr>
                            <tr>
                              <td className="table-head">Development</td>
                              <td className="table-des">10%</td>
                              <td className="table-des">100,000,000</td>
                            </tr>
                            <tr>
                              <td className="table-head">Rewards</td>
                              <td className="table-des">14%</td>
                              <td className="table-des">140,000,000</td>
                            </tr>
                            <tr>
                              <td className="table-head">Team</td>
                              <td className="table-des">6%</td>
                              <td className="table-des">60,000,000</td>
                            </tr>
                            <tr>
                              <td className="table-head">Partnership</td>
                              <td className="table-des">10%</td>
                              <td className="table-des">100,000,000</td>
                            </tr>
                            <tr>
                              <td className="table-head">Advisor</td>
                              <td className="table-des">2%</td>
                              <td className="table-des">2,000,000</td>
                            </tr>
                            <tr>
                              <td className="table-head">Reserve</td>
                              <td className="table-des">12%</td>
                              <td className="table-des">130,000,000</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nk-ovm ovm-bottom ovm-h-70 bg-light" />
          </div>
        </section>

        <section className="section bg-light section-document" id="documents">
          <div className="container">
            <div className="section-head text-center wide-auto">
              <h2
                className="title animated"
                data-animate="fadeInUp"
                data-delay=".1"
              >
                Our LitePaper
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
                          <h4 className="title title-md">Read the Litepaper</h4>
                          <p>
                            Gona is the native token for the Gonana ecosystem
                            and it will be the default token for rewards on the
                            Gonana DApp. Users making payment or performing any
                            form of transaction on the DApp with the Gona token
                            will have some form of cashback in form of a
                            discount. The token will be used to reward liquidity
                            providers on the Gonana DEX and those who earn any
                            reward by using the DApp. Token will also be used to
                            fund development activities of the Gonana ecosystem.{" "}
                          </p>
                          <ul className="btn-grp gutter-30px gutter-vr-20px">
                            <li>
                              {/* <a href="#" className="btn btn-grad">
                                Download Lite paper
                              </a> */}
                            </li>
                          </ul>
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
                    position={"Developer"}
                    name="Kizito Horlong"
                  />
                </div>
                {/* .col */}

                <div className="col-12 col-md-4 ">
                  <TeamCard
                    image="/images/core/joshua.jpg"
                    description={`Joshua Nwafor is a young, passionate developer and trainer at KusuConsult focused on building outstanding tech solutions using the most efficient and effective methods and tools possible.`}
                    position={"Chief Technical Officer"}
                    name=" Joshua Nwafor"
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
