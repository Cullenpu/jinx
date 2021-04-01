import React from "react";
import { Col } from "reactstrap";
import { FaMicrophone, FaEllipsisH } from "react-icons/fa";
import CompanyCard from "./CompanyCard";

const InterviewCol = ({ companies }) => {
  return (
    <Col>
      <div className="text-center pb-3">
        <h5>
          <FaMicrophone style={{ color: "grey", float: "left" }} /> INTERVIEWS{" "}
          <FaEllipsisH style={{ color: "grey", float: "right" }} />
        </h5>
      </div>
      {companies &&
        companies.map((company) => {
          return (
            <CompanyCard
              column="interviewing"
              company={company.company}
              role={company.role}
              date={company.createdAt}
            />
          );
        })}
    </Col>
  );
};

export default InterviewCol;
