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
                    We aim to provide a reliable platform for farmers to present
                    their products to the world regardless of geographical
                    location. Gonana further enables farmers the option to use
                    cryptocurrencies and its full suite of DeFi solutions such
                    as swapping, staking, borrowing and lending
                  </strong>{" "}
                </p>
                <p className="animated" data-animate="fadeInUp" data-delay=".3">
                  Our vision is to help farmers connect with individuals and
                  merchants in a seamless way in order to bring real value to
                  farmers around the world, this is made possible by utilizing
                  and leveraging blockchain technology.
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
                  <em className="icon ikon ikon-document" />
                </div>

                <div className="feature-text">
                  <h5 className="title title-sm">Simple and Fast</h5>
                  <p>
                    Gonana has implemented a very simple and fast payment system
                    for settlement that is deployed on the blockchain (Moonbeam
                    protocol) with cross-chain capabilities on Algorand, XDC,
                    Evmos, Solana, Acala, Celo and Near to give the farmers a
                    true blockchain experience with a simple web3 design.
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
                  <em className="icon ikon ikon-donught" />
                </div>
                <div className="feature-text">
                  <h5 className="title title-sm">Free</h5>
                  <p>
                    Using the Gonana application for farmers to sell their
                    products will be completely free of any form of charges.
                    This is to help the farmers take as much profit as possible
                    as a reward for the hard work they put on production. There
                    will be no hidden charges due to Gonana as a company or any
                    other party.{" "}
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
                    We have implemented a payment system that is easy to use and
                    also an exchange that permits the farmers to swap their
                    token for another. This also means that they can stake,
                    swap, lend, and borrow while earning some profit for their
                    Defi activities. This is to help the farmers have a holistic
                    approach to Defi and Cefi. Also, farmers get a multi-chain
                    exchange where they can use assets from other blockchain
                    protocols like Algorand, XDC, Evmos, Acala, Celo, Solana and
                    Near.{" "}
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
