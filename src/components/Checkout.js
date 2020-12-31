/* eslint-disable no-unused-vars */
import React from "react";
import Detail from "./Detail";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <div>
          <h5 style={{ marginRight: "10px", paddingLeft: "10px" }}>
            Hello, {user?.email}
          </h5>
          {basket.map((item) => (
            <Detail
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              location={item.location}
              time={item.time}
              category={item.category}
              condition={item.condition}
            />
          ))}
        </div>
        )
      </div>
    </div>
  );
}

export default Checkout;
