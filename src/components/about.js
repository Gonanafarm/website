import Lottie from "lottie-react";
import about from "../lottie/about.json";

export default function About() {
  return (
    <section className="section bg-light section-about" id="about">
      <div className="container">
        {/* Block @s */}
        <div className="nk-block nk-block-about">
          <div className="row gutter-vr-30px align-items-center pdb-x">
            <div className="col-lg-6">
              <div className="nk-block-text">
                <h2
                  className="title animated"
                  data-animate="fadeInUp"
                  data-delay=".1"
                  style={{ color: "#015125" }}
                >
                  About Gonana
                </h2>
                <p className="animated" data-animate="fadeInUp" data-delay=".2">
                  <strong>
                    Gonana is a Moonbeam-based project that aims to create a
                    fully transparent, cross-chain, and scalable marketplace
                    that connects farmers and allows them to trade their
                    agricultural products on the global market.
                  </strong>{" "}
                </p>
                <p>
                  Gonana's DeFi solution seeks to drastically minimize the cost
                  and requirements of conventional financial institutions. We
                  utilized innovative technology to give farmers better access
                  to financial services like staking, saving, lending, and
                  borrowing, which improves their businesses and living
                  conditions and gives them the best social atmosphere ever.
                </p>
                <p data-animate="fadeInUp" data-delay=".3">
                  Our vision is to help farmers connect with individuals and
                  merchants seamlessly to bring real value to farmers worldwide.
                  This is made possible by utilizing and leveraging blockchain
                  technology.
                </p>
                <p>
                  Our Mission: We aim to provide a reliable platform for farmers
                  to present their products regardless of geographical location.
                  Gonana further enables farmers the option to use
                  cryptocurrencies and its full suite of DeFi solutions such as
                  swapping, staking, borrowing, and lending.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="nk-block-video animated"
                data-animate="fadeInUp"
                data-delay=".5"
              >
                <Lottie
                  animationData={about}
                  autoplay={true}
                  // isStopped={this.state.isStopped}
                  // isPaused={this.state.isPaused}
                />
              </div>
            </div>
          </div>
        </div>

        <section className="section section-problem bg-light" id="problem">
          <div className="container">
            <div className="section-head text-center wide-auto-sm">
              <h2
                className="title animated"
                data-animate="fadeInUp"
                data-delay=".1"
                style={{ color: "#015125" }}
              >
                Problem and Challenges
              </h2>
              <p className="animated" data-animate="fadeInUp" data-delay=".2">
                Farmers across the globe have almost similar challenges when it
                comes to being productive and these challenges are solvable.
                Unfortunately, most farmers are at disadvantage because of bad
                governance, poor access to supply chain, poor access to finance,
                limited investors participation, limited farmers education
                program, poor storage, poor security, poor access to digital
                inclusion options and poor reward as a result of intermediaries.
                These problems will have to be addressed in order to help solve
                the global food crisis.
              </p>
            </div>
          </div>
        </section>

        <div className="section-head" id="features">
          <h2
            className="title title-lg animated"
            data-animate="fadeInUp"
            data-delay=".6"
          >
            What we offer
          </h2>
        </div>
        {/* .section-head @e */}
        {/* Block @s */}
        <div className="nk-block nk-block-features mgb-m30">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="feature animated"
                data-animate="fadeInUp"
                data-delay=".7"
              >
                <div className="feature-icon dot">
                  <em className="icon ikon ikon-paricle-alt" />
                </div>

                <div className="feature-text">
                  <h5 className="title title-sm">Simple and Fast</h5>
                  <p>
                    The design and development of Gonana was made in a way that
                    fits the web3 idea such that any non-tech savvy farmer can
                    find their way around it regardless of educational level or
                    exposure. Also, Gonana has a very simple and fast payment
                    system for settlement that is deployed on the blockchain
                    (Moonbeam protocol) with cross-chain capabilities on
                    Algorand, XDC, Evmos, Solana, Acala, Celo and Near to give
                    the farmers a true blockchain experience with a fiat payment
                    option as well.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="feature animated"
                data-animate="fadeInUp"
                data-delay=".8"
              >
                <div className="feature-icon dot">
                  <em className="icon ikon ikon-paricle-alt" />
                </div>
                <div className="feature-text">
                  <h5 className="title title-sm">Free</h5>
                  <p>
                    Using the Gonana application for farmers to sell their
                    products is completely free from any form of charges. This
                    is to help the farmers take as much profit as possible as a
                    reward for the hard work they put on production and also to
                    encourage them to boost production and to also take
                    advantage of the Defi suit we have.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="feature animated"
                data-animate="fadeInUp"
                data-delay=".9"
              >
                <div className="feature-icon dot">
                  <em className="icon ikon ikon-paricle-alt" />
                </div>
                <div className="feature-text">
                  <h5 className="title title-sm">Decentralized Exchange</h5>
                  <p>
                    We have integrated a payment system that is easy to use and
                    also an exchange that permits the farmers to swap their
                    token for another. This also means that they can stake,
                    swap, lend, and borrow while earning some profit for their
                    Defi activities. This is to help the farmers have a holistic
                    approach to Defi and Cefi. Also, farmers get a multi-chain
                    exchange where they can use assets from other blockchain
                    protocols like Algorand, XDC, Evmos, Acala, Celo, Solana and
                    Near.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div
                className="feature animated"
                data-animate="fadeInUp"
                data-delay=".9"
              >
                <div className="feature-icon dot">
                  <em className="icon ikon ikon-paricle-alt" />
                </div>
                <div className="feature-text">
                  <h5 className="title title-sm">Supply chain</h5>
                  <p>
                    Gonana has partnered with some logistics companies to make
                    sure that every customer using the Gonana DApp for purchases
                    gets the best products from these farmers. These logistics
                    companies will make sure that every farmer gives products as
                    displayed on the Marketplace to help cut down any form of
                    dishonesty or fraud in the system. The supply chain
                    companies will take full responsibility for any damage or
                    loss of produce that are handled by them. The customer can
                    be guaranteed quality, safety and also on time delivery.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div
                className="feature animated"
                data-animate="fadeInUp"
                data-delay=".9"
              >
                <div className="feature-icon dot">
                  <em className="icon ikon ikon-paricle-alt" />
                </div>
                <div className="feature-text">
                  <h5 className="title title-sm">Escrow</h5>
                  <p>
                    In the bid to make sure we have a very transparent system
                    where all parties are served as they should, we have
                    integrated an escrow service that requires both parties
                    confirming that all requirements were met and services were
                    delivered as promised.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* .block @s */}
      </div>
    </section>
  );
}
