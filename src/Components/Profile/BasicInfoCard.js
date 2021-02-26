import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
  Row, Col
} from 'reactstrap';

import { FaIdCard, FaEnvelope} from 'react-icons/fa';


const BasicInfoCard = (props) => {
  return (
    <div>
      <Card style={{ width: '100%', height: '130px', borderColor: '#7e00bf'}}>
        <CardBody>
          <Row className="pl-3">
            <Col>
              <h5><FaIdCard style={{ color: '#b6075d'}} /> First Name</h5>
            </Col>
            <Col>
              <input
                type="text"
                id="weight"
                placeholder="First Name"
              />
            </Col>
          </Row>
          <Row className="pl-3">
            <Col>
              <h5><FaIdCard style={{ color: '#b6075d'}} /> Last Name</h5>
            </Col>
            <Col>
              <input
                type="text"
                id="weight"
                placeholder="Last Name"
              />
            </Col>
          </Row>
          <Row className="pl-3">
            <Col>
              <h5><FaEnvelope style={{ color: '#b6075d'}} /> Email</h5>
            </Col>
            <Col>
              <input
                type="text"
                id="weight"
                placeholder="Email"
              />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default BasicInfoCard;