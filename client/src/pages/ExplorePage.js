import Page from "components/Page";
import React from "react";
import { Col, Row } from "reactstrap";
import PopularCompanies from "components/exploreComponents/PopularCompanies";
import { companies } from "demos/explorePage";

const ExplorePage = () => {
  return (
    <Page title="Explore" breadcrumbs={[{ name: "explore", active: true }]}>
      <Row className="ml-3 mt-3 justify-content-between">
        <Col className="mb-3">
          <PopularCompanies companies={companies} />
        </Col>
      </Row>
    </Page>
  );
};

export default ExplorePage;
