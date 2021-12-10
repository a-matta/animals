import React from "react";

const Header = ({ onQueryChange }) => {
  const pathName = window.location.pathname;

  let search = undefined;
  if (pathName.includes("/animals")) {
    search = (
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => onQueryChange(e.target.value)}
        />
        <button className="btn btn-outline-success text-dark" type="submit">
          Search
        </button>
      </form>
    );
  }

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#fd963e" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand text-dark" href="/">
          Online Animal Encyclopedia
        </a>

        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-dark" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/animals">
                Animals
              </a>
            </li>
          </ul>
        </div>

        {search}
      </div>
    </nav>
  );
};

export default Header;
