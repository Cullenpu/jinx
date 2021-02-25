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

class PageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userAuthenticated: true, isOpen: false };
  }

  render() {
    return (
      <div className="layout">
        <Navbar color="light" className="nav bg-white" expand="md">
          <a href="/">
            <NavLogo className="nav-logo" />
          </a>
          <NavbarToggler />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/home" className="text-dark">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login" className="text-dark">
                  Logout
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        {this.props.children}
        {/* <p className="text-center">Jinx © 2021</p> */}
      </div>
    );
  }
}

export default PageContainer;
