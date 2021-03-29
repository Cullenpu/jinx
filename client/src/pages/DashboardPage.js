import Page from "components/Page";
import {chartjs} from "demos/dashboardPage";
import React from "react";
import {Bar} from "react-chartjs-2";
import {Card, CardBody, CardHeader, Col, Row} from "reactstrap";
import {getColor} from "utils/colors";
import UserTable from "components/dashboardComponents/UserTable";

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
                breadcrumbs={[{name: "Dashboard", active: true}]}>

                <Row>
                    <Col>
                        <UserTable/>
                    </Col>
                </Row>
            </Page>
        );
    }
}

export default DashboardPage;
