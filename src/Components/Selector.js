import React from "react";
import "./Selector.css";
import Card from "../UI/Card";

export default function Selector(props) {
  const onRadioChange = (e) => {
    props.onModeChange(e.target.value);
  };
  const onRandomClick = (e) => {
    e.preventDefault();
    props.onRandomClick();
  };
  const onChartClick = (e) => {
    e.preventDefault();
    props.onChartClick();
  };
  return (
    <Card
      style={{
        width: "100%",
        padding: "5px",
        height: "150px",
      }}
    >
      <h3>Select Mode</h3>
      <div onChange={onRadioChange}>
        <label className="option">
          <input type="radio" name="state" value="byte" />
          Byte
        </label>
        <label className="option">
          <input defaultChecked type="radio" name="state" value="block" />
          Block
        </label>
      </div>
      <div>
        <button
          onClick={onRandomClick}
          className="button"
          style={{ backgroundColor: "#4CAF50" }}
        >
          Random Test
        </button>
        <button
          onClick={onChartClick}
          className="button"
          style={{ backgroundColor: "#008CBA" }}
        >
          Chart
        </button>
      </div>
    </Card>
  );
}
