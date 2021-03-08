import React from "react";
import { Card, CardImg, CardText, CardTitle } from "reactstrap";

const ExploreCell = ({ name, description, background, logo }) => {
  const FormatDescription = ({ description }) => {
    if (description.length < 100) {
      return <small>{description}</small>;
    } else {
      return <small>{description.substring(0, 100) + "..."}</small>;
    }
  };
  return (
    <Card
      style={{
        width: "150px",
        border: "transparent",
        backgroundColor: "transparent",
        flex: "1 0 150px",
        margin: "5px",
        maxWidth: "160px",
      }}
    >
      <CardImg
        top
        src={background}
        style={{
          borderRadius: 8,
          width: "150px",
          height: "150px",
          objectFit: "fill",
        }}
      />
      <CardImg
        top
        src={logo}
        style={{
          marginTop: "-40px",
          marginLeft: "-10px",
          borderRadius: 10,
          width: "60px",
          height: "60px",
        }}
      />
      <CardTitle className="text-dark pt-1">{name}</CardTitle>
      <CardText>
        <FormatDescription description={description} />
      </CardText>
    </Card>
  );
};

export default ExploreCell;
