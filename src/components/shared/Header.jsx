import React from "react";
import { Link, NavLink } from "react-router-dom";
import './styles/header.css'

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        <Link to="/">E-commerce</Link>
      </h1>
      <nav className="header__nav">
        <li className="header__item">
          <NavLink className="header__link" to="/login">
            <i className='bx bx-user-circle'></i>
          </NavLink>
        </li>
        <li className="header__item">
          <NavLink className="header__link" to="/purchases">
            <i className='bx bx-dollar-circle' ></i>
          </NavLink>
        </li>
        <li className="header__item">
          <NavLink className="header__link" to="/cart">
            <i className='bx bx-cart-alt' ></i>
          </NavLink>
        </li>
      </nav>
    </header>
  );
};

export default Header;
