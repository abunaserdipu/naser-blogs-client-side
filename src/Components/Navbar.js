import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="flex justify-between items-center h-16 bg-white text-blue relative shadow-sm font-bold"
      role="navigation"
    >
      <Link to="/" className="pl-8">
        Naser Blogs
      </Link>
      <div className="pr-8">
        <Link className="p-4" to="/">
          Home
        </Link>
        <Link className="p-4" to="/admin">
          Admin
        </Link>
        <Link className="p-4" to="/login">
          Log in
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
