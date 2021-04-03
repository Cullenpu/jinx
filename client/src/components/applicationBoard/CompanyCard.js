import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { Button, Card, CardBody, CardText, CardTitle,  Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import {formatDate} from "utils/date.js";

const CompanyCard = ({ column, applicationId, company, role, date }) => {
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
          height: 150,
        }}
      >
        <CardBody
          className="d-flex flex-column justify-content-start align-items-start"
          style={{ paddingBottom: "0" }}
        >
          <CardTitle className="h5">{company}</CardTitle>
          <CardText>
            <small>{role}</small>
          </CardText>
        </CardBody>
        <CardBody
          className="d-flex justify-content-between align-items-center"
          style={{ paddingTop: "0" }}
        >
          <CardText style={{ fontSize: "15px" }}>
            <small>{formatDate(date)}</small>
          </CardText>
          <Button size="sm" outline color="light" onClick={() => { window.location.href = `/application/${applicationId}/edit`}}>
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
