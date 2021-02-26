import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
  Row, Col
} from 'reactstrap';

import { FaLinkedin, FaPhone, FaBuilding, FaMap} from 'react-icons/fa';


const InfoCard = (props) => {
  return (
    <div>
      <Card style={{ width: '100%', height: '160px', borderColor: '#7e00bf'}}>
        <CardBody>
          <Row className="pl-3">
            <Col>
              <h5><FaLinkedin style={{ color: '#b6075d'}} /> LinkedIn</h5>
            </Col>
            <Col>
              <input
                type="text"
                id="weight"
                placeholder="LinkedIn"
              />
            </Col>
          </Row>
          <Row className="pl-3">
            <Col>
              <h5><FaPhone style={{ color: '#b6075d'}} /> Phone</h5>
            </Col>
            <Col>
              <input
                type="text"
                id="weight"
                placeholder="7789906284"
              />
            </Col>
          </Row>
          <Row className="pl-3">
            <Col>
              <h5><FaBuilding style={{ color: '#b6075d'}} /> City</h5>
            </Col>
            <Col>
              <input
                type="text"
                id="weight"
                placeholder="City"
              />
            </Col>
          </Row>
          <Row className="pl-3">
            <Col>
              <h5><FaMap style={{ color: '#b6075d'}} /> Address</h5>
            </Col>
            <Col>
              <input
                type="text"
                id="weight"
                placeholder="Address"
              />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default InfoCard;