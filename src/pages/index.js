import React from "react"

export default function Home() {
  return (
    <React.Fragment>
      <div className="preloader">
        <img src="./../assets/images/loader.png" className="preloader__image" alt="" />
      </div>
      <div className="page-wrapper">
        <div className="topbar-one">
          <div className="container">
            <div className="inner-container">
              <div className="topbar-one__left">
                <a href="mailto:needhelp@potisen.com">needhelp@potisen.com</a>
                <a href="tel:666-888-0000">666 888 0000</a>
              </div>
              <div className="topbar-one__right">
                <a href="donation.html">
                  <i className="fa fa-money"></i> Donate Now
                </a>
                <a href="volunteer.html">
                  <i className="fa fa-user-o"></i>Join Us
                </a>
              </div>
            </div>
          </div>
        </div>
        <header className="site-header site-header__header-one ">
          <nav className="navbar navbar-expand-lg navbar-light header-navigation stricky">
            <div className="container clearfix">
              <div className="logo-box clearfix">
                <a className="navbar-brand" href="index.html">
                  <img
                    src="assets/images/logo-dark.png"
                    className="main-logo"
                    width="177"
                    alt="Awesome Image"
                  />
                </a>
                <button className="menu-toggler" data-target=".main-navigation">
                  <span className="fa fa-bars"></span>
                </button>
              </div>
              <div className="main-navigation">
                <ul className=" navigation-box">
                  <li className="current">
                    <a href="index.html">Home</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="index.html">Home 01</a>
                      </li>
                      <li>
                        <a href="index-2.html">Home 02</a>
                      </li>
                      <li>
                        <a href="#">Header Versions</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="index.html">Header 01</a>
                          </li>
                          <li>
                            <a href="index-2.html">Header 02</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li>
                        <a href="history.html">History</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="donation.html">Contribute</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="donation.html">Donations</a>
                      </li>
                      <li>
                        <a href="volunteer.html">Volunteer</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="event.html">Events</a>
                      </li>
                      <li>
                        <a href="event-details.html">Event Details</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="#news">News</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="news.html">News Page</a>
                      </li>
                      <li>
                        <a href="news-details.html">News Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="right-side-box">
                <div className="header-social">
                  <a href="#" className="fa fa-twitter"></a>
                  <a href="#" className="fa fa-facebook-square"></a>
                  <a href="#" className="fa fa-pinterest-p"></a>
                  <a href="#" className="fa fa-instagram"></a>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <section className="static-banner-one">
          <div className="static-banner-one__bg">
            <div className="static-banner-one__bg-inner"></div>
          </div>
          <div className="container">
            <h2 className="static-banner-one__title">
              Let's Move <br />
              America{" "}
              <span
                className="typed-effect"
                id="type-1"
                data-strings="Forward, Powerful"
              ></span>
            </h2>
            <p className="static-banner-one__text">
              Become a part of our campaign, sign up for updates.
            </p>
            <form
              className="static-banner-one__form mc-form"
              data-url="https://xyz.us18.list-manage.com/subscribe/post?u=20e91746ef818cd941998c598&amp;id=cc0ee8140e"
            >
              <div className="row">
                <div className="col-lg-6">
                  <div className="static-banner-one__form-fields ">
                    <input
                      placeholder="Email Address"
                      type="email"
                      required="required"
                      className="formInput"
                    />
                    <input type="text" name="zip" placeholder="Zip Code" />
                  </div>
                  <button
                    type="submit"
                    className="thm-btn static-banner-one__form-btn"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
            <div className="mc-form__response"></div>
          </div>
        </section>
        <section className="about-four">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-12">
                <div className="about-four__content">
                  <div className="block-title text-left">
                    <p className="block-title__tag-line">Potisen Politics</p>
                    <h2 className="block-title__title">
                      We can build <br /> better future <br /> together
                    </h2>
                  </div>
                  <ul className="list-unstyled about-four__list">
                    <li>
                      <img
                        src="assets/images/resources/menu-active-star.png"
                        alt="Awesome Image"
                      />
                      Lorem ipsum is simply available.
                    </li>
                    <li>
                      <img
                        src="assets/images/resources/menu-active-star.png"
                        alt="Awesome Image"
                      />
                      The majority have suffered alteration.
                    </li>
                    <li>
                      <img
                        src="assets/images/resources/menu-active-star.png"
                        alt="Awesome Image"
                      />
                      Don't look even slightly.
                    </li>
                    <li>
                      <img
                        src="assets/images/resources/menu-active-star.png"
                        alt="Awesome Image"
                      />
                      If you are going to use a passage.
                    </li>
                    <li>
                      <img
                        src="assets/images/resources/menu-active-star.png"
                        alt="Awesome Image"
                      />
                      You need to sure there embarrassing.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-8 col-lg-12">
                <div className="row low-gutters">
                  <div className="col-md-6 wow fadeInUp" data-wow-duration="1500ms">
                    <div className="about-four__image">
                      <img
                        src="assets/images/resources/about-1-1.jpg"
                        className="img-fluid"
                        alt="Awesome Image"
                      />
                      <img
                        src="assets/images/resources/sign.png"
                        className="about-four__sign"
                        alt="Awesome Image"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="about-four__box thm-base-bg-2 wow fadeInUp"
                      data-wow-duration="1500ms"
                    >
                      <div className="about-four__box-top">
                        <i className="potisen-icon-poll"></i>
                        <h4 className="about-four__box-title">Vote Status</h4>
                      </div>
                      <p className="about-four__box-text">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour or randomised.
                      </p>
                      <a href="#" className="thm-btn about-four__btn">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="fact-one">
          <div className="container text-center">
            <img
              src="assets/images/resources/decor-star-1-1.png"
              className="fact-one__star-1"
              alt=""
            />
            <h3 className="fact-one__title counter">468,980</h3>
            <p className="fact-one__text">People have joined the campaigns</p>
            <img
              src="assets/images/resources/decor-star-1-1.png"
              className="fact-one__star-2"
              alt=""
            />
          </div>
        </section>
        <section className="about-three thm-gray-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-three__image">
                  <img
                    src="assets/images/resources/mission-vision.jpg"
                    alt="Awesome Image"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-three__content">
                  <div className="block-title text-left">
                    <img
                      src="assets/images/resources/sec-title-star.png"
                      alt="Awesome Image"
                      className="wow rotateIn"
                      data-wow-duration="1500ms"
                    />
                    <p className="block-title__tag-line">About Potisen</p>
                    <h2 className="block-title__title">Mission and Vision</h2>
                  </div>
                  <div className="about-three__box-wrap">
                    <div className="about-three__box">
                      <i className="potisen-icon-bid"></i>
                      <h4 className="about-three__box-title">
                        Civil Rights <br /> Attorney
                      </h4>
                    </div>
                    <div className="about-three__box">
                      <i className="potisen-icon-work"></i>
                      <h4 className="about-three__box-title">
                        Majored in <br /> Political
                      </h4>
                    </div>
                    <div className="about-three__box">
                      <i className="potisen-icon-politics"></i>
                      <h4 className="about-three__box-title">
                        Political <br /> Solutions
                      </h4>
                    </div>
                  </div>
                  <p className="about-three__text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                  <a href="#" className="thm-btn about-three__btn">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="cta-two cta-two__home-one">
          <div className="container">
            <p className="cta-two__tag-line">Join the Fight for Freedom</p>
            <h3 className="cta-two__title">
              Help us Bring <br /> the Change we Need
            </h3>
            <a href="#" className="thm-btn cta-two__btn">
              Become a Volunteer
            </a>
          </div>
          <div
            className="donation-contribute wow fadeInUp"
            data-wow-duration="1500ms"
          >
            <div className="container">
              <div className="inner-container thm-base-bg-2">
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <h3 className="donation-contribute__title">
                      Contribute to help us win
                    </h3>
                  </div>
                  <div className="col-lg-7">
                    <form className="donation-contribute__form">
                      <div className="donation-contribute__amount">
                        <select className="selectpicker">
                          <option>$</option>
                          <option>₤</option>
                          <option>¥</option>
                        </select>
                        <input type="text" readOnly name="donation-money" value="5.00" />
                      </div>
                      <button
                        type="submit"
                        className="thm-btn donation-contribute__btn"
                      >
                        Donate
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="campaing-one">
          <div className="container">
            <div className="block-title text-center">
              <img
                src="assets/images/resources/sec-title-star.png"
                alt="Awesome Image"
                className="wow rotateIn"
                data-wow-duration="1500ms"
              />
              <p className="block-title__tag-line">Policy Positions</p>
              <h2 className="block-title__title">Campaign Principles</h2>
            </div>
            <div className="row">
              <div className="column-5">
                <div className="campaing-one__single">
                  <i className="potisen-icon-sprout"></i>
                  <h3 className="campaing-one__title">
                    <a href="#">Environment</a>
                  </h3>
                </div>
              </div>
              <div className="column-5">
                <div className="campaing-one__single">
                  <i className="potisen-icon-care"></i>
                  <h3 className="campaing-one__title">
                    <a href="#">Healthcare</a>
                  </h3>
                </div>
              </div>
              <div className="column-5">
                <div className="campaing-one__single">
                  <i className="potisen-icon-medal"></i>
                  <h3 className="campaing-one__title">
                    <a href="#">Tax Returns</a>
                  </h3>
                </div>
              </div>
              <div className="column-5">
                <div className="campaing-one__single">
                  <i className="potisen-icon-idea"></i>
                  <h3 className="campaing-one__title">
                    <a href="#">Economy</a>
                  </h3>
                </div>
              </div>
              <div className="column-5">
                <div className="campaing-one__single">
                  <i className="potisen-icon-mortarboard"></i>
                  <h3 className="campaing-one__title">
                    <a href="#">Education</a>
                  </h3>
                </div>
              </div>
            </div>
            <p className="campaing-one__more-text text-center">
              How we can build a better country together!.{" "}
              <a href="donation.html">Donate or Volunteer.</a>
            </p>
          </div>
        </section>
        <section className="event-one thm-gray-bg event-one__home-one">
          <div className="container">
            <div className="block-title text-center">
              <img
                src="assets/images/resources/sec-title-star.png"
                alt="Awesome Image"
                className="wow rotateIn"
                data-wow-duration="1500ms"
              />
              <p className="block-title__tag-line">Join Campaigns</p>
              <h2 className="block-title__title">Upcoming Events</h2>
            </div>
            <div className="row">
              <div className="col-xl-4">
                <div className="event-one__single">
                  <div className="event-one__image">
                    <div className="event-one__image-inner">
                      <img src="assets/images/event/event-1-1.jpg" alt="" />
                    </div>
                  </div>
                  <div className="event-one__content">
                    <p className="event-one__date">20 Oct, 2019</p>
                    <h3 className="event-one__title">
                      <a href="event-details.html">
                        Let’s meet your candidate in america
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="event-one__single">
                  <div className="event-one__image">
                    <div className="event-one__image-inner">
                      <img src="assets/images/event/event-1-2.jpg" alt="" />
                    </div>
                  </div>
                  <div className="event-one__content">
                    <p className="event-one__date">20 Oct, 2019</p>
                    <h3 className="event-one__title">
                      <a href="event-details.html">
                        Let’s meet your candidate in america
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="event-one__single">
                  <div className="event-one__image">
                    <div className="event-one__image-inner">
                      <img src="assets/images/event/event-1-3.jpg" alt="" />
                    </div>
                  </div>
                  <div className="event-one__content">
                    <p className="event-one__date">20 Oct, 2019</p>
                    <h3 className="event-one__title">
                      <a href="event-details.html">
                        Let’s meet your candidate in america
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="countdown-one thm-gray-bg countdown-one__home-one">
          <div className="container">
            <div className="inner-container">
              <div className="row align-items-xl-center align-items-lg-center">
                <div className="col-xl-6">
                  <h3 className="countdown-one__title">
                    Our new campaign starts in:
                  </h3>
                </div>
                <div className="col-xl-6 d-flex justify-content-xl-end justify-content-lg-center justify-content-sm-center">
                  <div className="countdown-one__right">
                    <ul className="countdown-one__list list-unstyled"></ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-two">
          <div className="container">
            <div className="block-title text-center">
              <img
                src="assets/images/resources/sec-title-star.png"
                alt="Awesome Image"
                className="wow rotateIn"
                data-wow-duration="1500ms"
              />
              <p className="block-title__tag-line">Join Campaigns</p>
              <h2 className="block-title__title">
                We Will Make <br /> History Together
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="about-two__content">
                  <div className="row">
                    <div className="col-sm-4">
                      <img
                        src="assets/images/resources/history-1-1.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-sm-4">
                      <img
                        src="assets/images/resources/history-1-2.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-sm-4">
                      <img
                        src="assets/images/resources/history-1-3.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <p className="about-two__text">
                    Lorem Ipsum is simply dummy text of the printing and type
                    setting industry has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled to make a type specimen book. It has
                    survived not only five centuries but also the leap into
                    electronic type setting.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="accrodion-grp" data-grp-name="faq-accrodion">
                  <div className="accrodion active">
                    <div className="accrodion-title">
                      <h4>Political organization that typically seeks</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          It has survived not only five centuries but also the
                          leap into electronic type setting. when an unknown
                          printer took a galley of type and scrambled to make a
                          type specimen book.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accrodion ">
                    <div className="accrodion-title">
                      <h4>Strong politics plan require experience</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          It has survived not only five centuries but also the
                          leap into electronic type setting. when an unknown
                          printer took a galley of type and scrambled to make a
                          type specimen book.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accrodion">
                    <div className="accrodion-title">
                      <h4>Attract and retain quality high paying customers</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          It has survived not only five centuries but also the
                          leap into electronic type setting. when an unknown
                          printer took a galley of type and scrambled to make a
                          type specimen book.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials-two">
          <div className="testimonials-two__carousel">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div
                  className="testimonials-two__single"
                  style={{backgroundImage: 'url(assets/images/testimonials/testimonials-1-bg.jpg)'}}
                >
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-lg-7">
                        <i className="potisen-icon-quote testimonials-two__icon"></i>
                        <h3 className="testimonials-two__text">
                          This is due to their excellent service, competitive
                          pricing and customer support. It’s throughly refresing
                          to get such a personal touch.
                        </h3>
                        <p className="testimonials-two__name">Gary Hilk</p>
                      </div>
                      <div className="col-lg-5 d-flex justify-content-xl-end justify-content-sm-start">
                        <div className="testimonials-two__btn-wrap">
                          <a href="#" className="testimonials-two__btn">
                            <i className="fa fa-play"></i>
                          </a>
                          <span className="testimonials-two__btn-tag-line">
                            Watch Campaigns{" "}
                            <img
                              src="assets/images/resources/video-arrow.png"
                              alt="Awesome Image"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div
                  className="testimonials-two__single"
                  style={{backgroundImage: 'url(assets/images/testimonials/testimonials-2-bg.jpg)'}}
                >
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-lg-7">
                        <i className="potisen-icon-quote testimonials-two__icon"></i>
                        <h3 className="testimonials-two__text">
                          This is due to their excellent service, competitive
                          pricing and customer support. It’s throughly refresing
                          to get such a personal touch.
                        </h3>
                        <p className="testimonials-two__name">Naida Bowline</p>
                      </div>
                      <div className="col-lg-5 d-flex justify-content-xl-end justify-content-sm-start">
                        <div className="testimonials-two__btn-wrap">
                          <a href="#" className="testimonials-two__btn">
                            <i className="fa fa-play"></i>
                          </a>
                          <span className="testimonials-two__btn-tag-line">
                            Watch Campaigns{" "}
                            <img
                              src="assets/images/resources/video-arrow.png"
                              alt="Awesome Image"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div
                  className="testimonials-two__single"
                  style={{ backgroundImage: 'url(assets/images/testimonials/testimonials-3-bg.jpg)' }}
                >
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-lg-7">
                        <i className="potisen-icon-quote testimonials-two__icon"></i>
                        <h3 className="testimonials-two__text">
                          This is due to their excellent service, competitive
                          pricing and customer support. It’s throughly refresing
                          to get such a personal touch.
                        </h3>
                        <p className="testimonials-two__name">Caroline Ocheltree</p>
                      </div>
                      <div className="col-lg-5 d-flex justify-content-xl-end justify-content-sm-start">
                        <div className="testimonials-two__btn-wrap">
                          <a href="#" className="testimonials-two__btn">
                            <i className="fa fa-play"></i>
                          </a>
                          <span className="testimonials-two__btn-tag-line">
                            Watch Campaigns{" "}
                            <img
                              src="assets/images/resources/video-arrow.png"
                              alt="Awesome Image"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div
                  className="testimonials-two__single"
                  style={{ backgroundImage: 'url(assets/images/testimonials/testimonials-4-bg.jpg)' }}
                >
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-lg-7">
                        <i className="potisen-icon-quote testimonials-two__icon"></i>
                        <h3 className="testimonials-two__text">
                          This is due to their excellent service, competitive
                          pricing and customer support. It’s throughly refresing
                          to get such a personal touch.
                        </h3>
                        <p className="testimonials-two__name">Corey Gessner</p>
                      </div>
                      <div className="col-lg-5 d-flex justify-content-xl-end justify-content-sm-start">
                        <div className="testimonials-two__btn-wrap">
                          <a href="#" className="testimonials-two__btn">
                            <i className="fa fa-play"></i>
                          </a>
                          <span className="testimonials-two__btn-tag-line">
                            Watch Campaigns{" "}
                            <img
                              src="assets/images/resources/video-arrow.png"
                              alt="Awesome Image"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonials-two__bottom thm-gray-bg">
            <div className="container">
              <div className="testimonials-two__thumb-carousel">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img
                      src="assets/images/testimonials/testimonials-1-thumb.jpg"
                      alt=""
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="assets/images/testimonials/testimonials-2-thumb.jpg"
                      alt=""
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="assets/images/testimonials/testimonials-3-thumb.jpg"
                      alt=""
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="assets/images/testimonials/testimonials-4-thumb.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mailchimp-one">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <h3 className="mailchimp-one__title">
                  Don't miss our monthly updates
                </h3>
              </div>
              <div className="col-lg-7">
                <form
                  className="mailchimp-one__form mc-form"
                  data-url="https://xyz.us18.list-manage.com/subscribe/post?u=20e91746ef818cd941998c598&amp;id=cc0ee8140e"
                >
                  <input
                    placeholder="Email Address"
                    type="email"
                    required="required"
                    className="formInput"
                    name="EMAIL"
                  />
                  <button type="submit" className="thm-btn mailchimp-one__form-btn">
                    Subscribe
                  </button>
                </form>
                <div className="mc-form__response"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="blog-one blog-one__home-one">
          <div className="container">
            <div className="block-title text-center">
              <img
                src="assets/images/resources/sec-title-star.png"
                alt="Awesome Image"
                className="wow rotateIn"
                data-wow-duration="1500ms"
              />
              <p className="block-title__tag-line">Potisen Updates</p>
              <h2 className="block-title__title">From Campaign</h2>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                <div className="blog-one__single">
                  <div className="blog-one__image">
                    <img src="assets/images/blog/blog-1-1.jpg" alt="" />
                    <a className="blog-one__more-link" href="blog-details.html">
                      <i className="fa fa-link"></i>
                    </a>
                  </div>
                  <div className="blog-one__content">
                    <ul className="list-unstyled blog-one__meta">
                      <li>
                        <a href="#">22 Oct, 2019</a>
                      </li>
                    </ul>
                    <h3 className="blog-one__title">
                      <a href="blog-details.html">
                        Pre and post launch mobile app marke- ting pitfalls{" "}
                      </a>
                    </h3>
                    <a href="blog-details.html" className="blog-one__link">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                <div className="blog-one__single">
                  <div className="blog-one__image">
                    <img src="assets/images/blog/blog-1-2.jpg" alt="" />
                    <a className="blog-one__more-link" href="blog-details.html">
                      <i className="fa fa-link"></i>
                    </a>
                  </div>
                  <div className="blog-one__content">
                    <ul className="list-unstyled blog-one__meta">
                      <li>
                        <a href="#">22 Oct, 2019</a>
                      </li>
                    </ul>
                    <h3 className="blog-one__title">
                      <a href="blog-details.html">
                        It is all exactly as i said, but i don't like it let's
                        unpack that
                      </a>
                    </h3>
                    <a href="blog-details.html" className="blog-one__link">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                <div className="blog-one__single">
                  <div className="blog-one__image">
                    <img src="assets/images/blog/blog-1-3.jpg" alt="" />
                    <a className="blog-one__more-link" href="blog-details.html">
                      <i className="fa fa-link"></i>
                    </a>
                  </div>
                  <div className="blog-one__content">
                    <ul className="list-unstyled blog-one__meta">
                      <li>
                        <a href="#">22 Oct, 2019</a>
                      </li>
                    </ul>
                    <h3 className="blog-one__title">
                      <a href="blog-details.html">
                        I just wanted to give you a heads-up, this you feel you
                        would
                      </a>
                    </h3>
                    <a href="blog-details.html" className="blog-one__link">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="brand-one thm-gray-bg">
          <div className="container">
            <div className="brand-one__carousel owl-carousel owl-theme">
              <div className="item">
                <img src="assets/images/resources/brand-1-1.png" alt="" />
              </div>
              <div className="item">
                <img src="assets/images/resources/brand-1-1.png" alt="" />
              </div>
              <div className="item">
                <img src="assets/images/resources/brand-1-1.png" alt="" />
              </div>
              <div className="item">
                <img src="assets/images/resources/brand-1-1.png" alt="" />
              </div>
              <div className="item">
                <img src="assets/images/resources/brand-1-1.png" alt="" />
              </div>
              <div className="item">
                <img src="assets/images/resources/brand-1-1.png" alt="" />
              </div>
              <div className="item">
                <img src="assets/images/resources/brand-1-1.png" alt="" />
              </div>
              <div className="item">
                <img src="assets/images/resources/brand-1-1.png" alt="" />
              </div>
              <div className="item">
                <img src="assets/images/resources/brand-1-1.png" alt="" />
              </div>
              <div className="item">
                <img src="assets/images/resources/brand-1-1.png" alt="" />
              </div>
              <div className="item">
                <img src="assets/images/resources/brand-1-1.png" alt="" />
              </div>
              <div className="item">
                <img src="assets/images/resources/brand-1-1.png" alt="" />
              </div>
              <div className="item">
                <img src="assets/images/resources/brand-1-1.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <section className="social-shares">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="social-shares__facebook thm-base-bg text-center">
                  <i className="fa fa-facebook-square"></i>
                  <p className="social-shares__facebook-name">Facebook</p>
                  <h3 className="social-shares__facebook-count">280,366</h3>
                  <a href="#" className="social-shares__facebook-link">
                    #potisenfacebook
                  </a>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="social-shares__twitter thm-base-bg-2">
                  <h3 className="social-shares__twitter-title">Latest Tweets</h3>
                  <div className="social-shares__twitter-carousel owl-carousel owl-theme">
                    <div className="item">
                      <div className="social-shares__twitter-single">
                        <p className="social-shares__twitter-text">
                          A Bill of Rights is what the people are entitled to
                          against{" "}
                          <a href="#">
                            <strong>#politics</strong>
                          </a>{" "}
                          every government, and what no just government should
                          refuse, or rest on inference.{" "}
                          <a href="#">https://t.co/LpyuHZaOMK</a>{" "}
                          <a href="#">#ASMSG</a>
                        </p>
                        <div className="social-shares__twitter-info">
                          <p className="social-shares__twitter-info-text">
                            <a href="#">@potisentwitterfollow</a>
                            <span>5 minutes ago</span>
                          </p>
                          <i className="fa fa-twitter"></i>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="social-shares__twitter-single">
                        <p className="social-shares__twitter-text">
                          A Bill of Rights is what the people are entitled to
                          against{" "}
                          <a href="#">
                            <strong>#politics</strong>
                          </a>{" "}
                          every government, and what no just government should
                          refuse, or rest on inference.{" "}
                          <a href="#">https://t.co/LpyuHZaOMK</a>{" "}
                          <a href="#">#ASMSG</a>
                        </p>
                        <div className="social-shares__twitter-info">
                          <p className="social-shares__twitter-info-text">
                            <a href="#">@potisentwitterfollow</a>
                            <span>5 minutes ago</span>
                          </p>
                          <i className="fa fa-twitter"></i>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="social-shares__twitter-single">
                        <p className="social-shares__twitter-text">
                          A Bill of Rights is what the people are entitled to
                          against{" "}
                          <a href="#">
                            <strong>#politics</strong>
                          </a>{" "}
                          every government, and what no just government should
                          refuse, or rest on inference.{" "}
                          <a href="#">https://t.co/LpyuHZaOMK</a>{" "}
                          <a href="#">#ASMSG</a>
                        </p>
                        <div className="social-shares__twitter-info">
                          <p className="social-shares__twitter-info-text">
                            <a href="#">@potisentwitterfollow</a>
                            <span>5 minutes ago</span>
                          </p>
                          <i className="fa fa-twitter"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <div className="site-footer__logo text-center">
            <a href="index.html">
              <img src="assets/images/logo-light.png" alt="" width="174" />
            </a>
          </div>
          <div className="site-footer__upper">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="footer-widget">
                    <h3 className="footer-widget__title">About</h3>
                    <p className="footer-widget__text">
                      Lorem ipsum is simply dolor sit ametcn <br /> sectetur
                      adipiscing elit. Phasellus vehic <br /> sagittis euismod.
                    </p>
                    <div className="footer-widget__social">
                      <a href="#" className="fa fa-twitter"></a>
                      <a href="#" className="fa fa-facebook-square"></a>
                      <a href="#" className="fa fa-pinterest-p"></a>
                      <a href="#" className="fa fa-instagram"></a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-6 col-md-6 col-sm-12">
                  <div className="footer-widget footer-widget__links">
                    <h3 className="footer-widget__title">Explore</h3>
                    <ul className="list-unstyled footer-widget__links-list">
                      <li>
                        <a href="#">About Potisen</a>
                      </li>
                      <li>
                        <a href="#">Volunteering</a>
                      </li>
                      <li>
                        <a href="#">Contribute</a>
                      </li>
                      <li>
                        <a href="#">Join Our Community</a>
                      </li>
                      <li>
                        <a href="#">Latest News</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                  <div className="footer-widget footer-widget__posts">
                    <h3 className="footer-widget__title">Updates</h3>
                    <ul className="list-unstyled footer-widget__posts-list">
                      <li>
                        <div className="footer-widget__posts-image">
                          <img
                            src="assets/images/resources/footer-post-1-1.png"
                            alt=""
                          />
                        </div>
                        <div className="footer-widget__posts-content">
                          <h4 className="footer-widget__posts-title">
                            <a href="news-details.html">
                              International conference
                            </a>
                          </h4>
                          <p className="footer-widget__posts-date">20 Oct, 2019</p>
                        </div>
                      </li>
                      <li>
                        <div className="footer-widget__posts-image">
                          <img
                            src="assets/images/resources/footer-post-1-2.png"
                            alt=""
                          />
                        </div>
                        <div className="footer-widget__posts-content">
                          <h4 className="footer-widget__posts-title">
                            <a href="news-details.html">
                              The strength of democracy
                            </a>
                          </h4>
                          <p className="footer-widget__posts-date">20 Oct, 2019</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                  <div className="footer-widget footer-widget__contact">
                    <h3 className="footer-widget__title">Contact</h3>
                    <ul className="list-unstyled footer-widget__contact-list">
                      <li>
                        <i className="potisen-icon-phone"></i>
                        <a href="tel:666-888-000">666 888 000</a>
                      </li>
                      <li>
                        <i className="potisen-icon-mail"></i>
                        <a href="mailto:needhelp@example.com">
                          needhelp@example.com
                        </a>
                      </li>
                      <li>
                        <i className="potisen-icon-pin"></i>
                        22 Broklyn Street 30 Road. New <br /> York United States
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="site-footer__bottom">
            <div className="container">
              <div className="inner-container text-center">
                <p className="site-footer__copy">
                  &copy; copyright 2019 by <a href="#">Layerdrops.com</a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
        <i className="fa fa-angle-up"></i>
      </a>
    </React.Fragment>
  )
}
