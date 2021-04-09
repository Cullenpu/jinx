import lg from "assets/img/logo/jinx_logo.svg";
import React from "react";
import { Card, CardImg, CardText } from "reactstrap";

function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

const PostingCell = ({
  createdAt,
  companyLogo,
  companyName,
  location,
  role,
  link,
}) => {
  return (
    <>
      <div>
        <small>{formatDate(createdAt)}</small>
      </div>
      <Card
        style={{
          width: "150px",
          border: "transparent",
          backgroundColor: "transparent",
          flex: "1 0 150px",
          margin: "5px",
          marginLeft: "-70px",
          maxWidth: "160px",
        }}
      >
        <CardImg
          top
          src={companyLogo ? companyLogo : lg}
          style={{
            // marginTop: "-20px",
            marginLeft: "90px",
            borderRadius: 10,
            objectFit: "cover",
            width: "60px",
            height: "60px",
            backgroundColor: companyLogo ? null : "#D3D3D3",
          }}
        />
        <CardText
          style={{ maxWidth: "82px", fontSize: "16px", fontWeight: "600" }}
        >
          {companyName}
        </CardText>

        <CardText
          style={{
            maxWidth: "82px",
            fontSize: "14px",
            fontWeight: "400",
            marginTop: "-20px",
          }}
        >
          {location}
        </CardText>
        
        <CardText
          style={{
            fontSize: "15px",
            fontWeight: "400",
            marginTop: "-10px",
          }}
        >
          <a href={link} target="_blank" rel="noopener noreferrer">
            {role}
          </a>
        </CardText>
      </Card>
    </>
  );
};

export default PostingCell;
