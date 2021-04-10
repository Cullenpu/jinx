import React from "react";
import { Col } from "reactstrap";
import { FaShoppingBag, FaEllipsisH } from "react-icons/fa";
import CompanyCard from "./CompanyCard";

const WishListCol = ({ companies }) => {
  return (
    <Col>
      <div className="text-center pb-3">
        <h5>
          <FaShoppingBag style={{ color: "grey", float: "left" }} /> WISHLIST{" "}
          <FaEllipsisH style={{ color: "grey", float: "right" }} />
        </h5>
      </div>
      {companies &&
        companies.map((company, index) => {
          return (
            <CompanyCard
              key={index}
              column="wishlist"
              applicationId={company._id}
              companyData={company}
              company={company.company}
              role={company.role}
              date={company.createdAt}
            />
          );
        })}
    </Col>
  );
};

export default WishListCol;
