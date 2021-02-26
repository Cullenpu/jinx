import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import "./pageContainerStyles.css";
import { ReactComponent as NavLogo } from "../resources/logo/jinx1.svg";

class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userAuthenticated: true, isOpen: false };
  }

  render() {
    return (
      <Navbar color="light" className="top-nav bg-white" expand="md">
        <a href="/">
          <NavLogo width={100} />
        </a>
        <NavbarToggler />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/profile" className="text-dark">
                <i class="fas fa-user top-nav-profile text-white bg-secondary" />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default TopNav;
