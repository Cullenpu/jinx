import React from "react";
import { Container, Row } from "reactstrap";
import ExploreCell from "components/exploreComponents/ExploreCell";

const PopularCompanies = ({ companies }) => {
  return (
    <Container>
      <Row>
        <h2 className="text-info font-weight-300">Companies</h2>
      </Row>
      <Row className="pl-2">
        <p>Check out with companies have the most popular offerings.</p>
      </Row>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {companies &&
          companies.map(({ name, description, background, logo }, index) => {
            return (
              <ExploreCell
                name={name}
                description={description}
                background={background}
                logo={logo}
              />
            );
          })}
      </div>
    </Container>
  );
};

export default PopularCompanies;
