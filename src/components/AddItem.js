/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { Button } from "@material-ui/core";
import React from "react";
// import { Card } from "react-bootstrap";
import { useStateValue } from "./StateProvider";

function AddItem({
  id,
  image,
  price,
  title,
  location,
  time,
  category,
  condition,
}) {
  // if ("placeholder" in props)
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        location: location,
        time: time,
        category: category,
        condition: condition,
      },
    });
  };

  return (
    // <button onClick={addToBasket}>
    <div className="add-item">
      <div className="poster anim home__image placeholder">
        {/* <Card.Img className="img" variant="top" src={image} /> */}
        {/* <div className="title anim placeholder">
          <h3>{id}</h3>
        </div> */}
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
      {/* <div className="anim placeholder">
        <p style={{ float: "" }}>Category: {category}</p>
      </div> */}

      <div className="ftr anim flex">
        <div className="anim location placeholder">
          <p>{location}</p>
        </div>
        <div className="anim stamp placeholder">
          <p style={{ float: "right" }}>{time}</p>
        </div>
      </div>
    </div>
    // </button>
  );
}
// return <div className="add-item"></div>;

export default AddItem;
