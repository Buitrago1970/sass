import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <p>PLATZI GAMES</p>
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
      <div
        className="search"
        onClick={() => alert("Estamos haciendo page buscar...")}
      >
        🔍
      </div>
    </nav>
  );
}
