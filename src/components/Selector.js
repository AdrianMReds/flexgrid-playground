import React from "react";
import { Select } from "antd";

const Selector = ({ title, property, options }) => {
  return (
    <div style={{ width: "90%", margin: 10 }}>
      <h3 style={{ textAlign: "left" }}>{title}</h3>
      <Select style={{ width: "100%" }} options={options} />
    </div>
  );
};

export default Selector;
