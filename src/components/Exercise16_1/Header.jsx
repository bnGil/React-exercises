import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/products">
          Products
        </Link>
      </div>
    );
  }
}

export default Header;
