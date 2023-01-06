import React from "react";
import { Link } from "react-router-dom";
import "../Home/styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="navBar">
        <div className="navBar__container">
          <div className="navBar__logo">
            <Link to="/">
              <img className="logo" src="/logos.jpg" alt="logo" />
            </Link>
          </div>
          <Link to="/">
            <h1 className="header__title">E-ECOMMERCE</h1>
          </Link>

          <ul className="containers">
            <li className="cart__item">
              <Link to="/login">
                <i className="fa-regular fa-circle-user icons"></i>
              </Link>

              <Link to="/login">
                <span className="item__title">INICIA SESIÓN</span>
              </Link>
            </li>
            <li className="cart__item">
              <i className="fa-solid fa-cart-shopping  icons"></i>
              <Link to="/cart">
                <span className="item__title">CARRITO</span>
              </Link>
            </li>
            <li className="cart__item">
              <i className="fa-solid fa-store icons"></i>
              <Link to="/purchases">
                <span className="item__title">MIS PEDIDOS</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
