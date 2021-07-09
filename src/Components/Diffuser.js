import React, { useState } from "react";
import { aesDiffuse } from "../Diffusion/aes";
import { mdsAesDiffuse } from "../Diffusion/mdsAes";
import "./Diffuser.css";
import ColoredInput from "../UI/ColoredInput";
import { branchNumber } from "../Diffusion/branchNumber";

const makeColored = (mode, input) => {
  let ip;
  if (mode === "byte") {
    ip = input.map((i,ind) => <ColoredInput key={ind} mode={mode} input={i} />);
  } else {
    ip = [[], [], [], []];
    ip[0] = <ColoredInput key={0} mode={mode} input={input.slice(0, 4)} />;
    ip[1] = <ColoredInput key={1} mode={mode} input={input.slice(4, 8)} />;
    ip[2] = <ColoredInput key={2} mode={mode} input={input.slice(8, 12)} />;
    ip[3] = <ColoredInput key={3} mode={mode} input={input.slice(12, 16)} />;
  }
  return ip;
}
export default function Diffuser(props) {
  /*
    props: mode, input, output
  */
  const [cipher, setCipher] = useState("AES");
  const onAesClick = () => setCipher("AES");
  const onMdsAesClick = () => setCipher("MDS AES");

  const { mode, input } = props;

  const aesOp = aesDiffuse(input);
  const mdsAesOp = mdsAesDiffuse(input);
  props.setOp({
    aesOp: branchNumber(aesOp, input),
    mdsAesOp: branchNumber(mdsAesOp, input)
  });
  const op = cipher === "AES" ? aesOp : mdsAesOp;
  const inWires = makeColored(mode, input);
  const outWires = makeColored(mode, op);

  return (
    <div className="container">
      <div className="diffuser">
        <div className="wireContainer">
          {inWires}
        </div>
        <div className="diffuserBox">
          <h2>{cipher}</h2>
        </div>
        <div className="wireContainer">
          {outWires}
        </div>
      </div>
      <div className="buttons">
        <button
          onClick={onAesClick}
          className="button"
          style={{ backgroundColor: (cipher==="AES" ? "#4CAF50" : "grey") }}
        >
          AES
        </button>
        <button
          onClick={props.onChangeSingleBitClick}
          className="button"
          style={{ backgroundColor: "#f44336" }}
        >
          Change bit
        </button>
        <button
          onClick={onMdsAesClick}
          className="button"
          style={{ backgroundColor: (cipher!=="AES" ? "#008CBA" : "grey") }}
        >
          MDS AES
        </button>
      </div>
    </div>
  );
}
