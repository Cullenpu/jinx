import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import WishListCol from './applicationBoard/WishListCol';
import AppliedCol from './applicationBoard/AppliedCol';
import InterviewCol from './applicationBoard/InterviewCol';
import OfferCol from './applicationBoard/OfferCol';
import RejectedCol from './applicationBoard/RejectedCol';

const ApplicationBoard = () => {
  const wishlist = [{
    company: 'Google',
    title: 'Software Developer Intern',
    date: 'March 1, 2021',
    color: 'success'
  },
  {
    company: 'Facebook',
    title: 'Software Developer Intern',
    date: 'March 1, 2021',
    color: 'info'
  }];

  const applied = [{
    company: 'Amazon',
    title: 'Software Developer Intern',
    date: 'March 1, 2021',
    color: 'danger'
  }];

  const interview = [{
    company: 'Lyft',
    title: 'Software Developer Intern',
    date: 'March 1, 2021',
    color: 'warning'
  }];

  const offer = [{
    company: 'AirBnB',
    title: 'Software Developer Intern',
    date: 'March 1, 2021',
    color: 'secondary'
  }];

  const rejected = [{
    company: 'Stripe',
    title: 'Software Developer Intern',
    date: 'March 1, 2021',
    color: 'primary'
  }];

  return (
    <Row>
      <WishListCol companies={wishlist} />
      <AppliedCol companies={applied} />
      <InterviewCol companies={interview} />
      <OfferCol companies={offer} />
      <RejectedCol companies={rejected} />
    </Row>
  )
}

export default ApplicationBoard;