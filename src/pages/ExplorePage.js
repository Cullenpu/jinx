import Page from 'components/Page';
import React from 'react';
import {
  Col,
  Row,
} from 'reactstrap';
import PopularCompanies from 'components/exploreComponents/PopularCompanies';
import { companies } from 'demos/explorePage';

const ExplorePage = () => {
  return (
    <Page title="Explore" breadcrumbs={[{ name: 'explore', active: true }]}>
      <Row className="ml-3 mt-3 justify-content-between">
        <Col className="mb-3">
          <PopularCompanies companies={companies} />
        </Col>
        <Col lg={4} md={6} sm={6} xs={12} className="mb-3">
          <PopularCompanies />
        </Col>
      </Row>
      <Row className="ml-3 justify-content-between">
        <Col lg={4} md={6} sm={6} xs={12} className="mb-3">
          <PopularCompanies />
        </Col>
        <Col lg={4} md={6} sm={6} xs={12} className="mb-3">
          <PopularCompanies />
        </Col>
      </Row>
    </Page>
  );
};

export default ExplorePage;
