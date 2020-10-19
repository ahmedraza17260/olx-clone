/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
// import { Card } from "react-bootstrap";

function AddItem({ id, image, price, title, location, time }) {
  // if ("placeholder" in props)
  return (
    <div className="add-item">
      <div className="poster anim home__image placeholder">
        {/* <Card.Img className="img" variant="top" src={image} /> */}
        <img
          style={{ width: "250px", display: "block", margin: "0 auto" }}
          src={image}
          alt="image-1"
        />
      </div>
      <div className="title anim placeholder">
        <h3>Rs {price}</h3>
      </div>
      <div className="tagline anim placeholder">
        <p>{title}</p>
      </div>
      <div className="ftr anim flex">
        <div className="anim location placeholder">
          <p>{location}</p>
        </div>
        <div className="anim stamp placeholder">
          <p style={{ float: "right" }}>{time}</p>
        </div>
      </div>
    </div>
  );
}
// return <div className="add-item"></div>;

export default AddItem;
