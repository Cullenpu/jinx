import axios from "axios";
import Page from "components/Page";
import React, { useState, useEffect } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import {
  useParams
} from "react-router-dom";

// {
// 	"companyId": "60620beb3ba0001bb7f6e0cd",
// 	"link": "https://windsorhuang.com/",
// 	"location": "Vancouver",
// 	"role": "Software Engineer Intern"
// }
const EditApplicationPage = ({ app }) => {
  const [application, setApplication] = useState(null);
  const [companyName, setCompanyName] = useState("");
  const [link, setLink] = useState("");
  const [location, setLocation] = useState("");
  const [role, setRole] = useState("");

  let { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/applications/single/${id}`)
      .then(res => {
        const application = res.data;
        console.log(application);
        setApplication(application);
    })
  }, [])

  const submitForm = () => {
    axios
      .post("http://localhost:5000/posting", {
        companyName: companyName,
        link: link,
        role: role,
        location: location,
      })
      .then(function (response) {
        window.location.href = "/explore";
      });
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
              placeholder="https://github.com/"
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
              placeholder="Vancouver"
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
              placeholder="Product Manager"
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

export default EditApplicationPage;
