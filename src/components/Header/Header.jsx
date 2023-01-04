import React from "react";
import { Link } from "react-router-dom";
import "../Home/styles/header.css";

const Header = ({ handleChange }) => {
  return (
    <header className="header">
      <nav className="navBar">
        <div className="navBar__container">
          <h1 className="navBar__logo">
            <Link to="/">Logo</Link>
          </h1>
          <form className="navBar__form">
            <input
              onChange={handleChange}
              className="navBar__input"
              type="text"
              placeholder="buscar producto"
            />
            <button>
              <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
          <ul className="containericons">
            <li className="cart__item">
              <i className="fa-sharp fa-solid fa-user icons"></i>
              <Link to="/createUser">crea tu cuenta</Link>
            </li>
            <li className="cart__item">
              <i className="fa-sharp fa-solid fa-box-archive icons"></i>

              <Link to="/login">ingresa</Link>
            </li>
            <li className="cart__item">
              <i className="fa-sharp fa-solid fa-cart-plus icons"></i>

              <Link to="/cart">Mis compras</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
