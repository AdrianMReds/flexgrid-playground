import React, { useEffect, useState } from "react";
import "../styles/FlexboxPage.css";
import { properties } from "../helper/properties";
import Selector from "../components/Selector";
import { FlexItem } from "../components/FlexItem";
import { Button } from "antd";

const allprops = properties.flex;

const FlexboxPage = () => {
  const [items, setItems] = useState([FlexItem]);
  const [playgroundProps, setPlaygroundProps] = useState({
    display: "flex",
    justifyContent: "flex-start",
  });

  useEffect(() => {
    console.log(items.length);
  }, [items]);

  const addItem = () => {
    setItems([...items, FlexItem]);
  };

  const removeItem = () => {
    let temp = items;
    temp.pop();
    setItems([...temp]);
  };

  return (
    <div className="flexbox-page">
      <div className="left">
        <h1>Container</h1>
        <div className="container playground" style={playgroundProps}>
          {items.map((item, index) => {
            return (
              <div style={item.style} key={index}>
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
      <div className="right">
        <h1>Settings</h1>
        <div className="container settings" style={{ width: "80%" }}>
          <div className="items-numerator" style={{ width: "100%" }}>
            <h3 style={{ textAlign: "left" }}>
              Number of items: {items.length}
            </h3>
            <div>
              <Button
                type="primary"
                style={{ margin: "0 5px", width: 50 }}
                disabled={items.length < 2 ? true : false}
                onClick={removeItem}
              >
                -
              </Button>
              <Button
                type="primary"
                style={{ margin: "0 5px", width: 50 }}
                onClick={addItem}
              >
                +
              </Button>
            </div>
          </div>
          <Selector title="Display" options={allprops.display} />
          <Selector title="Justify-content" options={allprops.justifyContent} />
        </div>
      </div>
    </div>
  );
};

export default FlexboxPage;
