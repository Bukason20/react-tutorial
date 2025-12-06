import React from "react";

function Nav() {
  return (
    <nav className="navbar">
      <h1>Ebuka</h1>

      <ul className="navlinks">
        <li>Home</li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
