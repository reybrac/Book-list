import React from "react";

function Nav() {
  return (
    <nav
      className="navbar navbar-expand-sm navbar-dark  container-fluid"
      style={{ backgroundColor: "deepskyblue" }}
    >
      <a className="navbar-brand" href="/">
        My list of books
      </a>
      <div className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/search">
            Search
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/saved">
            Saved
          </a>
        </li>
      </div>
    </nav>
  );
}

export default Nav;
