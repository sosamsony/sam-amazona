import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  className="img-fluid rounded-3"
                  src="images/main-banner.jpg"
                  alt="Main Banner Content"
                />

                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>Sony ZX Series Wired</h5>
                  <p>On-Ear Headphones, Black MDR-ZX110</p>
                  <Link className="button" to="">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-align-items-center">
                <div className="small-banner position-relative">
                  <img
                    className="img-fluid rounded-3"
                    src="images/catbanner-01.jpg"
                    alt="Main Banner Content"
                  />

                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Apple MacBook</h5>
                    <p>Laptop M2 Pro chip</p>
                  </div>
                </div>

                <div className="small-banner position-relative">
                  <img
                    className="img-fluid rounded-3"
                    src="images/catbanner-03.jpg"
                    alt="Main Banner Content"
                  />

                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Apple iPad Air</h5>
                    <p>Purple - 5th Generation</p>
                  </div>
                </div>

                <div className="small-banner position-relative">
                  <img
                    className="img-fluid rounded-3"
                    src="images/catbanner-02.jpg"
                    alt="Main Banner Content"
                  />

                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Apple iPad Air</h5>
                    <p>Purple - 5th Generation</p>
                  </div>
                </div>

                <div className="small-banner position-relative">
                  <img
                    className="img-fluid rounded-3"
                    src="images/catbanner-04.jpg"
                    alt="Main Banner Content"
                  />

                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Apple iPad Air</h5>
                    <p>Purple - 5th Generation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service.png" alt="Services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all orders over $100</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-02.png" alt="Services" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0">Save up to 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-03.png" alt="Services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-04.png" alt="Services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get factory direct price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-05.png" alt="Services" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 pb-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap justify-content-between align-items-center gap-15">
                <div className="d-flex gap-30 align-items-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <img src="images/camera.png" alt="Cameras" />
                  </div>

                  <div>
                    <h6>Camera</h6>
                  </div>
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <img src="images/tv-monitor.png" alt="Cameras" />
                  </div>

                  <div>
                    <h6>Smart Tv</h6>
                  </div>
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <img src="images/headphones.png" alt="Headphone" />
                  </div>

                  <div>
                    <h6>Headset</h6>
                  </div>
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <img src="images/speaker.png" alt="Cameras" />
                  </div>

                  <div>
                    <h6>Speaker</h6>
                  </div>
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <img src="images/joystick.png" alt="Cameras" />
                  </div>

                  <div>
                    <h6>Gaming</h6>
                  </div>
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <img src="images/smartphone.png" alt="Headphone" />
                  </div>

                  <div>
                    <h6>Phone</h6>
                  </div>
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <img src="images/smart-watch.png" alt="Headphone" />
                  </div>

                  <div>
                    <h6>Watch</h6>
                  </div>
                </div>

                <div className="d-flex gap-30 align-items-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <img src="images/laptop.png" alt="Headphone" />
                  </div>

                  <div>
                    <h6>Laptop</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-title">Featured Products</h3>
            </div>
            <ProductCard
              imgUrl="images/watch.jpg"
              category="Smart Watches"
              title="Round Face 2023"
              price="$39"
              rate="3"
            />
            <ProductCard
              imgUrl="images/headphone.jpg"
              category="Headphones"
              title="Beats Solo3"
              price="$119"
              rate="4"
            />
            <ProductCard
              imgUrl="images/homeapp.jpg"
              category="Kitchen Tools"
              title="BUYDEEM Toaster"
              price="$72"
              rate="5"
            />
            <ProductCard
              imgUrl="images/speaker.jpg"
              category="Speakers"
              title="Portable Speaker"
              price="$25"
              rate="4"
            />
            <ProductCard
              imgUrl="images/acc.jpg"
              category="Buds"
              title="Studio Buds"
              price="$55"
              rate="3"
            />
            <ProductCard
              imgUrl="images/laptop.jpg"
              category="Laptops"
              title="MacBook Pro"
              price="$2000"
              rate="5"
            />
          </div>
        </div>
      </section>

      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-title">Special Products</h3>
            </div>
          </div>

          <div className="row gap-0">
            <SpecialProduct
              imgUrl="images/special-1.jpg"
              category="Mobiles"
              title="SAMSUNG Galaxy S23"
              rate="4"
              price="$1056"
              discount="$1600"
            />

            <SpecialProduct
              imgUrl="images/special-2.jpg"
              category="Mobiles"
              title="SAMSUNG Galaxy S23"
              rate="5"
              price="$565"
              discount="$580"
            />

            <SpecialProduct
              imgUrl="images/special-3.jpg"
              category="Mobiles"
              title="SAMSUNG Galaxy S23"
              rate="4"
              price="$453"
              discount="$460"
            />
          </div>
        </div>
      </section>

      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-title">Our Popular Products</h3>
            </div>
          </div>

          <div className="row">
            <ProductCard
              imgUrl="images/watch.jpg"
              category="Smart Watches"
              title="Round Face 2023"
              price="$39"
              rate="3"
            />
            <ProductCard
              imgUrl="images/headphone.jpg"
              category="Headphones"
              title="Beats Solo3"
              price="$119"
              rate="4"
            />
            <ProductCard
              imgUrl="images/homeapp.jpg"
              category="Kitchen Tools"
              title="BUYDEEM Toaster"
              price="$72"
              rate="5"
            />
            <ProductCard
              imgUrl="images/speaker.jpg"
              category="Speakers"
              title="Portable Speaker"
              price="$25"
              rate="4"
            />
            <ProductCard
              imgUrl="images/acc.jpg"
              category="Buds"
              title="Studio Buds"
              price="$55"
              rate="3"
            />
            <ProductCard
              imgUrl="images/laptop.jpg"
              category="Laptops"
              title="MacBook Pro"
              price="$2000"
              rate="5"
            />
          </div>
        </div>
      </section>

      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marque-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img
                      className="img-fluid"
                      src="images/brand-01.png"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      className="img-fluid"
                      src="images/brand-02.png"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      className="img-fluid"
                      src="images/brand-03.png"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      className="img-fluid"
                      src="images/brand-04.png"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      className="img-fluid"
                      src="images/brand-05.png"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      className="img-fluid"
                      src="images/brand-06.png"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      className="img-fluid"
                      src="images/brand-07.png"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      className="img-fluid"
                      src="images/brand-08.png"
                      alt="brand"
                    />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-title">Our Latest News</h3>
            </div>
            <BlogCard
              imgUrl="images/blog-1.jpg"
              date="3 March 2023"
              title="Amazona helps employees learn and earn"
              desc="We committed to spending $1.2 billion by 2025 to provide prepaid education and free technical skills training"
            />
            <BlogCard
              imgUrl="images/blog-2.jpg"
              date="25 January 2023"
              title="Amazona pays college tuition for front-line employees"
              desc="Amazona offers prepaid tuition for college, courses to earn high school diplomas and GEDs, and English as a second language certifications"
            />
            <BlogCard
              imgUrl="images/blog-3.jpg"
              date="15 January 2023"
              title="One Medical joins Amazona to make it easier for people"
              desc="Together, Amazona and One Medical will help more people get better care, when and how they need it"
            />
            <BlogCard
              imgUrl="images/blog-4.jpg"
              date="2 January 2023"
              title="3 new features to try out on your Kindle Scribe"
              desc="Here are a few new features that will bring your Kindle Scribe experience to the next level. New brush types for a more versatile Pen experience"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
