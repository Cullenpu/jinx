import axios from "axios";
import Page from "components/Page";
import React, { useState, useEffect } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import {
  useParams,
  useHistory
} from "react-router-dom";
import {formatDate} from "utils/date.js";

// {
// 	"companyId": "60620beb3ba0001bb7f6e0cd",
// 	"link": "https://windsorhuang.com/",
// 	"location": "Vancouver",
// 	"role": "Software Engineer Intern"
// }
const EditApplicationPage = ({ app }) => {
  const [loading, setLoading] = useState(true);

  const [application, setApplication] = useState(null);
  const [company, setCompany] = useState("");
  const [postingId, setPostingId] = useState("");
  const [status, setStatus] = useState("");
  const [referral, setReferral] = useState("");
  const [link, setLink] = useState("");
  const [role, setRole] = useState("");
  const [notes, setNotes] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");

  let { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5000/applications/single/${id}`)
      .then(res => {
        const { company, notes, updatedAt, role, postingId, status, link, referral } = res.data;
        setCompany(company);
        setPostingId(postingId);
        setRole(role);
        setStatus(status);
        setLink(link);
        setNotes(notes);
        setReferral(referral);
        setUpdatedAt(updatedAt);
        setApplication(application);
    })
    setLoading(false);
  }, [])

  const submitForm = () => {
    axios
      .patch(`http://localhost:5000/applications/${id}`, {
        company: company,
        postingId: postingId,
        link: link,
        role: role,
        status: status,
        notes: notes,
        referral: referral,

      })
      .then(function (response) {
        history.push('/applications');
      });
  };

  return loading ? <div>loading</div> : (
    <Page title="Edit Application" breadcrumbs={[{ name: "Applications", active: true }]}>
      <div style={{ textAlign: 'right', paddingRight: '35vw'}}>
        <span className="text-success">Last updated {formatDate(updatedAt)}</span>
      </div>
      <Row className="ml-3 mt-3 justify-content-between">
        <Form style={{ width: "50vw", paddingLeft: "50px" }}>
          <Row>
            <Col md="6">
              <FormGroup>
                <Label>
                  <h5>Company</h5>
                </Label>
                <Input
                  type="company"
                  name="company"
                  value={company}
                  onChange={(e) => {
                    setCompany(e.target.value);
                  }}
                  placeholder="..."
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label>
                  <h5>Referral</h5>
                </Label>
                <Input
                  type="referral"
                  name="referral"
                  value={referral}
                  onChange={(e) => {
                    setReferral(e.target.value);
                  }}
                  placeholder="..."
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <FormGroup>
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
                  placeholder="..."
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label>
                  <h5>Status</h5>
                </Label>
                <Input type="select" name="status" value={status} onChange={(e) => {
                    setStatus(e.target.value);
                  }} placeholder="...">
                    <option>Wishlist</option>
                    <option>Applied</option>
                    <option>Interviewing</option>
                    <option>Offer</option>
                    <option>Rejected</option>
                  </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <FormGroup>
                <Label>
                  <h5>Role</h5>
                </Label>
                <Input
                  type="location"
                  name="location"
                  value={role}
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                  placeholder="Vancouver"
                />
              </FormGroup>
            </Col>
            <Col md="6">
              
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Label>
                <h5>Notes</h5>
              </Label>
              <Input
                id="exampleFormControlTextarea1"
                placeholder="Write a large text here ..."
                rows="3"
                value={notes}
                onChange={(e) => {
                  setNotes(e.target.value);
                }}
                type="textarea"
              />
            </Col>
          </Row>
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 9 }}>
              <Button
                onClick={() => {
                  submitForm();
                }}
              >
                Save Changes
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </Row>
    </Page>
  );
};

export default EditApplicationPage;
