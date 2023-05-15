import React from "react";
import "@styles/ProductInfo.scss";
import addtocart from "@icons/bt_add_to_cart.svg";

const ProductInfo = () => {
  return (
    <>
      <img
        src="https://images.pexels.com/photos/1933464/pexels-photo-1933464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="dog"
      />
      <div className="ProductInfo">
        <p>$35,000</p>
        <p>MotorBike</p>
        <p>
          With its practical position, this bike also fulfills a decorative
          function, add your hall or workspace.
        </p>
        <button className="primary-button add-to-cart-button">
          <img src={addtocart} alt="add to cart" />
          Add to cart
        </button>
      </div>
    </>
  );
};

export default ProductInfo;
