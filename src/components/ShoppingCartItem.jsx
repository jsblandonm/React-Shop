import React from "react";
import "@styles/ShoppingCartItem.scss";

const ShoppingCartItem = () => {
  return (
    <div className="ShoppingCartItem">
      <figure>
        <img
          src="https://images.pexels.com/photos/1933464/pexels-photo-1933464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="motorbike"
        />
      </figure>
      <p>MotorBike</p>
      <p>$30,000</p>
    </div>
  );
};

export default ShoppingCartItem;
