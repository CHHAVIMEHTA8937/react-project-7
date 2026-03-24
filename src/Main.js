import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <section className="about_section layout_padding2-top layout_padding-bottom">
        <div className="design-box">
          <img src="/assets/images/design-2.png" alt="Design" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>About Jewellery Shop</h2>
                </div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>

                <div>
                  <Link to="/about" className="btn-link">Read More</Link>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="img-box">
                <img src="/assets/images/about.jpg" alt="About" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="price_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Our Jewellery Price</h2>
          </div>

          <div className="price_container">
            <div className="box">
              <div className="name">
                <h6>Earrings</h6>
              </div>

              <div className="img-box">
                <img src="/assets/images/earrings.jpg" alt="Earrings" />
              </div>

              <div className="detail-box">
                <h5>$<span>1000</span></h5>
                <Link to="/jewellery" className="btn-link">Buy Now</Link>
              </div>
            </div>

            <div className="box">
              <div className="name">
                <h6>Multiple Jewellery</h6>
              </div>

              <div className="img-box">
                <img src="/assets/images/multiple_jewellery.jpg" alt="Multiple Jewellery" />
              </div>

              <div className="detail-box">
                <h5>$<span>10000</span></h5>
                <Link to="/jewellery" className="btn-link">Buy Now</Link>
              </div>
            </div>

            <div className="box">
              <div className="name">
                <h6>Necklace Set</h6>
              </div>

              <div className="img-box">
                <img src="/assets/images/necklace_set.jpg" alt="Necklace Set" />
              </div>

              <div className="detail-box">
                <h5>$<span>100000</span></h5>
                <Link to="/jewellery" className="btn-link">Buy Now</Link>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <Link to="/jewellery" className="price_btn">See More</Link>
          </div>
        </div>
      </section>

      <section className="ring_section layout_padding">
        <div className="design-box">
          <img src="/assets/images/design-1.png" alt="Design" />
        </div>

        <div className="container">
          <div className="ring_container layout_padding2">
            <div className="row">
              <div className="col-md-5">
                <div className="detail-box">
                  <h4>Special</h4>
                  <h2>Wedding Ring</h2>
                  <Link to="/jewellery" className="btn-link">Buy Now</Link>
                </div>
              </div>

              <div className="col-md-7">
                <div className="img-box">
                  <img src="/assets/images/ring.jpg" alt="Wedding Ring" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="client_section">
        <div className="container">
          <div className="heading_container">
            <h2>Testimonial</h2>
          </div>

          <h4 className="secondary_heading">What says our customer</h4>

          <div id="carouselExampleControls" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="client_container">
                  <div className="client-id">
                    <div className="img-box">
                      <img src="/assets/images/clients1.jpg" alt="Client" />
                    </div>
                    <div className="name">
                      <h5>Aliqua</h5>
                      <h6>Consectetur adipiscing</h6>
                    </div>
                  </div>

                  <div className="detail-box">
                    <p>Lorem ipsum dolor sit amet...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact_section layout_padding">
        <div className="design-box">
          <img src="/assets/images/design-2.jpg" alt="Design" />
        </div>

        <div className="container">
          <h2>Contact Us</h2>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <form>
                <div>
                  <input type="text" placeholder="Name" />
                </div>

                <div>
                  <input type="email" placeholder="Email" />
                </div>

                <div>
                  <input type="text" placeholder="Phone" />
                </div>

                <div>
                  <input type="text" className="message-box" placeholder="Message" />
                </div>

                <div className="d-flex">
                  <button type="submit">SEND</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="info_section">
        <div className="container">
          <div className="info_container">
            <div className="row">
              <div className="col-md-3">
                <div className="info_logo">
                  <Link to="/">
                    <img src="/assets/images/logo.png" alt="Logo" />
                    <span>Lodge</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="info_form">
              <div className="d-flex justify-content-center">
                <h5 className="info_heading">Newsletter</h5>
              </div>

              <form>
                <div className="email_box">
                  <label htmlFor="email2">Enter Your Email</label>
                  <input type="text" id="email2" />
                </div>

                <div>
                  <button>Subscribe</button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Main;