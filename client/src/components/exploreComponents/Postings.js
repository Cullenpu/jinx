import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import { getPostings } from "./ExploreFunctions";
import PostingCell from "./PostingCell";

const Postings = () => {
  const [postings, setPostings] = useState([]);
  useEffect(() => {
    getPostings().then((postings) => {
      setPostings(postings);
    });
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="text-primary font-weight-300">Postings</h2>
        </Col>
        <Col>
          <Button
            size="sm"
            onClick={() => {
              window.location.href = "/posting/add";
            }}
          >
            Add Posting
          </Button>
        </Col>
      </Row>
      <Row className="pl-2">
        <p>Checkout which postings were most applied to.</p>
      </Row>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {postings &&
          postings.map((posting, index) => {
            return (
              <PostingCell
                key={index}
                createdAt={posting.createdAt}
                companyLogo={posting.companyLogo}
                companyName={posting.companyName}
                location={posting.location}
                role={posting.role}
                link={posting.link}
              />
            );
          })}
      </div>
    </Container>
  );
};

export default Postings;
