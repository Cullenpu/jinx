import Page from "components/Page";
import axios from 'axios';

import React, { useState, useEffect } from "react";
import { Col, Row } from "reactstrap";
import PopularCompanies from "components/exploreComponents/PopularCompanies";
import { companies } from "demos/explorePage";

const ExplorePage = () => {
  const [companiesList, setCompaniesList] = useState(companies);
  useEffect(() => {
    axios.get(`http://localhost:5000/companies`)
      .then(res => {
        const companies = res.data.company;
        setCompaniesList([...companiesList, ...companies])
    })
  }, [])

  return (
    <Page title="Explore" breadcrumbs={[{ name: "explore", active: true }]}>
      <Row className="ml-3 mt-3 justify-content-between">
        <Col className="mb-3">
          <PopularCompanies companies={companiesList} />
        </Col>
      </Row>
    </Page>
  );
};

export default ExplorePage;
