import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Card,
  Label,
  Input,
  CardTitle,
  CardBody,
} from "reactstrap";

import PageContainer from "../Components/PageContainer";
import { FaUser, FaFile, FaRunning, FaIdCard} from 'react-icons/fa';
import ApplicationsTable from "../Components/Applications/ApplicationsTable";


const Applications = () => {
  
  return (
      <PageContainer>
        <div>
          <h1>Applications</h1>
        </div>
        <div className="pt-3" style={{ paddingTop: '25px' }}>
          <Row>
            <Col>
              <Card style={{ backgroundColor: '#6CC2BD'}}>
                <CardBody><h6><FaUser />  New Users</h6></CardBody>
              </Card>
            </Col>
            <Col>
              <Card style={{ backgroundColor: '#7C79A2'}}>
                <CardBody><h6><FaFile />  New Apps</h6></CardBody>
              </Card>
            </Col>
            <Col>
              <Card style={{ backgroundColor: '#FFC1A6'}}>
                <CardBody><h6><FaRunning />  New Hires</h6></CardBody>
              </Card>
            </Col>
            <Col>
              <Card style={{ backgroundColor: '#FEE4C4'}}>
                <CardBody><h6><FaIdCard />  New Admin</h6></CardBody>
              </Card>
            </Col>
          </Row>
          <Row style={{ paddingTop: '50px' }}>
            <ApplicationsTable />
          </Row>
        </div>
      </PageContainer>
  )
}

export default Applications;