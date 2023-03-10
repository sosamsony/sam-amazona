import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-align-items-center">
                <img src="images/newsletter.png" alt="Newsletter" />
                <h4 className="mb-0 text-white">Sign up for our newsletter</h4>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control shadow-none py-1"
                  placeholder="Enter your email"
                  aria-label="Enter your email"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text px-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <h5 className="text-white mb-4">Get to Know Us</h5>
              <div className="footer-links d-flex flex-column mb-2">
                <Link className="text-white py-2 mb-1">Careers</Link>
                <Link className="text-white py-2 mb-1">Blog</Link>
                <Link className="text-white py-2 mb-1">About Amazona</Link>
              </div>

              <div className="social_icons d-flex align-items-center gap-30">
                <Link href="" className="text-white">
                  <BsLinkedin className="fs-5" />
                </Link>
                <Link href="" className="text-white">
                  <BsFacebook className="fs-5" />
                </Link>
                <Link href="" className="text-white">
                  <BsInstagram className="fs-5" />
                </Link>
                <Link href="" className="text-white">
                  <BsTwitter className="fs-5" />
                </Link>
              </div>
            </div>

            <div className="col-4">
              <h5 className="text-white mb-4">Make Money With Us</h5>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">
                  Sell products on Amazona
                </Link>
                <Link className="text-white py-2 mb-1">
                  Sell on Amazona Business
                </Link>
                <Link className="text-white py-2 mb-1">
                  Sell apps on Amazona
                </Link>
                <Link className="text-white py-2 mb-1">
                  Become an Affiliate
                </Link>
                <Link className="text-white py-2 mb-1">
                  Advertise Your Products
                </Link>
                <Link className="text-white py-2 mb-1">
                  Self-Publish with Us
                </Link>
              </div>
            </div>

            <div className="col-3">
              <h5 className="text-white mb-4">Payment Products</h5>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">
                  Amazon Business Card
                </Link>
                <Link className="text-white py-2 mb-1">Shop with Points</Link>
                <Link className="text-white py-2 mb-1">
                  Reload Your Balance
                </Link>
                <Link className="text-white py-2 mb-1">
                  Amazona Currency Converter
                </Link>
              </div>
            </div>

            <div className="col-2">
              <h5 className="text-white mb-4">Let Us Help You</h5>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Your Account</Link>
                <Link className="text-white py-2 mb-1">Your Orders</Link>
                <Link className="text-white py-2 mb-1">Amazona Assistant</Link>
                <Link className="text-white py-2 mb-1">
                  Your Content and Devices
                </Link>
                <Link className="text-white py-2 mb-1">
                  Returns & Replacements
                </Link>
                <Link className="text-white py-2 mb-1">Help</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center text-white mb-0">
                &copy; {new Date().getFullYear()} . Powered By Samson Sanyaolu
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
