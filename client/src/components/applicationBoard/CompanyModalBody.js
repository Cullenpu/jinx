import React from "react";
import { Col, Form, FormGroup, Input } from "reactstrap";

const CompanyModalBody = ({ inputCompany, inputRole, inputStatus, handleCompanyChange, handleRoleChange, handleStatusChange }) => {
  return (
    <Form>
      <FormGroup row>
        <Col sm={10}>
          <Input type="company" name="inputCompany" value={inputCompany} onChange={handleCompanyChange} placeholder="Company" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col sm={10}>
          <Input type="job" name="inputRole" value={inputRole} onChange={handleRoleChange} placeholder="Job Title" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col sm={10}>
          <Input type="select" name="inputStatus" value={inputStatus} onChange={handleStatusChange} placeholder="Wishlist">
            <option></option>
            <option>Wishlist</option>
            <option>Applied</option>
            <option>Interviewing</option>
            <option>Offer</option>
            <option>Rejected</option>
          </Input>
        </Col>
      </FormGroup>
    </Form>
  );
};

export default CompanyModalBody;
