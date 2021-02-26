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
import smallLogo from "../../resources/logo/jinx2.svg";

const FeedCard = (props) => {
  const { headline } = props;

  return (
    <div>
      <div style={{ "padding-bottom": 50 }}>
        <img src={smallLogo} style={{ width: 100, float: "left" }}></img>
        <p>2 days ago</p>
        <h1>{headline}</h1>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
    </div>
  );
};

export default FeedCard;
