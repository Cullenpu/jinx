import React from "react";

const Avatar = ({ name }) => {
  return (
    <img
      src={`https://ui-avatars.com/api/?size=128&font-size=0.36&background=random&rounded=true&name=${name}`}
      style={{
        width: "50px",
        height: "50px",
      }}
    />
  );
};

export default Avatar;
