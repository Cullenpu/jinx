import Page from "components/Page";
import { chartjs } from "demos/dashboardPage";
import React from "react";
import { Bar } from "react-chartjs-2";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { getColor } from "utils/colors";
import UserTable from "components/dashboardComponents/UserTable";
import StatisticCard from "components/dashboardComponents/StatisticCard";

class DashboardPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const primaryColor = getColor("primary");

    return (
      <Page
        className="DashboardPage"
        title="Dashboard"
        breadcrumbs={[{ name: "Dashboard", active: true }]}
      >
        <Row>
          <StatisticCard
            title="New Users"
            subtitle="This month"
            number="9.8k"
            color="secondary"
            progress={{ value: 75, label: "Last month" }}
          />

          <StatisticCard
            title="New Applications"
            subtitle="This month"
            number="5,400"
            color="secondary"
            progress={{ value: 45, label: "Last month" }}
          />

          <StatisticCard
            title="New Hires"
            subtitle="This month"
            number="3,400"
            color="secondary"
            progress={{ value: 90, label: "Last month" }}
          />

          <StatisticCard
            title="New Companies"
            subtitle="This month"
            number="100"
            color="secondary"
            progress={{ value: 60, label: "Last month" }}
          />
        </Row>

        <Row>
          <Col lg="8" md="12" sm="12" xs="12">
            <UserTable />
          </Col>

          <Col lg="4" md="12" sm="12" xs="12">
            <Card>
              <CardHeader>
                User Metrics{" "}
                <small className="text-muted text-capitalize">2020-2021</small>
              </CardHeader>
              <CardBody>
                <Bar data={chartjs.bar.data} options={chartjs.bar.options} />
              </CardBody>
              {/*
                            <ListGroup flush>
                                <ListGroupItem>
                                    <MdInsertChart size={25} color={primaryColor}/> Cost of sales{' '}
                                    <Badge color="secondary">$3000</Badge>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <MdBubbleChart size={25} color={primaryColor}/> Management
                                    costs <Badge color="secondary">$1200</Badge>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <MdShowChart size={25} color={primaryColor}/> Financial costs{' '}
                                    <Badge color="secondary">$800</Badge>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <MdPieChart size={25} color={primaryColor}/> Other operating
                                    costs <Badge color="secondary">$2400</Badge>
                                </ListGroupItem>
                            </ListGroup>
                            */}
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}

export default DashboardPage;
