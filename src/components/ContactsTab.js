import user1Image from 'assets/img/users/100_1.jpg';
import { UserCard } from 'components/Card';
import React from 'react';
import {
  Col,
  Row,
} from 'reactstrap';

const ContactsTab = () => {
  return (
    <Row>
        <Col md={5}>
          <UserCard
            avatar={user1Image}
            title="Chris"
            subtitle="Project Lead"
            text="Give me a star!"
            style={{
              height: 300,
            }}
          />
        </Col>
    </Row>
  )
}

export default ContactsTab;