import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

import "./exploreCardStyles.css";

const ExploreCard = (props) => {
  const { title } = props;

  return (
    <div>
      <Card className="card-body">
        <CardBody>
          <CardTitle tag="h4">{title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Card subtitle
          </CardSubtitle>
        </CardBody>
        {/* <img width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
        <CardBody>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <CardLink href="#">View More</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default ExploreCard;
