import logo from './logo.svg';
import TeamCard from "./components/team-card";
import About from "./components/about";
import Header from "./components/header";

function App() {
  return (
      <div>
        <div className="nk-wrap">
          <Header />
          <main className="nk-pages">
            {/*<section className="section no-pd overflow-hidden text-center over-up">*/}
            {/*    <h6 className="title title-xs tc-secondary pdb-s animated" data-animate="fadeInUp" data-delay=".8">Ico Rating</h6>*/}
            {/*    <ul className="rank-list">*/}
            {/*        <li className="rank-item animated" data-animate="fadeInUp" data-delay=".9">*/}
            {/*            <img src="/images/logo/a.png" alt="" />*/}
            {/*            <div className="rank-count">4.7 <span>/5</span></div>*/}
            {/*        </li>*/}
            {/*        <li className="rank-item animated" data-animate="fadeInUp" data-delay={1}>*/}
            {/*            <img src="/images/logo/b.png" alt="" />*/}
            {/*            <div className="rank-count">A</div>*/}
            {/*        </li>*/}
            {/*        <li className="rank-item animated" data-animate="fadeInUp" data-delay="1.1">*/}
            {/*            <img src="/images/logo/c.png" alt="" />*/}
            {/*            <div className="rank-count">9.4 <span>/10</span></div>*/}
            {/*        </li>*/}
            {/*        <li className="rank-item animated" data-animate="fadeInUp" data-delay="1.2">*/}
            {/*            <img src="/images/logo/d.png" alt="" />*/}
            {/*            <div className="rank-count">4.9 <span>/5</span></div>*/}
            {/*        </li>*/}
            {/*        <li className="rank-item animated" data-animate="fadeInUp" data-delay="1.3">*/}
            {/*            <img src="/images/logo/e.png" alt="" />*/}
            {/*            <div className="rank-count">5 <span>/5</span></div>*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*</section>*/}
            {/* // */}
            <About />
            {/* // */}
            {/*<section className="section section-features bg-white" id="features">*/}
            {/*    <div className="container">*/}
            {/*        /!* Block @s *!/*/}
            {/*        <div className="nk-block nk-block-features-s2">*/}
            {/*            <div className="row align-items-center flex-row-reverse">*/}
            {/*                <div className="col-lg-5">*/}
            {/*                    <div className="gfx py-4 animated" data-animate="fadeInUp" data-delay=".1">*/}
            {/*                        <img src="/images/gfx/gfx-a.png" alt="gfx" />*/}
            {/*                    </div>*/}
            {/*                </div>/!* .col *!/*/}
            {/*                <div className="col-lg-7">*/}
            {/*                    /!* Section Head @s *!/*/}
            {/*                    <div className="section-head">*/}
            {/*                        <h2 className="title animated" data-animate="fadeInUp" data-delay=".2">Why Choose ICO Crypto?</h2>*/}
            {/*                        <p className="animated" data-animate="fadeInUp" data-delay=".3">We believe in a new world, which helps you lunch and introduce your ICO Website. We designed it very carefully to make it more attractive, useful and fit any kind of ICO/Crypto website. </p>*/}
            {/*                    </div>/!* .section-head @e *!/*/}
            {/*                    <div className="features-list me-4 mgb-m30">*/}
            {/*                        <div className="feature feature-s2 animated" data-animate="fadeInUp" data-delay=".4">*/}
            {/*                            <div className="feature-icon dot">*/}
            {/*                                <em className="icon ikon ikon-shiled-alt" />*/}
            {/*                            </div>*/}
            {/*                            <div className="feature-text">*/}
            {/*                                <h5 className="title title-sm">Secured User Data</h5>*/}
            {/*                                <p>We protect user data and emo enim ipsam voluptatem quia voluptas sitaut odit aut fugit, sed quia conseq ur magni dolores aspernatur.</p>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <div className="feature feature-s2 animated" data-animate="fadeInUp" data-delay=".5">*/}
            {/*                            <div className="feature-icon dot">*/}
            {/*                                <em className="icon ikon ikon-user" />*/}
            {/*                            </div>*/}
            {/*                            <div className="feature-text">*/}
            {/*                                <h5 className="title title-sm">Most Credibility</h5>*/}
            {/*                                <p>Most authentically sed do eiusmod tempor incididunt ut labore et dolore magna aliqua cillum dolore eu fugiat ipsum dolor sit amet.</p>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <div className="feature feature-s2 animated" data-animate="fadeInUp" data-delay=".6">*/}
            {/*                            <div className="feature-icon dot">*/}
            {/*                                <em className="icon ikon ikon-data-server" />*/}
            {/*                            </div>*/}
            {/*                            <div className="feature-text">*/}
            {/*                                <h5 className="title title-sm">Big Data Insights</h5>*/}
            {/*                                <p>You can trade &amp; invest toekn oluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat magni dolores.</p>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>/!* .col *!/*/}
            {/*            </div>/!* .row *!/*/}
            {/*        </div>/!* .block @e *!/*/}
            {/*    </div>*/}
            {/*</section>*/}
            {/* // */}
            <section className="section section-problem bg-light" id="problem">
              <div className="container">
                {/* Section Head @s */}
                <div className="section-head text-center wide-auto-sm">
                  <h2
                      className="title animated"
                      data-animate="fadeInUp"
                      data-delay=".1"
                  >
                    Problem and Challenge
                  </h2>
                  <p
                      className="animated"
                      data-animate="fadeInUp"
                      data-delay=".2"
                  >
                    Farming is one of the oldest professions in human history.
                    Since man can’t survive without food, Some individuals
                    decided to take a profession called farming to produce food
                    to reduce food shortage and rescue the situation. Gonana
                    offers a wide range of solutions to tackle this problem and
                    correct the notion of people about farming; also how farming
                    can be a very good paying job for anyone around the world
                    with the right solution like Gonana.
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
                        <p>
                          Gonana has implemented a straightforward and fast
                          payment system for settlement that is deployed on the
                          blockchain (Moonbeam protocol) with cross-chain
                          capabilities on Algorand, XDC, Evmos, Solana, Acala,
                          Celo, and Near to give the farmers an authentic
                          blockchain experience with a simple web3 design.{" "}
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
                            <p>
                              Using the Gonana application for farmers to sell
                              their products will be completely free of any form
                              of charges. This is to help the farmers take as
                              much profit as possible as a reward for the hard
                              work they put on production. There will be no
                              hidden charges due to Gonana as a company or any
                              other party.{" "}
                            </p>
                          </div>
                        </div>
                        <div className="feature boxed bg-white-2">
                          <div className="feature-text">
                            <h4 className="title title-md">
                              Supply Chain (Logistics)
                            </h4>
                            <p>
                              Gonana has partnered with some logistics companies
                              to make sure that every customer using the Gonana
                              DApp for agricultural purchases gets the best
                              products from these farmers. They will make sure
                              that every farmer gives products as displayed on
                              the Marketplace to help cut down any form of
                              dishonesty or fraud in the system. Also these
                              logistics companies take full responsibility for
                              any damage or loss of produce that are handled by
                              them. The customer can be guaranteed quality,
                              safety and also on time delivery.
                            </p>
                          </div>
                        </div>
                        <div className="feature boxed bg-black-10">
                          <div className="feature-text">
                            <h4 className="title title-md">
                              Decentralized Exchange
                            </h4>
                            <p>
                              We have implemented a payment system that is easy
                              to use and also an exchange that permits the
                              farmers to swap their token for another. This also
                              means that they can stake, swap, lend, and borrow
                              while earning some profit for their Defi
                              activities. This is to help the farmers have a
                              holistic approach to Defi and Cefi. Also, farmers
                              get a multi-chain exchange where they can use
                              assets from other blockchain protocols like
                              Algorand, XDC, Evmos, Acala, Celo, Solana and
                              Near.
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
                    >
                      Gonana token (Gona) will be an integral part of the Gonana
                      marketplace to aid the growth and efficiency of the
                      ecosystem. Farmers will have the option to receive payment
                      in Gona, stake, participate in yield farming, lending and
                      borrowing, and other Defi activities. It will also be the
                      native token of the ecosystem.
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
                            Sales Information
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
                              <td className="table-head">
                                Total Token Supply
                              </td>
                              <td className="table-des">1 Billion</td>
                            </tr>
                            <tr>
                              <td className="table-head">Hard cap</td>
                              <td className="table-des">$5,000,000</td>
                            </tr>
                            <tr>
                              <td className="table-head">Seed sale</td>
                              <td className="table-des">$700,000</td>
                            </tr>
                            <tr>
                              <td className="table-head">Strategic</td>
                              <td className="table-des"> $2,000,000</td>
                            </tr>
                            <tr>
                              <td className="table-head">
                                Initial Circulating Supply
                              </td>
                              <td className="table-des"> 400,000,000</td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      {/* .col */}
                      {/*<div className="col-lg-5">*/}
                      {/*    <div className="animated" data-animate="fadeInUp" data-delay=".4">*/}
                      {/*        <div className="token-status bg-theme">*/}
                      {/*            <h4 className="title title-md">Token Sale Stage End In</h4>*/}
                      {/*            <div className="token-countdown countdown" data-date="2022/06/11" />*/}
                      {/*            <div className="progress-wrap progress-wrap-point">*/}
                      {/*                <span className="progress-info">Raised so far <span>$1,830,985</span></span>*/}
                      {/*                <div className="progress-bar">*/}
                      {/*                    <div className="progress-percent bg-grad" data-percent={30} />*/}
                      {/*                    <div className="progress-point progress-point-1">Soft Cap <span>$1.75m</span></div>*/}
                      {/*                    <div className="progress-point progress-point-2">Hard Cap <span>$4.75m</span></div>*/}
                      {/*                </div>*/}
                      {/*            </div>*/}
                      {/*            <a href="#" className="btn btn-grad">Register &amp; Buy Token Now</a>*/}
                      {/*            <span className="token-min">Minimum Purchase: 200 Gonana</span>*/}
                      {/*        </div>*/}
                      {/*        <div className="bonus bg-theme">*/}
                      {/*            <div className="bonus-info">*/}
                      {/*                <div className="bonus-percent">50% <small>Bonus</small></div>*/}
                      {/*                <div className="bonus-date">End at 30 Nov, 2022</div>*/}
                      {/*                <span className="bonus-badge badge-xs">Now</span>*/}
                      {/*            </div>*/}
                      {/*            <div className="bonus-info">*/}
                      {/*                <div className="bonus-percent">25%<small>Bonus</small></div>*/}
                      {/*                <div className="bonus-date">Start at 01 Dec, 2022</div>*/}
                      {/*            </div>*/}
                      {/*        </div>*/}
                      {/*    </div>*/}
                      {/*</div>*/}

                      {/* .col */}
                    </div>
                    {/* .row */}
                  </div>
                  {/* .block @e */}
                </div>
              </div>
              {/* .section-tokensale */}
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
                          <div className="token-alocate-graph">
                            <span>
                              Token <br /> Distribution
                            </span>
                            <canvas
                                className="chart-canvas"
                                id="token-alocate"
                            />
                          </div>
                          <ul
                              className="chart-data"
                              data-canvas="token-alocate"
                              data-canvas-type="doughnut"
                          >
                            <li
                                data-color="#15216d"
                                data-title="Reserve"
                                data-amount={23}
                            />
                            <li
                                data-color="#15216d"
                                data-title="Rewards"
                                data-amount={14}
                            />
                            <li
                                data-color="#6ad9ac"
                                data-title="Marketing"
                                data-amount={12}
                            />
                            <li
                                data-color="#4aa0f6"
                                data-title="Public"
                                data-amount={10}
                            />
                            <li
                                data-color="#4d6fe9"
                                data-title="Development"
                                data-amount={10}
                            />
                            <li
                                data-color="#15216d"
                                data-title="Patnership"
                                data-amount={10}
                            />
                            <li
                                data-color="#8fa0df"
                                data-title="Private"
                                data-amount={8}
                            />
                            <li
                                data-color="#223fa8"
                                data-title="Seed"
                                data-amount={7}
                            />
                            <li
                                data-color="#15216d"
                                data-title="Team"
                                data-amount={6}
                            />
                          </ul>
                        </div>
                      </div>
                      {/* .col */}
                      <div className="col-lg-6">
                        <div
                            className="token-alocate-item animated"
                            data-animate="fadeInUp"
                            data-delay=".2"
                        >
                          <div className="token-alocate-graph">
                            <span>
                              Sales <br /> Proceeds
                            </span>
                            <canvas
                                className="chart-canvas"
                                id="fund-alocate"
                            />
                          </div>
                          <ul
                              className="chart-data"
                              data-canvas="fund-alocate"
                              data-canvas-type="doughnut"
                          >
                            <li
                                data-color="#15216d"
                                data-title="Development"
                                data-amount={40}
                            />
                            <li
                                data-color="#4aa0f6"
                                data-title="Marketing"
                                data-amount={30}
                            />
                            <li
                                data-color="#6ad9ac"
                                data-title="Exchange listing "
                                data-amount={12}
                            />

                            <li
                                data-color="#72a3f4"
                                data-title="Legal"
                                data-amount={8}
                            />
                            <li
                                data-color="#223fa8"
                                data-title="Product"
                                data-amount={7}
                            />

                            <li
                                data-color="#8fa0df"
                                data-title="Operational & Administration"
                                data-amount={3}
                            />
                          </ul>
                        </div>
                      </div>
                      {/* .col */}
                    </div>
                    {/* .row */}
                  </div>
                  {/* .block @e */}
                </div>
                <div className="nk-ovm ovm-bottom ovm-h-70 bg-light" />
                {/* .nk-ovm */}
              </div>
              {/* .section-tokendes */}
            </section>
            {/* // */}
            <section
                className="section bg-light section-document"
                id="documents"
            >
              <div className="container">
                {/* Section Head @s */}
                <div className="section-head text-center wide-auto">
                  <h2
                      className="title animated"
                      data-animate="fadeInUp"
                      data-delay=".1"
                  >
                    Our LitePaper
                  </h2>
                  {/*<p className="animated" data-animate="fadeInUp" data-delay=".2">Our Tokens with a realworld use case created on the blockchain network.</p>*/}
                </div>
                {/* .section-head @e */}
                {/* Block @s */}
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
                          {/* .col */}
                          <div className="col-md-6">
                            <div className="nk-block-text">
                              <h4 className="title title-md">
                                Read the Litepaper
                              </h4>
                              <p>
                                Gona is the native token for the Gonana
                                ecosystem and it will be the default token for
                                rewards on the Gonana DApp. Users making payment
                                or performing any form of transaction on the
                                DApp with the Gona token will have some form of
                                cashback in form of a discount. The token will
                                be used to reward liquidity providers on the
                                Gonana DEX and those who earn any reward by
                                using the DApp. Token will also be used to fund
                                development activities of the Gonana ecosystem.{" "}
                              </p>
                              <ul className="btn-grp gutter-30px gutter-vr-20px">
                                <li>
                                  <a href="#" className="btn btn-grad">
                                    Download Lite paper
                                  </a>
                                </li>
                                {/*<li><a href="#" className="link"><em className="link-icon fas fa-file-alt" /> <span>Download Two Pager</span></a></li>*/}
                              </ul>
                            </div>
                          </div>
                          {/* .col */}
                        </div>
                        {/* .row */}
                      </div>
                      {/* .box */}
                    </div>
                    {/* .col */}
                  </div>
                  {/* .row */}
                </div>
                {/* .block @e */}
              </div>
            </section>
            {/* // */}
            {/* <section className="section section-wallet bg-white" id="app-download">*/}
            {/*    <div className="container">*/}
            {/*        /!* Block @s *!/*/}
            {/*        <div className="nk-block nk-block-text-wrap">*/}
            {/*            <div className="row align-items-center justify-content-center flex-row-reverse">*/}
            {/*                <div className="col-lg-7 mb-4 mb-lg-0">*/}
            {/*                    <div className="nk-block-img bg-pattern-dots-color">*/}
            {/*                        <div className="app-slide-wrap animated" data-animate="fadeInUp" data-delay=".1">*/}
            {/*                            <div className="app-slide">*/}
            {/*                                <img src="/images/app-screens/a.jpg" alt="App Screen" />*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className="col-lg-5 col-md-10 text-center text-lg-start">*/}
            {/*                    <div className="nk-block-text">*/}
            {/*                        <h2 className="title animated" data-animate="fadeInUp" data-delay=".1">Our Amazing <br className="d-none d-md-block" /> Gonana Application</h2>*/}
            {/*                        <p className="animated" data-animate="fadeInUp" data-delay=".2">*/}
            {/*                            Gonana is a well structured DApp that gives the farmer access to a wallet on signup. The default wallet is deployed on the Moonbeam protocol. This wallet helps the farmer to have full access and control of the marketplace where they can list their products for the entire Gonana ecosystem*/}
            {/*                        </p>*/}
            {/*                        <div className="pdt-m animated" data-animate="fadeInUp" data-delay=".3">*/}
            {/*                            <a href="#" className="btn btn-grad">Coming Soon!</a>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>/!* .block @e *!/*/}
            {/*    </div>*/}
            {/*</section>*/}
            {/* // */}
            {/*<section className="section section-wallet-bottom bg-white pdt-0" id="wallet">*/}
            {/*    <div className="container">*/}
            {/*        /!* Block @s *!/*/}
            {/*        <div className="nk-block nk-block-text-grp mgb-m30">*/}
            {/*            <h6 className="title title-xs tc-primary pdb-s animated" data-animate="fadeInUp" data-delay=".4">Why Use Tokenpay Wallets?</h6>*/}
            {/*            <div className="row">*/}
            {/*                <div className="col-lg-4">*/}
            {/*                    <div className="feature feature-s5 animated" data-animate="fadeInUp" data-delay=".5">*/}
            {/*                        <h4 className="title title-md">Safe &amp; Secure</h4>*/}
            {/*                        <p>Tempore, cum soluta nobis est eligendi optio cumque nihil id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor impedit quo minus repellendus. </p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className="col-lg-4">*/}
            {/*                    <div className="feature feature-s5 animated" data-animate="fadeInUp" data-delay=".6">*/}
            {/*                        <h4 className="title title-md">Universal and Interactive</h4>*/}
            {/*                        <p>Placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className="col-lg-4">*/}
            {/*                    <div className="feature feature-s5 animated" data-animate="fadeInUp" data-delay=".7">*/}
            {/*                        <h4 className="title title-md">Send and Receive</h4>*/}
            {/*                        <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor. </p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>/!* .row *!/*/}
            {/*        </div>/!* .block e *!/*/}
            {/*    </div>*/}
            {/*</section>*/}

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
                  <p
                      className="animated"
                      data-animate="fadeInUp"
                      data-delay=".3"
                  >
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
                                Concept development, website and other documents
                                for the Gonana project
                              </li>
                              <li>
                                Core team formation and community building
                              </li>
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
                                Development and deployment of Lending, saving
                                and borrowing functions on the DEX
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
                                Collaboration and partnerships with Blockchain
                                and non-blockchain actors
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
                                More partnerships with supply chain companies
                                and other associations
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
                  {/* .row */}
                  {/*<div className="text-center animated" data-animate="fadeInUp" data-delay=".4">*/}
                  {/*    <a href="#" className="btn btn-grad">View Full Roadmap</a>*/}
                  {/*</div>*/}
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
                          content developer, and a blockchain developer with
                          some knowledge of JavaScript and React. He works with
                          reputable blockchain projects like Algorand and EVM.
                          His love for educating people about blockchain
                          technology and its applications led him to set up
                          various blockchain communities across Nigeria.
                        </p>
                        <p
                            className="animated"
                            data-animate="fadeInUp"
                            data-delay=".4"
                        >
                          He has been working with startups/hubs for years now
                          and he co-founded Univote (a blockchain based voting
                          application that hosted the first blockchain elections
                          in Africa at the University of Jos) and also
                          Jaysources, a DApp deployed on the Algorand.
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
                {/* Section Head @s */}
                <div className="section-head text-center wide-auto">
                  <h2
                      className="title title-lg title-dark animated"
                      data-animate="fadeInUp"
                      data-delay=".1"
                  >
                    Core Team
                  </h2>
                </div>
                {/* .section-head @e */}
                {/* Block @s */}
                <div className="nk-block nk-block-team-list">
                  <div className="row ">
                    <div className="col-md-6 col-6">
                      <TeamCard
                          image="/images/core/eno.jpg"
                          description={`Eno Peters is a product manager, copywriter, and content creator with over 5 years of experience, working with tech companies and bringing quality solutions to help startups move from the ground up.`}
                          position={"Co-Founder"}
                          name="Eno Peters"
                      />
                    </div>

                    <div className="col-md-6 col-6">
                      <TeamCard
                          image="/images/core/lucy.jpg"
                          description={`Ameh Lucy Ajumi a blockchain enthusiast, tech writer,
                        entrepreneur and Gonana co-founder. Passionate about
                        Web3 adoption from the grassroot`}
                          position={"Co-Founder"}
                          name="Ameh Lucy Ajumi"
                      />
                    </div>
                    {/* .col */}

                    <div className="col-md-6 col-6">
                      <TeamCard
                          image="/images/core/kizito-image.jpg"
                          description={` Kizito Horlong is an optimistic and passionate
                    software developer with over 4 years of experience
                    building effective tech solutions for the web, backend
                    systems, blockchain, and data science. He uses Python,
                    Solidity and JavaScript with frameworks such as
                    Django, Flask, ReactJs, NodeJs, Tensorflow,
                    Scikit-learn etc.`}
                          position={"Developer"}
                          name="Kizito Horlong"
                      />
                    </div>
                    {/* .col */}

                    <div className="col-md-6 col-6">
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
            {/* // */}
            {/*<section className="section section-faq bg-white" id="faq">*/}
            {/*    <div className="container">*/}
            {/*        /!* Section Head @s *!/*/}
            {/*        <div className="section-head text-center wide-auto">*/}
            {/*            <h2 className="title animated" data-animate="fadeInUp" data-delay=".1">FAQs</h2>*/}
            {/*            <p className="animated" data-animate="fadeInUp" data-delay=".2">Below we’ve provided a bit of ICO, ICO Token, cryptocurrencies, and few others. If you have any other questions, please get in touch via email.</p>*/}
            {/*        </div>/!* .section-head @e *!/*/}
            {/*        /!* Block @s *!/*/}
            {/*        <div className="nk-block block-faq">*/}
            {/*            <div className="row">*/}
            {/*                <div className="col-md-4 col-lg-3 mb-4 mb-lg-0">*/}
            {/*                    <ul className="nav tab-nav tab-nav-vr tab-nav-bdr me-lg-3 animated" data-animate="fadeInUp" data-delay=".3">*/}
            {/*                        <li><a className="active" data-bs-toggle="tab" href="#general-questions"><em className="fas fa-caret-right" />General Questions</a></li>*/}
            {/*                        <li><a data-bs-toggle="tab" href="#ico-questions"><em className="fas fa-caret-right" />ICO Questions</a></li>*/}
            {/*                        <li><a data-bs-toggle="tab" href="#tokens-sales"><em className="fas fa-caret-right" />Tokens Sales</a></li>*/}
            {/*                        <li><a data-bs-toggle="tab" href="#clients-releted"><em className="fas fa-caret-right" />Clients Releted</a></li>*/}
            {/*                    </ul>*/}
            {/*                </div>/!* .col *!/*/}
            {/*                <div className="col-md-8 col-lg-9">*/}
            {/*                    <div className="tab-content">*/}
            {/*                        <div className="tab-pane fade show active" id="general-questions">*/}
            {/*                            <div className="accordion accordion-s1 accordion-faq" id="faq-1">*/}
            {/*                                <div className="accordion-item animated" data-animate="fadeInUp" data-delay=".1">*/}
            {/*                                    <h5 className="accordion-title accordion-title-sm" data-bs-toggle="collapse" data-bs-target="#faq-1-1">What is ICO Crypto? <span className="accordion-icon" /></h5>*/}
            {/*                                    <div id="faq-1-1" className="collapse show" data-bs-parent="#faq-1">*/}
            {/*                                        <div className="accordion-content">*/}
            {/*                                            <p>Once ICO period is launched, You can purchased Token with Etherum, Bitcoin or Litecoin. You can also tempor incididunt ut labore et dolore magna aliqua sed do eiusmod eaque ipsa.</p>*/}
            {/*                                        </div>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                                <div className="accordion-item animated" data-animate="fadeInUp" data-delay=".2">*/}
            {/*                                    <h5 className="accordion-title accordion-title-sm collapsed" data-bs-toggle="collapse" data-bs-target="#faq-1-2">What cryptocurrencies can I use to purchase? <span className="accordion-icon" /></h5>*/}
            {/*                                    <div id="faq-1-2" className="collapse" data-bs-parent="#faq-1">*/}
            {/*                                        <div className="accordion-content">*/}
            {/*                                            <p>Once ICO period is launched, You can purchased Token with Etherum, Bitcoin or Litecoin. You can also tempor incididunt ut labore et dolore magna aliqua sed do eiusmod eaque ipsa.</p>*/}
            {/*                                        </div>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                                <div className="accordion-item animated" data-animate="fadeInUp" data-delay=".3">*/}
            {/*                                    <h5 className="accordion-title accordion-title-sm collapsed" data-bs-toggle="collapse" data-bs-target="#faq-1-3">How can I participate in the ICO Token sale? <span className="accordion-icon" /></h5>*/}
            {/*                                    <div id="faq-1-3" className="collapse" data-bs-parent="#faq-1">*/}
            {/*                                        <div className="accordion-content">*/}
            {/*                                            <p>Once ICO period is launched, You can purchased Token with Etherum, Bitcoin or Litecoin. You can also tempor incididunt ut labore et dolore magna aliqua sed do eiusmod eaque ipsa.</p>*/}
            {/*                                        </div>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                                <div className="accordion-item animated" data-animate="fadeInUp" data-delay=".4">*/}
            {/*                                    <h5 className="accordion-title accordion-title-sm collapsed" data-bs-toggle="collapse" data-bs-target="#faq-1-4">How do I benefit from the ICO Token? <span className="accordion-icon" /></h5>*/}
            {/*                                    <div id="faq-1-4" className="collapse" data-bs-parent="#faq-1">*/}
            {/*                                        <div className="accordion-content">*/}
            {/*                                            <p>Once ICO period is launched, You can purchased Token with Etherum, Bitcoin or Litecoin. You can also tempor incididunt ut labore et dolore magna aliqua sed do eiusmod eaque ipsa.</p>*/}
            {/*                                        </div>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <div className="tab-pane fade" id="ico-questions">*/}
            {/*                            <div className="accordion accordion-s1 accordion-faq" id="faq-2">*/}
            {/*                                <div className="accordion-item animated" data-animate="fadeInUp" data-delay=".1">*/}
            {/*                                    <h5 className="accordion-title accordion-title-sm" data-bs-toggle="collapse" data-bs-target="#faq-2-1">Which of us ever undertakes laborious?<span className="accordion-icon" /></h5>*/}
            {/*                                    <div id="faq-2-1" className="collapse show" data-bs-parent="#faq-2">*/}
            {/*                                        <div className="accordion-content">*/}
            {/*                                            <div className="accordion-content">*/}
            {/*                                                <p>Once ICO period is launched, You can purchased Token with Etherum, Bitcoin or Litecoin. You can also tempor incididunt ut labore et dolore magna aliqua sed do eiusmod eaque ipsa.</p>*/}
            {/*                                            </div>*/}
            {/*                                        </div>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                                <div className="accordion-item animated" data-animate="fadeInUp" data-delay=".2">*/}
            {/*                                    <h5 className="accordion-title accordion-title-sm collapsed" data-bs-toggle="collapse" data-bs-target="#faq-2-2">Who do not know how to pursue rationally?<span className="accordion-icon" /></h5>*/}
            {/*                                    <div id="faq-2-2" className="collapse" data-bs-parent="#faq-2">*/}
            {/*                                        <div className="accordion-content">*/}
            {/*                                            <p>Once ICO period is launched, You can purchased Token with Etherum, Bitcoin or Litecoin. You can also tempor incididunt ut labore et dolore magna aliqua sed do eiusmod eaque ipsa.</p>*/}
            {/*                                        </div>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                                <div className="accordion-item animated" data-animate="fadeInUp" data-delay=".3">*/}
            {/*                                    <h5 className="accordion-title accordion-title-sm collapsed" data-bs-toggle="collapse" data-bs-target="#faq-2-3">Their separate existence is a myth?<span className="accordion-icon" /></h5>*/}
            {/*                                    <div id="faq-2-3" className="collapse" data-bs-parent="#faq-2">*/}
            {/*                                        <div className="accordion-content">*/}
            {/*                                            <p>Once ICO period is launched, You can purchased Token with Etherum, Bitcoin or Litecoin. You can also tempor incididunt ut labore et dolore magna aliqua sed do eiusmod eaque ipsa.</p>*/}
            {/*                                        </div>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                                <div className="accordion-item animated" data-animate="fadeInUp" data-delay=".4">*/}
            {/*                                    <h5 className="accordion-title accordion-title-sm collapsed" data-bs-toggle="collapse" data-bs-target="#faq-2-4">Pityful a rethoric question ran over her cheek?<span className="accordion-icon" /></h5>*/}
            {/*                                    <div id="faq-2-4" className="collapse" data-bs-parent="#faq-2">*/}
            {/*                                        <div className="accordion-content">*/}
            {/*                                            <p>Once ICO period is launched, You can purchased Token with Etherum, Bitcoin or Litecoin. You can also tempor incididunt ut labore et dolore magna aliqua sed do eiusmod eaque ipsa.</p>*/}
            {/*                                        </div>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <div className="tab-pane fade" id="tokens-sales">*/}
            {/*                            <div className="accordion accordion-s1 accordion-faq" id="faq-3">*/}
            {/*                                <div className="accordion-item animated" data-animate="fadeInUp" data-delay=".1">*/}
            {/*                                    <h5 className="accordion-title accordion-title-sm" data-bs-toggle="collapse" data-bs-target="#faq-3-1">When she reached the first hills?<span className="accordion-icon" /></h5>*/}
            {/*                                    <div id="faq-3-1" className="collapse show" data-bs-parent="#faq-3">*/}
            {/*                                        <div className="accordion-content">*/}
            {/*                                            <p>Once ICO period is launched, You can purchased Token with Etherum, Bitcoin or Litecoin. You can also tempor incididunt ut labore et dolore magna aliqua sed do eiusmod eaque ipsa.</p>*/}
            {/*                                        </div>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                                <div className="accordion-item animated" data-animate="fadeInUp" data-delay=".2">*/}
            {/*                                    <h5 className="accordion-title accordion-title-sm collapsed" data-bs-toggle="collapse" data-bs-target="#faq-3-2">Big Oxmox advised her not to do?<span className="accordion-icon" /></h5>*/}
            {/*                                    <div id="faq-3-2" className="collapse" data-bs-parent="#faq-3">*/}
            {/*                                        <div className="accordion-content">*/}
            {/*                                            <p>Once ICO period is launched, You can purchased Token with Etherum, Bitcoin or Litecoin. You can also tempor incididunt ut labore et dolore magna aliqua sed do eiusmod eaque ipsa.</p>*/}
            {/*                                        </div>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                                <div className="accordion-item animated" data-animate="fadeInUp" data-delay=".3">*/}
            {/*                                    <h5 className="accordion-title accordion-title-sm collapsed" data-bs-toggle="collapse" data-bs-target="#faq-3-3">Which roasted parts of sentences fly into your mouth?<span className="accordion-icon" /></h5>*/}
            {/*                                    <div id="faq-3-3" className="collapse" data-bs-parent="#faq-3">*/}
            {/*                                        <div className="accordion-content">*/}
            {/*                                            <p>Once ICO period is launched, You can purchased Token with Etherum, Bitcoin or Litecoin. You can also tempor incididunt ut labore et dolore magna aliqua sed do eiusmod eaque ipsa.</p>*/}
            {/*                                        </div>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                                <div className="accordion-item animated" data-animate="fadeInUp" data-delay=".4">*/}
            {/*                                    <h5 className="accordion-title accordion-title-sm collapsed" data-bs-toggle="collapse" data-bs-target="#faq-3-4">Vokalia and Consonantia, there live?<span className="accordion-icon" /></h5>*/}
            {/*                                    <div id="faq-3-4" className="collapse" data-bs-parent="#faq-3">*/}
            {/*                                        <div className="accordion-content">*/}
            {/*                                            <p>Once ICO period is launched, You can purchased Token with Etherum, Bitcoin or Litecoin. You can also tempor incididunt ut labore et dolore magna aliqua sed do eiusmod eaque ipsa.</p>*/}
            {/*                                        </div>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <div className="tab-pane fade" id="clients-releted">*/}
            {/*                            <div className="accordion accordion-s1 accordion-faq" id="faq-4">*/}
            {/*                                <div className="accordion-item animated" data-animate="fadeInUp" data-delay=".1">*/}
            {/*                                    <h5 className="accordion-title accordion-title-sm" data-bs-toggle="collapse" data-bs-target="#faq-4-1">How do I benefit from the ICO Token?<span className="accordion-icon" /></h5>*/}
            {/*                                    <div id="faq-4-1" className="collapse show" data-bs-parent="#faq-4">*/}
            {/*                                        <div className="accordion-content">*/}
            {/*                                            <p>Once ICO period is launched, You can purchased Token with Etherum, Bitcoin or Litecoin. You can also tempor incididunt ut labore et dolore magna aliqua sed do eiusmod eaque ipsa.</p>*/}
            {/*                                        </div>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                                <div className="accordion-item animated" data-animate="fadeInUp" data-delay=".2">*/}
            {/*                                    <h5 className="accordion-title accordion-title-sm collapsed" data-bs-toggle="collapse" data-bs-target="#faq-4-2">Pityful a rethoric question ran over her cheek?<span className="accordion-icon" /></h5>*/}
            {/*                                    <div id="faq-4-2" className="collapse" data-bs-parent="#faq-4">*/}
            {/*                                        <div className="accordion-content">*/}
            {/*                                            <p>Once ICO period is launched, You can purchased Token with Etherum, Bitcoin or Litecoin. You can also tempor incididunt ut labore et dolore magna aliqua sed do eiusmod eaque ipsa.</p>*/}
            {/*                                        </div>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                                <div className="accordion-item animated" data-animate="fadeInUp" data-delay=".3">*/}
            {/*                                    <h5 className="accordion-title accordion-title-sm collapsed" data-bs-toggle="collapse" data-bs-target="#faq-4-3">Vokalia and Consonantia, there live?<span className="accordion-icon" /></h5>*/}
            {/*                                    <div id="faq-4-3" className="collapse" data-bs-parent="#faq-4">*/}
            {/*                                        <div className="accordion-content">*/}
            {/*                                            <p>Once ICO period is launched, You can purchased Token with Etherum, Bitcoin or Litecoin. You can also tempor incididunt ut labore et dolore magna aliqua sed do eiusmod eaque ipsa.</p>*/}
            {/*                                        </div>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                                <div className="accordion-item animated" data-animate="fadeInUp" data-delay=".4">*/}
            {/*                                    <h5 className="accordion-title accordion-title-sm collapsed" data-bs-toggle="collapse" data-bs-target="#faq-4-4">Who do not know how to pursue rationally?<span className="accordion-icon" /></h5>*/}
            {/*                                    <div id="faq-4-4" className="collapse" data-bs-parent="#faq-4">*/}
            {/*                                        <div className="accordion-content">*/}
            {/*                                            <p>Once ICO period is launched, You can purchased Token with Etherum, Bitcoin or Litecoin. You can also tempor incididunt ut labore et dolore magna aliqua sed do eiusmod eaque ipsa.</p>*/}
            {/*                                        </div>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>/!* .col *!/*/}
            {/*            </div>/!* .row *!/*/}
            {/*        </div>/!* .block @e *!/*/}
            {/*    </div>*/}
            {/*</section>*/}
            {/* // */}
            {/*<section className="section section-m section-partners bg-light" id="partners">*/}
            {/*    <div className="container">*/}
            {/*        /!* Block @s *!/*/}
            {/*        <div className="nk-block block-partners">*/}
            {/*            <h6 className="title title-xs tc-primary text-center animated" data-animate="fadeInUp" data-delay=".1">Our Partners</h6>*/}
            {/*            <ul className="partner-list flex-lg-nowrap">*/}
            {/*                <li className="partner-logo animated" data-animate="fadeInUp" data-delay=".2"><img src="/images/partners/a.png" alt="partner" /></li>*/}
            {/*                <li className="partner-logo animated" data-animate="fadeInUp" data-delay=".3"><img src="/images/partners/b.png" alt="partner" /></li>*/}
            {/*                <li className="partner-logo animated" data-animate="fadeInUp" data-delay=".4"><img src="/images/partners/c.png" alt="partner" /></li>*/}
            {/*                <li className="partner-logo animated" data-animate="fadeInUp" data-delay=".5"><img src="/images/partners/d.png" alt="partner" /></li>*/}
            {/*                <li className="partner-logo animated" data-animate="fadeInUp" data-delay=".6"><img src="/images/partners/e.png" alt="partner" /></li>*/}
            {/*                <li className="partner-logo animated" data-animate="fadeInUp" data-delay=".7"><img src="/images/partners/f.png" alt="partner" /></li>*/}
            {/*                <li className="partner-logo animated" data-animate="fadeInUp" data-delay=".8"><img src="/images/partners/g.png" alt="partner" /></li>*/}
            {/*            </ul>*/}
            {/*        </div>*/}
            {/*        /!* Block @e *!/*/}
            {/*    </div>*/}
            {/*</section>*/}
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
                              <em className="contact-icon fas fa-building" />
                              <div className="contact-text">
                                <span>www.gonana.farm </span>
                              </div>
                            </li>
                            <li>
                              <em className="contact-icon fab fa-twitter" />
                              <div className="contact-text">
                                <span>@Gonanafarm</span>
                              </div>
                            </li>
                            <li>
                              <em className="contact-icon fas fa-envelope" />
                              <div className="contact-text">
                                <a href={"contact@gonana.farm"}>
                                  <span>contact@gonana.farm</span>
                                </a>
                              </div>
                            </li>
                            <li>
                              <em className="contact-icon fas fa-paper-plane" />
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
                            {/*<ul className="social-links">*/}
                            {/*    <li><a href="#"><em className="fab fa-twitter" /></a></li>*/}
                            {/*    <li><a href="#"><em className="fab fa-medium-m" /></a></li>*/}
                            {/*    <li><a href="#"><em className="fab fa-facebook-f" /></a></li>*/}
                            {/*    <li><a href="#"><em className="fab fa-youtube" /></a></li>*/}
                            {/*    <li><a href="#"><em className="fab fa-bitcoin" /></a></li>*/}
                            {/*    <li><a href="#"><em className="fab fa-github" /></a></li>*/}
                            {/*</ul>*/}
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
        {/* Modals */}
        {/* This is used in azalea, azalea-woa, gentian, gentian-woa, gentian-pro, gentian-pro-woa.html pages  */}
        {/* Modal @s */}
        <div className="modal fade" id="login-popup">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <a
                  href="#"
                  className="modal-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
              >
                <em className="ti ti-close" />
              </a>
              <div className="ath-container m-0">
                <div className="ath-body">
                  <h5 className="ath-heading title">
                    Sign in{" "}
                    <small className="tc-default">with your ICO Account</small>
                  </h5>
                  <form action="#">
                    <div className="field-item">
                      <div className="field-wrap">
                        <input
                            type="text"
                            className="input-bordered"
                            placeholder="Your Email"
                        />
                      </div>
                    </div>
                    <div className="field-item">
                      <div className="field-wrap">
                        <input
                            type="password"
                            className="input-bordered"
                            placeholder="Password"
                        />
                      </div>
                    </div>
                    <div className="field-item d-flex justify-content-between align-items-center">
                      <div className="field-item pb-0">
                        <input
                            className="input-checkbox"
                            id="remember-me-100"
                            type="checkbox"
                        />
                        <label htmlFor="remember-me-100">Remember Me</label>
                      </div>
                      <div className="forget-link fz-6">
                        <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-dismiss="modal"
                            data-bs-target="#reset-popup"
                        >
                          Forgot password?
                        </a>
                      </div>
                    </div>
                    <button className="btn btn-primary btn-block btn-md">
                      Sign In
                    </button>
                  </form>
                  <div className="sap-text">
                    <span>Or Sign In With</span>
                  </div>
                  <ul className="row gutter-20px gutter-vr-20px">
                    <li className="col">
                      <a href="#" className="btn btn-md btn-facebook btn-block">
                        <em className="icon fab fa-facebook-f" />
                        <span>Facebook</span>
                      </a>
                    </li>
                    <li className="col">
                      <a href="#" className="btn btn-md btn-google btn-block">
                        <em className="icon fab fa-google" />
                        <span>Google</span>
                      </a>
                    </li>
                  </ul>
                  <div className="ath-note text-center">
                    {" "}
                    Don’t have an account?{" "}
                    <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-dismiss="modal"
                        data-bs-target="#register-popup"
                    >
                      {" "}
                      <strong>Sign up here</strong>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* .modal @e */}
        {/* Modal @s */}
        <div className="modal fade" id="reset-popup">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <a
                  href="#"
                  className="modal-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
              >
                <em className="ti ti-close" />
              </a>
              <div className="ath-container m-0">
                <div className="ath-body">
                  <h5 className="ath-heading title">
                    Reset <small className="tc-default">with your Email</small>
                  </h5>
                  <form action="#">
                    <div className="field-item">
                      <div className="field-wrap">
                        <input
                            type="text"
                            className="input-bordered"
                            placeholder="Your Email"
                        />
                      </div>
                    </div>
                    <button className="btn btn-primary btn-block btn-md">
                      Reset Password
                    </button>
                    <div className="ath-note text-center">
                      {" "}
                      Remembered?{" "}
                      <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-dismiss="modal"
                          data-bs-target="#login-popup"
                      >
                        {" "}
                        <strong>Sign in here</strong>
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* .modal @e */}
        {/* preloader */}
        {/*<div className="preloader preloader-alt no-split"><span className="spinner spinner-alt"><img className="spinner-brand" src="images/logo-full-white.png" alt="" /></span></div>*/}
        {/* JavaScript */}
      </div>
  );
}

export default App;
