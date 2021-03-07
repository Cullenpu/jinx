import Page from 'components/Page';
import React from 'react';
import {Col, Row} from "reactstrap";
import PopularCompanies from "../components/exploreComponents/PopularCompanies";
import {companies} from "../demos/explorePage";
import AdminCard from 'components/AdminCard';


import placeholderLogo from 'assets/img/reactlogo.png'
import UserTable from "../components/dashboardComponents/UserTable";

const AdminPage = () => {
    return (
        <Page className="AdminPage"
              title="Admin"
              breadcrumbs={[{name: 'admin', active: true}]}>

            <div class='row' style={{'padding-bottom': 50, padding: 25}}>
                <AdminCard logo={placeholderLogo} text={'New Users'}/>
                <AdminCard logo={placeholderLogo} text={'New Apps'}/>
                <AdminCard logo={placeholderLogo} text={'New Hires'}/>
                <AdminCard logo={placeholderLogo} text={'New Admin'}/>
            </div>
            <div style={{centre: true}}>
                <Col lg="8" md="12" sm="12" xs="12">
                    <UserTable/>
                </Col>
            </div>
        </Page>
    )
}


export default AdminPage;