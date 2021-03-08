import React from "react";
import { Row } from "reactstrap";
import WishListCol from "./WishListCol";
import AppliedCol from "./AppliedCol";
import InterviewCol from "./InterviewCol";
import OfferCol from "./OfferCol";
import RejectedCol from "./RejectedCol";

const ApplicationBoard = () => {
  const wishlist = [
    {
      company: "Google",
      title: "Software Developer Intern",
      date: "March 1, 2021",
      color: "success",
    },
    {
      company: "Facebook",
      title: "Software Developer Intern",
      date: "March 1, 2021",
      color: "info",
    },
  ];

  const applied = [
    {
      company: "Amazon",
      title: "Software Developer Intern",
      date: "March 1, 2021",
      color: "danger",
    },
  ];

  const interview = [
    {
      company: "Lyft",
      title: "Software Developer Intern",
      date: "March 1, 2021",
      color: "warning",
    },
  ];

  const offer = [
    {
      company: "AirBnB",
      title: "Software Developer Intern",
      date: "March 1, 2021",
      color: "secondary",
    },
  ];

  const rejected = [
    {
      company: "Stripe",
      title: "Software Developer Intern",
      date: "March 1, 2021",
      color: "primary",
    },
  ];

  return (
    <Row>
      <WishListCol companies={wishlist} />
      <AppliedCol companies={applied} />
      <InterviewCol companies={interview} />
      <OfferCol companies={offer} />
      <RejectedCol companies={rejected} />
    </Row>
  );
};

export default ApplicationBoard;
