import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import React from "react";

const ContactCard = ({ name, email, status }) => {

  return (
    <Card
      className="flex-row"
      style={{
        flex: "1 0 32%",
        margin: "5px",
        borderRadius: 4,
        maxWidth: "32%",
      }}
    >
      <CardImg
        className="card-img-left"
        src={`https://ui-avatars.com/api/?background=random&size=128&name=${name.replace(' ', '+')}`}
        style={{ width: "auto", height: 150 }}
      />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>{email}</CardText>
        <CardText>
          <small>Status</small>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default ContactCard;
