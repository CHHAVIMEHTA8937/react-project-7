import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="hero_area">
        <header className="header_section">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container">

              <Link className="navbar-brand" to="/">
                <img src="/assets/images/logo.png" alt="Logo" />
                <span>Lodge</span>
              </Link>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                  <ul className="navbar-nav">

                    <li className="nav-item active">
                      <Link className="nav-link" to="/home">Home</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/about">About</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/jewellery">Jewellery</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">Contact us</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/login">Login</Link>
                    </li>

                  </ul>
                </div>

                <div className="quote_btn-container">
                  <button type="button">
                    <img src="/assets/images/cart.png" alt="Cart" />
                  </button>
                </div>

              </div>
            </nav>
          </div>
        </header>

        <section className="slider_section position-relative">
          <div className="design-box">
            <img src="/assets/images/design-1.png" alt="" />
          </div>

          <div className="container">
            <div className="row">

              <div className="col-md-6">
                <div className="detail_box">
                  <h2>New Collection</h2>
                  <h1>Jewellery</h1>
                  <p>Lorem ipsum dolor sit amet...</p>

                  <button type="button">Shop Now</button>
                </div>
              </div>

              <div className="col-md-6">
                <div className="img-box">
                  <img src="/assets/images/hero.jpg" alt="Hero" />
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>

      <div className="item_section layout_padding2">
        <div className="container">
          <div className="item_container">

            <div className="box">
              <div className="price">
                <h6>Best PRICE</h6>
              </div>
              <div className="img-box">
                <img src="/assets/images/earrings.png" alt="Bracelet" />
              </div>
              <div className="name">
                <h5>Bracelet</h5>
              </div>
            </div>

            <div className="box">
              <div className="price">
                <h6>Best PRICE</h6>
              </div>
              <div className="img-box">
                <img src="/assets/images/multiplejewellery.png" alt="Ring" />
              </div>
              <div className="name">
                <h5>Ring</h5>
              </div>
            </div>

            <div className="box">
              <div className="price">
                <h6>Best PRICE</h6>
              </div>
              <div className="img-box">
                <img src="/assets/images/nacklace.png" alt="Earrings" />
              </div>
              <div className="name">
                <h5>Earrings</h5>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Header;