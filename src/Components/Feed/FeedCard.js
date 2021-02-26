import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

import "./feedCardStyles.css";

const FeedCard = (props) => {
  const { headline } = props;

  return (
    <div>
      <Card className="feed-card">
        <CardBody>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            2 days ago
          </CardSubtitle>
          <CardTitle tag="h2">{headline}</CardTitle>
          <CardLink href="#">View More</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default FeedCard;
