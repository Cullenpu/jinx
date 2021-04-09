import { getCompanies } from "components/exploreComponents/ExploreFunctions";
import PopularCompanies from "components/exploreComponents/PopularCompanies";
import Postings from "components/exploreComponents/Postings";
import Page from "components/Page";
import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";

const ExplorePage = () => {
  const [companiesList, setCompaniesList] = useState([]);
  useEffect(() => {
    getCompanies().then((companies) =>
      setCompaniesList([...companiesList, ...companies])
    );
  }, []);

  return (
    <Page title="Explore" breadcrumbs={[{ name: "explore", active: true }]}>
      <Row className="ml-3 mt-3 justify-content-between">
        <Col className="mb-3">
          <PopularCompanies companies={companiesList} />
        </Col>
      </Row>
      <Row className="ml-3 mt-3 justify-content-between">
        <Col className="mb-3">
          <Postings />
        </Col>
      </Row>
    </Page>
  );
};

export default ExplorePage;
