import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { Row, Col, Button, Card, CardBody, CardText, CardTitle } from "reactstrap";
import {formatDate} from "utils/date.js";

const CompanyCard = ({ column, companyData, applicationId, company, role, date }) => {
  let color;
  if (column === "wishlist") {
    color = "primary"
  } else if (column === "applied") {
    color = "secondary"
  } else if (column === "interviewing") {
    color = "info"
  } else if (column === "offer") {
    color = "success"
  } else if (column === "rejected") {
    color = "danger"
  }

  return (
    <div className="pb-3">
      <Card
        inverse
        className={`border-0 bg-gradient-${color}`}
        style={{
          height: 120,
        }}
      >
        <CardBody
          className="d-flex flex-column justify-content-start align-items-start"
          style={{ paddingBottom: "0" }}
        >
          <Row className="align-content-md-start">
            <Col md="auto">
              {companyData.companyLogo ? (
                <img
                  src={companyData.companyLogo}
                  style={{
                    borderRadius: 5,
                    objectFit: "cover",
                    width: "55px",
                    height: "55px",
                  }}
              />
              ) : null}
            </Col>
            <Col>
              <CardText className="font-weight-bolder">
                {company}
              </CardText>
              <CardText style={{ marginTop: '-20px'}}>
                <small>{role}</small>
              </CardText>
              <CardText style={{ marginTop: '-20px'}}>
                <small>{formatDate(date)}</small>
              </CardText>
            </Col>
          </Row>
        </CardBody>
        <CardBody
          className="d-flex justify-content-between align-items-center"
          style={{ marginTop: "-30px" }}
        >
          <CardText style={{ fontSize: "15px" }}>
            <small>{companyData.notes ? `*${companyData.notes}` : null}</small>
          </CardText>
          <Button style={{ marginTop: '-25px' }} size="sm" outline color="light" onClick={() => { window.location.href = `/application/${applicationId}/edit`}}>
            <small>
              <FaEdit />
            </small>
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CompanyCard;
