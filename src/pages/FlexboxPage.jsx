import React from "react";
import "../styles/FlexboxPage.css";

const FlexboxPage = () => {
  return (
    <div className="flexbox-page">
      <div className="half">
        <h1>Container</h1>
        <div className="container playground"></div>
      </div>
      <div className="half">
        <h1>Settings</h1>
        <div className="container"></div>
      </div>
    </div>
  );
};

export default FlexboxPage;
