import ApplicationBoard from "components/applicationBoard/ApplicationBoard";
import Page from "components/Page";
import React, { useState, useEffect } from "react";
import { Col, Row } from "reactstrap";
import axios from 'axios';


const ApplicationsPage = () => {
  const [userId, setUserId] = useState('6064afaf0479d00f99790b69');
  const [applications, setApplications] = useState(['balls'])
  useEffect(() => {
    axios.get(`http://localhost:5000/applications/${userId}`)
      .then(res => {
        setApplications(res.data)
    })
  }, [])
  return (
    <Page
      className="ApplicationsPage"
      title="Applications"
      breadcrumbs={[{ name: "Applications", active: true }]}
    >
      <Row className="pt-3">
        <Col>
          <ApplicationBoard applicationList={applications}/>
        </Col>
      </Row>
    </Page>
  );
};

export default ApplicationsPage;
