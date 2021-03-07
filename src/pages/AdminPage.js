import Page from 'components/Page';
import React from 'react';
import {Col, Row} from "reactstrap";
import PopularCompanies from "../components/exploreComponents/PopularCompanies";
import {companies} from "../demos/explorePage";

const AdminPage = () => {
    return (
        <Page title="Admin" breadcrumbs={[{name: 'admin', active: true}]}>

        </Page>

    )
}


export default AdminPage;