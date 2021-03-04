import Page from 'components/Page';
import React from 'react';
import {
  Col,
  Row,
} from 'reactstrap';
import { Switch, Route, Link, NavLink as NLink } from 'react-router-dom';
import ApplicationBoard from 'components/ApplicationBoard';
import ContactsTab from 'components/ContactsTab';
import MetricsTab from 'components/MetricsTab';

const DashboardPage = () => {

  return (
      <Page
        className="DashboardPage"
        title="Dashboard"
        breadcrumbs={[{ name: 'Applications', active: true }]}
      >
        <Col>
          <Row>
            <ApplicationBoard />
          </Row>
        </Col>
      </Page>
    );
};

export default DashboardPage;
