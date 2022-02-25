import React from "react";
import spinner from "../assets/833.gif";

const Spinner = () => (
  <img
    src={spinner}
    alt="Loading..."
    style={{
      width: "64px",
      margin: "auto",
      display: "block",
      marginTop: "40px",
    }}
  />
);
export default Spinner;
