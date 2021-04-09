import React from "react";

const Avatar = ({ name }) => {
  return (
    <img
      src={`https://ui-avatars.com/api/?size=64&background=random&rounded=true&name=${name}`}
      // style={{
      //   width: "45px",
      //   height: "45px",
      //   borderRadius: "50%",
      //   border: "1px solid",
      //   textAlign: "center",
      //   verticalAlign: "middle",
      //   lineHeight: "45px",
      //   fontSize: "18px",
      // }}
    />
    //   {name.split(" ").map((i) => i.charAt(0).toUpperCase())}
    // </img>
  );
};

export default Avatar;
