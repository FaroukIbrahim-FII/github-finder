import React from "react";
import GithubIcon from "./common/GithubIcon";
import "./css/navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav id="navbar">
      <div id="logo">
        <GithubIcon />
        <h1 id="logotext">GitHub Finder</h1>
      </div>
      <div>
        <ul id="pagelist">
          <Link to="/" className="link">
            <li>Home</li>
          </Link>
          <Link to="/about" className="link">
            <li>About</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
