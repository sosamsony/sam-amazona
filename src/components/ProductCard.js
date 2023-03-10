import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { AiOutlineHeart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";

const ProductCard = (props) => {
  return (
    <div className="col-2">
      <Link to="" className="product-card">
        <div className="product-actions">
          <Link to="/" className="wishlist">
            <AiOutlineHeart className="fs-5" />
          </Link>

          <Link to="/" className="view">
            <BsEye className="fs-5" />
          </Link>
        </div>

        <div className="product-image">
          <img src={props.imgUrl} className="img-fluid" alt="Card Img" />
        </div>

        <div className="product-details">
          <p className="category">{props.category}</p>
          <h5 className="title">{props.title}</h5>
          <ReactStars
            className="mb-5"
            count={5}
            size={24}
            edit={false}
            value={props.rate}
            activeColor="#ffc462"
          />
          <p className="price">{props.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
