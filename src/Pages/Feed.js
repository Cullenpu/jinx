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
import smallLogo from "../resources/logo/jinx2.svg";
import FeedCard from "../Components/Feed/FeedCard";

const Feed = () => {
  return (
    <PageContainer>
      <div style={{ "padding-left": 50, "padding-top": 50 }}>
        <h1>Latest Activity</h1>
      </div>
      <div style={{ padding: 50, float: "left", width: 1000 }}>
        <FeedCard headline="Fred got hired!"></FeedCard>
        <FeedCard headline="Google responded!"></FeedCard>
        <FeedCard headline="New comments on resume!"></FeedCard>
        <FeedCard headline="Annie wants to connect!"></FeedCard>
      </div>
      <div
        style={{
          outline: "3px solid black",
          float: "left",
          height: 300,
          width: 300,
        }}
      >
        <div style={{ outline: "3px solid black" }}>
          <h3 style={{ padding: 10 }}>Filter</h3>
        </div>
        <div style={{ padding: 10, border: "none" }}>
          <button type="button" style={{ float: "left" }}>
            ✓
          </button>
          <h3>Network</h3>
        </div>
        <div style={{ padding: 10, border: "none" }}>
          <button type="button" style={{ float: "left" }}>
            ✓
          </button>
          <h3>Applications</h3>
        </div>
        <div style={{ padding: 10, border: "none" }}>
          <button type="button" style={{ float: "left" }}>
            ✓
          </button>
          <h3>Introductions</h3>
        </div>
        <div style={{ padding: 10, border: "none" }}>
          <button type="button" style={{ float: "left" }}>
            ✓
          </button>
          <h3>Lorem ipsum dolor</h3>
        </div>
      </div>
    </PageContainer>
  );
};

export default Feed;
