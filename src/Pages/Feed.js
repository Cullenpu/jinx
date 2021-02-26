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
import FeedCard from "../Components/Feed/FeedCard";

const Feed = () => {
  return (
    <PageContainer>
      <div>
        <h1>Feed</h1>
        <Container>
          <Row>
            <FeedCard headline="Sample event 1"></FeedCard>
          </Row>
          <Row>
            <FeedCard headline="Sample event 2"></FeedCard>
          </Row>
          <Row>
            <FeedCard headline="Sample event 3"></FeedCard>
          </Row>
        </Container>
      </div>
    </PageContainer>
  );
};

export default Feed;
