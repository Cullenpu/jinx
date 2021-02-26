import React from "react";
import { Container, Row, Col } from "reactstrap";

import "./pageContainerStyles.css";
import TopNav from "./TopNav";
import LeftNav from "./LeftNav";

class PageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userAuthenticated: true, isOpen: false };
  }

  render() {
    return (
      <div className="layout">
        <TopNav />
        <Container className="p-0 m-0">
          <Row className="layout-body">
            <LeftNav />
            <Col className="right-content">{this.props.children}</Col>
          </Row>
        </Container>
        {/* <p className="text-center">Jinx © 2021</p> */}
      </div>
    );
  }
}

export default PageContainer;
