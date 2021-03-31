import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Container, Row,  Card, CardImg, CardText, CardTitle } from "reactstrap";
import lg from 'assets/img/logo/jinx_logo.svg';

function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}

const Postings = () => {
  const [postings, setPostings] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/posting').then(res => {
      const posting = res.data;
      console.log(posting);
      setPostings(posting);
  })
  }, [])
  return (
    <Container>
      <Row>
        <h2 className="text-primary font-weight-300">Postings</h2>
      </Row>
      <Row className="pl-2">
        <p>Checkout which postings were most applied to.</p>
      </Row>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {postings &&
          postings.map((posting, index) => {
            return (
              <>
                <div>
                  <small>{formatDate(posting.createdAt)}</small>
                </div>
                <Card
                  style={{
                    width: "150px",
                    border: "transparent",
                    backgroundColor: "transparent",
                    flex: "1 0 150px",
                    margin: "5px",
                    marginLeft: '-70px',
                    maxWidth: "160px",
                  }}
                >
                  <CardImg
                    top
                    src={posting.companyLogo ? posting.companyLogo : lg}
                    style={{
                      // marginTop: "-20px",
                      marginLeft: "90px",
                      borderRadius: 10,
                      objectFit: 'cover',
                      width: "60px",
                      height: "60px",
                      backgroundColor: posting.companyLogo ? null : '#D3D3D3'
                    }}
                  />
                  <CardText>
                    <div style={{ maxWidth: '75px'}}>
                      <p style={{ fontSize: '18px', fontWeight: '600'}}>
                        {posting.companyId.name}
                      </p>
                    </div>
                    <p style={{ fontSize: '14px', fontWeight: '400', marginTop: '-20px'}}>{posting.location}</p>
                    <p style={{ fontSize: '15px', fontWeight: '400', marginTop: '-10px'}}>{posting.role}</p>
                  </CardText>
                </Card>
              </>
            );
          })}
      </div>
    </Container>
  );
};

export default Postings;
