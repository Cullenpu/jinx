import React from "react";
import { Col } from "reactstrap";
import { FaMoneyBill, FaEllipsisH } from "react-icons/fa";
import CompanyCard from "./CompanyCard";

const RejectedCol = ({ companies }) => {
  return (
    <Col>
      <div className="text-center pb-3">
        <h5>
          <FaMoneyBill style={{ color: "grey", float: "left" }} /> REJECTED{" "}
          <FaEllipsisH style={{ color: "grey", float: "right" }} />
        </h5>
      </div>
      {companies &&
        companies.map((company, index) => {
          return (
            <CompanyCard
              key={index}
              column="rejected"
              applicationId={company._id}
              company={company.company}
              companyData={company}
              role={company.role}
              date={company.createdAt}
            />
          );
        })}
    </Col>
  );
};

export default RejectedCol;
