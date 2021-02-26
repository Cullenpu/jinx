import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card
} from "reactstrap";

import PageContainer from "../Components/PageContainer";
import ProfileCard from "../Components/Profile/ProfileCard";
import DocumentsCard from "../Components/Profile/DocumentsCard";
import BasicInfoCard from "../Components/Profile/BasicInfoCard";
import InfoCard from "../Components/Profile/InfoCard";

const Profile = () => {
  
  return (
      <PageContainer>
        <Row>
          <h1>Profile</h1>
        </Row>
        <div className="pt-3">
          <Row className="align-content-center">
            <Col md="6">
              <ProfileCard />
            </Col>
            <Col md="6">
              <DocumentsCard />
            </Col>
          </Row>
          <Row className="pt-3">
            <Col>
              <BasicInfoCard />
            </Col>
          </Row>
          <Row className="pt-3">
            <Col>
              <InfoCard />
            </Col>
          </Row>
        </div>
      </PageContainer>
  )
}

export default Profile;