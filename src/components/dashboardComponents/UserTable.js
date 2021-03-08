import React from 'react';
import yitian from 'assets/img/users/yitian.png';
import {Button, Card, CardBody, CardHeader, Col, Row, Table} from 'reactstrap';
import UserRow from './UserRow';

const UserTable = () => {
    return (
        <Card>
            <CardHeader>User Table{' '}
                <small className="text-muted text-capitalize">2020-2021</small>
                <Button style={{float: 'right'}}>Add User</Button>
            </CardHeader>
            <Table striped>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Rating</th>
                    <th>Edit</th>
                </tr>
                </thead>
                <tbody>
                <UserRow id={123} avatar={yitian} name='Yitian Bitian' email="yz@email.com" rating={10}/>
                <UserRow id={234} avatar={yitian} name='Yitian Bitian' email="yz@email.com" rating={10}/>
                <UserRow id={345} avatar={yitian} name='Yitian Bitian' email="yz@email.com" rating={10}/>
                <UserRow id={456} avatar={yitian} name='Yitian Bitian' email="yz@email.com" rating={10}/>
                <UserRow id={567} avatar={yitian} name='Yitian Bitian' email="yz@email.com" rating={10}/>
                <UserRow id={678} avatar={yitian} name='Yitian Bitian' email="yz@email.com" rating={10}/>
                </tbody>
            </Table>
        </Card>
    )
}

export default UserTable;