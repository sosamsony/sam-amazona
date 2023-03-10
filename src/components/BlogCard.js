import React from "react";
import { Link } from "react-router-dom";

const BlogCard = (props) => {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="blog-image">
          <img src={props.imgUrl} className="img-fluid" alt="Card Img" />
        </div>

        <div className="blog-content">
          <p className="date">{props.date}</p>
          <h5 className="title">{props.title}</h5>
          <p className="desc">{props.desc}</p>
          <Link to="/" className="button">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
