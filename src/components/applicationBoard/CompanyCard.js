import React from 'react';
import { FaEdit } from 'react-icons/fa'
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
  CardFooter,
} from 'reactstrap';

const CompanyCard = ({ company, title, date, color }) => {
  return (
    <div className="pb-3">
        <Card
        inverse
        className={`border-0 bg-gradient-${color}`}
        style={{
          height: 150,
        }}
      >
        <CardBody className="d-flex flex-column justify-content-start align-items-start" style={{ paddingBottom: '0' }}>
          <CardTitle className="h5">{company}</CardTitle>
          <CardText><small>{title}</small></CardText>
        </CardBody>
        <CardBody className="d-flex justify-content-between align-items-center" style={{ paddingTop: '0' }}>
          <CardText style={{ fontSize: '15px' }}><small>{date}</small></CardText>
          <Button size="sm" outline color="light">
            <small><FaEdit /></small>
          </Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default CompanyCard;