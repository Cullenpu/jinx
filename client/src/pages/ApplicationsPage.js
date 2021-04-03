import axios from "axios";
import ApplicationBoard from "components/applicationBoard/ApplicationBoard";
import Page from "components/Page";
import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";

const ApplicationsPage = ({ app }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [applications, setApplications] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [applied, setApplied] = useState([]);
  const [interviewing, setInterviewing] = useState([]);
  const [offer, setOffer] = useState([]);
  const [rejected, setRejected] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      await axios
        .get(`http://localhost:5000/applications/${app.state.id}`)
        .then((res) => {
          setApplications(res.data);
          setWishlist(res.data.filter((app) => app.status === "Wishlist"));
          setApplied(res.data.filter((app) => app.status === "Applied"));
          setInterviewing(
            res.data.filter((app) => app.status === "Interviewing")
          );
          setOffer(res.data.filter((app) => app.status === "Offer"));
          setRejected(res.data.filter((app) => app.status === "Rejected"));
        });
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <Page
      className="ApplicationsPage"
      title="Applications"
      breadcrumbs={[{ name: "Applications", active: true }]}
    >
      <Row className="pt-3">
        <Col>
          <ApplicationBoard
            app={app}
            applicationList={applications}
            wishlist={wishlist}
            applied={applied}
            interviewing={interviewing}
            offer={offer}
            rejected={rejected}
          />
        </Col>
      </Row>
    </Page>
  );
};

export default ApplicationsPage;
