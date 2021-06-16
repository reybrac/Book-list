import React from "react";

function Nav() {
  return (
    <nav
      className="navbar navbar-expand-sm navbar-dark  container-fluid"
      style={{ backgroundColor: "deepskyblue" }}
    >
      <a className="navbar-brand" href="/">
        Search
      </a>
      <div className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="navbar-brand" aria-current="page" href="/detail">
            Saved
          </a>
        </li>
      </div>
    </nav>
  );
}

export default Nav;
