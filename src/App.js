import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Diffuser from "./Components/Diffuser";
import Selector from "./Components/Selector";
import Graph from "./Components/Graph";

const generateRandomArray = (mode) => {
  const nextRand = () => Math.floor(Math.random() * 256);
  const a = [];
  for (let i = 0; i < 16; ++i) a.push(nextRand());
  return a;
};

const qpush = (e, q) => {
  if (q.length < 100) q.push(e);
  else {
    while (q.length >= 100) q.shift();
    q.push(e);
  }
  return q;
};

const deepEqual = (old, nw) => {
  if (old.aesOp !== nw.aesOp) return false;
  if (old.mdsAesOp !== nw.mdsAesOp) return false;
  return true;
};

function App() {
  const [mode, setMode] = useState("block");
  const [isCharting, setIsCharting] = useState(false);
  const [randIp, setRandIp] = useState(generateRandomArray(mode));
  const matOp = useRef(null);
  const history = useRef([]);

  // console.log(history);
  const onChartClick = () => {
    if (!isCharting && matOp !== null) {
      qpush(matOp.current, history.current);
      setIsCharting(true);
    }
  };
  const onRandomClick = () => {
    if (!isCharting) {
      if (matOp !== null) qpush(matOp.current, history.current);
      setRandIp(generateRandomArray(mode));
    } else setIsCharting(false);
  };
  const changeSingleBit = () => {
    setRandIp((ripp) => {
      const rip = [...ripp];
      const rPos = Math.floor(Math.random() * 16);
      rip[rPos] ^= 1;
      return rip;
    });
  };
  return (
    <div>
      <Selector
        onModeChange={setMode}
        onChartClick={onChartClick}
        onRandomClick={onRandomClick}
      />
      {isCharting ? (
        <Graph data={history.current} />
      ) : (
        <Diffuser
          mode={mode}
          input={randIp}
          onChangeSingleBitClick={changeSingleBit}
          setOp={(op) => {
            console.log(op, matOp.current);
            if (matOp.current !== null) {
              if (!deepEqual(op, matOp.current)) {
                console.log("pushing bro");
                qpush(op, history.current);
              }
            }
            matOp.current = op;
          }}
        />
      )}
    </div>
  );
}

export default App;
