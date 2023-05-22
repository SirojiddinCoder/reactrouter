import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav>
      <Link to={"/"}> home </Link>
      <Link to={"/about"}> about </Link>
      <Link to={"/blog"}> blog </Link>
    </nav>
  );
}
