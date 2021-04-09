import ApplicationBoard from "components/applicationBoard/ApplicationBoard";
import Page from "components/Page";
import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import { getApplications } from "components/applicationBoard/ApplicationFunctions";

const ApplicationsPage = ({ app, history }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [applications, setApplications] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [applied, setApplied] = useState([]);
  const [interviewing, setInterviewing] = useState([]);
  const [offer, setOffer] = useState([]);
  const [rejected, setRejected] = useState([]);

  useEffect(() => {
    getApplications().then((res) => {
      setApplications(res);
      setWishlist(res.filter((app) => app.status === "Wishlist"));
      setApplied(res.filter((app) => app.status === "Applied"));
      setInterviewing(
        res.filter((app) => app.status === "Interviewing")
      );
      setOffer(res.filter((app) => app.status === "Offer"));
      setRejected(res.filter((app) => app.status === "Rejected"));
      setIsLoading(false);
    })
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
            history={history}
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
