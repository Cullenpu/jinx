import Page from 'components/Page';
import React from 'react';
import {
  Col,
  Row,
  Card,
} from 'reactstrap';
import ApplicationBoard from 'components/ApplicationBoard';


const ApplicationsPage = () => {

  const applied = [{
    company: 'Google',
    title: 'Software Developer Intern',
    logo: '',
    time: '3 weeks ago'
  }];

  

  return (
      <Page
        className="ApplicationsPage"
        title="Applications"
        breadcrumbs={[{ name: 'Applications', active: true }]}
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
