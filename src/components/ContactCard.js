import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardLink,
  CardText,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap';

const ContactCard = ({ name, rating, status, avatar }) => {
  return (
    <Card className="flex-row" 
    style={{ flex: '1 0 32%', margin: '5px', borderRadius: 6, maxWidth: '32%'}}>
      <CardImg
        className="card-img-left"
        src={avatar}
        style={{ width: 'auto', height: 150 }}
      />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>
          {status}
        </CardText>
        <CardText>
          <small>{rating}</small>
        </CardText>
      </CardBody>
    </Card>
  )
}

export default ContactCard;