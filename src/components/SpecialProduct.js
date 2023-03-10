import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProduct = (props) => {
  return (
    <div className="col-4">
      <div className="special-product-card py-4">
        <div className="d-flex gap-30">
          <div className="special-img">
            <img
              src={props.imgUrl}
              className="img-fluid"
              alt="Special Product"
            />
          </div>

          <div className="special-product-content">
            <h5 className="category fs-6">{props.category}</h5>
            <h6 className="title fs-5">{props.title}</h6>

            <ReactStars
              className="mb-5"
              count={5}
              size={24}
              edit={false}
              value={props.rate}
              activeColor="#ffc462"
            />

            <p className="price">
              <span className="red-p">{props.price}</span>
              &nbsp;
              <strike>{props.discount}</strike>
            </p>

            <div className="discount-till d-flex align-items-center gap-4">
              <p className="mb-0">
                <b>3</b> days
              </p>

              <div className="d-flex align-items-center gap-2">
                <span className="badge rounded-circle p-2">99</span>:
                <span className="badge rounded-circle p-2">99</span>:
                <span className="badge rounded-circle p-2">99</span>
              </div>
            </div>

            <div className="product-count mt-3 mb-3">
              <p className="mb-0">Products: 5</p>
              {/* <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "45%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div> */}
            </div>

            <Link to="" className="button">
              Add to cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
