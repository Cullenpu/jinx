import ApplicationBoard from "components/applicationBoard/ApplicationBoard";
import Page from "components/Page";
import React from "react";
import { Col, Row } from "reactstrap";

const ApplicationsPage = () => {
  return (
    <Page
      className="ApplicationsPage"
      title="Applications"
      breadcrumbs={[{ name: "Applications", active: true }]}
    >
      <Row className="pt-3">
        <Col>
          <ApplicationBoard />
        </Col>
      </Row>
    </Page>
  );
};

export default ApplicationsPage;
