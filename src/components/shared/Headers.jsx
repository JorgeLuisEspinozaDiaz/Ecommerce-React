import React from "react";
import { Link } from "react-router-dom";

const Headers = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">e-comerce</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/cart">login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Headers;
