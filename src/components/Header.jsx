import React, { useContext } from "react";
import "@styles/Header.scss";
import Menu from "@components/Menu";
import MyOrder from "@containers/MyOrder";
import menu from "@icons/icon_menu.svg";
// import logo from "@logos/logo_yard_sale.svg";
import AppContext from "@context/AppContext";
import shoppingcart from "@icons/icon_shopping_cart.svg";
import dog from "@icons/dog-svgrepo-com.svg";

const Header = () => {
  const { state, toggleOrder, toggleMenu } = useContext(AppContext);

  return (
    <>
      <nav>
        <img src={menu} alt="menu" className="menu" />
        <div className="navbar-left">
          <img
            src={dog}
            alt="dog"
            className="nav-logo"
            width="97"
            height="60"
            viewBox="0 0 97 20"
          />
          <ul>
            <li>
              <a href="/">All</a>
            </li>
            <li>
              <a href="/">Clothes</a>
            </li>
            <li>
              <a href="/">Electronics</a>
            </li>
            <li>
              <a href="/">Furniture</a>
            </li>
            <li>
              <a href="/">Toys</a>
            </li>
            <li>
              <a href="/">Others</a>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <ul>
            <li
              className="more-clickable-area navbar-email pointer"
              onClick={() => toggleMenu()}
            >
              {" "}
              Sing in{" "}
            </li>
            <li className="navbar-shopping-cart" onClick={() => toggleOrder()}>
              <img src={shoppingcart} alt="shopping-cart" />
              {state.cart.length > 0 ? <div>{state.cart.length} </div> : null}
            </li>
          </ul>
        </div>
        {state.menuIsOpen && <Menu />}
      </nav>
      {state.orderIsOpen && <MyOrder />}
    </>
  );
};

export default Header;
