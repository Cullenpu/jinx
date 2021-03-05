import React from 'react';
import yitian from 'assets/img/users/yitian.png';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

const UserTable = () => {

  const ProfileImage = ({ src}) => {
    
    return (
      <img src={src} alt="Avatar" style={{ borderRadius: '50%', width: '50px' }} />
    )
  }
  return (
    <Card>
      <CardHeader>User Table{' '}
        <small className="text-muted text-capitalize">2020-2021</small>
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
          <tr>
            <th scope="row">123</th>
            <td><ProfileImage src={yitian} /></td>
            <td>Yitian Bitian</td>
            <td>yz@email.com</td>
            <td>10</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">234</th>
            <td><ProfileImage src={yitian} /></td>
            <td>Yitian Bitian</td>
            <td>yz@email.com</td>
            <td>10</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">345</th>
            <td><ProfileImage src={yitian} /></td>
            <td>Yitian Bitian</td>
            <td>yz@email.com</td>
            <td>10</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">345</th>
            <td><ProfileImage src={yitian} /></td>
            <td>Yitian Bitian</td>
            <td>yz@email.com</td>
            <td>10</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">345</th>
            <td><ProfileImage src={yitian} /></td>
            <td>Yitian Bitian</td>
            <td>yz@email.com</td>
            <td>10</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">345</th>
            <td><ProfileImage src={yitian} /></td>
            <td>Yitian Bitian</td>
            <td>yz@email.com</td>
            <td>10</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </Card>
  )
}

export default UserTable;