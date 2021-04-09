import lg from "assets/img/logo/jinx_logo.svg";
import React from "react";
import { Card, CardImg, CardTitle } from "reactstrap";

const CompanyCell = ({ name, logo }) => {
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
        src={logo ? logo : lg}
        style={{
          borderRadius: 8,
          width: "150px",
          height: "150px",
          objectFit: "fill",
        }}
      />
      {/* <CardImg
        top
        src={logo ? logo : lg}
        style={{
          marginTop: "-40px",
          marginLeft: "-10px",
          borderRadius: 10,
          width: "60px",
          height: "60px",
          backgroundColor: logo ? null : "#D3D3D3",
        }}
      /> */}
      <CardTitle className="text-dark pt-1">{name}</CardTitle>
      {/* <CardText>
        <FormatDescription description={description} />
      </CardText> */}
    </Card>
  );
};

export default CompanyCell;
