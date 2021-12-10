import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = ({ query, onQueryChange }) => {
  const { pathname } = useLocation();

  let search = undefined;
  if (pathname.includes("/animals")) {
    search = (
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
        />
      </form>
    );
  }

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#fd963e" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand text-dark" to="/">
          Online Animal Encyclopedia
        </Link>

        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/animals">
                Animals
              </Link>
            </li>
          </ul>
        </div>

        {search}
      </div>
    </nav>
  );
};

export default Header;
