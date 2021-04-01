import React from "react";
import { Col } from "reactstrap";
import { FaMoneyBill, FaEllipsisH } from "react-icons/fa";
import CompanyCard from "./CompanyCard";

const OfferCol = ({ companies }) => {
  return (
    <Col>
      <div className="text-center pb-3">
        <h5>
          <FaMoneyBill style={{ color: "grey", float: "left" }} /> OFFER{" "}
          <FaEllipsisH style={{ color: "grey", float: "right" }} />
        </h5>
      </div>
      {companies &&
        companies.map((company) => {
          return (
            <CompanyCard
              company={company.company}
              role={company.role}
              date={company.createdAt}
            />
          );
        })}
    </Col>
  );
};

export default OfferCol;
