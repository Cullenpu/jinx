import React from "react";
import { Col } from "reactstrap";

import "./pageContainerStyles.css";

class LeftNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userAuthenticated: true, isOpen: false };
  }

  render() {
    return (
      <Col className="left-nav">
        <ul>
          {/* <li className="left-nav-item">
            <a href="/feed">
              <i class="fas fa-home" /> Feed
            </a>
          </li> */}
          <li className="left-nav-item">
            <a href="/explore">
              <i class="fas fa-project-diagram" /> Explore
            </a>
          </li>
          <li className="left-nav-item">
            <a href="/applications">
              <i class="fas fa-address-card" /> Applications
            </a>
          </li>
          <li className="left-nav-item">
            <a href="/login">
              <i class="fas fa-lock" /> Logout
            </a>
          </li>
        </ul>
      </Col>
    );
  }
}

export default LeftNav;
