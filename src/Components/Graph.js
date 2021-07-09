import React from "react";
import { Line } from "react-chartjs-2";
import "./Diffuser.css";

export default function Graph(props) {
  const aesData = props.data.map(i => i.aesOp);
  const mdsAesData = props.data.map(i => i.mdsAesOp);
  const is = props.data.map((v, i) => i);
  return (
    <div className="container">
      <Line
        data={{
          labels : is,
          datasets: [
            {
              label: "AES",
              fill: false,
              lineTension: 0.5,
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "red",
              borderWidth: 2,
              data: aesData,
            },
            {
              label: "MDS",
              fill: false,
              lineTension: 0.5,
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: mdsAesData,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          title: {
            display: true,
            text: "Different Bit counts",
            fontSize: 20,
          },
          responsive: true,
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
}
