/* eslint-disable no-unused-vars */
import React from "react";

function Detail({
  id,
  image,
  price,
  title,
  location,
  time,
  category,
  condition,
}) {
  return (
    <div className="">
      <br />
      <h1 style={{ fontWeight: "bold", textAlign: "center" }}>Details</h1>
      <br />
      <div className="container ">
        <p>
          Title:
          {title}
        </p>
        <p>
          Category:
          {category}
        </p>
        <p>
          Image:
          <img className="" src={image} alt="" />
        </p>
        <p>
          Price:
          {price}
        </p>
        <h2 style={{ fontWeight: "bold", textAlign: "center" }} className="">
          Description
        </h2>
        <p>Condition: {condition || "Old"}</p>
        <p>
          Location:
          {location}
        </p>
        <p>
          Time:
          {time}
        </p>
      </div>
    </div>
  );
}

export default Detail;
