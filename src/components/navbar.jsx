import React, { PureComponent } from "react";

class Navbar extends PureComponent {
  render() {
    return (
      <div className="navbar">
        <i class="navbar-logo fas fa-shopping-cart"></i>
        <span>Shopping List</span>
        <span className="navbar-count">{this.props.totalCount}</span>
      </div>
    );
  }
}

export default Navbar;
