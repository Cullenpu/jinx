import { addPosting } from "components/exploreComponents/ExploreFunctions";
import Page from "components/Page";
import React, { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const AddPostingPage = () => {
  const [companyName, setCompanyName] = useState("");
  const [link, setLink] = useState("");
  const [location, setLocation] = useState("");
  const [role, setRole] = useState("");

  const submitForm = () => {
    const posting = {
      companyName: companyName,
      link: link.includes("http") ? link : "http://".concat(link),
      // link: link,
      role: role,
      location: location,
    };
    addPosting(posting).then((res) => (window.location.href = "/explore"));
  };

  return (
    <Page title="Add Posting" breadcrumbs={[{ name: "explore", active: true }]}>
      <Row className="ml-3 mt-3 justify-content-between">
        <Form style={{ width: "50vw", paddingLeft: "50px" }}>
          <FormGroup row>
            <Label>
              <h5>Company</h5>
            </Label>
            <Input
              type="companyName"
              name="companyName"
              value={companyName}
              onChange={(e) => {
                setCompanyName(e.target.value);
              }}
              placeholder="Google"
            />
          </FormGroup>
          <FormGroup row>
            <Label>
              <h5>Link</h5>
            </Label>
            <Input
              type="link"
              name="link"
              value={link}
              onChange={(e) => {
                setLink(e.target.value);
              }}
              placeholder="facebook.com"
            />
          </FormGroup>
          <FormGroup row>
            <Label>
              <h5>Location</h5>
            </Label>
            <Input
              type="location"
              name="location"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              placeholder="San Francisco"
            />
          </FormGroup>
          <FormGroup row>
            <Label>
              <h5>Role</h5>
            </Label>
            <Input
              type="role"
              name="role"
              value={role}
              onChange={(e) => {
                setRole(e.target.value);
              }}
              placeholder="Software Engineer"
            />
          </FormGroup>
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 9 }}>
              <Button
                onClick={() => {
                  submitForm();
                }}
              >
                Submit
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </Row>
    </Page>
  );
};

export default AddPostingPage;
