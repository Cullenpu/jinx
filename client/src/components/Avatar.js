import React from "react";

const Avatar = ({ name }) => {
  return (
    <div
      style={{
        width: "45px",
        height: "45px",
        borderRadius: "50%",
        border: "1px solid",
        textAlign: "center",
        verticalAlign: "middle",
        lineHeight: "45px",
        fontSize: "18px",
      }}
    >
      {name.split(" ").map((i) => i.charAt(0).toUpperCase())}
    </div>
  );
};

export default Avatar;
