import React from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";


const AdminCard = ({logo, text}) => {
    return (
        <Card className="flex-row"
              style={{flex: '1 0 10%', margin: '5px', borderRadius: 6, maxWidth: '32%', padding: '10px', float: 'left'}}>
            <CardImg
                className="card-img-left"
                src={logo}
                style={{width: 100, height: 'auto'}}
            />
            <CardBody>
                {text}
            </CardBody>
        </Card>
    )
}
export default AdminCard