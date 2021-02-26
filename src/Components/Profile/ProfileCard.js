import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
  Row, Col
} from 'reactstrap';

const ProfileCard = (props) => {
  return (
    <div>
      <Card style={{ width: '100%',  height: '125px', borderColor: '#7e00bf'}}>
        <CardBody>
          <Row>
            <Col>
              <i
                style={{
                  borderRadius: "50%",
                  width: 75,
                  height: 75,
                  background: "#7e00bf",
                  display: "block"
                }}
                className="big cc visa icon"
              />
            </Col>
            <Col>
                <div className="pt-1" >
                  <h3>
                    Windsor Huang
                  </h3>
                </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProfileCard;