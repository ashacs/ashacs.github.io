import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.scss";
import NavItem from "../NavItem";

class Nav extends Component {
  constructor() {
    super();
    this.state = {};
  }

  /**
   * Take each item in the navItemsList prop and render a NavItem with that value as its title.
   */
  renderNavItems() {
    const { navItemsList } = this.props;
    return navItemsList.map(n => <NavItem title={n} />);
  }

  render() {
    return (
      <nav>
        <ul className="listBare navList">{this.renderNavItems()}</ul>
      </nav>
    );
  }
}

export default Nav;

Nav.propTypes = {
  navItemsList: PropTypes.array
};

Nav.defaultProps = {
  navItemsList: []
};
