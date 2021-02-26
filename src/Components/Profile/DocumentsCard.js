import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
  Row, Col
} from 'reactstrap';

import { FaPaperclip, FaFile} from 'react-icons/fa';


const DocumentsCard = (props) => {
  return (
    <div>
      <Card style={{ width: '100%', height: '125px', borderColor: '#7e00bf'}}>
        <CardBody>
          <Row className="pl-3 pt-3">
            <Col>
              <Row>
                <h5><FaPaperclip style={{ color: '#b6075d'}} />  Resume</h5>
              </Row>
              <Row>
                <h5><FaFile style={{ color: '#b6075d'}} /> Cover Letter</h5>
              </Row>
            </Col>
            <Col>
              <Button style={{ color: "white", backgroundColor: "#7e00bf"}} size="large">Upload</Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default DocumentsCard;