import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <picture>😀</picture>
      <div className="links">
        <Link to="/" passHref>
          Home
        </Link>
        <Link to="/profile" passHref>
          Profile
        </Link>
        <Link to="/article" passHref>
          Article
        </Link>
      </div>
      <div className="search">🔍</div>
    </nav>
  );
}
