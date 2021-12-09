import React from "react";

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#fd963e" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand text-dark">Animal Database</a>

        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                Animals
              </a>
            </li>
          </ul>
        </div>

        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success text-dark" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Header;
