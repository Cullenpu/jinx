import React from "react";
import PropTypes from "utils/propTypes";

import classNames from "classnames";

import { Card, CardTitle, CardSubtitle, CardText, CardBody } from "reactstrap";

import Avatar from "components/Avatar";

const UserCard = ({
  name,
  subtitle,
  text,
  children,
  className,
  ...restProps
}) => {
  const classes = classNames("bg-gradient-theme", className);

  return (
    <Card inverse className={classes} {...restProps}>
      <CardBody className="d-flex justify-content-center align-items-center flex-column">
        <Avatar name={name} />
        <CardTitle>{name}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
        <CardText>
          <small>{text}</small>
        </CardText>
      </CardBody>
      {children}
    </Card>
  );
};

UserCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
};

export default UserCard;
