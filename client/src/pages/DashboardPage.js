import UserTable from "components/dashboardComponents/UserTable";
import Page from "components/Page";
import React from "react";
import { Col, Row } from "reactstrap";

class DashboardPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Page
        className="DashboardPage"
        title="Dashboard"
        breadcrumbs={[{ name: "Dashboard", active: true }]}
      >
        <Row>
          <Col>
            <UserTable />
          </Col>
        </Row>
      </Page>
    );
  }
}

export default DashboardPage;
