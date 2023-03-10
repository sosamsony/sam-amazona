import React from "react";

import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over $150 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:{" "}
                <a href="tel:+201114181442" className="text-white">
                  01114181442
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>

      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white">Amazona.</Link>
              </h2>
            </div>

            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control shadow-none py-2"
                  placeholder="Search Amazona..."
                  aria-label="Search Amazona..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text px-3" id="basic-addon2">
                  <BsSearch className="fs-5" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src="images/compare.svg" alt="Compare" />
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src="images/wishlist.svg" alt="Wishlist" />
                    <p className="mb-0">
                      Favorites <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src="images/user.svg" alt="User" />
                    <p className="mb-0">
                      Login <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src="images/cart.svg" alt="Cart" />
                    <div className="d-flex flex-column gap-1">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">$500,00</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown shadow-none">
                    <button
                      className="btn btn-secondary dropdown-toggle shadow-none bg-transparent d-flex align-items-center gap-15"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="images/menu.svg" alt="Menu" />
                      <span className="me-3 d-inline-block">
                        Shop Categories
                      </span>
                    </button>
                    <ul className="dropdown-menu shadow-none w-100">
                      <li>
                        <Link className="dropdown-item" to="">
                          All Departments
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="">
                          Arts & Crafts
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="">
                          Beauty & Personal Care
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="">
                          Books
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="">
                          Computers
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="">
                          Electronics
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="">
                          Health & Household
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="">
                          Home & Kitchen
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="">
                          Kindle Store
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="">
                          Movies & TV
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="">
                          Software
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">Our Store</NavLink>
                    <NavLink to="/">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
