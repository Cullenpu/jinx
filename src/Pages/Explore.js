import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import PageContainer from "../Components/PageContainer";
import ExploreCard from "../Components/Explore/ExploreCard"
import "./exploreStyles.css";

const Explore = () => {
  return (
    <PageContainer>
      {/* <div> */}
        <h1>Explore</h1>
        <Container>
          <Row>
            <Col><ExploreCard title="Popular Companies"/></Col>
            <Col><ExploreCard title="Top Roles"/></Col>
          </Row>
          <Row>
            <Col><ExploreCard title="Popular Cities"/></Col>
            <Col><ExploreCard title="Friends"/></Col>
          </Row>
        </Container>
      {/* </div> */}
    </PageContainer>
  );
};

export default Explore;
