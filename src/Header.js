import React from "react";

const Header = () => {
  return (
    <header
      className="navbar sticky-top navbar-expand navbar-light "
      style={{ backgroundColor: "#fd963e" }}
    >
      <a className="navbar-brand" style={{ marginLeft: "1rem" }} href="/">
        Animal Database
      </a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav bd-navbar-nav flex-row navbar-light">
          <li className="nav-item">
            <a className="nav-link active" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/">
              Animals
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link active" href="/">
              About
            </a>
          </li>
        </ul>
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </div>
    </header>
  );
};

export default Header;
